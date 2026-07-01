import SectionHeading from "./ui/SectionHeading";
import StatHighlights from "./ui/StatHighlights";

const HIGHLIGHTS = [
  { value: "2 Years", label: "Online Program" },
  { value: "Live + Recorded", label: "Interactive Learning" },
  { value: "87 Credits", label: "Comprehensive Curriculum" },
  { value: "Learn Flexibly", label: "Up to 4 Years to Complete" },
];

export default function ProgramOverview() {
  return (
    <section className="bg-[#f6f7ee]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — content */}
        <SectionHeading
          eyebrow="Future-Ready"
          title="AI-First MBA"
          description="India's premier AI-native Online MBA — built for leaders who think beyond credentials. ATLAS embeds AI into the way you think, decide, and lead, pairing strong business fundamentals with AI-driven leadership practice for the modern enterprise. The result is strategic perspective, AI-powered decision-making, and the confidence to lead through complexity. For those who choose progress over convention, and influence over hierarchy."
          descriptionClassName="max-w-6xl"
        />

        {/* PART 2 — program highlights */}
        <StatHighlights items={HIGHLIGHTS} className="mt-12 lg:mt-16" />
      </div>
    </section>
  );
}
