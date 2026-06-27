"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ICON = "/ninth-section/icon";

const ROWS = [
  {
    old: "Watch lectures",
    title: "Learn with AI",
    desc: "Master AI tools, prompting, automation, and AI-enabled business decision-making.",
  },
  {
    old: "Complete assignments",
    title: "Build a Portfolio of Impact",
    desc: "Graduate with real projects, business solutions, and demonstrable proof of your capabilities.",
  },
  {
    old: "Learn in isolation",
    title: "Learn from CXOs & Experts",
    desc: "Gain insights through masterclasses, mentorship, and leadership sessions with industry leaders.",
  },
  {
    old: "Follow a fixed curriculum",
    title: "Build with Industry",
    desc: "Work on live business challenges and industry projects guided by practitioners.",
  },
  {
    old: "Get a certificate",
    title: "Accelerate Your Career & Get a Business Degree",
    desc: "Develop future-ready skills, expand your network, and position yourself for growth in an evolving job market.",
  },
];

function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 shrink-0 transition-[transform,color] duration-300 ${
        open ? "rotate-180 text-atlas-lime" : "text-white/40 group-hover:text-white/70"
      }`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function AccordionItem({ row, index, open, onToggle }) {
  const panelId = `difference-panel-${index}`;
  const headerId = `difference-header-${index}`;

  return (
    <li className="border-t border-white/10 first:border-t-0">
      <div className="py-5">
        <button
          type="button"
          id={headerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center gap-4 text-left"
        >
          <span className="flex-1">
            {/* Old, traditional approach */}
            <span className="flex items-center gap-3">
              <Image
                src={`${ICON}/wrong.png`}
                alt=""
                aria-hidden="true"
                width={22}
                height={22}
                loading="lazy"
                className="h-5 w-5 shrink-0"
              />
              <span className="text-sm text-white/40 line-through sm:text-[15px]">
                {row.old}
              </span>
            </span>

            {/* ATLAS approach */}
            <span className="mt-3 flex items-center gap-3">
              <Image
                src={`${ICON}/right.png`}
                alt=""
                aria-hidden="true"
                width={22}
                height={23}
                loading="lazy"
                className="h-5 w-5 shrink-0"
              />
              <span className="text-sm font-bold text-atlas-lime sm:text-base">
                {row.title}
              </span>
            </span>
          </span>

          <Chevron open={open} />
        </button>

        {/* Collapsible description — animates height + opacity via grid-rows */}
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className={`grid transition-all duration-300 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="pl-8 pt-2 text-xs leading-relaxed text-white/60 sm:text-[13px]">
              {row.desc}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function TheDifference() {
  // Only one item open at a time; the first item is expanded by default.
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f6f7ee]" aria-labelledby="difference-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#081f3d]">
          The Difference
        </p>
        <h2
          id="difference-heading"
          className="mt-3 text-2xl font-medium tracking-tight text-[#081f3d] sm:text-3xl lg:text-4xl"
        >
          Other Online Business Programs vs.{" "}
          <span className="font-extrabold">ATLAS</span>
        </h2>

        {/* Comparison card */}
        <div className="mt-8 rounded-3xl bg-[#081f3d] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:mt-10 lg:p-10">
          <ul>
            {ROWS.map((row, i) => (
              <AccordionItem
                key={row.title}
                row={row}
                index={i}
                open={activeIndex === i}
                onToggle={() => setActiveIndex((cur) => (cur === i ? -1 : i))}
              />
            ))}
          </ul>

          <Link
            href="#apply"
            className="mt-7 flex w-full items-center justify-center rounded-xl bg-atlas-lime py-3.5 text-sm font-bold text-[#081f3d] shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-white sm:text-base"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
