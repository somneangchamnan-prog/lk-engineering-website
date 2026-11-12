import type { ReactNode } from "react";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: (a11y: { id: string; "aria-invalid": boolean; "aria-describedby"?: string; "aria-required": boolean }) => ReactNode;
}

/** Label + control + error wrapper that wires up aria attributes. */
export function Field({ id, label, error, required, hint, children }: FieldProps) {
  const errId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error ? errId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
        {required && <span aria-hidden className="ml-0.5 text-volt-dark">*</span>}
      </label>
      {children({ id, "aria-invalid": Boolean(error), "aria-describedby": describedBy, "aria-required": Boolean(required) })}
      {hint && !error && <p id={hintId} className="mt-1.5 text-xs text-steel-500">{hint}</p>}
      {error && <p id={errId} role="alert" className="mt-1.5 text-xs font-medium text-red-700">{error}</p>}
    </div>
  );
}
