import ProfileCard from "./ui/ProfileCard";
import { INDUSTRY_LEADERS } from "../data/leaders";

const STATS = [
  { value: "25+", label: "Industry & Startup Showcases" },
  { value: "65+", label: "Global University Partnerships" },
  { value: "550+", label: "Hiring Partners" },
  { value: "1200+", label: "Alumni-Led Ventures" },
  { value: "1000+", label: "Expert & CXO Masterclasses" },
];

function StatBlock({ value, label }) {
  return (
    <div>
      <p className="text-3xl font-extrabold tracking-tight text-[#2f9e44] sm:text-4xl lg:text-[2.75rem] lg:leading-none">
        {value}
      </p>
      <p className="mt-2 text-sm font-semibold leading-snug text-atlas-navy">
        {label}
      </p>
    </div>
  );
}

export default function IndustryCurriculum() {
  return (
    <section
      className="bg-[#f4f3e8]"
      aria-labelledby="industry-curriculum-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — Header */}
        <h2
          id="industry-curriculum-heading"
          className="text-3xl font-extrabold tracking-tight text-atlas-navy sm:text-4xl lg:text-[2.75rem]"
        >
          Industry Integrated Curriculum
        </h2>
        <p className="mt-4 max-w-4xl text-[15px] leading-relaxed text-atlas-navy/80 sm:text-base">
          Gain a front-row seat to how CXOs make decisions, how industries
          evolve, and what employers seek in the age of AI. Through live
          projects, masterclasses, mentorship, and industry interactions,
          you&apos;ll build the skills, network, and confidence to thrive in the
          future of work.
        </p>

        {/* PART 2 — Statistics */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-8">
          {STATS.map((stat) => (
            <StatBlock key={stat.label} {...stat} />
          ))}
        </div>

        {/* PART 3 — Industry leader cards.
            Horizontal snap-scroll on mobile/tablet, 5-col grid on desktop. */}
        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] lg:mt-14 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {INDUSTRY_LEADERS.map((leader) => (
            <ProfileCard key={leader.slug} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
