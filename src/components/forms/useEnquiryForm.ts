"use client";

import { useRef, useState, type FormEvent } from "react";
import { validateFile, validateForm, type FormErrors, type FormKind, type FormValues } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const empty: FormValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  projectType: "",
  projectLocation: "",
  services: [],
  message: "",
};

/** Shared state, validation and submission logic for the contact and quote forms. */
export function useEnquiryForm(kind: FormKind) {
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function set<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function toggleService(title: string) {
    set(
      "services",
      values.services.includes(title) ? values.services.filter((s) => s !== title) : [...values.services, title]
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const file = fileRef.current?.files?.[0] ?? null;
    const found: FormErrors = validateForm(kind, values);
    const fileError = validateFile(file);
    if (fileError) found.file = fileError;

    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus("idle");
      // Move focus to the first invalid control.
      const first = Object.keys(found)[0];
      requestAnimationFrame(() => {
        (e.currentTarget.querySelector(`[name="${first}"]`) as HTMLElement | null)?.focus();
      });
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    try {
      const body = new FormData();
      body.set("kind", kind);
      body.set("name", values.name.trim());
      body.set("company", values.company.trim());
      body.set("phone", values.phone.trim());
      body.set("email", values.email.trim());
      body.set("projectType", values.projectType);
      body.set("projectLocation", values.projectLocation.trim());
      body.set("services", JSON.stringify(values.services));
      body.set("message", values.message.trim());
      body.set("website", honeypotRef.current?.value ?? ""); // honeypot
      if (file && file.size > 0) body.set("file", file);

      const res = await fetch("/api/contact", { method: "POST", body });
      const json = (await res.json().catch(() => ({}))) as { error?: string; fieldErrors?: FormErrors };
      if (!res.ok) {
        if (json.fieldErrors) setErrors(json.fieldErrors);
        setServerMessage(json.error ?? "Something went wrong. Please try again or contact us directly.");
        setStatus("error");
        return;
      }
      setValues(empty);
      setErrors({});
      if (fileRef.current) fileRef.current.value = "";
      setStatus("success");
    } catch {
      setServerMessage("Network error. Please check your connection and try again, or contact us directly.");
      setStatus("error");
    }
  }

  return { values, errors, status, serverMessage, set, toggleService, onSubmit, fileRef, honeypotRef };
}
