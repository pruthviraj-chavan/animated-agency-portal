import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Binary,
  Boxes,
  Braces,
  Brain,
  Bug,
  Calculator,
  CircuitBoard,
  Clock,
  Code2,
  Container,
  Cpu,
  Database,
  Eye,
  FileJson,
  Fingerprint,
  Gauge,
  GitCompare,
  Globe,
  HardDrive,
  Hash,
  KeyRound,
  Layers,
  Lock,
  Radio,
  Regex,
  Search,
  Server,
  Shield,
  Terminal,
  Wifi,
} from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SeoHead } from "@/components/seo/SeoHead";
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
import { RateLimiterLabTool } from "@/components/devkit/tools/RateLimiterLabTool";
import { OAuthFlowSimulator } from "@/components/devkit/tools/OAuthFlowSimulator";
import { JwtAttackPlayground } from "@/components/devkit/tools/JwtAttackPlayground";
import { GarbageCollectorVisualizer } from "@/components/devkit/tools/GarbageCollectorVisualizer";
import { ThreadDeadlockVisualizer } from "@/components/devkit/tools/ThreadDeadlockVisualizer";
import { LlmTokenSimulator } from "@/components/devkit/tools/LlmTokenSimulator";
import { DatabaseIndexSimulator } from "@/components/devkit/tools/DatabaseIndexSimulator";
import { MicroservicesFailureSimulator } from "@/components/devkit/tools/MicroservicesFailureSimulator";
import { ShardingVisualizer } from "@/components/devkit/tools/ShardingVisualizer";
import { CdnRoutingSimulator } from "@/components/devkit/tools/CdnRoutingSimulator";
import { MessageQueueSimulator } from "@/components/devkit/tools/MessageQueueSimulator";
import { EventualConsistencyVisualizer } from "@/components/devkit/tools/EventualConsistencyVisualizer";
import { KubernetesAutoscaleSimulator } from "@/components/devkit/tools/KubernetesAutoscaleSimulator";
import { DnsResolutionVisualizer } from "@/components/devkit/tools/DnsResolutionVisualizer";
import { VectorSearchSimulator } from "@/components/devkit/tools/VectorSearchSimulator";

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  category: string;
  component?: React.ComponentType;
}

const tools: Tool[] = [
  { id: "json-formatter", name: "JSON Formatter", description: "Format, validate & minify JSON", icon: Braces, category: "Popular Tools", component: JsonFormatterTool },
  { id: "uuid-generator", name: "UUID Generator", description: "Generate v4 UUIDs instantly", icon: Fingerprint, category: "Popular Tools", component: UuidGeneratorTool },
  { id: "base64", name: "Base64 Encoder", description: "Encode & decode Base64 strings", icon: Binary, category: "Popular Tools", component: Base64Tool },
  { id: "hash-generator", name: "Hash Generator", description: "SHA-1, SHA-256, SHA-512 hashes", icon: Hash, category: "Popular Tools", component: HashGeneratorTool },
  { id: "jwt-decoder", name: "JWT Decoder", description: "Decode JWT header & payload", icon: KeyRound, category: "Popular Tools", component: JwtDecoderTool },
  { id: "regex-tester", name: "Regex Tester", description: "Live regex matching & testing", icon: Regex, category: "Popular Tools", component: RegexTesterTool },
  { id: "timestamp", name: "Timestamp Converter", description: "Unix ↔ human-readable dates", icon: Clock, category: "Popular Tools", component: TimestampTool },
  { id: "password", name: "Password Generator", description: "Secure password with options", icon: Lock, category: "Popular Tools", component: PasswordGeneratorTool },
  { id: "json-validator", name: "JSON Validator", description: "Validate JSON with error details", icon: FileJson, category: "Data Tools", component: JsonValidatorTool },
  { id: "yaml-json", name: "YAML ↔ JSON", description: "Convert between YAML and JSON", icon: GitCompare, category: "Data Tools", component: YamlJsonTool },
  { id: "text-diff", name: "Text Diff", description: "Compare two texts side by side", icon: GitCompare, category: "Data Tools", component: TextDiffTool },
  { id: "sql-formatter", name: "SQL Formatter", description: "Format & beautify SQL queries", icon: Database, category: "Data Tools", component: SqlFormatterTool },
  { id: "curl-builder", name: "cURL Builder", description: "Build cURL commands visually", icon: Terminal, category: "Developer Tools", component: CurlBuilderTool },
  { id: "chmod-calc", name: "Chmod Calculator", description: "Unix permission calculator", icon: Calculator, category: "Developer Tools", component: ChmodCalculatorTool },
  { id: "cron-parser", name: "Cron Parser", description: "Parse & explain cron expressions", icon: Clock, category: "Developer Tools", component: CronParserTool },
  { id: "cidr-calc", name: "CIDR Calculator", description: "Calculate IP ranges from CIDR", icon: Wifi, category: "Network Tools", component: CidrCalculatorTool },
  { id: "dns-resolution", name: "DNS Resolution Viz", description: "Step-by-step DNS resolution", icon: Globe, category: "Network Tools", component: DnsResolutionVisualizer },
  { id: "cdn-routing", name: "CDN Edge Routing", description: "Simulate CDN cache hit/miss", icon: Radio, category: "Network Tools", component: CdnRoutingSimulator },
  { id: "url-encoder", name: "URL Encoder", description: "Encode & decode URLs", icon: Shield, category: "Security Tools", component: UrlEncoderTool },
  { id: "oauth-flow", name: "OAuth 2.0 Flow", description: "Interactive OAuth flow builder", icon: KeyRound, category: "Security Tools", component: OAuthFlowSimulator },
  { id: "jwt-attack", name: "JWT Attack Lab", description: "Simulate JWT vulnerabilities", icon: Bug, category: "Security Tools", component: JwtAttackPlayground },
  { id: "lru-cache", name: "LRU Cache Visualizer", description: "Interactive LRU cache simulation", icon: Layers, category: "Simulators", component: LruCacheSimulator },
  { id: "load-balancer", name: "Load Balancer Sim", description: "Round-robin load balancer", icon: Server, category: "Simulators", component: LoadBalancerSimulator },
  { id: "rate-limiter", name: "Rate Limiter Sim", description: "Token bucket rate limiter", icon: Activity, category: "Simulators", component: RateLimiterSimulator },
  { id: "circuit-breaker", name: "Circuit Breaker", description: "Circuit breaker state machine", icon: Cpu, category: "Simulators", component: CircuitBreakerSimulator },
  { id: "rate-limiter-lab", name: "Rate Limiter Lab", description: "Compare 4 rate limiting algorithms", icon: Gauge, category: "Distributed Systems", component: RateLimiterLabTool },
  { id: "microservices", name: "Microservices Failure", description: "Cascading failure simulator", icon: Boxes, category: "Distributed Systems", component: MicroservicesFailureSimulator },
  { id: "eventual-consistency", name: "Eventual Consistency", description: "N/W/R quorum visualizer", icon: CircuitBoard, category: "Distributed Systems", component: EventualConsistencyVisualizer },
  { id: "message-queue", name: "Message Queue Sim", description: "Producer/consumer with DLQ", icon: Radio, category: "Distributed Systems", component: MessageQueueSimulator },
  { id: "sharding", name: "Sharding Visualizer", description: "Hash/range/directory sharding", icon: HardDrive, category: "Distributed Systems", component: ShardingVisualizer },
  { id: "db-index", name: "DB Index Simulator", description: "See query cost with indexes", icon: Database, category: "Performance & Scaling", component: DatabaseIndexSimulator },
  { id: "k8s-autoscale", name: "K8s Autoscaler", description: "HPA pod scaling simulator", icon: Container, category: "Performance & Scaling", component: KubernetesAutoscaleSimulator },
  { id: "gc-visualizer", name: "Garbage Collector", description: "Mark & sweep GC visualizer", icon: Brain, category: "Computer Science", component: GarbageCollectorVisualizer },
  { id: "thread-deadlock", name: "Deadlock Detector", description: "Thread deadlock visualizer", icon: Bug, category: "Computer Science", component: ThreadDeadlockVisualizer },
  { id: "llm-token", name: "LLM Token Calculator", description: "Token count & cost estimator", icon: Brain, category: "AI & ML Tools", component: LlmTokenSimulator },
  { id: "vector-search", name: "Vector Search / RAG", description: "Similarity search simulator", icon: Eye, category: "AI & ML Tools", component: VectorSearchSimulator },
];

const categories = [
  "All",
  "Popular Tools",
  "Data Tools",
  "Developer Tools",
  "Network Tools",
  "Security Tools",
  "Simulators",
  "Distributed Systems",
  "Performance & Scaling",
  "Computer Science",
  "AI & ML Tools",
];

export default function DevelopmentKit() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

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
      const matchSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
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
    <div className="min-h-screen flex flex-col bg-white text-[#141210]">
      <SeoHead
        path="/development-kit"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Developer Kit", path: "/development-kit" },
        ]}
      />
      <SiteNav />

      <section className="dv-dot-bg pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10 max-w-3xl">
          <Badge className="mb-4 bg-[#FF5422] text-white border-0">
            <Code2 className="h-3 w-3 mr-1" /> {tools.length} Developer Tools
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141210] mb-4">
            Developer <span className="text-[#FF5422]">Toolkit</span>
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            {tools.length} tools &amp; interactive simulators running locally in your browser.
          </p>

          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <Input
              id="devkit-search"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-16 h-12 bg-white border-stone-200 text-[#141210] rounded-full focus-visible:ring-[#FF5422]"
            />
            <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-500 bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded">
              ⌘K
            </kbd>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 border-y border-stone-100 bg-[#FFF8F5]">
        <div className="container mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant="ghost"
                size="sm"
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full text-xs font-semibold transition-all ${
                  category === cat
                    ? "bg-[#FF5422] text-white hover:bg-[#e8460e]"
                    : "text-stone-600 hover:text-[#141210] hover:bg-white"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 pb-24 flex-grow bg-[#FFF8F5]">
        <div className="container mx-auto space-y-10">
          {Array.from(grouped.entries()).map(([catName, catTools]) => (
            <div key={catName}>
              <h2 className="text-lg font-bold text-[#141210] mb-4">{catName}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {catTools.map((tool, i) => (
                  <motion.button
                    key={tool.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.02 }}
                    onClick={() => (tool.component ? setActiveTool(tool) : null)}
                    className="group relative bg-white border border-[#FBE0D4] rounded-2xl p-4 text-left transition-all duration-200 hover:border-[#FF5422] hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-[#FFF4F0] text-[#FF5422] shrink-0 group-hover:bg-[#FF5422] group-hover:text-white transition-colors">
                        <tool.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-[#141210] truncate">{tool.name}</h3>
                        <p className="text-xs text-stone-500 mt-0.5 line-clamp-2">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

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

      <SiteFooter />
    </div>
  );
}
