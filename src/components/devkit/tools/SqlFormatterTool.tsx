import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check } from "lucide-react";

function formatSQL(sql: string): string {
  const keywords = ["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","OUTER JOIN","ON","GROUP BY","ORDER BY","HAVING","LIMIT","OFFSET","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","ALTER TABLE","DROP TABLE","AS","IN","NOT","NULL","IS","LIKE","BETWEEN","EXISTS","CASE","WHEN","THEN","ELSE","END","UNION","ALL","DISTINCT","COUNT","SUM","AVG","MAX","MIN"];
  let formatted = sql.replace(/\s+/g, " ").trim();
  keywords.forEach((kw) => {
    const regex = new RegExp(`\\b${kw}\\b`, "gi");
    formatted = formatted.replace(regex, `\n${kw.toUpperCase()}`);
  });
  formatted = formatted.replace(/,/g, ",\n  ");
  formatted = formatted.replace(/\(/g, " (\n  ");
  formatted = formatted.replace(/\)/g, "\n)");
  return formatted.trim().replace(/^\n/, "");
}

export function SqlFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const format = () => setOutput(formatSQL(input));
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1200); };

  return (
    <div className="space-y-4">
      <Textarea placeholder="Paste SQL query..." value={input} onChange={(e) => setInput(e.target.value)}
        className="min-h-[120px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm" />
      <Button onClick={format} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">Format SQL</Button>
      {output && (
        <div className="relative">
          <pre className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 text-sm text-[hsl(200,60%,70%)] font-mono overflow-x-auto max-h-[300px]">{output}</pre>
          <Button size="icon" variant="ghost" onClick={copy} className="absolute top-2 right-2 text-[hsl(0,0%,60%)] hover:text-white">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </div>
  );
}
