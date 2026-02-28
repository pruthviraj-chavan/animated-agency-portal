import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RotateCcw } from "lucide-react";

interface IndexState { column: string; type: string; }

const QUERIES = [
  { id: "select_id", sql: "SELECT * FROM users WHERE id = 42", column: "id", type: "point" },
  { id: "select_name", sql: "SELECT * FROM users WHERE name = 'John'", column: "name", type: "point" },
  { id: "range_age", sql: "SELECT * FROM users WHERE age BETWEEN 20 AND 30", column: "age", type: "range" },
  { id: "sort_created", sql: "SELECT * FROM users ORDER BY created_at DESC LIMIT 10", column: "created_at", type: "sort" },
  { id: "like_email", sql: "SELECT * FROM users WHERE email LIKE '%@gmail.com'", column: "email", type: "like_suffix" },
];

const TABLE_SIZE = 1_000_000;

function calcCost(query: typeof QUERIES[0], indexes: IndexState[]) {
  const hasIndex = indexes.some(i => i.column === query.column);
  const hasBtree = indexes.some(i => i.column === query.column && i.type === "btree");
  const hasHash = indexes.some(i => i.column === query.column && i.type === "hash");

  if (!hasIndex) {
    return { scan: "Full Table Scan", rows: TABLE_SIZE, cost: TABLE_SIZE, time: (TABLE_SIZE / 50000).toFixed(0) + "ms", color: "hsl(0,60%,55%)" };
  }
  if (query.type === "like_suffix") {
    return { scan: "Full Table Scan (suffix LIKE)", rows: TABLE_SIZE, cost: TABLE_SIZE, time: (TABLE_SIZE / 50000).toFixed(0) + "ms", color: "hsl(0,60%,55%)" };
  }
  if (query.type === "range" && hasHash) {
    return { scan: "Full Table Scan (hash can't range)", rows: TABLE_SIZE, cost: TABLE_SIZE, time: (TABLE_SIZE / 50000).toFixed(0) + "ms", color: "hsl(0,60%,55%)" };
  }
  if (query.type === "point" && hasHash) {
    return { scan: "Hash Index Lookup", rows: 1, cost: 1, time: "0.1ms", color: "hsl(140,60%,50%)" };
  }
  if (hasBtree) {
    const rows = query.type === "range" ? 50000 : query.type === "sort" ? 10 : 1;
    return { scan: "B-Tree Index " + (query.type === "range" ? "Range Scan" : query.type === "sort" ? "Ordered Scan" : "Lookup"), rows, cost: Math.ceil(Math.log2(TABLE_SIZE)) + rows, time: rows <= 10 ? "0.1ms" : "12ms", color: "hsl(140,60%,50%)" };
  }
  return { scan: "Index Scan", rows: 1, cost: Math.ceil(Math.log2(TABLE_SIZE)), time: "0.2ms", color: "hsl(140,60%,50%)" };
}

export function DatabaseIndexSimulator() {
  const [indexes, setIndexes] = useState<IndexState[]>([{ column: "id", type: "btree" }]);
  const [queryIdx, setQueryIdx] = useState(0);
  const [addCol, setAddCol] = useState("name");
  const [addType, setAddType] = useState("btree");

  const query = QUERIES[queryIdx];
  const result = calcCost(query, indexes);
  const resultNoIdx = calcCost(query, []);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-[10px] text-[hsl(0,0%,45%)] mb-1">Active Indexes</p>
        <div className="flex gap-2 flex-wrap">
          {indexes.map((idx, i) => (
            <Badge key={i} className="bg-[hsl(250,40%,25%)] text-[hsl(250,60%,75%)] border-[hsl(250,30%,35%)] cursor-pointer hover:bg-[hsl(0,40%,30%)]"
              onClick={() => setIndexes(indexes.filter((_, j) => j !== i))}>
              {idx.column} ({idx.type}) ✕
            </Badge>
          ))}
          {indexes.length === 0 && <span className="text-xs text-[hsl(0,0%,40%)]">No indexes</span>}
        </div>
      </div>

      <div className="flex gap-2 items-end flex-wrap">
        <Select value={addCol} onValueChange={setAddCol}>
          <SelectTrigger className="w-[120px] bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] text-xs"><SelectValue /></SelectTrigger>
          <SelectContent className="bg-[hsl(230,25%,12%)] border-[hsl(230,20%,20%)]">
            {["id", "name", "age", "email", "created_at"].map(c => <SelectItem key={c} value={c} className="text-[hsl(0,0%,85%)] text-xs">{c}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={addType} onValueChange={setAddType}>
          <SelectTrigger className="w-[100px] bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] text-xs"><SelectValue /></SelectTrigger>
          <SelectContent className="bg-[hsl(230,25%,12%)] border-[hsl(230,20%,20%)]">
            <SelectItem value="btree" className="text-[hsl(0,0%,85%)] text-xs">B-Tree</SelectItem>
            <SelectItem value="hash" className="text-[hsl(0,0%,85%)] text-xs">Hash</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={() => setIndexes([...indexes, { column: addCol, type: addType }])} size="sm" className="bg-[hsl(250,50%,45%)] text-white text-xs">Add Index</Button>
        <Button onClick={() => setIndexes([{ column: "id", type: "btree" }])} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-3 w-3" /></Button>
      </div>

      <div>
        <p className="text-[10px] text-[hsl(0,0%,45%)] mb-1">Select Query (table: users, 1M rows)</p>
        <div className="flex gap-2 flex-wrap">
          {QUERIES.map((q, i) => (
            <button key={q.id} onClick={() => setQueryIdx(i)}
              className={`text-[10px] px-2 py-1 rounded font-mono ${i === queryIdx ? "bg-[hsl(250,50%,40%)] text-white" : "bg-[hsl(230,25%,12%)] text-[hsl(0,0%,55%)]"}`}>
              {q.sql.slice(0, 40)}...
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
          <p className="text-[10px] text-[hsl(0,0%,45%)] mb-1">With Current Indexes</p>
          <p className="text-sm font-bold" style={{ color: result.color }}>{result.scan}</p>
          <p className="text-xs text-[hsl(0,0%,60%)]">Rows: {result.rows.toLocaleString()} • Cost: {result.cost.toLocaleString()} • {result.time}</p>
        </div>
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
          <p className="text-[10px] text-[hsl(0,0%,45%)] mb-1">Without Indexes</p>
          <p className="text-sm font-bold" style={{ color: resultNoIdx.color }}>{resultNoIdx.scan}</p>
          <p className="text-xs text-[hsl(0,0%,60%)]">Rows: {resultNoIdx.rows.toLocaleString()} • {resultNoIdx.time}</p>
        </div>
      </div>
    </div>
  );
}
