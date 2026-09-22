import { FormEvent, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mic, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260831_232706_43757be4-2250-4f09-8cd7-23aebbf147ad.mp4";
const POSTER_URL =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_223518_f11bfa03-4e65-47e1-a4a7-30e42a7a8c2f.png&w=1920&q=85";

export function Hero() {
  const navigate = useNavigate();
  const [brief, setBrief] = useState("");

  const submitBrief = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = brief.trim() ? `?brief=${encodeURIComponent(brief.trim())}` : "";
    navigate(`/contact${query}`);
  };

  return (
    <section className="dv-jungle-hero" aria-label="dieVektor intelligent technology">
      <div className="dv-jungle-hero__bg" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto" poster={POSTER_URL}>
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      <div className="dv-jungle-hero__inner">
        <div className="dv-jungle-stage">
          <div className="dv-jungle-badge dv-jungle-rise" style={{ "--i": 8 } as CSSProperties}>
            <span className="dv-jungle-badge__tag">Now</span>
            dieVektor AI Agents are here
          </div>

          <h1 className="dv-jungle-headline dv-jungle-rise" style={{ "--i": 10 } as CSSProperties}>
            Build intelligent systems.<span className="dv-jungle-brk"><br /></span> Not just software.
          </h1>

          <p className="dv-jungle-sub dv-jungle-rise" style={{ "--i": 12 } as CSSProperties}>
            dieVektor builds AI agents that reason, converse, and act across your business.<span className="dv-jungle-brk"><br /></span>{" "}
            Combine multilingual AI, product engineering, and automation to move from idea to impact.
          </p>

          <form
            className="dv-jungle-prompt dv-jungle-rise"
            style={{ "--i": 14 } as CSSProperties}
            onSubmit={submitBrief}
          >
            <label className="sr-only" htmlFor="dv-hero-brief">Tell dieVektor what you want to build</label>
            <textarea
              id="dv-hero-brief"
              className="dv-jungle-prompt__input"
              value={brief}
              onChange={(event) => setBrief(event.target.value)}
              placeholder="Describe the intelligent system you want to build..."
            />
            <div className="dv-jungle-prompt__bar">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="dv-jungle-icon-btn dv-jungle-rise"
                style={{ "--i": 16 } as CSSProperties}
                aria-label="Add attachment"
              >
                <Plus aria-hidden="true" />
              </Button>
              <div className="dv-jungle-prompt__right">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="dv-jungle-icon-btn dv-jungle-icon-btn--bare dv-jungle-rise"
                  style={{ "--i": 17 } as CSSProperties}
                  aria-label="Use microphone"
                >
                  <Mic aria-hidden="true" />
                </Button>
                <Button
                  type="submit"
                  size="icon"
                  className="dv-jungle-icon-btn dv-jungle-icon-btn--send dv-jungle-rise"
                  style={{ "--i": 18 } as CSSProperties}
                  aria-label="Start your project"
                >
                  <ArrowRight aria-hidden="true" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}