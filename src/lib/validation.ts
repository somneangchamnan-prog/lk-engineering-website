/**
 * Form validation shared by the browser (instant feedback) and the API route
 * (the real security boundary — never trust client-side validation alone).
 */

export type FormKind = "contact" | "quote";

export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
export const ALLOWED_FILE_EXTENSIONS = [
  "pdf", "dwg", "dxf", "rvt", "doc", "docx", "xls", "xlsx", "png", "jpg", "jpeg", "zip",
];

export const projectTypes = [
  "Residential / Home",
  "Commercial Building",
  "Office",
  "Factory / Industrial",
  "Hotel / Hospitality",
  "Restaurant",
  "Warehouse",
  "Developer / Construction Company",
  "Other",
];

export interface FormValues {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation: string;
  services: string[];
  message: string;
}

export type FormErrors = Partial<Record<keyof FormValues | "file", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+()\-.\s\d]{6,20}$/;

export function validateForm(kind: FormKind, v: FormValues): FormErrors {
  const e: FormErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!v.email.trim() && !v.phone.trim()) {
    e.email = "Please provide an email address or a phone number.";
    e.phone = "Please provide a phone number or an email address.";
  }
  if (v.email.trim() && !emailRe.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !phoneRe.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.message.trim().length < 10) {
    e.message = kind === "quote"
      ? "Please describe your project (at least 10 characters)."
      : "Please enter your message (at least 10 characters).";
  }
  if (v.message.length > 5000) e.message = "Message is too long (max 5000 characters).";
  if (kind === "quote") {
    if (!v.projectType) e.projectType = "Please choose a project type.";
    if (v.services.length === 0) e.services = "Please select at least one service.";
  }
  return e;
}

export function validateFile(file: File | null | undefined): string | undefined {
  if (!file || file.size === 0) return undefined;
  if (file.size > MAX_FILE_BYTES) return "File is larger than 10 MB.";
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) {
    return `File type .${ext || "?"} is not supported. Allowed: ${ALLOWED_FILE_EXTENSIONS.join(", ")}.`;
  }
  return undefined;
}
