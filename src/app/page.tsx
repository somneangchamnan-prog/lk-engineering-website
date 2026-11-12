import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = buildMetadata({
  title: `Electrical & MEP Engineering Company in Cambodia | ${site.name}`,
  description:
    "Electrical engineering, MEP design, HVAC, plumbing, fire protection, ELV, solar PV and BIM/Revit in Cambodia. Design, installation and commissioning for commercial, industrial and residential buildings.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <CapabilitiesSection />
      <FeaturedProjectsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection hideWhenEmpty />
      <CTASection />
      <ContactSection />
    </>
  );
}
