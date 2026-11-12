import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { navLinks, quoteHref, site } from "@/data/site";
import { services } from "@/data/services";
import { Logo } from "@/components/ui/Logo";
import { ContactValue } from "@/components/ui/ContactValue";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-steel-300">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {site.name} provides electrical and MEP engineering design, installation and commissioning
            for buildings in {site.country}.
          </p>
          <div className="mt-6 flex gap-3">
            <ContactValue
              value="Telegram"
              href={site.telegram}
              external
              className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs text-white hover:border-volt hover:text-volt-light"
            />
            <ContactValue
              value="Facebook"
              href={site.facebook}
              external
              className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs text-white hover:border-volt hover:text-volt-light"
            />
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="label text-white">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href={quoteHref} className="text-volt-light hover:text-white">Request a Quote</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="label text-white">Services</h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-volt-light hover:text-white">All services →</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="label text-white">Contact</h2>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex gap-3"><MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt-light" /><ContactValue value={site.address} /></li>
            <li className="flex gap-3"><Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt-light" /><ContactValue value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} /></li>
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

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All Rights Reserved.</p>
          <p className="inline-flex items-center gap-2 text-steel-400">
            <Send aria-hidden className="h-3.5 w-3.5" />
            Electrical &amp; MEP Engineering · {site.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
