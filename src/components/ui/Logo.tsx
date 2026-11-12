import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const COMPANY_NAME = "L&K Engineering Co., Ltd.";

/**
 * The supplied artwork sits on a white 842x596 canvas. The circular mark is
 * shown unaltered and the surrounding white canvas is clipped by a circular
 * frame (the image is scaled uniformly, so proportions are preserved).
 */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const onDark = tone === "dark";
  return (
    <Link href="/" className="group inline-flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={`${site.name} — home`}>
      <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-full sm:h-11 sm:w-11">
        <Image
          src="/images/lk-logo.png"
          alt="L&K Engineering Co., Ltd. Logo"
          width={842}
          height={596}
          priority
          sizes="88px"
          className="absolute left-1/2 top-1/2 h-auto w-[190%] max-w-none -translate-x-1/2 -translate-y-1/2"
        />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`truncate text-[0.85rem] font-bold tracking-tight sm:text-[0.95rem] ${onDark ? "text-white" : "text-navy-900"}`}>
          {COMPANY_NAME}
        </span>
        <span className={`label mt-1 !text-[0.58rem] ${onDark ? "text-steel-300" : "text-steel-500"}`}>
          Electrical &amp; MEP Engineering
        </span>
      </span>
    </Link>
  );
}
