import { Clock, Facebook, Mail, MapPin, MapPinned, Phone, Send } from "lucide-react";
import { site } from "@/data/site";
import { ContactValue } from "@/components/ui/ContactValue";

const row = "flex gap-4 border-b border-steel-200 py-4 last:border-0";
const iconBox = "flex h-10 w-10 shrink-0 items-center justify-center bg-navy-900 text-volt-light";

export function ContactInfo() {
  return (
    <div>
      <ul>
        <li className={row}>
          <span className={iconBox}><MapPin aria-hidden className="h-5 w-5" /></span>
          <div><p className="label text-steel-500">Address</p><p className="mt-1 text-sm font-medium"><ContactValue tone="light" value={site.address} /></p></div>
        </li>
        <li className={row}>
          <span className={iconBox}><Phone aria-hidden className="h-5 w-5" /></span>
          <div><p className="label text-steel-500">Phone</p><p className="mt-1 text-sm font-medium"><ContactValue tone="light" value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} /></p></div>
        </li>
        <li className={row}>
          <span className={iconBox}><Mail aria-hidden className="h-5 w-5" /></span>
          <div><p className="label text-steel-500">Email</p><p className="mt-1 text-sm font-medium"><ContactValue tone="light" value={site.email} href={`mailto:${site.email}`} /></p></div>
        </li>
        <li className={row}>
          <span className={iconBox}><Send aria-hidden className="h-5 w-5" /></span>
          <div><p className="label text-steel-500">Telegram</p><p className="mt-1 text-sm font-medium"><ContactValue tone="light" value={site.telegram} href={site.telegram} external /></p></div>
        </li>
        <li className={row}>
          <span className={iconBox}><Facebook aria-hidden className="h-5 w-5" /></span>
          <div><p className="label text-steel-500">Facebook</p><p className="mt-1 text-sm font-medium"><ContactValue tone="light" value={site.facebook} href={site.facebook} external /></p></div>
        </li>
        <li className={row}>
          <span className={iconBox}><Clock aria-hidden className="h-5 w-5" /></span>
          <div>
            <p className="label text-steel-500">Business Hours</p>
            <dl className="mt-1 space-y-0.5 text-sm font-medium">
              {site.hours.map((h) => (
                <div key={h.days} className="flex flex-wrap gap-x-2"><dt>{h.days}:</dt><dd><ContactValue tone="light" value={h.time} /></dd></div>
              ))}
            </dl>
          </div>
        </li>
      </ul>
    </div>
  );
}

export function MapEmbed() {
  if (site.mapEmbedUrl) {
    return (
      <iframe
        title={`Map showing the location of ${site.name}`}
        src={site.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[20rem] w-full border-0"
        allowFullScreen
      />
    );
  }
  return (
    <div className="relative flex h-full min-h-[20rem] flex-col items-center justify-center gap-3 overflow-hidden bg-navy-900 p-6 text-center text-steel-300">
      <div aria-hidden className="absolute inset-0 bg-grid-blueprint [background-size:32px_32px]" />
      <MapPinned aria-hidden className="relative h-10 w-10 text-volt-light" strokeWidth={1.4} />
      <p className="label relative text-amber-signal">[GOOGLE MAPS EMBED]</p>
      <p className="relative max-w-xs text-sm">
        Paste your Google Maps embed URL into <code className="font-mono text-xs text-white">mapEmbedUrl</code> in <code className="font-mono text-xs text-white">src/data/site.ts</code>.
      </p>
    </div>
  );
}
