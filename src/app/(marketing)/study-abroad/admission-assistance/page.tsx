import type { Metadata } from "next";
import {
  STUDY_ABROAD_SUBPAGES,
  StudyAbroadSubPageView,
} from "@/components/studyAbroad/StudyAbroadSubPageView";
import { buildPageMetadata } from "@/lib/seo/metadata";

const spec = STUDY_ABROAD_SUBPAGES["admission-assistance"];

export const metadata: Metadata = buildPageMetadata({
  path: spec.path,
  title: spec.metaTitle,
  description: spec.metaDescription,
});

export default function AdmissionAssistancePage() {
  return <StudyAbroadSubPageView subKey="admission-assistance" />;
}
