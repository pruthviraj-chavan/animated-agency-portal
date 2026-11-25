import type { FaqSchemaItem as FaqEntry } from "@/lib/seo/schema";

export interface StudyAbroadCardItem {
  title: string;
  description: string;
  to: string;
  tag: string;
}

export interface OfficialResourceLink {
  name: string;
  role: string;
  url: string;
  note: string;
}

export const OFFICIAL_GERMANY_RESOURCES: OfficialResourceLink[] = [
  {
    name: "DAAD (German Academic Exchange Service)",
    role: "Official national database of accredited German degree programs & scholarships",
    url: "https://www.daad.de/en/",
    note: "Verify admission prerequisites, language of instruction and semester dates directly by university program.",
  },
  {
    name: "DAAD India",
    role: "Country office guidance for Indian students applying to Germany",
    url: "https://www.daad.in/en/",
    note: "Official information sessions, research fellowships and application overview tailored to India.",
  },
  {
    name: "APS India (Akademische Prüfstelle)",
    role: "Mandatory academic credential verification center for Indian applicants",
    url: "https://aps-india.de/",
    note: "Required before German student visa filing for most Indian degree applicants — always check current APS document lists and processing windows on the official portal.",
  },
  {
    name: "German Missions in India",
    role: "Embassy in New Delhi & Consulates General (Mumbai, Bengaluru, Chennai, Kolkata)",
    url: "https://india.diplo.de/in-en",
    note: "Authoritative checklists for National (D) Student Visas, blocked account rules, appointment booking and consular jurisdiction.",
  },
  {
    name: "uni-assist e.V.",
    role: "Central preliminary evaluation & application portal used by many German universities",
    url: "https://www.uni-assist.de/en/",
    note: "Check whether your shortlisted public university processes international applications via uni-assist or a direct university portal.",
  },
  {
    name: "Federal Foreign Office (Auswärtiges Amt)",
    role: "Official German government visa policy and entry regulations",
    url: "https://www.auswaertiges-amt.de/en",
    note: "Official statutory guidance on German long-stay residence & student visa regulations.",
  },
];

export const STUDY_ABROAD_PATHWAYS: StudyAbroadCardItem[] = [
  {
    tag: "Flagship Destination",
    title: "Study in Germany Guide",
    description:
      "Understand public vs private universities, DAAD shortlisting, APS India verification, uni-assist filings, blocked accounts and student visa checklists.",
    to: "/study-abroad/germany",
  },
  {
    tag: "Step 01",
    title: "Country & University Selection",
    description:
      "Honest shortlisting based on your academic profile, degree track, language readiness and target intake rather than commission-driven lists.",
    to: "/study-abroad/university-selection",
  },
  {
    tag: "Step 02",
    title: "University Application Assistance",
    description:
      "Structured checklists for transcripts, grading conversions, Europass CVs, SOP/motivation letter reviews and LOR readiness.",
    to: "/study-abroad/admission-assistance",
  },
  {
    tag: "Step 03 & 04",
    title: "Visa Guidance & Pre-Departure",
    description:
      "Organized student visa file preparation aligned to official mission checklists plus practical arrival, housing and insurance orientation.",
    to: "/study-abroad/visa-guidance",
  },
];

export const STUDY_ABROAD_FAQS: FaqEntry[] = [
  {
    question: "How does dieVekter support Study Abroad and Study in Germany applicants?",
    answer:
      "We provide structured education counselling, profile evaluation, country and university shortlisting, application & SOP/CV document reviews, APS/portal checklists, student visa documentation organization and pre-departure orientation for students in Kolhapur, Pune, Maharashtra and across India.",
  },
  {
    question: "Does dieVekter guarantee university admission or student visa approval?",
    answer:
      "No. University admission decisions belong exclusively to the respective universities, and visa approvals rest solely with the relevant embassy or consulate. We prepare thorough, policy-aligned applications so your file meets official documentation requirements.",
  },
  {
    question: "Do public universities in Germany always have zero tuition fees?",
    answer:
      "Many state-funded public universities in most German federal states charge low administrative semester contributions rather than high tuition, though exceptions exist (for example, certain states like Baden-Württemberg, specific continuing education Master's programs or private universities). Always verify exact per-program fees on DAAD and the official university website.",
  },
  {
    question: "Why is APS certificate verification important for Indian students applying to Germany?",
    answer:
      "For most Indian applicants applying with Indian school or university credentials, an APS India certificate verifying academic authenticity is required for German student visa applications and many university admissions. Confirm current applicability directly at aps-india.de.",
  },
  {
    question: "What are dieVekter's consultancy charges?",
    answer:
      "Consultancy scope and applicable service fees depend on destination, number of applications and stage of support. Exact fee details are confirmed transparently in writing during your initial enquiry prior to engagement.",
  },
];

export const GERMANY_FAQS: FaqEntry[] = [
  {
    question: "Can I study in Germany in English without knowing German?",
    answer:
      "Yes — Germany offers hundreds of English-taught Master's degrees and a growing selection of English-taught Bachelor's programs indexed on DAAD. Even for English-taught programs, basic everyday German (A1–B1) helps significantly with housing, city registration and internships.",
  },
  {
    question: "What is the typical timeline for Winter and Summer intakes in Germany?",
    answer:
      "Winter intake generally starts in October (deadlines often close between March and July depending on the course and uni-assist processing), while Summer intake generally starts in April (deadlines often close between September and January). Beginning APS and document preparation 9–12 months ahead is strongly advisable.",
  },
  {
    question: "What is a blocked account (Sperrkonto) for a German student visa?",
    answer:
      "To demonstrate sufficient financial means for living expenses during a German National Student Visa application, applicants typically open a regulated blocked account (Sperrkonto) holding the statutory minimum annual amount specified by German authorities. Always check the current statutory requirement published by the German Missions in India before funding.",
  },
  {
    question: "Should I apply directly to German universities or through uni-assist?",
    answer:
      "Each German university sets its own submission channel — some use direct institutional portals while others require uni-assist preliminary credential assessment (VPD or full application forwarding). Checking each target program's official admissions page prevents missed deadlines.",
  },
];
