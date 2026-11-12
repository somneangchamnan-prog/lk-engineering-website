import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string }

interface Props {
  eyebrow: string;
  title: string;
  text?: string;
  crumbs?: Crumb[];
}

/** Dark page banner with breadcrumb and the page's single <h1>. */
export function PageHeader({ eyebrow, title, text, crumbs }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-blueprint [background-size:48px_48px]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
      <div className="container-page py-16 sm:py-20 lg:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-steel-300">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}
                  {i < crumbs.length - 1 && <ChevronRight aria-hidden className="h-3 w-3" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="label flex items-center gap-3 text-volt-light">
          <span aria-hidden className="h-px w-8 bg-volt-light/60" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-200">{text}</p>}
      </div>
    </section>
  );
}
