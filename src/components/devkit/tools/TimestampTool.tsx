import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TimestampTool() {
  const [unix, setUnix] = useState("");
  const [human, setHuman] = useState("");
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));

  const unixToHuman = () => {
    const ts = Number(unix);
    if (isNaN(ts)) return;
    const d = ts > 1e12 ? new Date(ts) : new Date(ts * 1000);
    setHuman(d.toISOString() + "\n" + d.toLocaleString());
  };

  const humanToUnix = () => {
    const d = new Date(human);
    if (isNaN(d.getTime())) return;
    setUnix(String(Math.floor(d.getTime() / 1000)));
  };

  const refreshNow = () => setNow(Math.floor(Date.now() / 1000));

  return (
    <div className="space-y-4">
      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 text-center">
        <p className="text-xs text-[hsl(0,0%,50%)] mb-1">Current Unix Timestamp</p>
        <p className="text-2xl font-mono text-[hsl(40,80%,70%)] font-bold">{now}</p>
        <Button onClick={refreshNow} variant="ghost" size="sm" className="mt-1 text-[hsl(0,0%,50%)] text-xs">Refresh</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[hsl(250,60%,70%)]">Unix → Human</label>
          <Input
            placeholder="e.g. 1700000000"
            value={unix}
            onChange={(e) => setUnix(e.target.value)}
            className="bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
          />
          <Button onClick={unixToHuman} size="sm" className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white w-full">Convert</Button>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[hsl(250,60%,70%)]">Human → Unix</label>
          <Input
            placeholder="e.g. 2024-01-01T00:00:00Z"
            value={human}
            onChange={(e) => setHuman(e.target.value)}
            className="bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
          />
          <Button onClick={humanToUnix} size="sm" className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white w-full">Convert</Button>
        </div>
      </div>
    </div>
  );
}
