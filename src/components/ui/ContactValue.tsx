import { isPlaceholder } from "@/data/site";

interface Props {
  value: string;
  href?: string;
  className?: string;
  external?: boolean;
  /** "light" for white backgrounds (darker amber), "dark" for navy. */
  tone?: "light" | "dark";
}

/** Renders a link when the value is real; plain placeholder text otherwise. */
export function ContactValue({ value, href, className, external, tone = "dark" }: Props) {
  if (isPlaceholder(value) || !href) {
    return <span className={`font-mono text-[0.85em] ${tone === "light" ? "text-amber-ink" : "text-amber-signal"} ${className ?? ""}`}>{value}</span>;
  }
  return (
    <a
      href={href}
      className={`hover:text-volt ${className ?? ""}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {value}
    </a>
  );
}
