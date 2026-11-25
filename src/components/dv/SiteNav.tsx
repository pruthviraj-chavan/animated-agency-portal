import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { name: "Home", path: "/", match: (p: string) => p === "/" },
  { name: "About", path: "/about", match: (p: string) => p === "/about" },
  {
    name: "Services",
    path: "/services",
    match: (p: string) => p.startsWith("/services") || p.startsWith("/solutions") || p === "/agents",
  },
  {
    name: "Study Abroad",
    path: "/study-abroad",
    match: (p: string) => p.startsWith("/study-abroad"),
  },
  {
    name: "Projects",
    path: "/projects",
    match: (p: string) => p === "/projects" || p === "/portfolio" || p === "/products",
  },
  { name: "Blog", path: "/blog", match: (p: string) => p.startsWith("/blog") },
  { name: "Contact", path: "/contact", match: (p: string) => p === "/contact" },
];

const MOBILE_EXTRA = [
  { name: "Study in Germany", path: "/study-abroad/germany" },
  { name: "AI Agents", path: "/services/ai-agents" },
  { name: "Website Dev", path: "/services/website-development" },
  { name: "Solutions", path: "/solutions" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Products", path: "/products" },
  { name: "Internships", path: "/internship" },
  { name: "Terms & Legal", path: "/terms" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-stone-200/80 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-4 sm:py-5",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 min-w-0 group shrink-0">
            <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-[#FFFDFB] p-0.5 sm:p-1 ring-1 ring-[#FBE0D4] shadow-[0_2px_10px_rgba(255,84,34,0.08)] transition-transform group-hover:scale-105">
              <img
                src="/dievektor_logo.png"
                alt="dieVekter logo"
                className="h-full w-full object-contain"
                loading="eager"
              />
            </span>
            <span className="text-[17px] sm:text-[19px] font-bold tracking-tight text-[#141210]">
              die<span className="text-[#FF5422]">Vekter</span>
            </span>
          </Link>

          {/* Center pill nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-0.5 rounded-full border border-stone-200/90 bg-white/95 p-1 shadow-[0_2px_14px_rgba(0,0,0,0.04)] backdrop-blur-md"
          >
            {NAV.map((item) => {
              const active = item.match(location.pathname);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "px-4 py-1.5 text-[13.5px] font-medium rounded-full transition-all duration-200 whitespace-nowrap",
                    active
                      ? "bg-[#FF5422] text-white font-semibold shadow-sm"
                      : "text-stone-600 hover:text-[#141210] hover:bg-stone-100/80",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-stone-200 bg-white px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-[13.5px] font-medium text-[#141210] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all hover:border-[#FF5422] hover:text-[#FF5422] whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5 text-[#FF5422]" />
              <span>Get in touch</span>
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-[#141210] shadow-sm transition-colors hover:border-[#FF5422]"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-white pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-2 max-w-md mx-auto">
              {NAV.map((item) => {
                const active = item.match(location.pathname);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-5 py-4 text-xl font-semibold transition-colors",
                      active
                        ? "bg-[#FF5422] text-white"
                        : "bg-stone-50 text-[#141210] hover:bg-[#FFF4F0]",
                    )}
                  >
                    {item.name}
                    <ArrowUpRight className="h-5 w-5 opacity-70" />
                  </Link>
                );
              })}

              <div className="pt-4 grid grid-cols-2 gap-2.5">
                {MOBILE_EXTRA.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="rounded-xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-700 hover:border-[#FF5422] hover:text-[#FF5422]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-stone-200 space-y-2 text-xs text-stone-500">
                <a href="mailto:team.dievekter@gmail.com" className="block hover:text-[#FF5422]">
                  team.dievekter@gmail.com
                </a>
                <a
                  href="https://wa.me/919404895667"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block hover:text-[#FF5422]"
                >
                  WhatsApp: +91 94048 95667
                </a>
                <p>Radhanagari, Kolhapur · UDYAM-MH-15-0320983</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
