import Image from "next/image";
import Link from "next/link";

const ICON = "/eight-section/icon";

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const BADGES = [
  {
    label: "AI Native Learning",
    icon: `${ICON}/two/ai-first-business-education.png`,
    w: 23,
    h: 19,
    gradient: "bg-gradient-to-r from-[#1c3f78] to-[#2a8ba2]",
  },
  {
    label: "CXO Masterclasses",
    icon: `${ICON}/one/cxo-masterclasses.png`,
    w: 15,
    h: 15,
    gradient: "bg-gradient-to-r from-[#0c6e5f] to-[#06c194]",
  },
  {
    label: "Live Industry Projects",
    icon: `${ICON}/one/live-industry-projects.png`,
    w: 14,
    h: 14,
    gradient: "bg-gradient-to-r from-[#0d6f8e] to-[#10b6b2]",
  },
];

function Badge({ label, icon, w, h, gradient }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/25 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] ${gradient}`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/25">
        <Image src={icon} alt="" aria-hidden="true" width={w} height={h} className="h-3.5 w-auto" />
      </span>
      {label}
    </span>
  );
}

const FEATURES = [
  {
    title: "Industry-Relevant Learning",
    body: "Contemporary case studies, masterclasses, industry interactions, global perspectives and practical business applications that connect directly to career growth.",
    icon: `${ICON}/two/industry-relevant-learning.png`,
    w: 24,
    h: 28,
  },
  {
    title: "AI-First Business Education",
    body: "AI is embedded throughout the learning journey as a tool for decision-making, productivity, innovation and strategic thinking across every discipline.",
    icon: `${ICON}/two/ai-first-business-education.png`,
    w: 23,
    h: 19,
  },
  {
    title: "Build With Industry",
    body: "Work on live briefs with real companies, collaborate with CXOs through exclusive masterclasses, and graduate with a portfolio of work.",
    icon: `${ICON}/two/build-with-industry.png`,
    w: 33,
    h: 33,
  },
  {
    title: "A New Way to Study Business Online",
    body: "Forget pre-recorded lectures. These programs are built around doing — blending AI tools, peer learning & industry immersion into business programs designed for the world you're entering.",
    icon: `${ICON}/two/a-new-way-to-study-business-online.png`,
    w: 23,
    h: 29,
  },
  {
    title: "Skills for Careers of the Future",
    body: "Build critical capabilities such as strategic thinking, problem solving, communication, collaboration & decision-making that will define success in the decades ahead.",
    icon: `${ICON}/two/skills-for-careers-of-the-future.png`,
    w: 33,
    h: 25,
  },
  {
    title: "ATLAS SkillTech University Alumni Status",
    body: "Join a network of change-makers across business, design, law and technology. Your ATLAS alumni credential signals more than a degree, it signals that you're built for what's next.",
    icon: `${ICON}/two/atlas-skillTechuniversity-alumni-status.png`,
    w: 27,
    h: 35,
  },
];

function FeatureCard({ title, body, icon, w, h, light }) {
  return (
    <article
      className={`group rounded-2xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 sm:p-7 ${
        light
          ? "border-black/5 bg-[#f6f7ee] shadow-black/10 hover:shadow-black/20"
          : "border-white/10 bg-gradient-to-br from-[#173a8c] to-[#0a2146] shadow-black/30 hover:shadow-black/50"
      }`}
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
          light ? "bg-[#357e51]" : "bg-white"
        }`}
      >
        <Image src={icon} alt="" aria-hidden="true" width={w} height={h} loading="lazy" className="h-5 w-auto" />
      </span>
      <h3
        className={`mt-4 text-lg font-bold leading-snug ${
          light ? "text-[#0c2340]" : "text-atlas-lime"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          light ? "text-slate-600" : "text-white/70"
        }`}
      >
        {body}
      </p>
    </article>
  );
}

export default function OnlinePrograms() {
  return (
    <section className="bg-[#081f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — hero promotional card */}
        <div className="group overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
          <div className="grid lg:grid-cols-[3fr_5fr]">
            {/* Image */}
            <div className="relative aspect-[418/344] w-full overflow-hidden lg:aspect-auto lg:h-full">
              <Image
                src="/eight-section/poster/indu-maam-with-peyush-bansal.png"
                alt="ATLAS leadership in conversation with Peyush Bansal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Content */}
            <div className="bg-gradient-to-br from-[#142c78] via-[#0a82a0] to-[#22787a] p-8 sm:p-10">
              <p className="text-[13px] text-white/80 sm:text-sm">
                Where Business Education Meets the Age of AI
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2rem]">
                Online Management Programs Built
                <br className="hidden sm:block" /> for How Businesses Work Today
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {BADGES.map((b) => (
                  <Badge key={b.label} {...b} />
                ))}
              </div>

              <Link
                href="#apply"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-atlas-lime px-7 py-3 text-base font-bold text-[#0a2348] transition-colors duration-200 hover:bg-white sm:w-auto"
              >
                Apply Now
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* PART 2 — feature grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-7 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} light={i % 3 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
