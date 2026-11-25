import { z } from "zod";

export const ENQUIRY_VERTICALS = ["technology", "study_abroad", "general"] as const;
export type EnquiryVertical = (typeof ENQUIRY_VERTICALS)[number];

export const ENQUIRY_CATEGORIES = [
  "website-development",
  "mobile-app-development",
  "custom-software",
  "ai-automation",
  "study-abroad",
  "general-consultation",
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please provide your name").max(120, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(180),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long")
    .optional()
    .default(""),
  vertical: z.enum(ENQUIRY_VERTICALS).default("technology"),
  category: z.string().trim().max(80).optional().default("general-consultation"),
  message: z
    .string()
    .trim()
    .min(5, "Please describe your project scope or study abroad goals")
    .max(3000, "Message exceeds 3,000 character limit"),
  companyWebsite: z.string().max(120).optional().default(""),
});

export type EnquiryPayload = z.infer<typeof enquirySchema>;
