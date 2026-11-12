import Link from "next/link";
import { Zap } from "lucide-react";
import { site } from "@/data/site";

/**
 * [COMPANY LOGO] placeholder. To use your real logo, replace the square mark
 * with <Image src="/logo.svg" ... /> (place the file in /public).
 */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const onDark = tone === "dark";
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span
        aria-hidden
        className="ticks flex h-9 w-9 items-center justify-center bg-volt text-white"
      >
        <Zap className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[0.95rem] font-bold tracking-tight ${onDark ? "text-white" : "text-navy-900"}`}>
          {site.name}
        </span>
        <span className={`label mt-1 !text-[0.58rem] ${onDark ? "text-steel-300" : "text-steel-500"}`}>
          Electrical &amp; MEP Engineering
        </span>
      </span>
    </Link>
  );
}
