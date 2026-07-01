import SectionHeading from "./ui/SectionHeading";
import ProfileCard from "./ui/ProfileCard";
import { INDUSTRY_LEADERS } from "../data/leaders";

export default function LeadersPlaybook() {
  return (
    <section
      className="bg-atlas-lime"
      aria-label="Where leaders share their playbook"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — header */}
        <SectionHeading eyebrow="Learn Directly from" title=" Leaders Shaping Industry" />

        {/* PART 2 — speaker cards:
            mobile = horizontal snap-scroll, tablet = 3 per row, desktop = 5 in a row. */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0 lg:mt-12 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {INDUSTRY_LEADERS.map((leader) => (
            <ProfileCard
              key={leader.slug}
              leader={leader}
              layoutClass="min-w-[260px] snap-start sm:min-w-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
