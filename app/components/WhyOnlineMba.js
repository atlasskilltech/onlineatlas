import { PrimaryButton } from "./ui/Button";
import ComparisonSection from "./ComparisonSection";
import { DIFFERENCE_ROWS } from "../data/difference";

// Programs comparison — static list on a dark section with a cream card.
// Same shared ComparisonSection, themed via props.
export default function WhyOnlineMba() {
  return (
    <ComparisonSection
      ariaLabelledBy="why-online-heading"
      eyebrow="Why Online"
      eyebrowClassName="text-xs font-bold uppercase tracking-[0.18em] text-white/60"
      heading="MBA Stands Out"
      headingId="why-online-heading"
      headingClassName="mt-2 text-3xl font-extrabold tracking-tight text-atlas-lime sm:text-4xl"
      description="We've reimagined online business education. Here's how we're different from typical programs."
      descriptionClassName="mt-4 text-sm leading-relaxed text-white/70 sm:text-[15px]"
      rows={DIFFERENCE_ROWS}
      sectionClassName="bg-[#081f3d] text-white"
      innerClassName="mx-auto max-w-3xl"
      cardClassName="mt-8 rounded-3xl bg-[#f6f7ee] p-6 shadow-2xl shadow-black/30 sm:p-8 lg:mt-10 lg:p-9"
      dividerClassName="divide-black/10"
      oldClassName="text-gray-400"
      titleClassName="text-atlas-navy"
      descClassName="text-atlas-navy/60"
      cta={
        <PrimaryButton href="#apply" variant="navy" withArrow className="mt-7 w-full">
          Apply Now
        </PrimaryButton>
      }
    />
  );
}
