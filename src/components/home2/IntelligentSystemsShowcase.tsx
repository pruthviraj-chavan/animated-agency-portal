import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  Database,
  Languages,
  MessageSquareText,
  PhoneCall,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/dv/primitives";

const capabilities = [
  { label: "Voice AI", detail: "Natural calls in Hindi, Marathi and English", icon: PhoneCall },
  { label: "AI Agents", detail: "Agents that reason, decide and complete work", icon: Bot },
  { label: "Hinglish", detail: "Context-aware multilingual conversations", icon: Languages },
  { label: "Automation", detail: "Reliable workflows across your business", icon: Workflow },
  { label: "Knowledge", detail: "Grounded answers from your company data", icon: Database },
  { label: "Integrations", detail: "Connected to CRM, ERP and support tools", icon: PlugZap },
  { label: "Intelligence", detail: "Models selected for every business task", icon: BrainCircuit },
  { label: "Messaging", detail: "Consistent conversations across channels", icon: MessageSquareText },
  { label: "Security", detail: "Guardrails, permissions and audit trails", icon: ShieldCheck },
  { label: "Fast action", detail: "From customer intent to completed outcome", icon: Zap },
];

const activity = [
  { time: "10:42", text: "Customer asked about enterprise onboarding", tone: "cyan" },
  { time: "10:42", text: "Intent detected: qualified product enquiry", tone: "violet" },
  { time: "10:43", text: "CRM lead created and sales owner assigned", tone: "green" },
];

export function IntelligentSystemsShowcase() {
  return (
    <section className="dv-systems" aria-labelledby="systems-title">
      <div className="dv-systems__grid" aria-hidden="true" />
      <div className="dv-systems__inner">
        <Reveal className="dv-systems__copy">
          <div className="dv-systems__badge">
            <span><Sparkles aria-hidden="true" /></span>
            AI agents engineered for real business work
          </div>
          <h2 id="systems-title">
            From conversation to <span>business action.</span>
          </h2>
          <p>
            dieVekter builds multilingual AI agents and intelligent software that understand customers,
            connect with your tools, and complete workflows—not just answer questions.
          </p>
          <div className="dv-systems__actions">
            <Button asChild className="dv-systems__primary">
              <Link to="/solutions/ai">Explore AI solutions <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild variant="outline" className="dv-systems__secondary">
              <Link to="/contact">Discuss your system</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal className="dv-systems__scene" delay={0.12} y={30}>
          <div className="dv-systems__orbit" aria-hidden="true">
            <div className="dv-systems__ring">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    className="dv-systems__orbit-card"
                    key={item.label}
                    style={{ "--card-index": index } as React.CSSProperties}
                  >
                    <Icon />
                    <strong>{item.label}</strong>
                    <small>{item.detail}</small>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="dv-systems__console">
            <div className="dv-systems__console-bar">
              <span className="dv-systems__dots"><i /><i /><i /></span>
              <span className="dv-systems__console-title">dieVekter Agent Operations</span>
              <span className="dv-systems__live"><i /> Live</span>
            </div>

            <div className="dv-systems__console-body">
              <aside className="dv-systems__sidebar" aria-label="Agent channels">
                <span className="is-active"><Bot /> Agent overview</span>
                <span><PhoneCall /> Voice conversations</span>
                <span><Workflow /> Automations</span>
                <span><Database /> Knowledge</span>
              </aside>

              <div className="dv-systems__workspace">
                <header>
                  <div>
                    <p>Customer operations</p>
                    <h3>Multilingual sales agent</h3>
                  </div>
                  <span className="dv-systems__status"><i /> Running</span>
                </header>

                <div className="dv-systems__metrics">
                  <article><small>Conversations</small><strong>1,284</strong><span>+18.6%</span></article>
                  <article><small>Qualified leads</small><strong>327</strong><span>25.5% rate</span></article>
                  <article><small>Tasks completed</small><strong>846</strong><span>98.2% success</span></article>
                </div>

                <div className="dv-systems__flow">
                  <div className="dv-systems__flow-head">
                    <div><MessageSquareText /><span><strong>Live customer intent</strong><small>Hindi + English detected</small></span></div>
                    <span>Just now</span>
                  </div>
                  <blockquote>“Mujhe team ke liye AI support setup karna hai. Can someone call tomorrow?”</blockquote>
                  <div className="dv-systems__steps">
                    <span><Check /> Understood</span><b />
                    <span><Check /> Qualified</span><b />
                    <span><Check /> CRM updated</span><b />
                    <span><Check /> Meeting queued</span>
                  </div>
                </div>

                <div className="dv-systems__activity">
                  <h4>Agent activity</h4>
                  {activity.map((item) => (
                    <div key={item.text}>
                      <i className={`is-${item.tone}`} />
                      <span>{item.text}</span>
                      <time>{item.time}</time>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
