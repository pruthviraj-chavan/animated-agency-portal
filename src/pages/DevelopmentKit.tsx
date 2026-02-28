import { useState, useMemo, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToolDialog } from "@/components/devkit/ToolDialog";
import { JsonFormatterTool } from "@/components/devkit/tools/JsonFormatterTool";
import { UuidGeneratorTool } from "@/components/devkit/tools/UuidGeneratorTool";
import { Base64Tool } from "@/components/devkit/tools/Base64Tool";
import { HashGeneratorTool } from "@/components/devkit/tools/HashGeneratorTool";
import { JwtDecoderTool } from "@/components/devkit/tools/JwtDecoderTool";
import { RegexTesterTool } from "@/components/devkit/tools/RegexTesterTool";
import { TimestampTool } from "@/components/devkit/tools/TimestampTool";
import { PasswordGeneratorTool } from "@/components/devkit/tools/PasswordGeneratorTool";
import { JsonValidatorTool } from "@/components/devkit/tools/JsonValidatorTool";
import { YamlJsonTool } from "@/components/devkit/tools/YamlJsonTool";
import { TextDiffTool } from "@/components/devkit/tools/TextDiffTool";
import { SqlFormatterTool } from "@/components/devkit/tools/SqlFormatterTool";
import { CurlBuilderTool } from "@/components/devkit/tools/CurlBuilderTool";
import { ChmodCalculatorTool } from "@/components/devkit/tools/ChmodCalculatorTool";
import { CronParserTool } from "@/components/devkit/tools/CronParserTool";
import { CidrCalculatorTool } from "@/components/devkit/tools/CidrCalculatorTool";
import { UrlEncoderTool } from "@/components/devkit/tools/UrlEncoderTool";
import { LruCacheSimulator } from "@/components/devkit/tools/LruCacheSimulator";
import { LoadBalancerSimulator } from "@/components/devkit/tools/LoadBalancerSimulator";
import { RateLimiterSimulator } from "@/components/devkit/tools/RateLimiterSimulator";
import { CircuitBreakerSimulator } from "@/components/devkit/tools/CircuitBreakerSimulator";
import { motion } from "framer-motion";
import {
  Search, Braces, Fingerprint, Binary, Hash, KeyRound, Regex, Clock, Lock,
  Globe, Network, Shield, Cpu, Database, Code2, FileJson, GitCompare,
  Terminal, Calculator, Wifi, Server, Activity, Layers
} from "lucide-react";
import React from "react";

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  category: string;
  component?: React.ComponentType;
  color: string;
}

const tools: Tool[] = [
  { id: "json-formatter", name: "JSON Formatter", description: "Format, validate & minify JSON", icon: Braces, category: "Popular Tools", component: JsonFormatterTool, color: "hsl(140,60%,50%)" },
  { id: "uuid-generator", name: "UUID Generator", description: "Generate v4 UUIDs instantly", icon: Fingerprint, category: "Popular Tools", component: UuidGeneratorTool, color: "hsl(40,80%,55%)" },
  { id: "base64", name: "Base64 Encoder", description: "Encode & decode Base64 strings", icon: Binary, category: "Popular Tools", component: Base64Tool, color: "hsl(200,70%,55%)" },
  { id: "hash-generator", name: "Hash Generator", description: "SHA-1, SHA-256, SHA-512 hashes", icon: Hash, category: "Popular Tools", component: HashGeneratorTool, color: "hsl(280,60%,60%)" },
  { id: "jwt-decoder", name: "JWT Decoder", description: "Decode JWT header & payload", icon: KeyRound, category: "Popular Tools", component: JwtDecoderTool, color: "hsl(0,70%,60%)" },
  { id: "regex-tester", name: "Regex Tester", description: "Live regex matching & testing", icon: Regex, category: "Popular Tools", component: RegexTesterTool, color: "hsl(320,60%,60%)" },
  { id: "timestamp", name: "Timestamp Converter", description: "Unix ↔ human-readable dates", icon: Clock, category: "Popular Tools", component: TimestampTool, color: "hsl(30,70%,55%)" },
  { id: "password", name: "Password Generator", description: "Secure password with options", icon: Lock, category: "Popular Tools", component: PasswordGeneratorTool, color: "hsl(160,60%,50%)" },
  // Data Tools
  { id: "json-validator", name: "JSON Validator", description: "Validate JSON with error details", icon: FileJson, category: "Data Tools", component: JsonValidatorTool, color: "hsl(140,50%,50%)" },
  { id: "yaml-json", name: "YAML ↔ JSON", description: "Convert between YAML and JSON", icon: GitCompare, category: "Data Tools", component: YamlJsonTool, color: "hsl(50,70%,55%)" },
  { id: "text-diff", name: "Text Diff", description: "Compare two texts side by side", icon: GitCompare, category: "Data Tools", component: TextDiffTool, color: "hsl(200,50%,55%)" },
  { id: "sql-formatter", name: "SQL Formatter", description: "Format & beautify SQL queries", icon: Database, category: "Data Tools", component: SqlFormatterTool, color: "hsl(210,60%,55%)" },
  // Developer Tools
  { id: "curl-builder", name: "cURL Builder", description: "Build cURL commands visually", icon: Terminal, category: "Developer Tools", component: CurlBuilderTool, color: "hsl(160,50%,50%)" },
  { id: "chmod-calc", name: "Chmod Calculator", description: "Unix permission calculator", icon: Calculator, category: "Developer Tools", component: ChmodCalculatorTool, color: "hsl(30,60%,55%)" },
  { id: "cron-parser", name: "Cron Parser", description: "Parse & explain cron expressions", icon: Clock, category: "Developer Tools", component: CronParserTool, color: "hsl(270,50%,60%)" },
  // Network Tools
  { id: "dns-lookup", name: "DNS Lookup", description: "Query DNS records for domains", icon: Globe, category: "Network Tools", color: "hsl(200,70%,55%)" },
  { id: "ip-lookup", name: "IP Lookup", description: "Get geolocation from IP", icon: Network, category: "Network Tools", color: "hsl(220,60%,55%)" },
  { id: "cidr-calc", name: "CIDR Calculator", description: "Calculate IP ranges from CIDR", icon: Wifi, category: "Network Tools", component: CidrCalculatorTool, color: "hsl(180,50%,50%)" },
  // Security Tools
  { id: "url-encoder", name: "URL Encoder", description: "Encode & decode URLs", icon: Shield, category: "Security Tools", component: UrlEncoderTool, color: "hsl(350,60%,55%)" },
  // Simulators
  { id: "lru-cache", name: "LRU Cache Visualizer", description: "Interactive LRU cache simulation", icon: Layers, category: "Simulators", component: LruCacheSimulator, color: "hsl(260,60%,60%)" },
  { id: "load-balancer", name: "Load Balancer Sim", description: "Round-robin load balancer", icon: Server, category: "Simulators", component: LoadBalancerSimulator, color: "hsl(190,60%,50%)" },
  { id: "rate-limiter", name: "Rate Limiter Sim", description: "Token bucket rate limiter", icon: Activity, category: "Simulators", component: RateLimiterSimulator, color: "hsl(20,70%,55%)" },
  { id: "circuit-breaker", name: "Circuit Breaker", description: "Circuit breaker state machine", icon: Cpu, category: "Simulators", component: CircuitBreakerSimulator, color: "hsl(0,60%,55%)" },
];

const categories = ["All", "Popular Tools", "Data Tools", "Developer Tools", "Network Tools", "Security Tools", "Simulators"];

export default function DevelopmentKit() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  // ⌘K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("devkit-search")?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchCat = category === "All" || t.category === category;
      const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const grouped = useMemo(() => {
    const map = new Map<string, Tool[]>();
    filtered.forEach((t) => {
      if (!map.has(t.category)) map.set(t.category, []);
      map.get(t.category)!.push(t);
    });
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-[hsl(230,25%,7%)] text-[hsl(0,0%,92%)]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(250,80%,50%)] opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(180,80%,50%)] opacity-[0.05] blur-[100px]" />
        </div>
        <div className="container mx-auto text-center relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-[hsl(250,60%,25%)] text-[hsl(250,80%,80%)] border-[hsl(250,40%,35%)] hover:bg-[hsl(250,60%,30%)]">
              <Code2 className="h-3 w-3 mr-1" /> Developer Toolkit
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Developer <span className="bg-gradient-to-r from-[hsl(250,80%,65%)] to-[hsl(180,70%,60%)] bg-clip-text text-transparent">Toolkit</span>
            </h1>
            <p className="text-[hsl(230,10%,55%)] text-lg mb-8 max-w-xl mx-auto">
              Fast, secure developer tools running locally in your browser. No data leaves your device.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(0,0%,40%)]" />
            <Input
              id="devkit-search"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-16 h-12 bg-[hsl(230,25%,10%)] border-[hsl(230,20%,18%)] text-[hsl(0,0%,90%)] rounded-xl focus-visible:ring-[hsl(250,60%,50%)]"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[hsl(0,0%,40%)] bg-[hsl(230,20%,15%)] border border-[hsl(230,20%,22%)] px-1.5 py-0.5 rounded">⌘K</kbd>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 pb-4">
        <div className="container mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant="ghost"
                size="sm"
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-lg text-xs font-medium transition-all ${
                  category === cat
                    ? "bg-[hsl(250,60%,25%)] text-[hsl(250,80%,85%)] hover:bg-[hsl(250,60%,30%)]"
                    : "text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,75%)] hover:bg-[hsl(230,20%,12%)]"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="px-4 pb-24">
        <div className="container mx-auto space-y-10">
          {Array.from(grouped.entries()).map(([catName, catTools]) => (
            <div key={catName}>
              <h2 className="text-lg font-semibold text-[hsl(0,0%,75%)] mb-4">{catName}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {catTools.map((tool, i) => (
                  <motion.button
                    key={tool.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    onClick={() => tool.component ? setActiveTool(tool) : null}
                    className="group relative bg-[hsl(230,25%,10%)] border border-[hsl(230,20%,16%)] rounded-xl p-4 text-left transition-all duration-200 hover:border-[hsl(230,20%,25%)] hover:bg-[hsl(230,25%,12%)] hover:shadow-lg"
                    style={{ "--tool-color": tool.color } as React.CSSProperties}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: `${tool.color}15` }}>
                        <tool.icon className="h-5 w-5" style={{ color: tool.color }} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-[hsl(0,0%,90%)] group-hover:text-white truncate">{tool.name}</h3>
                        <p className="text-xs text-[hsl(0,0%,45%)] mt-0.5 line-clamp-2">{tool.description}</p>
                      </div>
                    </div>
                    {!tool.component && (
                      <Badge className="absolute top-3 right-3 text-[9px] bg-[hsl(230,20%,15%)] text-[hsl(0,0%,45%)] border-[hsl(230,20%,22%)]">Soon</Badge>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Dialog */}
      {activeTool && activeTool.component && (
        <ToolDialog
          open={!!activeTool}
          onOpenChange={(open) => !open && setActiveTool(null)}
          title={activeTool.name}
          description={activeTool.description}
        >
          <activeTool.component />
        </ToolDialog>
      )}

      <Footer />
    </div>
  );
}
