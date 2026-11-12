"use client";

import { Loader2, Paperclip, Send } from "lucide-react";
import { services } from "@/data/services";
import { projectTypes } from "@/lib/validation";
import { Field } from "./Field";
import { FormStatus } from "./FormStatus";
import { useEnquiryForm } from "./useEnquiryForm";

/** Request-a-quote form with service selection and optional file upload. */
export function QuoteForm({ idPrefix = "quote" }: { idPrefix?: string }) {
  const { values, errors, status, serverMessage, set, toggleService, onSubmit, fileRef, honeypotRef } = useEnquiryForm("quote");
  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Request a quote form">
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
        <Field id={`${idPrefix}-type`} label="Project Type" required error={errors.projectType}>
          {(a) => (
            <select {...a} name="projectType" className="field" value={values.projectType} onChange={(e) => set("projectType", e.target.value)}>
              <option value="">Select a project type</option>
              {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          )}
        </Field>
        <Field id={`${idPrefix}-location`} label="Project Location" error={errors.projectLocation}>
          {(a) => <input {...a} name="projectLocation" className="field" placeholder="City / province" value={values.projectLocation} onChange={(e) => set("projectLocation", e.target.value)} />}
        </Field>
      </div>

      <fieldset aria-describedby={errors.services ? `${idPrefix}-services-error` : undefined}>
        <legend className="mb-2 text-sm font-semibold text-navy-900">
          Required Services<span aria-hidden className="ml-0.5 text-volt-dark">*</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {services.map((s) => {
            const checked = values.services.includes(s.title);
            return (
              <label
                key={s.slug}
                className={`flex cursor-pointer items-center gap-3 border px-3 py-2.5 text-sm transition-colors ${
                  checked ? "border-volt bg-volt/5" : "border-steel-200 hover:border-steel-400"
                }`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={s.title}
                  checked={checked}
                  onChange={() => toggleService(s.title)}
                  className="h-4 w-4 accent-volt"
                />
                {s.title}
              </label>
            );
          })}
        </div>
        {errors.services && (
          <p id={`${idPrefix}-services-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-700">{errors.services}</p>
        )}
      </fieldset>

      <Field id={`${idPrefix}-message`} label="Project Description" required error={errors.message}>
        {(a) => <textarea {...a} name="message" rows={5} className="field resize-y" placeholder="Building type, size, current stage, drawings available, target dates…" value={values.message} onChange={(e) => set("message", e.target.value)} />}
      </Field>

      <Field id={`${idPrefix}-file`} label="Upload File" error={errors.file} hint="Optional. Drawings or documents — PDF, DWG, DXF, RVT, Office files, images or ZIP. Max 10 MB.">
        {(a) => (
          <div className="flex items-center gap-3">
            <Paperclip aria-hidden className="h-4 w-4 shrink-0 text-steel-500" />
            <input
              {...a}
              ref={fileRef}
              name="file"
              type="file"
              accept=".pdf,.dwg,.dxf,.rvt,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.zip"
              className="w-full text-sm file:mr-4 file:cursor-pointer file:rounded-sm file:border-0 file:bg-navy-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-volt"
            />
          </div>
        )}
      </Field>

      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>Website<input ref={honeypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={busy}>
        {busy ? <Loader2 aria-hidden className="h-4 w-4 animate-spin" /> : <Send aria-hidden className="h-4 w-4" />}
        {busy ? "Submitting…" : "Submit Request"}
      </button>

      <FormStatus
        status={status}
        successText="Thank you — your quotation request has been received. Our team will review it and get back to you."
        errorText={serverMessage}
      />
    </form>
  );
}
