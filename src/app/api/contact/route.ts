import type { NextRequest } from "next/server";
import { handleEnquirySubmission } from "@/lib/api/enquiryHandler";

export async function POST(request: NextRequest) {
  return handleEnquirySubmission(request, "/api/contact");
}
