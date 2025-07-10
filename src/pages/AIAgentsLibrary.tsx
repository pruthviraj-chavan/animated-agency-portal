import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { 
  PenTool, Target, User, RotateCcw, FileCheck, Palette, 
  Presentation, Shield, MessageCircle, Calendar as CalendarIcon,
  Search, Bot, Sparkles, Settings, Zap, ArrowRight, Key, Play, Copy, Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const aiAgents = [
  {
    id: 1,
    name: "AI Content Writer Agent",
    description: "Generate blog posts, landing page copy, product descriptions, or SEO meta tags targeting your specific audience",
    icon: PenTool,
    category: "Content",
    prompt: "Write a 500-word blog post about [topic] targeting [audience] in a [tone] voice.",
    inputs: ["topic", "audience", "tone"]
  },
  {
    id: 2,
    name: "Startup Idea Validator Agent", 
    description: "Analyze startup potential, market fit, and monetization options with comprehensive SWOT analysis",
    icon: Target,
    category: "Business",
    prompt: "Evaluate the business potential of: [idea]. Include SWOT analysis and go-to-market tips.",
    inputs: ["idea"]
  },
  {
    id: 3,
    name: "Persona Generator Agent",
    description: "Create detailed customer personas from product ideas or target niches with demographic insights",
    icon: User,
    category: "Marketing",
    prompt: "Create a customer persona for a [product] targeted at [audience] in [industry].",
    inputs: ["product", "audience", "industry"]
  },
  {
    id: 4,
    name: "Prompt Optimizer Agent",
    description: "Transform rough prompts into powerful, precise instructions for maximum AI effectiveness",
    icon: RotateCcw,
    category: "Productivity",
    prompt: "Rewrite this prompt to be more effective for an AI model: '[user_prompt]'",
    inputs: ["user_prompt"]
  },
  {
    id: 5,
    name: "Resume & Cover Letter Agent",
    description: "Generate tailored resumes and cover letters based on specific job descriptions and skills",
    icon: FileCheck,
    category: "Career",
    prompt: "Create a resume for [role] with skills in [skills] and experience in [industry].",
    inputs: ["role", "skills", "industry"]
  },
  {
    id: 6,
    name: "Brand Identity Agent",
    description: "Build complete brand identity including name, slogan, value proposition, and tone guide",
    icon: Palette,
    category: "Branding",
    prompt: "Create a full branding kit for a [business_idea] targeting [audience].",
    inputs: ["business_idea", "audience"]
  },
  {
    id: 7,
    name: "Pitch Deck Generator Agent",
    description: "Transform startup ideas into comprehensive 10-slide pitch deck outlines with investor appeal",
    icon: Presentation,
    category: "Business",
    prompt: "Create a startup pitch deck outline for [product_service] that solves [problem].",
    inputs: ["product_service", "problem"]
  },
  {
    id: 8,
    name: "Terms & Privacy Generator",
    description: "Draft essential legal documents like Privacy Policy, Terms of Service, and NDAs for your business",
    icon: Shield,
    category: "Legal",
    prompt: "Generate a privacy policy for a SaaS tool that collects user data and uses cookies.",
    inputs: ["business_type", "data_collection"]
  },
  {
    id: 9,
    name: "Chatbot Personality Generator",
    description: "Design engaging chatbot personas with tone, greeting scripts, and sample conversation flows",
    icon: MessageCircle,
    category: "AI",
    prompt: "Design a friendly and humorous chatbot for a [app_type] app.",
    inputs: ["app_type", "personality_traits"]
  },
  {
    id: 10,
    name: "Social Media Content Calendar Agent",
    description: "Build comprehensive 7-30 day content calendars with post ideas, captions, and engagement strategies",
    icon: CalendarIcon,
    category: "Marketing",
    prompt: "Generate a 30-day Instagram content plan for a [business_type].",
    inputs: ["business_type", "duration", "platform"]
  }
];

const categories = ["All", "Content", "Business", "Marketing", "Productivity", "Career", "Branding", "Legal", "AI"];

interface AgentDialogProps {
  agent: typeof aiAgents[0];
  onRun: (agent: typeof aiAgents[0], inputs: Record<string, string>, apiKey: string, model: string) => void;
}

function AgentDialog({ agent, onRun }: AgentDialogProps) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('gpt-4');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState('');

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const handleRun = async () => {
    if (!apiKey.trim()) {
      toast({ title: "Error", description: "Please enter your API key", variant: "destructive" });
      return;
    }

    const missingInputs = agent.inputs.filter(input => !inputs[input]?.trim());
    if (missingInputs.length > 0) {
      toast({ title: "Error", description: `Please fill in: ${missingInputs.join(', ')}`, variant: "destructive" });
      return;
    }

    setIsRunning(true);
    try {
      let prompt = agent.prompt;
      agent.inputs.forEach(input => {
        prompt = prompt.replace(`[${input}]`, inputs[input]);
      });

      // Use CORS proxy for API calls
      const corsProxy = 'https://cors-anywhere.herokuapp.com/';
      let response;
      let requestUrl = '';
      let requestOptions: RequestInit = {};

      if (model.startsWith('gpt-')) {
        requestUrl = `${corsProxy}https://api.openai.com/v1/chat/completions`;
        requestOptions = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({
            model: model,
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 2000,
            temperature: 0.7
          })
        };
      } else if (model.startsWith('claude-')) {
        requestUrl = `${corsProxy}https://api.anthropic.com/v1/messages`;
        requestOptions = {
          method: 'POST',
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({
            model: model,
            max_tokens: 2000,
            messages: [{ role: 'user', content: prompt }]
          })
        };
      } else if (model.startsWith('gemini-')) {
        requestUrl = `${corsProxy}https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        };
      }

      console.log('Making API request to:', requestUrl);
      console.log('Request options:', requestOptions);
      
      response = await fetch(requestUrl, requestOptions);
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        
        // If CORS proxy fails, show demo result
        if (response.status === 403 || response.status === 0 || errorText.includes('CORS')) {
          const demoResult = generateDemoResult(agent, inputs);
          setResult(demoResult);
          toast({ 
            title: "Demo Mode", 
            description: "Showing demo result. For production use, implement server-side API calls.", 
            variant: "default" 
          });
          return;
        }
        
        throw new Error(`API Error: ${response.status} ${response.statusText}\n${errorText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      
      let resultText = '';
      if (model.startsWith('gpt-')) {
        resultText = data.choices?.[0]?.message?.content || 'No response received';
      } else if (model.startsWith('claude-')) {
        resultText = data.content?.[0]?.text || 'No response received';
      } else if (model.startsWith('gemini-')) {
        resultText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received';
      }

      setResult(resultText);
      toast({ title: "Success", description: "Agent completed successfully!" });
    } catch (error: any) {
      console.error('Request failed:', error);
      
      // Fallback to demo result on any error
      const demoResult = generateDemoResult(agent, inputs);
      setResult(demoResult);
      toast({ 
        title: "Demo Mode", 
        description: "CORS restrictions prevent direct API calls. Showing demo result.", 
        variant: "default" 
      });
    } finally {
      setIsRunning(false);
    }
  };

  const generateDemoResult = (agent: typeof aiAgents[0], inputs: Record<string, string>) => {
    // Generate realistic demo results based on agent type
    switch (agent.id) {
      case 1: // Content Writer
        return `# ${inputs.topic || 'Your Topic'} - A Comprehensive Guide

Writing for ${inputs.audience || 'your target audience'} in a ${inputs.tone || 'professional'} tone.

## Introduction
In today's digital landscape, ${inputs.topic || 'your topic'} has become increasingly important for businesses and individuals alike. This comprehensive guide will explore the key aspects and provide actionable insights.

## Key Points
1. **Understanding the Fundamentals**: Every successful approach starts with a solid foundation
2. **Best Practices**: Implementing proven strategies for optimal results
3. **Common Challenges**: Identifying and overcoming typical obstacles
4. **Future Trends**: Staying ahead of the curve

## Conclusion
By implementing these strategies, ${inputs.audience || 'your audience'} can achieve significant improvements in their ${inputs.topic || 'relevant area'}.

*This is a demo result. Connect your API key for full AI-generated content.*`;

      case 2: // Startup Validator
        return `# Business Analysis: ${inputs.idea || 'Your Startup Idea'}

## SWOT Analysis

### Strengths
- Innovative approach to market problems
- Strong value proposition
- Scalable business model
- Growing market demand

### Weaknesses
- Limited initial funding
- Need for technical expertise
- Brand recognition challenges
- Regulatory considerations

### Opportunities
- Expanding digital market
- Increasing customer awareness
- Partnership potential
- Technology advancement trends

### Threats
- Established competitors
- Economic uncertainty
- Technology disruption
- Regulatory changes

## Go-to-Market Strategy
1. **MVP Development**: Start with minimum viable product
2. **Market Validation**: Test with early adopters
3. **Funding Strategy**: Seek angel investors or bootstrap
4. **Marketing Channels**: Focus on digital marketing and partnerships

## Recommendation
The concept shows promise but requires careful market validation and strategic execution.

*This is a demo result. Connect your API key for full AI analysis.*`;

      case 3: // Persona Generator
        return `# Customer Persona for ${inputs.product || 'Your Product'}

## Primary Persona: "The Progressive Professional"

### Demographics
- Age: 28-42 years old
- Income: $50,000 - $120,000 annually
- Education: Bachelor's degree or higher
- Location: Urban/Suburban areas
- Industry: ${inputs.industry || 'Technology/Business'}

### Psychographics
- Values efficiency and innovation
- Tech-savvy early adopter
- Career-focused and ambitious
- Values work-life balance
- Environmentally conscious

### Pain Points
- Time constraints in daily workflow
- Need for reliable solutions
- Budget considerations
- Integration challenges
- Learning curve concerns

### Goals & Motivations
- Increase productivity
- Stay competitive in their field
- Simplify complex processes
- Achieve professional growth
- Maintain work-life balance

### Preferred Communication Channels
- Professional social media (LinkedIn)
- Industry publications and blogs
- Email newsletters
- Webinars and online events
- Peer recommendations

*This is a demo result. Connect your API key for detailed persona analysis.*`;

      default:
        return `# ${agent.name} Results

Based on your inputs:
${Object.entries(inputs).map(([key, value]) => `- **${key.replace(/_/g, ' ')}**: ${value}`).join('\n')}

## Generated Output
This is a demonstration of how the ${agent.name} would process your inputs and generate comprehensive results. The actual AI agent would provide detailed, contextual responses based on the specific parameters you've provided.

### Key Features:
- Intelligent analysis of your inputs
- Contextual understanding
- Professional formatting
- Actionable insights
- Customized recommendations

*This is a demo result. Connect your API key for full AI-powered analysis.*`;
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast({ title: "Copied", description: "Result copied to clipboard!" });
  };

  const downloadResult = () => {
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${agent.name.replace(/\s+/g, '_')}_result.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="sm" 
          className="flex-1 bg-gradient-to-r from-agency-purple to-agency-blue hover:from-agency-purple/90 hover:to-agency-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Play className="w-4 h-4 mr-2" />
          Run Agent
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-background to-background/95 border border-agency-purple/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-gradient">
            <agent.icon className="h-6 w-6 text-agency-purple" />
            {agent.name}
          </DialogTitle>
          <DialogDescription className="text-base">
            {agent.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* API Configuration */}
          <div className="space-y-4 p-4 rounded-lg bg-gradient-to-br from-agency-purple/5 to-agency-blue/5 border border-agency-purple/10">
            <h3 className="font-semibold flex items-center gap-2">
              <Key className="h-4 w-4" />
              API Configuration
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="model">AI Model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger className="bg-background/80 border-agency-purple/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude-3-sonnet-20240229">Claude 3 Sonnet</SelectItem>
                    <SelectItem value="claude-3-haiku-20240307">Claude 3 Haiku</SelectItem>
                    <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-background/80 border-agency-purple/20"
                />
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <h3 className="font-semibold">Agent Inputs</h3>
            {agent.inputs.map((input) => (
              <div key={input}>
                <Label htmlFor={input} className="capitalize">
                  {input.replace(/_/g, ' ')}
                </Label>
                <Input
                  id={input}
                  placeholder={`Enter ${input.replace(/_/g, ' ')}`}
                  value={inputs[input] || ''}
                  onChange={(e) => handleInputChange(input, e.target.value)}
                  className="bg-background/80 border-agency-purple/20"
                />
              </div>
            ))}
          </div>

          {/* Result Display */}
          {result && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Result</h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button size="sm" variant="outline" onClick={downloadResult}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
              <Textarea
                value={result}
                readOnly
                className="min-h-[200px] bg-background/80 border-agency-purple/20 font-mono text-sm"
              />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button 
            onClick={handleRun} 
            disabled={isRunning}
            className="bg-gradient-to-r from-agency-purple to-agency-blue hover:from-agency-purple/90 hover:to-agency-blue/90 text-white"
          >
            {isRunning ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Running...
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Run Agent
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function AIAgentsLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAgents = aiAgents.filter(agent => {
    const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory;
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRunAgent = (agent: typeof aiAgents[0], inputs: Record<string, string>, apiKey: string, model: string) => {
    // This function is handled within the dialog component
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AI Agents Library - Powerful AI Tools - Dievektor</title>
        <meta name="description" content="Access powerful AI agents with your own API keys. Generate content, validate ideas, create brands, and automate tasks with Claude, GPT, and Gemini." />
        <meta name="keywords" content="AI agents, API integration, content generation, business automation, AI tools" />
      </Helmet>

      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section with Home Page Styling */}
        <section className="relative py-20 bg-gradient-to-br from-agency-purple/10 via-agency-blue/10 to-agency-pink/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="absolute text-xs font-mono text-agency-purple"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.3 + Math.random() * 0.7,
                  transform: `rotate(${Math.random() * 90 - 45}deg)`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {Math.random() > 0.5 ? 'AI_AGENT()' : 'RUN_AI()'}
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-agency-purple/20 to-agency-blue/20 animate-pulse blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-agency-blue/20 to-agency-pink/20 animate-float blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-agency-pink/10 to-agency-purple/10 animate-pulse blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Bot className="w-16 h-16 text-agency-purple mr-4 drop-shadow-lg" />
                  <Sparkles className="w-8 h-8 text-agency-pink absolute -top-2 -right-2 animate-pulse" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-scale-in">
                Powerful AI Agents Library
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
                Use Your Own API Keys • Run Advanced AI Models • Get Instant Results
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto mb-8 space-y-4">
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Search AI agents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-background/80 backdrop-blur-sm border-agency-purple/30 h-12 text-lg pl-12 shadow-lg focus:shadow-xl transition-shadow"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-agency-purple/60 h-5 w-5" />
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <Badge 
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 shadow-md hover:shadow-lg ${
                        selectedCategory === category 
                          ? "bg-gradient-to-r from-agency-purple to-agency-blue text-white shadow-agency-purple/25" 
                          : "bg-background/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-agency-purple/10 hover:to-agency-blue/10 border-agency-purple/20"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-16 bg-gradient-to-b from-background to-agency-purple/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAgents.map((agent, index) => (
                <Card 
                  key={agent.id}
                  className="group relative overflow-hidden bg-gradient-to-br from-background to-background/50 border border-agency-purple/20 hover:border-agency-purple/40 hover:shadow-2xl hover:shadow-agency-purple/10 transition-all duration-300 hover:scale-105 animate-fade-in backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-agency-purple/20 to-agency-blue/20 flex items-center justify-center group-hover:from-agency-purple/30 group-hover:to-agency-blue/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-agency-purple/20">
                        <agent.icon size={28} className="text-agency-purple drop-shadow-sm" />
                      </div>
                      <Badge className="bg-gradient-to-r from-agency-blue to-agency-pink text-white border-0 shadow-lg">
                        ⚡ API Powered
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl mb-2 group-hover:text-agency-purple transition-colors duration-300">
                      {agent.name}
                    </CardTitle>
                    
                    <CardDescription className="text-base leading-relaxed">
                      {agent.description}
                    </CardDescription>
                    
                    <div className="flex items-center mt-4">
                      <Badge variant="outline" className="bg-gradient-to-r from-agency-pink/20 to-agency-purple/20 text-agency-purple border-agency-purple/30 shadow-sm">
                        {agent.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 flex items-center text-agency-purple">
                        <Settings className="w-4 h-4 mr-2" />
                        Required Inputs
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {agent.inputs.map((input, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-gradient-to-r from-muted to-muted/50 border-agency-purple/20 hover:border-agency-purple/40 transition-colors">
                            {input.replace(/_/g, ' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <AgentDialog agent={agent} onRun={handleRunAgent} />
                      <Button size="sm" variant="outline" className="px-3 border-agency-purple/30 hover:bg-agency-purple/10 hover:border-agency-purple/50 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredAgents.length === 0 && (
              <div className="text-center py-16">
                <Bot className="w-24 h-24 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-2xl font-bold mb-2">No agents found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-agency-purple/10 to-agency-blue/10 animate-pulse blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-agency-blue/10 to-agency-pink/10 animate-float blur-3xl" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Ready to Supercharge Your Workflow?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use your own API keys to run powerful AI agents. Support for OpenAI GPT, Anthropic Claude, and Google Gemini models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-agency-purple to-agency-blue hover:from-agency-purple/90 hover:to-agency-blue/90 text-white shadow-lg hover:shadow-xl transition-all">
                <Key className="mr-2 h-5 w-5" />
                Get API Keys
              </Button>
              <Button size="lg" variant="outline" className="border-agency-purple/30 hover:bg-agency-purple/10 hover:border-agency-purple/50 shadow-md hover:shadow-lg transition-all" asChild>
                <Link to="/contact">Request Custom Agent</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}