import Link from "next/link";
import { ArrowRight, ArrowUp, Clock, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, quoteHref, site, isPlaceholder } from "@/data/site";
import { serviceGroups } from "@/data/content";
import { Logo } from "@/components/ui/Logo";
import { ContactValue } from "@/components/ui/ContactValue";

const socialClass =
  "inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs text-white hover:border-volt hover:text-volt-light";

export function Footer() {
  const year = new Date().getFullYear();
  const tel = `tel:${site.phone.replace(/[\s()]/g, "")}`;
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-steel-300">
      <div aria-hidden className="absolute inset-0 bg-grid-blueprint opacity-40 [background-size:40px_40px]" />

      <div className="container-page relative">
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="label text-volt-light">Start a project</p>
            <p className="mt-3 max-w-xl text-2xl font-bold text-white sm:text-3xl">
              Have drawings, a site or a scope to discuss?
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={quoteHref} className="btn-primary">
              Request a Quote <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            {!isPlaceholder(site.phone) && (
              <a href={tel} className="btn-outline-light">
                <Phone aria-hidden className="h-4 w-4" /> {site.phone}
              </a>
            )}
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {site.name} provides electrical and MEP engineering design, installation and commissioning
              for buildings in {site.country}.
            </p>
            <div className="mt-6 flex gap-3">
              <ContactValue value="Telegram" href={site.telegram} external className={socialClass} />
              <ContactValue value="Facebook" href={site.facebook} external className={socialClass} />
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="label text-white">Company</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="label text-white">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceGroups.map((g) => (
                <li key={g.id}>
                  <Link href={`/#${g.id}`} className="group flex items-baseline gap-3 hover:text-white">
                    <span className="font-mono text-[0.68rem] text-steel-500 group-hover:text-volt-light">{g.code}</span>
                    {g.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="text-volt-light hover:text-white">All services →</Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="label text-white">Contact</h2>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex gap-3"><MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt-light" /><ContactValue value={site.address} /></li>
              <li className="flex gap-3"><Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt-light" /><ContactValue value={site.phone} href={tel} /></li>
              <li className="flex gap-3"><Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt-light" /><ContactValue value={site.email} href={`mailto:${site.email}`} /></li>
              <li className="flex gap-3">
                <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt-light" />
                <dl className="space-y-1">
                  {site.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap gap-x-2">
                      <dt>{h.days}:</dt>
                      <dd><ContactValue value={h.time} /></dd>
                    </div>
                  ))}
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <p className="label !text-[0.6rem] text-steel-400">
              Electrical &amp; MEP Engineering · {site.country}
            </p>
            <a href="#top" className="inline-flex items-center gap-1.5 text-steel-400 hover:text-white">
              Back to top <ArrowUp aria-hidden className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
