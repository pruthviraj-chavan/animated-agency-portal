import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { name: "AI Agents", path: "/agents" },
  { name: "Solutions", path: "/solutions" },
  { name: "Technology", path: "/#technology" },
  { name: "Projects", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const MOBILE_EXTRA = [
  { name: "AI Solutions", path: "/solutions/ai" },
  { name: "Software", path: "/solutions/software" },
  { name: "Automation", path: "/solutions/automation" },
  { name: "Products", path: "/products" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The homepage hero is a bright video, so the fixed nav needs ink-colored
  // text while it sits transparently on top of it.
  const onLightHero = location.pathname === "/" && !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-dv-bg/70 backdrop-blur-xl border-b border-dv-line py-3"
            : "bg-transparent py-4 sm:py-5",
        )}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 min-w-0">
            <span
              className={cn(
                "relative flex h-9 w-9 items-center justify-center rounded-lg border",
                onLightHero
                  ? "border-[hsl(var(--dv-jungle-ink)/0.12)] bg-[hsl(var(--dv-jungle-paper)/0.9)] backdrop-blur-sm shadow-sm"
                  : "border-dv-line bg-dv-elevated",
              )}
            >
              <img
                src="/dievektor_logo.png"
                alt="dieVekter logo"
                className="h-6 w-6 object-contain"
                loading="eager"
              />
            </span>
            <span
              className={cn(
                "text-lg font-semibold tracking-tight",
                onLightHero ? "text-[hsl(var(--dv-jungle-ink))]" : "text-dv-fg",
              )}
            >
              die<span className="dv-text-gradient">Vekter</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((l) => (
              <Link
                key={l.name}
                to={l.path}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg",
                  onLightHero
                    ? "text-[hsl(var(--dv-jungle-ink)/0.72)] hover:text-[hsl(var(--dv-jungle-ink))] hover:bg-[hsl(var(--dv-jungle-ink)/0.07)]"
                    : "text-dv-muted hover:text-dv-fg hover:bg-dv-fg/[0.04]",
                )}
              >
                {l.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className={cn(
                "hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-px",
                onLightHero
                  ? "bg-[hsl(var(--dv-jungle-ink))] text-dv-fg hover:opacity-90"
                  : "bg-dv-fg px-4 py-2 text-dv-bg hover:opacity-90",
              )}
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border",
                onLightHero
                  ? "border-[hsl(var(--dv-jungle-ink)/0.15)] bg-[hsl(var(--dv-jungle-paper)/0.85)] text-[hsl(var(--dv-jungle-ink))] backdrop-blur-sm"
                  : "border-dv-line bg-dv-surface text-dv-fg",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-dv-bg/97 backdrop-blur-2xl"
          >
            <div className="dv-grid absolute inset-0 opacity-30" aria-hidden />
            <div className="relative h-full overflow-y-auto px-6 pt-24 pb-12">
              <nav className="flex flex-col">
                {NAV.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                  >
                    <Link
                      to={l.path}
                      className="block border-b border-dv-line py-4 text-2xl font-semibold tracking-tight text-dv-fg"
                    >
                      {l.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3"
              >
                {MOBILE_EXTRA.map((l) => (
                  <Link key={l.name} to={l.path} className="py-2 text-sm text-dv-muted">
                    {l.name}
                  </Link>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-dv-fg px-6 py-4 text-base font-semibold text-dv-bg"
                >
                  Start a Project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
