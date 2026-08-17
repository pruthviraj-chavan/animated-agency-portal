import { SolutionPage } from "@/components/dv/SolutionPage";

const AutomationSolutions = () => (
  <SolutionPage
    eyebrow="Automation"
    title={<>Remove the <span className="dv-text-gradient">manual steps</span> from your operations</>}
    intro="We map how work actually flows through your business, then automate the repetitive parts — reliably, with visibility and fallbacks when something goes wrong."
    blocks={[
      {
        title: "Workflow orchestration",
        desc: "Multi-step processes running on triggers, schedules and events instead of reminders.",
        bullets: ["Event-driven jobs", "Retry & failure handling", "Approval checkpoints"],
      },
      {
        title: "System integration",
        desc: "Your CRM, spreadsheets, messaging and internal tools connected into one flow.",
        bullets: ["CRM sync", "Webhook pipelines", "Data normalisation"],
      },
      {
        title: "Reporting automation",
        desc: "Numbers gathered, reconciled and delivered on schedule — no one compiling them by hand.",
        bullets: ["Scheduled reports", "Live dashboards", "Alerting on thresholds"],
      },
    ]}
    outcomes={[
      "Hours of repetitive admin work removed every week.",
      "Fewer human errors in data entry and hand-offs.",
      "Faster response times across sales and support.",
      "Clear visibility into where processes stall.",
    ]}
  />
);

export default AutomationSolutions;
