import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const groups = [
  {
    title: "Solutions",
    links: [
      { name: "AI Agents", path: "/agents" },
      { name: "AI", path: "/solutions/ai" },
      { name: "Software", path: "/solutions/software" },
      { name: "Automation", path: "/solutions/automation" },
      { name: "All Solutions", path: "/solutions" },
    ],
  },
  {
    title: "Work",
    links: [
      { name: "Products", path: "/products" },
      { name: "Projects", path: "/portfolio" },
      { name: "Development Kit", path: "/development-kit" },
      { name: "AI Agents Library", path: "/ai-agents-library" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/jobs" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/dievekter", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-dv-line bg-dv-bg">
      <div className="dv-hairline absolute inset-x-0 top-0 h-px" aria-hidden />
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-dv-line bg-dv-elevated">
                <span className="h-2.5 w-2.5 rounded-[3px] bg-dv-accent" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-dv-fg">
                die<span className="dv-text-gradient">Vektor</span>
              </span>
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-dv-dim">
              AI • Software • Automation
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-dv-muted">
              A technology company building AI agents, software and automation systems for
              businesses in India and beyond.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dv-line bg-dv-surface text-dv-muted hover:text-dv-accent hover:border-dv-accent/40 transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-dv-fg">
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        to={l.path}
                        className="text-sm text-dv-muted hover:text-dv-fg transition-colors"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-dv-fg">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-dv-muted">
                <li>
                  <a
                    href="mailto:team.dievekter@gmail.com"
                    className="flex items-start gap-2 hover:text-dv-fg break-all"
                  >
                    <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-dv-dim" />
                    team.dievekter@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919404895667" className="flex items-center gap-2 hover:text-dv-fg">
                    <Phone className="h-4 w-4 flex-shrink-0 text-dv-dim" />
                    +91 94048 95667
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-dv-dim" />
                  Maharashtra, India
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-dv-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-dv-dim">
            © {new Date().getFullYear()} dieVektor. All rights reserved.
          </p>
          <p className="text-xs text-dv-dim">Built in India · Engineered for the real world.</p>
        </div>
      </div>
    </footer>
  );
}
