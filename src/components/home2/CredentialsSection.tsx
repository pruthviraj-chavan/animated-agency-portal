import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Building2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/dv/primitives";

const trustItems = [
  "Government Registered Enterprise",
  "Micro Enterprise",
  "D-U-N-S Identified",
  "Technology Services",
];

const dots = [
  { top: "12%", left: "8%", delay: "0s" },
  { top: "30%", left: "22%", delay: "1.2s" },
  { top: "16%", left: "58%", delay: "2s" },
  { top: "64%", left: "12%", delay: "0.6s" },
  { top: "72%", left: "48%", delay: "1.8s" },
  { top: "26%", left: "84%", delay: "2.6s" },
  { top: "80%", left: "78%", delay: "0.3s" },
  { top: "52%", left: "70%", delay: "1.5s" },
];

export function CredentialsSection() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const blobAX = useTransform(mx, (v) => v * 26);
  const blobAY = useTransform(my, (v) => v * 20);
  const blobBX = useTransform(mx, (v) => v * -18);
  const blobBY = useTransform(my, (v) => v * -14);
  const certX = useTransform(mx, (v) => v * 14);
  const certY = useTransform(my, (v) => v * 10);

  return (
    <section
      id="credentials"
      className="dv-cred"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <div aria-hidden className="dv-cred__bg">
        <motion.div className="dv-cred__blob dv-cred__blob--a" style={{ x: blobAX, y: blobAY }} />
        <motion.div className="dv-cred__blob dv-cred__blob--b" style={{ x: blobBX, y: blobBY }} />
        <motion.div className="dv-cred__blob dv-cred__blob--c" style={{ x: blobBX, y: blobBY }} />
        {dots.map((d, i) => (
          <span key={i} className="dv-cred__dot" style={{ top: d.top, left: d.left, animationDelay: d.delay }} />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="dv-cred__eyebrow">
            <Building2 className="h-4 w-4" aria-hidden="true" /> Our business identity
          </p>
          <h2>
            Registered. Recognized. <span className="dv-cred__accent">Ready to Build.</span>
          </h2>
          <p className="dv-cred__sub">
            DIEVEKTER is a registered Indian Micro Enterprise with verified business credentials and
            technology service registrations.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05} className="h-full">
            <article className="dv-cred__card">
              <div className="flex items-center justify-between gap-4">
                <span className="dv-cred__tag">01 · Udyam Registration</span>
                <span className="dv-cred__seal">
                  <BadgeCheck aria-hidden="true" />
                </span>
              </div>
              <p className="dv-cred__label">Udyam Registration Number</p>
              <p className="dv-cred__num">UDYAM-MH-15-0320983</p>
              <dl className="dv-cred__fields">
                <div>
                  <dt>Enterprise</dt>
                  <dd>DIEVEKTER</dd>
                </div>
                <div>
                  <dt>Enterprise Type</dt>
                  <dd>Micro</dd>
                </div>
                <div>
                  <dt>Classification Year</dt>
                  <dd>2026–27</dd>
                </div>
                <div>
                  <dt>Registration Date</dt>
                  <dd>05/10/2026</dd>
                </div>
              </dl>
              <a
                href="https://udyamregistration.gov.in/Udyam_Verify.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="dv-cred__btn dv-cred__btn--solid"
              >
                View Udyam Certificate <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <article className="dv-cred__card">
              <div className="flex items-center justify-between gap-4">
                <span className="dv-cred__tag">02 · D-U-N-S Identifier</span>
                <span className="dv-cred__seal dv-cred__seal--blue">
                  <BadgeCheck aria-hidden="true" />
                </span>
              </div>
              <p className="dv-cred__label">D-U-N-S Number</p>
              <p className="dv-cred__num">312163123</p>
              <dl className="dv-cred__fields">
                <div>
                  <dt>Company</dt>
                  <dd>DIEVEKTER</dd>
                </div>
                <div>
                  <dt>Registry</dt>
                  <dd>Dun & Bradstreet</dd>
                </div>
                <div className="dv-cred__fields--wide">
                  <dt>Identifier</dt>
                  <dd>Dun & Bradstreet business identifier</dd>
                </div>
              </dl>
              <a
                href="https://www.dnb.com/duns-number/lookup.html"
                target="_blank"
                rel="noopener noreferrer"
                className="dv-cred__btn"
              >
                View D-U-N-S Details <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <ul className="dv-cred__strip">
            {trustItems.map((t) => (
              <li key={t}>
                <ShieldCheck aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <motion.div aria-hidden className="dv-cred__cert" style={{ x: certX, y: certY }}>
        <div className="dv-cred__cert-panel">
          <span className="dv-cred__cert-emblem">
            <BadgeCheck />
          </span>
          <p>
            UDYAM
            <br />
            REGISTRATION
            <br />
            CERTIFICATE
          </p>
          <span className="dv-cred__cert-bar" />
          <span className="dv-cred__cert-bar dv-cred__cert-bar--short" />
        </div>
      </motion.div>
    </section>
  );
}
