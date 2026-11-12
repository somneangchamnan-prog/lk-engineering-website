import { NextResponse } from "next/server";
import { MAX_FILE_BYTES, validateFile, validateForm, type FormKind, type FormValues } from "@/lib/validation";

export const runtime = "nodejs";

function text(form: FormData, key: string): string {
  const v = form.get(key);
  return typeof v === "string" ? v : "";
}

/**
 * Receives contact and quote submissions.
 *
 * Delivery: set CONTACT_WEBHOOK_URL to any endpoint that accepts multipart
 * form data (Make, Zapier, n8n, a Google Apps Script, your own API…).
 * Without it, production requests fail loudly (503) so leads are never lost
 * silently; in development they are only logged.
 */
export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success, deliver nothing.
  if (text(form, "website")) return NextResponse.json({ ok: true });

  const kind: FormKind = text(form, "kind") === "quote" ? "quote" : "contact";

  let services: string[] = [];
  try {
    const parsed = JSON.parse(text(form, "services") || "[]");
    if (Array.isArray(parsed)) services = parsed.filter((s): s is string => typeof s === "string").slice(0, 20);
  } catch {
    /* ignore — validation below reports it */
  }

  const values: FormValues = {
    name: text(form, "name").slice(0, 200),
    company: text(form, "company").slice(0, 200),
    phone: text(form, "phone").slice(0, 50),
    email: text(form, "email").slice(0, 200),
    projectType: text(form, "projectType").slice(0, 100),
    projectLocation: text(form, "projectLocation").slice(0, 200),
    services,
    message: text(form, "message"),
  };

  const fieldErrors = validateForm(kind, values);
  const fileEntry = form.get("file");
  const file = fileEntry instanceof File && fileEntry.size > 0 ? fileEntry : null;
  const fileError = validateFile(file);
  if (fileError) fieldErrors.file = fileError;
  if (file && file.size > MAX_FILE_BYTES) fieldErrors.file = "File is larger than 10 MB.";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ error: "Please check the highlighted fields.", fieldErrors }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.info("[contact] submission received (no CONTACT_WEBHOOK_URL set)", { kind, ...values, file: file?.name });
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Online submissions are not available right now. Please contact us by phone, email or Telegram." },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  try {
    const out = new FormData();
    out.set("kind", kind);
    out.set("submittedAt", new Date().toISOString());
    for (const [k, v] of Object.entries(values)) out.set(k, Array.isArray(v) ? v.join(", ") : v);
    if (file) out.set("file", file, file.name);

    const res = await fetch(webhook, { method: "POST", body: out });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json(
      { error: "We couldn't send your request. Please try again, or contact us directly." },
      { status: 502 }
    );
  }
}
