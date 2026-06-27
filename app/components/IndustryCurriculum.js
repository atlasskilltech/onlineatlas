import Image from "next/image";

const BASE = "/thirteen-section/industry-leaders";

const STATS = [
  { value: "25+", label: "Industry & Startup Showcases" },
  { value: "65+", label: "Global University Partnerships" },
  { value: "550+", label: "Hiring Partners" },
  { value: "1200+", label: "Alumni-Led Ventures" },
  { value: "1000+", label: "Expert & CXO Masterclasses" },
];

// Profile cards — order matches the reference left-to-right.
const LEADERS = [
  {
    slug: "niranjan-hiranandani",
    first: "Niranjan",
    last: "Hiranandani",
    company: "House of Hiranandani",
    logoW: 142,
    logoH: 33,
  },
  {
    slug: "falguni-nair",
    first: "Falguni",
    last: "Nair",
    company: "Nykaa",
    logoW: 88,
    logoH: 28,
  },
  {
    slug: "tim-cook",
    first: "Tim",
    last: "Cook",
    company: "Apple",
    logoW: 108,
    logoH: 44,
  },
  {
    slug: "karan-johar",
    first: "Karan",
    last: "Johar",
    company: "Dharma Productions",
    logoW: 116,
    logoH: 38,
  },
  {
    slug: "piyush-bansal",
    first: "Piyush",
    last: "Bansal",
    company: "Lenskart",
    logoW: 55,
    logoH: 41,
  },
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

function LeaderCard({ leader }) {
  return (
    <article className="group relative aspect-[4/5] min-w-[210px] snap-start overflow-hidden rounded-2xl border border-black/5 bg-atlas-navy shadow-[0_12px_30px_-12px_rgba(12,35,64,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-14px_rgba(12,35,64,0.55)] sm:min-w-[230px] lg:min-w-0">
      <Image
        src={`${BASE}/${leader.slug}/person.png`}
        alt={`${leader.first} ${leader.last}, ${leader.company}`}
        fill
        sizes="(max-width: 640px) 230px, (max-width: 1024px) 33vw, 18vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Soft cinematic gradient — fades upward into transparency,
          covering ~45% of the card and respecting the rounded corners. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(to_top,rgba(8,18,39,0.98)_0%,rgba(8,18,39,0.88)_25%,rgba(8,18,39,0.55)_50%,rgba(8,18,39,0.18)_75%,transparent_100%)]" />

      {/* Name + company logo, positioned inside the gradient */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="flex items-end justify-between gap-2 px-3.5 pb-3.5">
          <p className="text-sm font-bold leading-tight text-[#e7c84b]">
            <span className="block">{leader.first}</span>
            <span className="block">{leader.last}</span>
          </p>
          <Image
            src={`${BASE}/${leader.slug}/logo.png`}
            alt={`${leader.company} logo`}
            width={leader.logoW}
            height={leader.logoH}
            className="h-5 w-auto shrink-0 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </article>
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
          {LEADERS.map((leader) => (
            <LeaderCard key={leader.slug} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
