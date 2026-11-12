import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { quoteHref } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

interface Props {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  title = "Planning a building project?",
  text = "Tell us about your project and we'll come back with a clear, practical proposal.",
  primaryLabel = "Request a Quote",
  primaryHref = quoteHref,
}: Props) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-volt text-white">
      <div aria-hidden className="absolute inset-0 bg-grid-blueprint opacity-60 [background-size:40px_40px]" />
      <div className="container-page relative flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <Reveal className="max-w-2xl">
          <h2 id="cta-title" className="text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/85">{text}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link href={primaryHref} className="btn bg-white text-navy-900 hover:bg-navy-950 hover:text-white">
            {primaryLabel} <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
