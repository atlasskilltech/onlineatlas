"use client";

import { useState } from "react";

function Sparkle({ className }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c.5 6.2 3.3 9 9.5 9.5C15.3 10 12.5 12.8 12 19c-.5-6.2-3.3-9-9.5-9.5C8.7 9 11.5 6.2 12 0Z" />
    </svg>
  );
}

// CORE = foundational, AI = AI-native, EDGE = human/durable skills
const CATEGORY = {
  CORE: "bg-[#e8ebde] text-[#5b6650]",
  AI: "bg-[#dcedcb] text-[#5d7d39]",
  EDGE: "bg-[#f4e9c2] text-[#8c701d]",
};

const PHASES = [
  {
    phase: "Phase 01",
    title: "Build the base",
    badge: "Phase 01 • Foundations",
    desc: "Core management, accounting and statistics — paired with a GenAI Foundations track built with Microsoft and your first hands-on AI project.",
    subjects: [
      { cat: "CORE", name: "Principles of Management" },
      { cat: "CORE", name: "Financial Accounting" },
      { cat: "CORE", name: "Business Statistics" },
      { cat: "AI", name: "GenAI Foundations (Microsoft)" },
      { cat: "AI", name: "AI Project I" },
      { cat: "EDGE", name: "Communication & Storytelling" },
    ],
  },
  {
    phase: "Phase 02",
    title: "Business meets AI",
    badge: "Phase 02 • Integration",
    desc: "Marketing, finance and operations meet applied AI — learn to embed automation and analytics into everyday business decisions.",
    subjects: [
      { cat: "CORE", name: "Marketing Management" },
      { cat: "CORE", name: "Managerial Economics" },
      { cat: "CORE", name: "Operations Management" },
      { cat: "AI", name: "AI for Business Analytics" },
      { cat: "AI", name: "AI Project II" },
      { cat: "EDGE", name: "Design Thinking" },
    ],
  },
  {
    phase: "Phase 03",
    title: "Go deep + go live",
    badge: "Phase 03 • Specialization",
    desc: "Specialize in your chosen track and apply it to real industry briefs through live projects and practitioner-led masterclasses.",
    subjects: [
      { cat: "CORE", name: "Strategic Management" },
      { cat: "CORE", name: "Corporate Finance" },
      { cat: "AI", name: "Generative AI in Practice" },
      { cat: "AI", name: "Live Industry Project" },
      { cat: "EDGE", name: "Leadership & Negotiation" },
      { cat: "EDGE", name: "Personal Branding" },
    ],
  },
  {
    phase: "Phase 04",
    title: "Capstone & the human edge",
    badge: "Phase 04 • Capstone",
    desc: "Bring it all together in an industry capstone, while sharpening the durable human skills that AI can't replace.",
    subjects: [
      { cat: "CORE", name: "Business Capstone" },
      { cat: "AI", name: "AI Capstone Project" },
      { cat: "AI", name: "Responsible & Ethical AI" },
      { cat: "EDGE", name: "Executive Communication" },
      { cat: "EDGE", name: "Entrepreneurial Mindset" },
      { cat: "EDGE", name: "Career Accelerator" },
    ],
  },
];

function CategoryBadge({ cat }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${CATEGORY[cat]}`}
    >
      {cat}
    </span>
  );
}

function SubjectCard({ cat, name }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-[#f6f7ee] px-3.5 py-3 transition-colors duration-200 hover:border-black/15 hover:bg-[#eef0e2]">
      <CategoryBadge cat={cat} />
      <span className="text-sm font-medium text-[#0c2340]">{name}</span>
    </div>
  );
}

function PhaseButton({ phase, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`cursor-pointer rounded-xl px-5 py-4 text-left transition-all duration-200 ${
        active
          ? "bg-atlas-lime shadow-lg shadow-black/10"
          : "bg-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
      }`}
    >
      <p
        className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
          active ? "text-[#5b6b3f]" : "text-slate-400"
        }`}
      >
        {phase.phase}
      </p>
      <p className="mt-1 text-base font-bold text-[#0c2340] sm:text-lg">
        {phase.title}
      </p>
    </button>
  );
}

export default function AiCurriculum() {
  const [active, setActive] = useState(0);
  const current = PHASES[active];

  return (
    <section className="bg-[#081f3d] text-white" aria-labelledby="curriculum-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-atlas-lime">
          The AI-First Curriculum
        </p>
        <h2
          id="curriculum-heading"
          className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]"
        >
          <span className="relative">
            A
            <span className="relative">
              i
              <Sparkle className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 text-atlas-lime sm:h-2.5 sm:w-2.5" />
            </span>
          </span>{" "}
          Skills Embedded in Every Subject
        </h2>

        {/* Two-column layout */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* LEFT — phase navigation */}
          <nav aria-label="Curriculum phases" className="flex flex-col gap-3">
            {PHASES.map((phase, i) => (
              <PhaseButton
                key={phase.phase}
                phase={phase}
                active={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </nav>

          {/* RIGHT — content card */}
          <div className="rounded-3xl bg-white p-6 text-[#0c2340] shadow-2xl shadow-black/30 sm:p-8">
            {/* key re-triggers the fade-in animation on phase change */}
            <div key={active} className="animate-fade-in">
              <span className="inline-flex items-center rounded-full bg-[#081f3d] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80">
                {current.badge}
              </span>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {current.desc}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {current.subjects.map((s) => (
                  <SubjectCard key={s.name} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
