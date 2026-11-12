import type { Metadata } from "next";
import { ShieldCheck, Target, Telescope } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { capabilities, coreValues } from "@/data/content";
import { team, teamGroups } from "@/data/team";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Electrical & MEP Engineers in Cambodia",
  description: `About ${site.name}: our mission, values, engineering expertise and commitment to safety and quality in electrical and MEP engineering in Cambodia.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Engineers focused on buildings that work."
        text={`${site.name} is an electrical and MEP engineering company in ${site.country}, covering design, installation and commissioning.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section aria-labelledby="intro" className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading id="intro" index="01" eyebrow="Company introduction" title="Who we are" />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  {site.name} designs, installs and commissions electrical and MEP systems for homes, offices,
                  hotels, factories, warehouses and developments across {site.country}.
                </p>
                <p>
                  We combine engineering design with hands-on installation, so the people drawing the system
                  understand how it is built — and the people building it understand why it was designed that way.
                </p>
                <p className="font-mono text-sm text-amber-ink">
                  [Add your company history here — founding year, founders, growth, and anything that makes your story
                  yours. Only include facts you can stand behind.]
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="grid gap-5">
              <div className="border border-steel-200 p-7">
                <Target aria-hidden className="h-7 w-7 text-volt" strokeWidth={1.6} />
                <h3 className="mt-4 text-xl font-bold">Mission</h3>
                <p className="mt-2 leading-relaxed text-steel-600">
                  To deliver safe, well-engineered electrical and MEP systems that perform as designed — and to be an
                  honest, dependable partner from first meeting to final handover.
                </p>
              </div>
              <div className="border border-steel-200 p-7">
                <Telescope aria-hidden className="h-7 w-7 text-volt" strokeWidth={1.6} />
                <h3 className="mt-4 text-xl font-bold">Vision</h3>
                <p className="mt-2 leading-relaxed text-steel-600">
                  To be a trusted engineering partner for buildings in {site.country}, known for precision,
                  clear communication and work that lasts.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values" className="section-y bg-steel-50">
        <div className="container-page">
          <SectionHeading id="values" index="02" eyebrow="Core values" title="How we work" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className="h-full border-t-2 border-volt bg-white p-6">
                    <h3 className="font-bold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">{v.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="expertise" className="section-y">
        <div className="container-page">
          <SectionHeading id="expertise" index="03" eyebrow="Engineering expertise" title="What we are good at" />
          <ul className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <li key={c.code} className="bg-white p-7">
                <p className="label text-volt-dark">{c.code}</p>
                <h3 className="mt-3 font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="safety" className="section-y bg-navy-900 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="safety" tone="dark" index="04" eyebrow="Safety & quality" title="Our commitment" />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 leading-relaxed text-steel-300">
                <p>
                  Electrical and building-services work carries real risk. Safe working practice, careful checking of
                  designs and drawings, and documented testing are part of every project we deliver — not extras.
                </p>
                <p>
                  Systems are tested before handover and the results are recorded, so owners receive documentation
                  they can rely on.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="border border-white/15 p-7">
              <ShieldCheck aria-hidden className="h-8 w-8 text-volt-light" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-bold">Certifications &amp; licences</h3>
              {site.certifications.length > 0 ? (
                <ul className="mt-4 list-inside list-disc space-y-1 text-steel-300">
                  {site.certifications.map((c) => <li key={c}>{c}</li>)}
                </ul>
              ) : (
                <p className="mt-3 font-mono text-sm text-amber-signal">
                  [CERTIFICATIONS / LICENCES — add real ones in src/data/site.ts. This block stays empty until you do;
                  none are claimed.]
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="team" className="section-y">
        <div className="container-page">
          <SectionHeading id="team" index="05" eyebrow="Team overview" title="The people behind the work" />
          <ul className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-5">
            {teamGroups.map(({ group, blurb }) => (
              <li key={group} className="bg-white p-6">
                <p className="font-mono text-3xl font-bold text-navy-900">
                  {team.filter((m) => m.group === group).length}
                  <span className="text-amber-ink" title="Placeholder count">*</span>
                </p>
                <h3 className="mt-3 font-bold">{group}</h3>
                <p className="mt-1 text-sm text-steel-600">{blurb}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-steel-500">* Placeholder team entries — replace with your real team.</p>
          <Link href="/team" className="btn-outline-dark mt-8">Meet the team</Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
