import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { ContactInfo, MapEmbed } from "@/components/ContactInfo";
import { ContactTabs } from "@/components/ContactTabs";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Request a Quote — Electrical & MEP Engineering Cambodia",
  description: `Contact ${site.name} or request a quotation for electrical, MEP, HVAC, solar PV, CCTV and BIM projects in Cambodia.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact us or request a quote"
        text="Tell us about your project. Attach drawings if you have them — we'll review and get back to you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section aria-label="Contact" className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="border border-steel-200 bg-white p-6 sm:p-8">
            <ContactTabs />
          </div>
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold">Company details</h2>
              <div className="mt-4"><ContactInfo /></div>
            </div>
            <div className="h-72 overflow-hidden border border-steel-200"><MapEmbed /></div>
          </div>
        </div>
      </section>
    </>
  );
}
