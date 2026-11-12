import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site, isPlaceholder } from "@/data/site";
import { services } from "@/data/services";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";

const defaultTitle = `Electrical & MEP Engineering Company in Cambodia | ${site.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description:
    "Electrical engineering, MEP design, HVAC, plumbing, fire protection, ELV, solar PV and BIM/Revit services in Cambodia — design, installation and commissioning.",
  keywords: [
    "Electrical Engineering Cambodia",
    "MEP Design Cambodia",
    "MEP Contractor Cambodia",
    "Electrical Design Company Cambodia",
    "Electrical Installation Cambodia",
    "HVAC Contractor Cambodia",
    "Solar Installation Cambodia",
    "BIM Revit Cambodia",
  ],
  openGraph: { type: "website", siteName: site.name, locale: site.locale },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

/** Organisation schema. Placeholder values are left out until you replace them. */
function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: { "@type": "Country", name: site.country },
    ...(isPlaceholder(site.phone) ? {} : { telephone: site.phone }),
    ...(isPlaceholder(site.email) ? {} : { email: site.email }),
    ...(isPlaceholder(site.address)
      ? {}
      : { address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "KH" } }),
    sameAs: [site.facebook, site.telegram].filter((u) => !isPlaceholder(u)),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only z-[100] bg-volt px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
