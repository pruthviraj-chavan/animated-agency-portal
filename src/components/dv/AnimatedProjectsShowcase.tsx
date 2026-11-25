import { useEffect, useId, useMemo, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  PROJECT_CATEGORIES,
  STUDIO_PROJECTS,
  type ProjectCategory,
  type StudioProject,
} from "@/data/projects";
import {
  withFloatDown,
  withFloatUp,
  withFlyInLeft,
  withFlyInRight,
  withWidthGrow,
} from "@/components/home2/ScrollEffects";
import { cn } from "@/lib/utils";

const FloatUpColumn = withFloatUp(motion.div);
const FloatDownColumn = withFloatDown(motion.div);
const FlyInLeftCard = withFlyInLeft(motion.div);
const FlyInRightCard = withFlyInRight(motion.div);
const WidthGrowStage = withWidthGrow(motion.div);

function useColumnCount() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => {
      const w = window.innerWidth;
      setCols(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

export function ProjectDomainMarquee({ className }: { className?: string }) {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <div
      className={cn(
        "overflow-hidden border-[#FBE0D4] bg-[#FFF5F1] py-3",
        className,
      )}
      aria-label="Live Dievekter Tech domains"
    >
      <motion.div
        className="flex w-max"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...STUDIO_PROJECTS, ...STUDIO_PROJECTS].map((item, idx) => (
          <a
            key={`${item.id}-${idx}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 text-xs sm:text-sm font-semibold text-[#141210] hover:text-[#FF5422] transition-colors whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5422]" aria-hidden="true" />
            <span>{item.title}</span>
            <span className="font-mono text-[11px] text-stone-500">{item.domain}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

function ProjectBrowserPreview({
  project,
  reduceMotion,
}: {
  project: StudioProject;
  reduceMotion: boolean;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-t-2xl border-b border-stone-200/70"
      style={{ backgroundColor: project.accentBg }}
    >
      {/* Top Browser Chrome */}
      <div className="relative z-20 flex items-center justify-between gap-2 border-b border-black/10 bg-white/95 px-3.5 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#FF5422]" />
          <span className="h-2 w-2 rounded-full bg-stone-300" />
          <span className="h-2 w-2 rounded-full bg-stone-300" />
        </div>
        <span className="truncate rounded-full bg-stone-100 px-2.5 py-0.5 font-mono text-[10px] font-medium text-stone-600">
          {project.domain}
        </span>
        <span className="text-[10px] font-bold tracking-wider text-stone-400">{project.index}</span>
      </div>

      {/* Preview Stage — 16:10 framing matching real 1280x820 website screenshots */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {/* Stylized Brand Canvas Fallback */}
        <div
          className="absolute inset-0 flex flex-col justify-between p-5 select-none"
          style={{
            backgroundColor: project.accentBg,
            color: project.accentFg,
          }}
        >
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    rotate: [0, 8, 0],
                  }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-10 -bottom-12 h-40 w-40 rounded-full opacity-25 blur-xl"
            style={{ backgroundColor: project.accentPill }}
          />

          <div className="relative z-10 flex items-center justify-between gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{
                backgroundColor: project.accentPill,
                color: project.accentPill === "#E8B878" ? "#141210" : "#FFFFFF",
              }}
            >
              {project.industryBadge}
            </span>
            <Globe className="h-4 w-4 opacity-60" aria-hidden="true" />
          </div>

          <div className="relative z-10 mt-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] opacity-65">
              Dievekter Tech Build
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight leading-tight">
              {project.title}
            </p>
          </div>
        </div>

        {/* Actual Live Website Screenshot */}
        {!imageError && (
          <img
            src={project.previewImage}
            alt={`${project.title} website preview`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={cn(
              "relative z-10 h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
          />
        )}

        {/* Hover gradient sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Floating Live Pill on hover */}
        <div className="pointer-events-none absolute bottom-3 right-3 z-20 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#141210] shadow-lg backdrop-blur-md">
            Live site <ArrowUpRight className="h-3 w-3 text-[#FF5422]" />
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard3D({
  project,
  delay,
  reduceMotion,
}: {
  project: StudioProject;
  delay: number;
  reduceMotion: boolean;
}) {
  const cardRef = useRef<HTMLElement | null>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), {
    stiffness: 240,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), {
    stiffness: 240,
    damping: 24,
  });
  const spotBg = useTransform([mouseX, mouseY], ([x, y]) => {
    const px = Number(x) * 100;
    const py = Number(y) * 100;
    return `radial-gradient(340px circle at ${px}% ${py}%, rgba(255, 84, 34, 0.12), transparent 65%)`;
  });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.94, y: -10 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        whileHover={reduceMotion ? undefined : { y: -8 }}
        className="group relative flex flex-col rounded-2xl border border-[#FBE0D4] bg-white shadow-sm transition-colors hover:border-[#FF5422]/60 hover:shadow-[0_28px_54px_-22px_rgba(255,84,34,0.28)]"
      >
        {/* Clipped spotlight overlay inside card bounds */}
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotBg }}
          />
        )}

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 block focus:outline-none"
          aria-label={`Open ${project.title} website`}
        >
          <ProjectBrowserPreview project={project} reduceMotion={reduceMotion} />
        </a>

        <div className="relative z-10 flex flex-grow flex-col justify-between p-6">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF5422]">
                  {project.clientType}
                </p>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-[#141210] group-hover:text-[#FF5422] transition-colors">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {project.title}
                  </a>
                </h3>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-[#FFF8F5] text-stone-700 transition-all group-hover:border-[#FF5422] group-hover:bg-[#FF5422] group-hover:text-white group-hover:rotate-12"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-stone-600">{project.description}</p>
          </div>

          <div className="mt-5 pt-4 border-t border-stone-100">
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              {project.highlights.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#FBE0D4] bg-[#FFF8F5] px-2.5 py-0.5 text-[11px] font-medium text-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141210] group-hover:text-[#FF5422] transition-colors"
            >
              <span className="truncate font-mono text-stone-500 group-hover:text-[#FF5422]">
                {project.domain}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

interface AnimatedProjectsShowcaseProps {
  showFilters?: boolean;
  showSpotlight?: boolean;
  maxItems?: number;
}

export function AnimatedProjectsShowcase({
  showFilters = true,
  showSpotlight = true,
  maxItems,
}: AnimatedProjectsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const filterGroupId = useId();
  const colCount = useColumnCount();
  const reduceMotion = Boolean(useReducedMotion());

  const filtered = useMemo(
    () =>
      selectedCategory === "All"
        ? STUDIO_PROJECTS
        : STUDIO_PROJECTS.filter((item) => item.category === selectedCategory),
    [selectedCategory],
  );

  const visibleProjects = useMemo(
    () => (maxItems ? filtered.slice(0, maxItems) : filtered),
    [filtered, maxItems],
  );

  const spotlight = STUDIO_PROJECTS[spotlightIndex % STUDIO_PROJECTS.length];

  // Partition evenly across active responsive columns (1, 2, or 3) so ScrollEffects
  // withFloatUp / withFloatDown glide whole columns without leaving orphaned slots.
  const columns = useMemo(() => {
    const cols: StudioProject[][] = Array.from({ length: colCount }, () => []);
    visibleProjects.forEach((p, idx) => {
      cols[idx % colCount].push(p);
    });
    return cols;
  }, [visibleProjects, colCount]);

  return (
    <div>
      {/* Scroll-expanding Flagship Spotlight using ScrollEffects.withWidthGrow */}
      {showSpotlight && (
        <div className="mb-14 flex justify-center">
          <WidthGrowStage className="mx-auto overflow-hidden rounded-3xl border border-[#FBE0D4] bg-white shadow-[0_24px_60px_-24px_rgba(20,18,16,0.16)]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-stretch">
              <div className="relative bg-[#141210] overflow-hidden min-h-[240px] sm:min-h-[310px]">
                <AnimatePresence mode="wait">
                  <motion.a
                    key={spotlight.id}
                    href={spotlight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="group block h-full w-full relative"
                  >
                    <img
                      src={spotlight.previewImage}
                      alt={`${spotlight.title} flagship spotlight`}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    />
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-[#141210] shadow-md backdrop-blur-md">
                      {spotlight.domain} <ArrowUpRight className="h-3.5 w-3.5 text-[#FF5422]" />
                    </span>
                  </motion.a>
                </AnimatePresence>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-white to-[#FFF7F3]">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF4F0] border border-[#FBE0D4] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF5422]">
                    <Sparkles className="h-3 w-3" aria-hidden="true" /> Featured Build ·{" "}
                    {spotlight.index}
                  </div>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#141210]">
                    {spotlight.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                    {spotlight.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {spotlight.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-[#FBE0D4] bg-white px-2.5 py-1 text-[11px] font-medium text-stone-700"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-200/70">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400 mb-2.5">
                    Switch spotlight build
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {STUDIO_PROJECTS.slice(0, 5).map((item, i) => {
                      const active = i === spotlightIndex;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSpotlightIndex(i)}
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-semibold transition-all",
                            active
                              ? "bg-[#FF5422] text-white shadow-sm"
                              : "border border-stone-200 bg-white text-stone-600 hover:border-[#FF5422]/40 hover:text-[#141210]",
                          )}
                        >
                          {item.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </WidthGrowStage>
        </div>
      )}

      {showFilters && (
        <div
          role="tablist"
          aria-label="Filter Dievekter Tech projects by category"
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors",
                  active
                    ? "text-white"
                    : "border border-stone-200 bg-white text-stone-600 hover:border-[#FF5422]/40 hover:text-[#141210]",
                )}
              >
                {active && (
                  <motion.span
                    layoutId={`activeFilterPill-${filterGroupId}`}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                    className="absolute inset-0 rounded-full bg-[#FF5422] shadow-sm"
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Scroll-Linked Parallax Grid using ScrollEffects (FloatUp / FloatDown + FlyInLeft / FlyInRight) */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 items-start pt-2 pb-8 lg:py-8">
        {columns.map((colProjects, colIdx) => {
          const ColumnWrapper = colCount >= 3 && colIdx === 1 ? FloatDownColumn : FloatUpColumn;
          return (
            <ColumnWrapper key={`col-${colCount}-${colIdx}`} className="flex flex-col gap-7">
              <AnimatePresence mode="popLayout">
                {colProjects.map((project, itemIdx) => {
                  const cardNode = (
                    <ProjectCard3D
                      key={project.id}
                      project={project}
                      delay={itemIdx * 0.06 + colIdx * 0.04}
                      reduceMotion={reduceMotion}
                    />
                  );

                  // Outer top-row cards fly dynamically down & in from hero angles via ScrollEffects.tsx
                  if (colCount === 3 && itemIdx === 0 && colIdx === 0) {
                    return <FlyInLeftCard key={project.id}>{cardNode}</FlyInLeftCard>;
                  }
                  if (colCount === 3 && itemIdx === 0 && colIdx === 2) {
                    return <FlyInRightCard key={project.id}>{cardNode}</FlyInRightCard>;
                  }
                  return cardNode;
                })}
              </AnimatePresence>
            </ColumnWrapper>
          );
        })}
      </div>
    </div>
  );
}
