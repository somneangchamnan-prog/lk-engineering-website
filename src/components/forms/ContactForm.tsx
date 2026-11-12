"use client";

import { Loader2, Send } from "lucide-react";
import { Field } from "./Field";
import { FormStatus } from "./FormStatus";
import { useEnquiryForm } from "./useEnquiryForm";

/** General enquiry form. */
export function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const { values, errors, status, serverMessage, set, onSubmit, honeypotRef } = useEnquiryForm("contact");
  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${idPrefix}-name`} label="Name" required error={errors.name}>
          {(a) => <input {...a} name="name" autoComplete="name" className="field" value={values.name} onChange={(e) => set("name", e.target.value)} />}
        </Field>
        <Field id={`${idPrefix}-company`} label="Company" error={errors.company}>
          {(a) => <input {...a} name="company" autoComplete="organization" className="field" value={values.company} onChange={(e) => set("company", e.target.value)} />}
        </Field>
        <Field id={`${idPrefix}-phone`} label="Phone" error={errors.phone}>
          {(a) => <input {...a} name="phone" type="tel" autoComplete="tel" inputMode="tel" className="field" value={values.phone} onChange={(e) => set("phone", e.target.value)} />}
        </Field>
        <Field id={`${idPrefix}-email`} label="Email" error={errors.email} hint="Provide an email or a phone number.">
          {(a) => <input {...a} name="email" type="email" autoComplete="email" className="field" value={values.email} onChange={(e) => set("email", e.target.value)} />}
        </Field>
      </div>
      <Field id={`${idPrefix}-message`} label="Message" required error={errors.message}>
        {(a) => <textarea {...a} name="message" rows={5} className="field resize-y" value={values.message} onChange={(e) => set("message", e.target.value)} />}
      </Field>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>Website<input ref={honeypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={busy}>
        {busy ? <Loader2 aria-hidden className="h-4 w-4 animate-spin" /> : <Send aria-hidden className="h-4 w-4" />}
        {busy ? "Sending…" : "Send Message"}
      </button>

      <FormStatus
        status={status}
        successText="Thank you — your message has been sent. We'll get back to you soon."
        errorText={serverMessage}
      />
    </form>
  );
}
