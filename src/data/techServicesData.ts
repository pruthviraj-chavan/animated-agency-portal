import {
  Bot,
  Cloud,
  Code,
  Database,
  Gauge,
  Globe,
  Layers,
  Link2,
  Lock,
  MessageSquare,
  Mic,
  Palette,
  RefreshCw,
  Search,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Webhook,
  Workflow,
  Zap,
} from "lucide-react";
import type { ServiceDetailLayoutProps } from "@/components/dv/ServiceDetailLayout";

export type TechServiceKey =
  | "website-development"
  | "mobile-app-development"
  | "custom-software-development"
  | "ecommerce-development"
  | "ai-agents"
  | "ai-chatbots"
  | "business-automation"
  | "crm-automation"
  | "api-integration"
  | "cloud-solutions"
  | "ui-ux-design"
  | "seo-optimization"
  | "wordpress-development";

const STANDARD_PROCESS = [
  {
    step: "01",
    title: "Discovery & Scope",
    detail: "Map requirements, user journeys, integration touchpoints and measurable outcomes.",
  },
  {
    step: "02",
    title: "Architecture & UX",
    detail: "Design responsive wireframes, clean data schemas and maintainable component architecture.",
  },
  {
    step: "03",
    title: "Build & QA Testing",
    detail: "Implement production code with performance budgets, cross-device checks and API validation.",
  },
  {
    step: "04",
    title: "Launch & Handover",
    detail: "Deploy with SEO telemetry, security headers, documentation and responsive post-launch support.",
  },
];

export const TECH_SERVICES_DATA: Record<TechServiceKey, ServiceDetailLayoutProps> = {
  "website-development": {
    path: "/services/website-development",
    serviceType: "Custom Website Development",
    eyebrow: "Website Engineering",
    title: "Custom Website Development",
    description:
      "Fast, mobile-first React, TypeScript and SEO-ready websites engineered for businesses in Kolhapur, Pune, Maharashtra and globally.",
    overviewHeading: "Clean web engineering built for search visibility and conversion",
    overviewBody:
      "Your website is often the first place prospective clients evaluate your credibility. DieVekter Tech builds custom React, Vite and static-prerendered websites that load rapidly on mobile networks, present clear service structure to search engines, and guide visitors cleanly to enquiry actions.",
    problemsSolved: [
      "Slow template websites that lose mobile visitors and rank poorly on Google",
      "Generic designs that fail to differentiate regional and B2B brands",
      "Broken heading hierarchy, missing Schema.org structured data and non-indexable SPAs",
      "Disconnected lead forms without instant WhatsApp or email alerts",
    ],
    sectionTitle: "What our website builds include",
    features: [
      {
        title: "Modern React & TypeScript",
        description: "Component-driven codebases structured cleanly for speed, maintainability and future expansion.",
        icon: Code,
      },
      {
        title: "Prerendered Technical SEO",
        description: "Semantic headings, canonical tags, Open Graph metadata, sitemaps and Schema.org markup out of the box.",
        icon: Search,
      },
      {
        title: "Mobile-First UI & Speed",
        description: "Layouts tested across compact phones and desktop viewports with lightweight asset bundling.",
        icon: Smartphone,
      },
      {
        title: "WhatsApp & CRM Lead Flows",
        description: "Direct enquiry capture wired to WhatsApp notifications, email or CRM pipelines.",
        icon: MessageSquare,
      },
      {
        title: "CMS & Content Flexibility",
        description: "Manage service updates, case studies and blog guides without touching core layout code.",
        icon: Layers,
      },
      {
        title: "SSL, Analytics & Monitoring",
        description: "Clean HTTPS deployment with privacy-safe event tracking and uptime checks.",
        icon: Lock,
      },
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Schema.org JSON-LD", "Vercel"],
    industries: [
      "Education Institutions",
      "Real Estate",
      "Healthcare & Fitness",
      "Manufacturing & Electrical",
      "B2B Agencies",
      "News & Media",
    ],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "How long does a custom website project typically take?",
        answer:
          "Timelines depend on page count and integrations. Focused business websites are typically scoped into discovery, design, build and QA milestones so you know exact delivery windows before kickoff.",
      },
      {
        question: "Do you build websites specifically optimized for Google search?",
        answer:
          "Yes. Every custom website includes clean URL architecture, unique page titles and meta descriptions, Schema.org JSON-LD, XML sitemaps, mobile responsiveness and fast loading assets.",
      },
      {
        question: "Can we see live websites dieVekter has built?",
        answer:
          "Yes — visit our Projects page to view live client sites across technology, education, real estate, fitness, events and digital news.",
      },
    ],
    relatedServices: [
      { label: "E-commerce Development", path: "/services/ecommerce-development" },
      { label: "UI/UX Design", path: "/services/ui-ux-design" },
      { label: "SEO Optimization", path: "/services/seo-optimization" },
      { label: "Shipped Client Projects", path: "/projects" },
    ],
    ctaTitle: "Ready to launch a fast, search-ready website?",
    ctaDescription:
      "Share your business goals and target pages — we will reply with a practical scope, architecture and timeline.",
    ctaButtonText: "Request Website Consultation",
  },

  "mobile-app-development": {
    path: "/services/mobile-app-development",
    serviceType: "Mobile App Development",
    eyebrow: "iOS & Android",
    title: "Mobile Application Development",
    description:
      "Cross-platform iOS and Android apps built with React Native and Flutter, backed by reliable APIs, offline support and intuitive UX.",
    overviewHeading: "Production mobile apps without doubling engineering budgets",
    overviewBody:
      "We engineer Android and iOS mobile applications from a shared, high-performance codebase so startups and growing businesses ship faster to both stores without sacrificing native feel, offline reliability or clean backend integration.",
    problemsSolved: [
      "Maintaining separate slow codebases for Android and iOS",
      "Clunky mobile forms or checkout flows with high drop-off rates",
      "Missing real-time sync between mobile field apps and web admin panels",
      "Unreliable push notifications and authentication flows",
    ],
    sectionTitle: "Mobile engineering capabilities",
    features: [
      {
        title: "Cross-Platform React Native & Flutter",
        description: "Unified mobile engineering delivering smooth 60fps interfaces on Android and iOS.",
        icon: Smartphone,
      },
      {
        title: "REST & Real-Time Backend Sync",
        description: "Secure token authentication, role permissions, file uploads and structured API endpoints.",
        icon: Server,
      },
      {
        title: "Push Alerts & Deep Linking",
        description: "Transactional notifications for orders, bookings, attendance or approval updates.",
        icon: Zap,
      },
      {
        title: "Intuitive Mobile UI/UX",
        description: "Thumb-friendly navigation, clean typography and accessible interactive states.",
        icon: Palette,
      },
      {
        title: "Store Readiness & Releases",
        description: "Structured build signing, crash reporting and release preparation for Play Store and App Store.",
        icon: Globe,
      },
      {
        title: "Speed & Memory Tuning",
        description: "Lazy asset loading, local caching and responsive state management across budget devices.",
        icon: Gauge,
      },
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    industries: [
      "Retail & Inventory",
      "EdTech & Campus Portals",
      "Field Service Teams",
      "Healthcare Bookings",
      "Fitness & Membership Clubs",
    ],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Should we choose React Native or Flutter for our mobile app?",
        answer:
          "If your broader product ecosystem uses React or TypeScript, React Native allows high code and team overlap. Flutter excels for custom brand animations and uniform pixel rendering across Android and iOS. We help you choose honestly during scoping.",
      },
      {
        question: "Do you also build the backend dashboard and API for the mobile app?",
        answer:
          "Yes. We build the complete API layer, database schema, authentication and web admin panel alongside the mobile app.",
      },
    ],
    relatedServices: [
      { label: "Custom Software", path: "/services/custom-software-development" },
      { label: "API Integration", path: "/services/api-integration" },
      { label: "UI/UX Design", path: "/services/ui-ux-design" },
      { label: "Mobile App Journal Guide", path: "/blog/mobile-app-development" },
    ],
    ctaTitle: "Need an Android or iOS app tailored to your workflow?",
    ctaDescription:
      "Tell us what your users need to accomplish on mobile and we will outline the clean architecture.",
    ctaButtonText: "Discuss App Project",
  },

  "custom-software-development": {
    path: "/services/custom-software-development",
    serviceType: "Custom Software Development",
    eyebrow: "Bespoke Systems",
    title: "Custom Software Development",
    description:
      "Tailored internal portals, retail billing and inventory platforms, SaaS applications and multi-branch business systems built around how you operate.",
    overviewHeading: "Purpose-built software where off-the-shelf SaaS falls short",
    overviewBody:
      "Spreadsheets break as order volume and staff headcount grow, while bloated enterprise tools force teams into rigid habits. DieVekter Tech engineers bespoke web portals, billing & stock platforms and custom operations software aligned to your exact business rules.",
    problemsSolved: [
      "Fragile multi-tab spreadsheets causing stock discrepancies or billing errors",
      "Paying recurring per-seat SaaS fees for tools you barely use 20% of",
      "Disconnected attendance, sales and inventory records across locations",
      "Lack of role-based reporting for founders and store managers",
    ],
    sectionTitle: "Custom software capabilities",
    features: [
      {
        title: "Billing, Stock & Retail Systems",
        description: "Fast checkout workflows, SKU inventory tracking, low-stock alerts and branch summaries.",
        icon: Database,
      },
      {
        title: "Role-Based Web Portals",
        description: "Secure staff, manager, partner or student dashboards with audit-friendly permissions.",
        icon: Lock,
      },
      {
        title: "Multi-Branch Data Sync",
        description: "Centralized cloud reporting across stores, offices or institutional departments.",
        icon: Layers,
      },
      {
        title: "AI-Assisted Operations",
        description: "Built-in demand forecasting, smart search or document summarization where useful.",
        icon: Sparkles,
      },
      {
        title: "Clean API & Export Pipelines",
        description: "CSV/PDF reporting, webhook triggers and clean integrations with accounting tools.",
        icon: Link2,
      },
      {
        title: "Maintainable Architecture",
        description: "Typed schemas, clear documentation and modular services built to evolve over years.",
        icon: Code,
      },
    ],
    techStack: ["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Docker"],
    industries: [
      "Apparel & Retail Stores",
      "Educational Trusts",
      "Real Estate Brokers",
      "Service Agencies",
      "Distribution & Supply",
    ],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Do we own the source code of custom software built by dieVekter?",
        answer:
          "Yes — ownership terms and intellectual property handover are defined clearly in every project agreement before engineering starts.",
      },
      {
        question: "Can custom software connect to our existing billing or WhatsApp workflows?",
        answer:
          "Yes. We routinely build REST API connectors and automated notifications so new portals fit cleanly into your existing operations.",
      },
    ],
    relatedServices: [
      { label: "Our Software Products", path: "/products" },
      { label: "API Integration", path: "/services/api-integration" },
      { label: "Cloud Solutions", path: "/services/cloud-solutions" },
      { label: "Business Automation", path: "/services/business-automation" },
    ],
    ctaTitle: "Outgrowing spreadsheets and manual tracking?",
    ctaDescription:
      "Describe the operational bottleneck and we will scope a clean custom software platform.",
    ctaButtonText: "Scope Custom Software",
  },

  "ecommerce-development": {
    path: "/services/ecommerce-development",
    serviceType: "E-commerce Website Development",
    eyebrow: "Online Retail",
    title: "E-commerce Development",
    description:
      "High-converting online stores with fast category filtering, Razorpay & UPI payments, inventory controls and mobile-first checkout.",
    overviewHeading: "Storefronts engineered for mobile shoppers and smooth order ops",
    overviewBody:
      "Modern Indian and global shoppers browse overwhelmingly on smartphones. We build streamlined storefronts that make product discovery effortless, integrate trusted payment gateways and sync inventory cleanly with your dispatch team.",
    problemsSolved: [
      "Slow catalog pages and confusing checkout steps causing cart abandonment",
      "Manual stock updates between physical outlets and online storefronts",
      "Missing WhatsApp order confirmations or invoice generation",
      "Unindexed product category pages missing organic search demand",
    ],
    sectionTitle: "E-commerce capabilities",
    features: [
      {
        title: "Payment Gateway & UPI Integration",
        description: "Seamless checkout supporting Razorpay, UPI, cards and Stripe where international buyers order.",
        icon: ShoppingCart,
      },
      {
        title: "Fast Filterable Product Catalogs",
        description: "Category navigation, size/variant swatches and instant client-side search.",
        icon: Search,
      },
      {
        title: "Order & Inventory Sync",
        description: "Real-time SKU tracking, low-stock warnings and clean admin fulfillment views.",
        icon: Database,
      },
      {
        title: "Conversion-Focused Product Pages",
        description: "Clear imagery, sizing context, delivery clarity and trust cues without clutter.",
        icon: TrendingUp,
      },
      {
        title: "Automated Order Notifications",
        description: "Order confirmation alerts over email or WhatsApp to keep customers informed.",
        icon: MessageSquare,
      },
      {
        title: "Technical SEO Storefront Structure",
        description: "Clean category URLs, canonical tags and descriptive product metadata.",
        icon: Globe,
      },
    ],
    techStack: ["React", "TypeScript", "WooCommerce", "Razorpay", "Stripe", "PostgreSQL"],
    industries: [
      "Apparel & Fashion",
      "Specialty Retail",
      "D2C Brands",
      "Local Wholesalers",
      "Digital Subscriptions",
    ],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Do you build custom React stores or WooCommerce stores?",
        answer:
          "We build both depending on catalog complexity, budget and internal team workflow — WooCommerce suits content-heavy catalogs needing quick plug-ins, while custom React stores suit fast branded experiences.",
      },
      {
        question: "Can online orders update our retail stock system?",
        answer:
          "Yes, we connect online checkout webhooks with stock ledgers and notification workflows.",
      },
    ],
    relatedServices: [
      { label: "Website Development", path: "/services/website-development" },
      { label: "WordPress Development", path: "/services/wordpress-development" },
      { label: "API Integration", path: "/services/api-integration" },
      { label: "Custom Software", path: "/services/custom-software-development" },
    ],
    ctaTitle: "Launch an online store built to convert on mobile",
    ctaDescription:
      "Tell us your catalog size and payment requirements for a clear e-commerce build plan.",
    ctaButtonText: "Plan E-commerce Store",
  },

  "ai-agents": {
    path: "/services/ai-agents",
    serviceType: "AI Agents and Voicebots",
    eyebrow: "Agentic AI",
    title: "AI Agents & Voice Assistants",
    description:
      "Multilingual voice and task-executing AI agents fluent in Hindi, Marathi, Hinglish and English — integrated cleanly with your docs and CRM.",
    overviewHeading: "From scripted replies to grounded AI agents that execute real work",
    overviewBody:
      "Generic chatbots frustrate customers when conversations step outside rigid scripts. DieVekter Tech engineers domain-grounded AI agents backed by Retrieval-Augmented Generation (RAG), guardrails and tool calling so agents qualify leads, check availability and update your CRM reliably.",
    problemsSolved: [
      "Missed after-hours sales or support enquiries on voice and chat",
      "Customers in India needing natural Hindi, Marathi or Hinglish switching",
      "Hallucinated generic LLM answers instead of verified company policy",
      "Agents that talk without logging data into your CRM or booking calendar",
    ],
    sectionTitle: "AI agent engineering features",
    features: [
      {
        title: "Multilingual Voice & Text Fluency",
        description: "Natural comprehension across English, Hindi, Marathi and Hinglish code-mixed speech.",
        icon: Mic,
      },
      {
        title: "Grounded RAG Knowledge Bases",
        description: "Answers retrieved from your verified documentation, FAQs, catalogs and SOPs.",
        icon: Database,
      },
      {
        title: "Tool Calling & CRM Actions",
        description: "Agents create lead records, book slots and trigger webhooks when conditions are met.",
        icon: Bot,
      },
      {
        title: "Human Handoff Guardrails",
        description: "Clear escalation paths to human staff whenever edge cases or sensitive requests arise.",
        icon: Lock,
      },
      {
        title: "Lead Qualification & Intake",
        description: "Collect structured caller/chat requirements before routing to your sales engineer or counsellor.",
        icon: TrendingUp,
      },
      {
        title: "Prompt & Cost Observability",
        description: "Evaluation sets, latency monitoring and clean fallback behaviour in production.",
        icon: Gauge,
      },
    ],
    techStack: ["Python", "TypeScript", "OpenAI / Gemini APIs", "RAG Vector Stores", "Voice APIs", "Webhooks"],
    industries: [
      "Customer Support Teams",
      "Real Estate Enquiries",
      "Education & Admissions",
      "Healthcare Appointments",
      "Retail & D2C",
    ],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "How do you prevent AI agents from inventing wrong information?",
        answer:
          "We ground responses in indexed company documents via Retrieval-Augmented Generation (RAG), apply strict output schemas, and configure confidence thresholds that escalate uncertain cases to human staff.",
      },
      {
        question: "Can AI agents hand leads directly into WhatsApp or our CRM?",
        answer:
          "Yes — tool execution and webhook actions let the agent push qualified transcripts and structured fields straight into your CRM or notification channel.",
      },
    ],
    relatedServices: [
      { label: "AI Chatbots", path: "/services/ai-chatbots" },
      { label: "CRM Automation", path: "/services/crm-automation" },
      { label: "Explore AI Agents Showcase", path: "/agents" },
      { label: "AI Solutions Overview", path: "/solutions/ai" },
    ],
    ctaTitle: "Deploy an AI agent grounded in your real business rules",
    ctaDescription:
      "Share your conversation volume, languages and CRM tools — we will design a safe pilot scope.",
    ctaButtonText: "Design an AI Agent",
  },

  "ai-chatbots": {
    path: "/services/ai-chatbots",
    serviceType: "AI Chatbot Development",
    eyebrow: "Conversational UI",
    title: "AI Chatbots for Website & WhatsApp",
    description:
      "24/7 website and WhatsApp chatbots that answer prospect questions accurately, capture intent and route qualified conversations to your team.",
    overviewHeading: "Instant helpful answers on the channels your customers already use",
    overviewBody:
      "Prospects rarely wait hours for a contact form reply. Our custom AI chatbots engage visitors immediately on your site or WhatsApp, walk them through services or eligibility criteria, and deliver crisp summaries to your team.",
    problemsSolved: [
      "Visitors bouncing off pricing or service pages due to unanswered questions",
      "Support teams repeatedly typing the same FAQ answers on WhatsApp",
      "Unstructured enquiries missing phone, budget or goal context",
      "Delayed first response during weekends and evenings",
    ],
    sectionTitle: "Chatbot capabilities",
    features: [
      {
        title: "Website & WhatsApp Deployment",
        description: "Embed lightweight chat widgets or connect automated WhatsApp Business responders.",
        icon: MessageSquare,
      },
      {
        title: "Structured Lead Intake",
        description: "Collect service type, timeline and contact preference naturally inside chat.",
        icon: Workflow,
      },
      {
        title: "Knowledge-Base Grounding",
        description: "Answers anchored to your real service pages, PDFs and approved guidelines.",
        icon: Database,
      },
      {
        title: "Instant Team Handoff",
        description: "Deliver transcript summaries cleanly to email, Slack or CRM queues.",
        icon: Zap,
      },
      {
        title: "Appointment Scheduling Hooks",
        description: "Guide qualified prospects directly to consultation booking steps.",
        icon: Bot,
      },
      {
        title: "Privacy-Conscious Design",
        description: "Clear disclosures and minimal PII retention in chat analytics.",
        icon: Lock,
      },
    ],
    techStack: ["TypeScript", "WhatsApp Cloud API", "RAG Search", "Node.js", "Webhooks"],
    industries: [
      "Consultancies & Agencies",
      "Overseas Education Teams",
      "E-commerce Storefronts",
      "Clinics & Gyms",
      "SaaS Startups",
    ],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "What is the difference between an AI Chatbot and an AI Agent?",
        answer:
          "An AI Chatbot focuses primarily on conversational Q&A and structured lead intake on web or WhatsApp chat. An AI Agent goes further with multi-step reasoning, voice interaction and autonomous tool execution across CRM/ERP workflows.",
      },
      {
        question: "Can our team take over a live WhatsApp chat anytime?",
        answer:
          "Yes — we configure escalation triggers and operator handoff rules so human staff can step in seamlessly.",
      },
    ],
    relatedServices: [
      { label: "AI Agents & Voicebots", path: "/services/ai-agents" },
      { label: "CRM Automation", path: "/services/crm-automation" },
      { label: "AI Prompt Templates Library", path: "/ai-agents-library" },
    ],
    ctaTitle: "Turn website and WhatsApp chats into structured enquiries",
    ctaDescription:
      "Tell us the common questions your prospects ask and we will scope a grounded chatbot.",
    ctaButtonText: "Request Chatbot Demo",
  },

  "business-automation": {
    path: "/services/business-automation",
    serviceType: "Business Process Automation",
    eyebrow: "Operations Efficiency",
    title: "Business Process Automation",
    description:
      "Connect forms, approvals, billing, alerts and reporting pipelines so repetitive manual operations run accurately in the background.",
    overviewHeading: "Eliminate manual copy-pasting across departments",
    overviewBody:
      "Growing teams lose hours every day copying enquiry details from emails to spreadsheets, chasing payment reminders and compiling weekly reports. DieVekter Tech maps your repeatable operations and builds fault-tolerant automation workflows with audit logs.",
    problemsSolved: [
      "Manual data entry across web forms, Google Sheets, billing software and chat apps",
      "Human follow-up gaps when enquiry volume spikes",
      "Inconsistent invoice, receipt or onboarding document generation",
      "Zero visibility when background sync scripts fail silently",
    ],
    sectionTitle: "Process automation capabilities",
    features: [
      {
        title: "Cross-System Workflow Orchestration",
        description: "Trigger downstream updates reliably across email, WhatsApp, spreadsheets and databases.",
        icon: Workflow,
      },
      {
        title: "Automated Notifications & Reminders",
        description: "Send timely confirmations, onboarding checklists and internal alerts automatically.",
        icon: Zap,
      },
      {
        title: "Document & Report Automation",
        description: "Generate structured quotes, weekly digests and structured PDF summaries.",
        icon: RefreshCw,
      },
      {
        title: "Error Retries & Alerting",
        description: "Resilient queues and failure alerts so missed webhooks never lose customer data.",
        icon: Server,
      },
      {
        title: "CRM & Billing Bridges",
        description: "Sync order statuses, client records and renewal reminders cleanly.",
        icon: Link2,
      },
      {
        title: "Operational Dashboards",
        description: "Clear oversight of pipeline stages, SLA adherence and bottleneck areas.",
        icon: Gauge,
      },
    ],
    techStack: ["Node.js", "Python", "REST Webhooks", "PostgreSQL", "Cron Workers", "WhatsApp API"],
    industries: [
      "Professional Services",
      "Education Counselling",
      "Retail & Distribution",
      "Real Estate",
      "Agencies",
    ],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Do we need to replace our existing tools to automate workflows?",
        answer:
          "Usually no. We connect your existing spreadsheets, CRMs, email accounts and website forms through custom APIs and webhook workers so your team keeps familiar tools without manual data copying.",
      },
      {
        question: "How do you handle reliability if a third-party service is temporarily down?",
        answer:
          "We design idempotent jobs with retry backoff, validation checks and operator error notifications.",
      },
    ],
    relatedServices: [
      { label: "CRM Automation", path: "/services/crm-automation" },
      { label: "API Integration", path: "/services/api-integration" },
      { label: "Automation Solutions", path: "/solutions/automation" },
    ],
    ctaTitle: "Save hours every week by automating repetitive busywork",
    ctaDescription:
      "Show us your slowest daily workflow — we will identify what can be safely automated.",
    ctaButtonText: "Audit Your Workflow",
  },

  "crm-automation": {
    path: "/services/crm-automation",
    serviceType: "CRM and Workflow Automation",
    eyebrow: "Sales & Pipelines",
    title: "CRM & Workflow Automation",
    description:
      "Capture enquiries cleanly, route leads by vertical, trigger instant WhatsApp & email follow-ups, and track every stage without spreadsheet chaos.",
    overviewHeading: "Never lose a warm lead in an unread inbox or scattered WhatsApp thread",
    overviewBody:
      "Whether handling software development briefs or Study Abroad counselling enquiries, speed and structure decide conversion. We build automated CRM pipelines tailored to your sales or student counselling stages.",
    problemsSolved: [
      "Leads arriving across forms, Instagram DMs, calls and WhatsApp without central tracking",
      "Forgot follow-ups after an initial discovery call or counselling session",
      "Mixed pipelines combining unrelated service enquiries in one inbox",
      "Inability to measure which channel generates qualified enquiries",
    ],
    sectionTitle: "CRM automation deliverables",
    features: [
      {
        title: "Multi-Vertical Lead Routing",
        description: "Tag and assign incoming enquiries automatically by service line or region.",
        icon: Layers,
      },
      {
        title: "Instant WhatsApp & Email Acknowledgements",
        description: "Respond within seconds with helpful next steps or checklist links.",
        icon: MessageSquare,
      },
      {
        title: "Automated Follow-Up Sequences",
        description: "Scheduled reminders and task triggers aligned to each pipeline stage.",
        icon: RefreshCw,
      },
      {
        title: "Attribution & Source Tracking",
        description: "See which landing pages, guides and channels drive qualified enquiries without storing invasive tracking.",
        icon: TrendingUp,
      },
      {
        title: "Calendar & Consultation Sync",
        description: "Pair lead qualification cleanly with consultation slot booking.",
        icon: Zap,
      },
      {
        title: "Clean Access Controls",
        description: "Role-scoped lead views for sales teams, engineers and education counsellors.",
        icon: Lock,
      },
    ],
    techStack: ["CRM APIs", "WhatsApp Cloud API", "Node.js", "PostgreSQL", "GA4 Events", "Webhooks"],
    industries: [
      "Consultancies & Agencies",
      "Overseas Education Teams",
      "Real Estate Teams",
      "B2B Software Providers",
    ],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Can CRM automation separate our Technology leads from Study Abroad student enquiries?",
        answer:
          "Yes — pipeline branching based on form intent and landing page tags routes each enquiry to the right team with separate follow-up checklists.",
      },
    ],
    relatedServices: [
      { label: "Business Process Automation", path: "/services/business-automation" },
      { label: "AI Chatbots", path: "/services/ai-chatbots" },
      { label: "API Integration", path: "/services/api-integration" },
    ],
    ctaTitle: "Organize every enquiry from first click to closed engagement",
    ctaDescription:
      "Share your current lead sources and CRM setup to get a clean pipeline automation plan.",
    ctaButtonText: "Automate Your CRM",
  },

  "api-integration": {
    path: "/services/api-integration",
    serviceType: "API Development and Integrations",
    eyebrow: "Connected Systems",
    title: "API Development & Integrations",
    description:
      "Custom REST APIs, webhooks and reliable third-party integrations connecting payments, CRMs, WhatsApp, analytics and internal databases.",
    overviewHeading: "Clean API bridges that keep critical tools speaking the same language",
    overviewBody:
      "Modern products rarely live in isolation. We architect documented REST APIs, webhook consumers and secure data pipelines with authentication, rate limiting and structured error handling so your systems scale reliably.",
    problemsSolved: [
      "Disconnected payment gateways, store fronts and accounting ledgers",
      "Unreliable manual CSV imports between platforms",
      "Undocumented legacy endpoints breaking client apps on minor updates",
      "Security exposure from poorly validated webhook payloads",
    ],
    sectionTitle: "API engineering capabilities",
    features: [
      {
        title: "Custom REST & JSON APIs",
        description: "Well-structured endpoints with schema validation, versioning and clear OpenAPI documentation.",
        icon: Code,
      },
      {
        title: "Third-Party Integrations",
        description: "Razorpay, Stripe, WhatsApp Business, CRM platforms, Google Workspace and email relays.",
        icon: Webhook,
      },
      {
        title: "OAuth, Tokens & Webhook Security",
        description: "Signature verification, role permissions, TLS encryption and secret management.",
        icon: Lock,
      },
      {
        title: "Rate Limiting & Caching",
        description: "Predictable latency and protection against traffic spikes or upstream throttling.",
        icon: Gauge,
      },
      {
        title: "Legacy System Wrappers",
        description: "Expose older internal databases safely to modern React and mobile frontends.",
        icon: Database,
      },
      {
        title: "Observability & Health Checks",
        description: "Structured request logs and failure alerting for rapid debugging.",
        icon: Server,
      },
    ],
    techStack: ["Node.js", "Python", "TypeScript", "PostgreSQL", "OpenAPI", "OAuth 2.0"],
    industries: ["SaaS Products", "E-commerce Retail", "EdTech Portals", "Finance & Ops"],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Can you integrate third-party Indian gateways like Razorpay alongside global tools?",
        answer:
          "Yes, we regularly connect Razorpay, UPI flows, WhatsApp Cloud API, email services, CRM endpoints and internal PostgreSQL databases.",
      },
    ],
    relatedServices: [
      { label: "Cloud & Backend", path: "/services/cloud-solutions" },
      { label: "Business Automation", path: "/services/business-automation" },
      { label: "Custom Software", path: "/services/custom-software-development" },
    ],
    ctaTitle: "Need your apps, payments and databases synced reliably?",
    ctaDescription:
      "Send us the systems you need connected and we will inspect their APIs and design the integration.",
    ctaButtonText: "Plan API Integration",
  },

  "cloud-solutions": {
    path: "/services/cloud-solutions",
    serviceType: "Cloud and Backend Development",
    eyebrow: "Cloud & Infrastructure",
    title: "Cloud & Backend Development",
    description:
      "Scalable backend architectures, managed database setups, HTTPS/SSL security, CI/CD pipelines and automated backups for production reliability.",
    overviewHeading: "Dependable infrastructure and backend services built for uptime",
    overviewBody:
      "Shipping code is half the journey — keeping applications fast, backed up, SSL-secured and cleanly deployable without downtime matters just as much. We configure resilient cloud deployments tailored to your traffic and budget.",
    problemsSolved: [
      "Fragile manual FTP uploads causing broken deployments",
      "Slow uncached server responses and unoptimized database queries",
      "Missing automated backups or expired SSL certificates",
      "Runaway cloud bills from oversized, unmonitored infrastructure",
    ],
    sectionTitle: "Cloud & backend capabilities",
    features: [
      {
        title: "Scalable Backend Services",
        description: "Clean Node.js and Python services backed by indexed PostgreSQL schemas.",
        icon: Server,
      },
      {
        title: "Cloud & Edge Hosting Setup",
        description: "Configured deployments on Vercel, AWS, Cloudflare and managed VPS environments.",
        icon: Cloud,
      },
      {
        title: "CI/CD Automated Deployments",
        description: "Automated lint, typecheck and build pipelines before traffic shifts live.",
        icon: RefreshCw,
      },
      {
        title: "Automated Backups & Recovery",
        description: "Scheduled database snapshots and verified restore procedures.",
        icon: Database,
      },
      {
        title: "Security Headers & SSL",
        description: "HTTPS enforcement, CORS controls, least-privilege IAM and secret hygiene.",
        icon: Lock,
      },
      {
        title: "CDN & Core Web Vitals",
        description: "Gzip/Brotli asset compression, cache policies and static prerendering support.",
        icon: Gauge,
      },
    ],
    techStack: ["Node.js", "PostgreSQL", "Docker", "Vercel", "AWS", "Cloudflare"],
    industries: ["High-Growth Startups", "Multi-Site Agencies", "Retail SaaS", "EdTech"],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Can you migrate an existing slow site or app onto clean cloud hosting?",
        answer:
          "Yes — we audit DNS, SSL, database backups and build pipelines before executing zero-downtime cutovers.",
      },
    ],
    relatedServices: [
      { label: "API Integration", path: "/services/api-integration" },
      { label: "Website Development", path: "/services/website-development" },
      { label: "Custom Software", path: "/services/custom-software-development" },
    ],
    ctaTitle: "Keep your apps fast, backed up and effortless to deploy",
    ctaDescription:
      "Share your current hosting or backend pain points and we will propose a clean setup.",
    ctaButtonText: "Discuss Cloud Setup",
  },

  "ui-ux-design": {
    path: "/services/ui-ux-design",
    serviceType: "UI/UX Design Services",
    eyebrow: "Product Design",
    title: "UI/UX & Product Interface Design",
    description:
      "Human-centered wireframes, interactive prototypes and cohesive design systems crafted to simplify complex software and boost conversions.",
    overviewHeading: "Clarity-driven interfaces people enjoy using on desktop and mobile",
    overviewBody:
      "Good UI/UX removes friction before users ever notice a hurdle. Whether designing an editorial agency site, a retail POS terminal or a multi-step student intake flow, we pair crisp typography and generous contrast with clear interaction hierarchy.",
    problemsSolved: [
      "Crowded screens overwhelming first-time visitors",
      "Inconsistent buttons, colors and mobile breakpoints across pages",
      "Low form completion rates caused by confusing multi-step inputs",
      "Designs that look polished in slides but break during engineering handoff",
    ],
    sectionTitle: "UI/UX design deliverables",
    features: [
      {
        title: "Information Architecture & Flows",
        description: "Logical page hierarchy and navigation journeys aligned to user intent.",
        icon: Layers,
      },
      {
        title: "Wireframes & Prototypes",
        description: "Validate user journeys quickly before investing engineering cycles.",
        icon: Palette,
      },
      {
        title: "Component Design Systems",
        description: "Reusable buttons, spacing scales, typography tokens and accessible contrast rules.",
        icon: Sparkles,
      },
      {
        title: "Mobile-First Layouts",
        description: "Designed thoughtfully for compact viewports as well as wide screens.",
        icon: Smartphone,
      },
      {
        title: "Conversion-Focused Landing UX",
        description: "Clear visual hierarchy emphasizing trust signals and primary CTAs.",
        icon: TrendingUp,
      },
      {
        title: "Developer-Ready Handoff",
        description: "Implemented directly in Tailwind CSS & React by our own engineering team if desired.",
        icon: Code,
      },
    ],
    techStack: ["Figma", "Tailwind CSS Tokens", "React UI", "WCAG Accessibility"],
    industries: ["SaaS Products", "E-commerce", "Consultancies", "EdTech"],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Can dieVekter handle both UI/UX design and the frontend code?",
        answer:
          "Yes — our designers and React/TypeScript engineers work side by side so the live product matches the intended craft without translation loss.",
      },
    ],
    relatedServices: [
      { label: "Website Development", path: "/services/website-development" },
      { label: "Mobile App Development", path: "/services/mobile-app-development" },
      { label: "Portfolio", path: "/portfolio" },
    ],
    ctaTitle: "Turn complex workflows into clear, welcoming interfaces",
    ctaDescription:
      "Share your existing product or idea and we will map a cleaner user experience.",
    ctaButtonText: "Start Design Project",
  },

  "seo-optimization": {
    path: "/services/seo-optimization",
    serviceType: "Technical SEO and Search Optimization",
    eyebrow: "Organic Growth",
    title: "Technical SEO & Search Optimization",
    description:
      "Clean site architecture, semantic HTML, Schema.org structured data, Core Web Vitals tuning and intent-led content structure.",
    overviewHeading: "Durable organic visibility built on clean technical foundations",
    overviewBody:
      "Sustainable search growth comes from fast, crawlable pages, accurate metadata, genuine helpful answers and clear topical clusters — never keyword stuffing or brittle hacks.",
    problemsSolved: [
      "Client-side SPAs showing empty HTML to search crawlers",
      "Duplicate titles, missing canonical tags or broken URL redirects",
      "Zero rich structured data for Organization, Services or FAQs",
      "Slow bundle weights hurting Core Web Vitals",
    ],
    sectionTitle: "Technical SEO deliverables",
    features: [
      {
        title: "Crawlability & Static Prerendering",
        description: "Ensure search bots and social scrapers read full titles, copy and links immediately.",
        icon: Globe,
      },
      {
        title: "Schema.org JSON-LD Graph",
        description: "Structured Organization, LocalBusiness, Service, Article, BreadcrumbList and FAQPage entities.",
        icon: Code,
      },
      {
        title: "Core Web Vitals & Speed",
        description: "Bundle splitting, modern image sizing and layout-shift prevention.",
        icon: Gauge,
      },
      {
        title: "Keyword & Topic Architecture",
        description: "One clear search intent per landing page with zero internal cannibalization.",
        icon: Search,
      },
      {
        title: "Local SEO Alignment",
        description: "Accurate city/region signals, NAP consistency and Google Business Profile readiness.",
        icon: TrendingUp,
      },
      {
        title: "Clean Redirects & Sitemaps",
        description: "Automated XML sitemaps, clean robots directives and 301 preservation for legacy paths.",
        icon: Link2,
      },
    ],
    techStack: ["Google Search Console", "Schema.org JSON-LD", "Core Web Vitals", "Static Prerendering"],
    industries: ["B2B Services", "Local Businesses", "Educational Institutions", "E-commerce"],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "Do you guarantee #1 rankings on Google?",
        answer:
          "No ethical SEO partner can guarantee exact search rankings. We implement verified technical best practices, clean architecture and authentic helpful content that maximize your site's ability to earn sustainable organic visibility.",
      },
    ],
    relatedServices: [
      { label: "Website Development", path: "/services/website-development" },
      { label: "Read SEO & Web Journal", path: "/blog/website-development" },
    ],
    ctaTitle: "Fix crawl gaps and unlock sustainable organic traffic",
    ctaDescription:
      "Share your domain for an honest technical SEO audit covering speed, structure and indexing.",
    ctaButtonText: "Request SEO Audit",
  },

  "wordpress-development": {
    path: "/services/wordpress-development",
    serviceType: "WordPress Website Development",
    eyebrow: "CMS Engineering",
    title: "WordPress Website Development",
    description:
      "Lightweight custom WordPress websites, WooCommerce stores and secure editorial publishing workflows.",
    overviewHeading: "Managed WordPress builds without bloated page-builder lag",
    overviewBody:
      "When non-technical editorial teams need autonomous day-to-day publishing, a clean custom-themed WordPress build keeps content updates simple while maintaining speed and security.",
    problemsSolved: [
      "Plugin bloat slowing down page loads and opening security risks",
      "Fragile layouts breaking when editors publish new blog articles",
      "Manual backup and update anxieties",
    ],
    sectionTitle: "WordPress capabilities",
    features: [
      {
        title: "Lightweight Custom Themes",
        description: "Fast, uncluttered templates styled closely to your brand without heavy builder overhead.",
        icon: Palette,
      },
      {
        title: "WooCommerce Storefronts",
        description: "Flexible catalog management paired with Razorpay/Stripe checkout.",
        icon: ShoppingCart,
      },
      {
        title: "Security & Update Hygiene",
        description: "Hardened logins, minimal curated plugins and scheduled cloud backups.",
        icon: Lock,
      },
    ],
    techStack: ["WordPress", "WooCommerce", "PHP", "Clean CSS", "SEO Metadata"],
    industries: ["Publishing & Blogs", "Schools & Trusts", "SMB Storefronts"],
    processSteps: STANDARD_PROCESS,
    faqs: [
      {
        question: "When should we pick WordPress vs a custom React website?",
        answer:
          "Choose WordPress if your internal team publishes high volumes of formatted editorial articles daily using plugins. Choose React/TypeScript for bespoke brand UI, interactive tools or tight SaaS/CRM integrations.",
      },
    ],
    relatedServices: [
      { label: "Custom Website Development", path: "/services/website-development" },
      { label: "E-commerce Development", path: "/services/ecommerce-development" },
    ],
    ctaTitle: "Want a fast, manageable WordPress platform?",
    ctaDescription:
      "Tell us your publishing workflow and required plugins for a clean project plan.",
    ctaButtonText: "Plan WordPress Build",
  },
};
