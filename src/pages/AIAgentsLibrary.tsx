import { useState } from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import {
  ArrowRight,
  Bot,
  Calendar as CalendarIcon,
  Copy,
  Download,
  FileCheck,
  Key,
  MessageCircle,
  Palette,
  PenTool,
  Play,
  Presentation,
  RotateCcw,
  Search,
  Settings,
  Shield,
  Target,
  User,
} from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const aiAgents = [
  {
    id: 1,
    name: "AI Content Writer Agent",
    description:
      "Generate blog posts, landing page copy, product descriptions, or SEO meta tags targeting your audience",
    icon: PenTool,
    category: "Content",
    prompt: "Write a 500-word blog post about [topic] targeting [audience] in a [tone] voice.",
    inputs: ["topic", "audience", "tone"],
  },
  {
    id: 2,
    name: "Startup Idea Validator Agent",
    description:
      "Analyze startup potential, market fit, and monetization options with comprehensive SWOT analysis",
    icon: Target,
    category: "Business",
    prompt: "Evaluate the business potential of: [idea]. Include SWOT analysis and go-to-market tips.",
    inputs: ["idea"],
  },
  {
    id: 3,
    name: "Persona Generator Agent",
    description:
      "Create detailed customer personas from product ideas or target niches with demographic insights",
    icon: User,
    category: "Marketing",
    prompt: "Create a customer persona for a [product] targeted at [audience] in [industry].",
    inputs: ["product", "audience", "industry"],
  },
  {
    id: 4,
    name: "Prompt Optimizer Agent",
    description:
      "Transform rough prompts into structured, precise instructions for better model output",
    icon: RotateCcw,
    category: "Productivity",
    prompt: "Rewrite this prompt to be more effective for an AI model: '[user_prompt]'",
    inputs: ["user_prompt"],
  },
  {
    id: 5,
    name: "Resume & Cover Letter Agent",
    description:
      "Generate tailored resumes and cover letters based on specific job descriptions and skills",
    icon: FileCheck,
    category: "Career",
    prompt: "Create a resume for [role] with skills in [skills] and experience in [industry].",
    inputs: ["role", "skills", "industry"],
  },
  {
    id: 6,
    name: "Brand Identity Agent",
    description:
      "Build complete brand identity including positioning, slogan, value proposition, and tone guide",
    icon: Palette,
    category: "Branding",
    prompt: "Create a full branding kit for a [business_idea] targeting [audience].",
    inputs: ["business_idea", "audience"],
  },
  {
    id: 7,
    name: "Pitch Deck Generator Agent",
    description:
      "Transform startup concepts into structured 10-slide pitch deck outlines",
    icon: Presentation,
    category: "Business",
    prompt: "Create a startup pitch deck outline for [product_service] that solves [problem].",
    inputs: ["product_service", "problem"],
  },
  {
    id: 8,
    name: "Terms & Privacy Generator",
    description:
      "Draft starter templates for Privacy Policy, Terms of Service, and standard checklists",
    icon: Shield,
    category: "Legal",
    prompt: "Generate a privacy policy outline for a SaaS tool that collects user data.",
    inputs: ["business_type", "data_collection"],
  },
  {
    id: 9,
    name: "Chatbot Personality Generator",
    description:
      "Design engaging assistant personas with tone, greeting scripts, and sample dialogue flows",
    icon: MessageCircle,
    category: "AI",
    prompt: "Design a friendly chatbot persona for a [app_type] app.",
    inputs: ["app_type", "personality_traits"],
  },
  {
    id: 10,
    name: "Social Media Content Calendar Agent",
    description:
      "Build 7–30 day content calendars with post concepts, captions, and distribution cadence",
    icon: CalendarIcon,
    category: "Marketing",
    prompt: "Generate a 30-day content plan for a [business_type].",
    inputs: ["business_type", "duration", "platform"],
  },
];

const categories = [
  "All",
  "Content",
  "Business",
  "Marketing",
  "Productivity",
  "Career",
  "Branding",
  "Legal",
  "AI",
];

function generateDemoResult(agent: (typeof aiAgents)[0], inputs: Record<string, string>) {
  switch (agent.id) {
    case 1:
      return `# ${inputs.topic || "Your Topic"} — Editorial Guide\n\nAudience: ${inputs.audience || "General"}\nVoice: ${inputs.tone || "Clear & Direct"}\n\n## Key Points\n1. Start with the concrete business bottleneck.\n2. Show measurable outcomes with clear examples.\n3. Close with an actionable next step.`;
    case 2:
      return `# Idea Evaluation: ${inputs.idea || "Venture"}\n\n## SWOT Summary\n- Strengths: Clear problem scope & fast validation.\n- Weaknesses: Initial distribution channel setup.\n- Opportunities: Automation & localized workflows.\n- Threats: Incumbent tools with legacy lock-in.`;
    default:
      return `# ${agent.name} Output\n\nInputs:\n${Object.entries(inputs)
        .map(([k, v]) => `- ${k.replace(/_/g, " ")}: ${v}`)
        .join("\n")}\n\nGenerated structured output preview.`;
  }
}

function AgentDialog({ agent }: { agent: (typeof aiAgents)[0] }) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("gpt-4");
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState("");

  const handleRun = async () => {
    const missing = agent.inputs.filter((input) => !inputs[input]?.trim());
    if (missing.length > 0) {
      toast({
        title: "Missing inputs",
        description: `Please fill in: ${missing.join(", ")}`,
        variant: "destructive",
      });
      return;
    }

    setIsRunning(true);
    try {
      let prompt = agent.prompt;
      agent.inputs.forEach((input) => {
        prompt = prompt.replace(`[${input}]`, inputs[input]);
      });

      if (!apiKey.trim()) {
        setResult(generateDemoResult(agent, inputs));
        toast({
          title: "Preview generated",
          description: "Showing structured preview. Add an API key to run live inference.",
        });
        return;
      }

      if (model.startsWith("gpt-")) {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [{ role: "user", content: prompt }],
            max_tokens: 1500,
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setResult(data.choices?.[0]?.message?.content || generateDemoResult(agent, inputs));
      } else {
        setResult(generateDemoResult(agent, inputs));
      }
      toast({ title: "Completed", description: "Agent output ready." });
    } catch {
      setResult(generateDemoResult(agent, inputs));
      toast({
        title: "Preview Mode",
        description: "Direct browser API call was blocked; showing preview output.",
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="flex-1 rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white">
          <Play className="w-3.5 h-3.5 mr-1.5" /> Run Agent
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white border-[#FBE0D4] text-[#141210]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-[#141210]">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF5422] text-white">
              <agent.icon className="h-5 w-5" />
            </span>
            {agent.name}
          </DialogTitle>
          <DialogDescription className="text-stone-600">{agent.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="space-y-3 p-4 rounded-xl bg-[#FFF8F5] border border-[#FBE0D4]">
            <h3 className="text-sm font-bold flex items-center gap-2 text-[#141210]">
              <Key className="h-4 w-4 text-[#FF5422]" /> Model &amp; Optional API Key
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="model">AI Model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger className="bg-white border-stone-200 mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
                    <SelectItem value="claude-3-5-sonnet">Claude Sonnet</SelectItem>
                    <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="apiKey">API Key (optional for demo)</Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="sk-..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-white border-stone-200 mt-1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#141210]">Agent Inputs</h3>
            {agent.inputs.map((input) => (
              <div key={input}>
                <Label htmlFor={input} className="capitalize text-xs text-stone-600">
                  {input.replace(/_/g, " ")}
                </Label>
                <Input
                  id={input}
                  placeholder={`Enter ${input.replace(/_/g, " ")}`}
                  value={inputs[input] || ""}
                  onChange={(e) => setInputs((p) => ({ ...p, [input]: e.target.value }))}
                  className="bg-white border-stone-200 mt-1"
                />
              </div>
            ))}
          </div>

          {result && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold">Output</h3>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(result);
                      toast({ title: "Copied", description: "Result copied to clipboard" });
                    }}
                  >
                    <Copy className="h-3.5 w-3.5 mr-1" /> Copy
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const blob = new Blob([result], { type: "text/plain" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `${agent.name.replace(/\s+/g, "_")}.txt`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    <Download className="h-3.5 w-3.5 mr-1" /> Save
                  </Button>
                </div>
              </div>
              <Textarea value={result} readOnly className="min-h-[180px] font-mono text-xs bg-stone-50" />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            onClick={handleRun}
            disabled={isRunning}
            className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white"
          >
            <Play className="h-4 w-4 mr-1.5" />
            {isRunning ? "Running..." : "Run Agent"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function AIAgentsLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAgents = aiAgents.filter((agent) => {
    const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory;
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/ai-agents-library"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "AI Agents Library", path: "/ai-agents-library" },
        ]}
      />

      <SiteNav />

      <main className="flex-grow pt-24">
        <section className="dv-dot-bg py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-4xl">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              Interactive Library
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#141210] mb-5">
              AI Agents <span className="text-[#FF5422]">Library</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Test ready-to-run AI agent templates directly or request custom agents wired into
              your business systems.
            </p>

            <div className="max-w-xl mx-auto space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search AI agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white border-stone-200 h-12 rounded-full pl-11 focus-visible:ring-[#FF5422]"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <Badge
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      selectedCategory === cat
                        ? "bg-[#FF5422] text-white border-[#FF5422]"
                        : "bg-white text-stone-600 border-stone-200 hover:border-[#FF5422] hover:text-[#FF5422]"
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => (
                <Card
                  key={agent.id}
                  className="rounded-2xl border-[#FBE0D4] bg-white shadow-sm hover:-translate-y-1 hover:border-[#FF5422]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-[#FF5422] text-white flex items-center justify-center">
                        <agent.icon className="h-5 w-5" />
                      </div>
                      <Badge className="bg-[#FFF4F0] text-[#FF5422] border border-[#FBE0D4]">
                        {agent.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-[#141210]">{agent.name}</CardTitle>
                    <CardDescription className="text-sm text-stone-600">
                      {agent.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-stone-500 mb-2 flex items-center gap-1.5">
                        <Settings className="w-3.5 h-3.5 text-[#FF5422]" /> Required Inputs
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {agent.inputs.map((input) => (
                          <Badge
                            key={input}
                            variant="outline"
                            className="text-xs bg-stone-50 border-stone-200 text-stone-700"
                          >
                            {input.replace(/_/g, " ")}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <AgentDialog agent={agent} />
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="rounded-full border-stone-200 hover:border-[#FF5422]"
                      >
                        <Link to="/contact" aria-label={`Customize ${agent.name}`}>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAgents.length === 0 && (
              <div className="text-center py-16">
                <Bot className="w-16 h-16 mx-auto text-stone-300 mb-4" />
                <h3 className="text-xl font-bold text-[#141210] mb-1">No agents found</h3>
                <p className="text-sm text-stone-500">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
