import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/ProcessTimeline";

export function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="section-y">
      <div className="container-page">
        <SectionHeading id="process-title"
          index="06"
          eyebrow="Work process"
          title="A clear path from enquiry to handover"
          text="Five steps, so you always know where your project stands."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}
