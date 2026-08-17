import { SolutionPage } from "@/components/dv/SolutionPage";

const SoftwareSolutions = () => (
  <SolutionPage
    eyebrow="Software Engineering"
    title={<>Product-grade <span className="dv-text-gradient">software</span>, built to last</>}
    intro="We build web platforms, mobile applications and APIs with modern architecture, clean interfaces and the operational tooling needed to run them in production."
    blocks={[
      {
        title: "Web platforms",
        desc: "Dashboards, portals and internal tools with role-based access and real data models.",
        bullets: ["React & TypeScript", "Design systems", "Auth & permissions"],
      },
      {
        title: "Mobile applications",
        desc: "Cross-platform apps that share logic with your web product instead of duplicating it.",
        bullets: ["Offline-friendly flows", "Push notifications", "App store delivery"],
      },
      {
        title: "APIs & integrations",
        desc: "Well-documented services that connect your systems to each other and to third parties.",
        bullets: ["REST & realtime", "Webhooks", "Third-party integrations"],
      },
    ]}
    outcomes={[
      "One reliable source of truth instead of scattered spreadsheets.",
      "Faster release cycles with CI/CD and automated checks.",
      "Codebases your own team can read, extend and own.",
      "Systems that scale with usage rather than breaking under it.",
    ]}
  />
);

export default SoftwareSolutions;
