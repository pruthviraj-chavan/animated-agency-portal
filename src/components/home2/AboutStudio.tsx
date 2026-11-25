import { ArrowUpRight, Bot, Languages, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  withFlyInLeft,
  withFlyInRight,
  withScaleUp,
} from "@/components/home2/ScrollEffects";

const FlyInLeft = withFlyInLeft(motion.div);
const FlyInRight = withFlyInRight(motion.div);
const ScaleUp = withScaleUp(motion.div);

export function AboutStudio() {
  return (
    <section className="dv-ref-about" id="about">
      <div className="dv-ref-about__watermark" aria-hidden="true">dieVekter</div>
      <div className="dv-ref-wrap dv-ref-about__grid">
        <div className="dv-ref-about__copy">
          <span className="dv-ref-kicker">About the company</span>
          <h2>Technology, designed around the work.</h2>
          <p>
            dieVekter is an Indian technology company building AI agents, software, and automation
            for the way businesses actually operate.
          </p>
          <p>
            We connect conversations, knowledge, and business tools into systems that can move a
            task from first question to useful outcome.
          </p>
          <Link className="dv-ref-text-link" to="/about">
            Get to know dieVekter <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="dv-ref-about__visual" aria-label="Illustration of connected dieVekter technology systems">
          <ScaleUp className="dv-ref-about__glow" aria-hidden="true" />
          <FlyInLeft className="dv-ref-about__voice">
            <span className="dv-ref-about__micro-label">01 / Multilingual AI</span>
            <div className="dv-ref-about__voice-row"><Bot aria-hidden="true" /><span>Namaste, how can I help?</span></div>
            <div className="dv-ref-about__wave" aria-hidden="true">{Array.from({ length: 22 }, (_, i) => <i key={i} />)}</div>
            <span className="dv-ref-about__voice-caption"><Languages aria-hidden="true" /> Hindi · English · Hinglish</span>
          </FlyInLeft>

          <FlyInRight className="dv-ref-about__workflow">
            <span className="dv-ref-about__micro-label">02 / System in motion</span>
            <div className="dv-ref-about__flow-title">From intent to action</div>
            <div className="dv-ref-about__flow-steps">
              <span><i /> Understand</span><b /><span><i /> Decide</span><b /><span><i /> Act</span>
            </div>
            <div className="dv-ref-about__flow-note"><Workflow aria-hidden="true" /> Workflow connected</div>
          </FlyInRight>

          <div className="dv-ref-about__orbit-note">
            <span className="dv-ref-about__orbit-icon"><Workflow aria-hidden="true" /></span>
            <span><strong>Built to work together</strong><small>AI · Software · Automation</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}