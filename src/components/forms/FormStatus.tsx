import { CheckCircle2, TriangleAlert } from "lucide-react";

interface Props {
  status: "idle" | "submitting" | "success" | "error";
  successText: string;
  errorText: string;
}

/** Polite live region so screen readers announce the result. */
export function FormStatus({ status, successText, errorText }: Props) {
  return (
    <div aria-live="polite" role="status" className="min-h-0">
      {status === "success" && (
        <p className="flex items-start gap-3 border border-emerald-600/40 bg-emerald-50 p-4 text-sm text-emerald-900">
          <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
          {successText}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-start gap-3 border border-red-600/40 bg-red-50 p-4 text-sm text-red-900">
          <TriangleAlert aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
          {errorText}
        </p>
      )}
    </div>
  );
}
