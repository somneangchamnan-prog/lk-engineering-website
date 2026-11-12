import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/forms/ContactForm";

/** Compact contact block for the home page. */
export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y">
      <div className="container-page grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading id="contact-title" index="08" eyebrow="Contact" title="Talk to an engineer" text="Send us a message and we'll respond as soon as we can." />
          <Reveal delay={0.1} className="mt-8">
            <ContactInfo />
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="border border-steel-200 bg-white p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold">Send a message</h3>
            <ContactForm idPrefix="home-contact" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
