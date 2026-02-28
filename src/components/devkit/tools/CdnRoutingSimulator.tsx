import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RotateCcw } from "lucide-react";

interface EdgeNode { id: string; name: string; region: string; lat: number; cached: boolean; ttl: number; }

const EDGES: EdgeNode[] = [
  { id: "mumbai", name: "Mumbai", region: "Asia", lat: 19, cached: false, ttl: 0 },
  { id: "singapore", name: "Singapore", region: "Asia", lat: 1, cached: false, ttl: 0 },
  { id: "virginia", name: "Virginia", region: "US East", lat: 39, cached: false, ttl: 0 },
  { id: "oregon", name: "Oregon", region: "US West", lat: 44, cached: false, ttl: 0 },
  { id: "frankfurt", name: "Frankfurt", region: "Europe", lat: 50, cached: false, ttl: 0 },
  { id: "saopaulo", name: "São Paulo", region: "South America", lat: -23, cached: false, ttl: 0 },
];

const USERS = [
  { id: "india", name: "User (India)", closest: "mumbai", color: "hsl(40,80%,55%)" },
  { id: "us", name: "User (US)", closest: "virginia", color: "hsl(200,70%,55%)" },
  { id: "germany", name: "User (Germany)", closest: "frankfurt", color: "hsl(140,60%,50%)" },
  { id: "brazil", name: "User (Brazil)", closest: "saopaulo", color: "hsl(280,60%,60%)" },
];

export function CdnRoutingSimulator() {
  const [edges, setEdges] = useState<EdgeNode[]>(JSON.parse(JSON.stringify(EDGES)));
  const [selectedUser, setSelectedUser] = useState("india");
  const [log, setLog] = useState<{ msg: string; type: "hit" | "miss" | "origin" }[]>([]);
  const [ttlSetting, setTtlSetting] = useState(3);

  const user = USERS.find(u => u.id === selectedUser)!;
  const edge = edges.find(e => e.id === user.closest)!;

  const request = useCallback(() => {
    const e = edges.find(e => e.id === user.closest)!;
    if (e.cached && e.ttl > 0) {
      setEdges(prev => prev.map(n => n.id === e.id ? { ...n, ttl: n.ttl - 1 } : n));
      setLog(l => [{ msg: `✓ CACHE HIT at ${e.name} (${e.ttl - 1}s TTL left) — ~${15}ms`, type: "hit" }, ...l.slice(0, 14)]);
    } else {
      setEdges(prev => prev.map(n => n.id === e.id ? { ...n, cached: true, ttl: ttlSetting } : n));
      setLog(l => [{ msg: `✗ CACHE MISS at ${e.name} — fetching from origin — ~${200 + Math.random() * 100 | 0}ms`, type: "miss" }, ...l.slice(0, 14)]);
    }
  }, [edges, user, ttlSetting]);

  const expireTtl = () => {
    setEdges(prev => prev.map(n => ({ ...n, ttl: 0, cached: false })));
    setLog(l => [{ msg: "⏰ All TTLs expired — caches cleared", type: "origin" }, ...l.slice(0, 14)]);
  };

  const reset = () => { setEdges(JSON.parse(JSON.stringify(EDGES))); setLog([]); };

  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-wrap items-center">
        <Select value={selectedUser} onValueChange={setSelectedUser}>
          <SelectTrigger className="w-[160px] bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] text-xs"><SelectValue /></SelectTrigger>
          <SelectContent className="bg-[hsl(230,25%,12%)] border-[hsl(230,20%,20%)]">
            {USERS.map(u => <SelectItem key={u.id} value={u.id} className="text-[hsl(0,0%,85%)] text-xs">{u.name}</SelectItem>)}
          </SelectContent>
        </Select>
        <span className="text-[10px] text-[hsl(0,0%,50%)]">TTL: {ttlSetting}s</span>
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {edges.map(e => (
            <div key={e.id} className={`flex flex-col items-center gap-1 p-2 rounded-lg border transition-all ${e.id === user.closest ? "border-[hsl(250,50%,50%)] bg-[hsl(250,50%,50%,0.05)]" : "border-[hsl(230,20%,16%)]"}`}>
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-[8px] font-bold ${e.cached ? "border-[hsl(140,60%,50%)] text-[hsl(140,60%,60%)]" : "border-[hsl(230,20%,30%)] text-[hsl(0,0%,50%)]"}`}>
                {e.name.slice(0, 3)}
              </div>
              <span className="text-[8px] text-[hsl(0,0%,45%)]">{e.region}</span>
              <span className={`text-[8px] font-mono ${e.cached ? "text-[hsl(140,60%,55%)]" : "text-[hsl(0,0%,30%)]"}`}>
                {e.cached ? `TTL:${e.ttl}` : "empty"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button onClick={request} className="bg-[hsl(250,50%,45%)] hover:bg-[hsl(250,50%,40%)] text-white text-xs">Send Request</Button>
        <Button onClick={expireTtl} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(40,80%,55%)] text-xs">Expire All TTLs</Button>
        <Button onClick={reset} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      {log.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[120px] overflow-y-auto">
          {log.map((entry, i) => (
            <p key={i} className="text-xs font-mono py-0.5" style={{
              color: entry.type === "hit" ? "hsl(140,60%,55%)" : entry.type === "miss" ? "hsl(40,80%,55%)" : "hsl(0,0%,50%)",
            }}>{entry.msg}</p>
          ))}
        </div>
      )}
    </div>
  );
}
