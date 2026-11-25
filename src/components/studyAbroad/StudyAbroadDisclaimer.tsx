import { AlertCircle, ExternalLink } from "lucide-react";
import { OFFICIAL_GERMANY_RESOURCES } from "@/data/studyAbroadData";

export function StudyAbroadDisclaimer() {
  return (
    <div className="rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-6 text-left">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 shrink-0 text-[#FF5422] mt-0.5" />
        <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-stone-700">
          <p className="font-semibold text-[#141210]">
            Independent Guidance &amp; Official Authority Notice
          </p>
          <p>
            DIEVEKTER (dieVekter) provides independent overseas education counselling, application
            organization and documentation checklists. All admission offers remain solely with the
            respective universities, and student visa approvals are decided exclusively by the
            concerned embassies or consulates. Applicable consultancy fees depend on your scope
            and are confirmed clearly in writing prior to any paid engagement.
          </p>
          <p className="text-[11px] font-medium text-stone-500">
            Last verified against official portals: October 2026 — always reconfirm live
            deadlines, APS rules and financial requirements with primary institutional sources.
          </p>
        </div>
      </div>
    </div>
  );
}

export function OfficialSourcesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {OFFICIAL_GERMANY_RESOURCES.map((res) => (
        <a
          key={res.url}
          href={res.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#FF5422]/45 hover:shadow-md"
        >
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-bold text-[#141210] group-hover:text-[#FF5422] transition-colors">
                {res.name}
              </h3>
              <ExternalLink className="h-4 w-4 shrink-0 text-[#FF5422]" />
            </div>
            <p className="mt-1.5 text-xs font-medium text-stone-700">{res.role}</p>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">{res.note}</p>
          </div>
          <span className="mt-4 text-[11px] font-semibold text-[#FF5422]">
            Visit official portal
          </span>
        </a>
      ))}
    </div>
  );
}
