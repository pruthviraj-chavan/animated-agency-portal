import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const DOCS = [
  { id: 1, text: "How to deploy a React app to Vercel", tags: ["react", "deploy", "vercel", "frontend"] },
  { id: 2, text: "Building REST APIs with Node.js and Express", tags: ["node", "api", "express", "backend"] },
  { id: 3, text: "Introduction to machine learning with Python", tags: ["ml", "python", "ai", "data"] },
  { id: 4, text: "Kubernetes pod autoscaling guide", tags: ["k8s", "devops", "scaling", "cloud"] },
  { id: 5, text: "React component testing with Jest", tags: ["react", "testing", "jest", "frontend"] },
  { id: 6, text: "PostgreSQL indexing strategies for performance", tags: ["database", "postgres", "performance", "sql"] },
  { id: 7, text: "Docker container networking explained", tags: ["docker", "networking", "devops", "container"] },
  { id: 8, text: "Fine-tuning large language models", tags: ["llm", "ai", "ml", "training"] },
  { id: 9, text: "GraphQL vs REST API comparison", tags: ["api", "graphql", "rest", "backend"] },
  { id: 10, text: "CI/CD pipeline with GitHub Actions", tags: ["ci", "cd", "github", "devops"] },
];

function cosineSimilarity(query: string, doc: typeof DOCS[0]): number {
  const qWords = query.toLowerCase().split(/\s+/);
  const dWords = [...doc.text.toLowerCase().split(/\s+/), ...doc.tags];
  let matches = 0;
  qWords.forEach(q => { if (dWords.some(d => d.includes(q) || q.includes(d))) matches++; });
  return qWords.length > 0 ? matches / Math.max(qWords.length, 1) : 0;
}

export function VectorSearchSimulator() {
  const [query, setQuery] = useState("");
  const [threshold, setThreshold] = useState(0.3);
  const [topK, setTopK] = useState(5);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return DOCS
      .map(doc => ({ ...doc, score: cosineSimilarity(query, doc) }))
      .filter(d => d.score >= threshold)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }, [query, threshold, topK]);

  return (
    <div className="space-y-4">
      <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search query (e.g., 'deploy react app')..."
        className="bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] text-xs font-mono" />

      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Threshold:</span>
          <Slider value={[threshold * 100]} onValueChange={([v]) => setThreshold(v / 100)} min={0} max={100} step={5} className="w-20" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{(threshold * 100).toFixed(0)}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Top-K:</span>
          <Slider value={[topK]} onValueChange={([v]) => setTopK(v)} min={1} max={10} step={1} className="w-16" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{topK}</span>
        </div>
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
        <p className="text-[10px] text-[hsl(0,0%,45%)] mb-2">Document Store ({DOCS.length} documents)</p>
        {!query.trim() ? (
          <p className="text-xs text-[hsl(0,0%,35%)]">Enter a query to search...</p>
        ) : results.length === 0 ? (
          <p className="text-xs text-[hsl(0,60%,55%)]">No results above threshold.</p>
        ) : (
          <div className="space-y-2">
            {results.map((doc, i) => (
              <div key={doc.id} className="flex items-start gap-3 p-2 rounded border border-[hsl(230,20%,16%)] bg-[hsl(230,25%,10%)]">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{
                  backgroundColor: `hsl(${140 - doc.score * 140},60%,50%,0.15)`,
                  color: `hsl(${140 - doc.score * 140 + 140},60%,60%)`,
                }}>#{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[hsl(0,0%,80%)]">{doc.text}</p>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {doc.tags.map(t => (
                      <span key={t} className="text-[8px] px-1 py-0.5 rounded bg-[hsl(250,40%,25%)] text-[hsl(250,60%,70%)]">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-mono font-bold text-[hsl(140,60%,55%)]">{(doc.score * 100).toFixed(0)}%</p>
                  <p className="text-[8px] text-[hsl(0,0%,40%)]">similarity</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
