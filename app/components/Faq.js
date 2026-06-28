"use client";

import { useState } from "react";
import Image from "next/image";

const ICON = "/seventheen-section/icon/plus-cross.png";
const STAR = "/seventheen-section/shape/vector.png";

// FAQ content is data-driven; map over it to render the accordion.
const FAQS = [
  {
    q: "Is the ATLAS Online degree UGC recognised?",
    a: "Yes. The Online MBA and BBA carry the same UGC-DEB recognition and entitlement as ATLAS' on-campus programs — a fully valid degree from ATLAS SkillTech University.",
  },
  {
    q: "Is it really 100% online?",
    a: "Yes. Lectures, assignments, mentoring, and assessments are delivered entirely online through our digital campus, so you can learn from anywhere without ever visiting in person.",
  },
  {
    q: "What makes ATLAS Online different?",
    a: "ATLAS Online is built around industry-integrated learning — live projects, mentorship from working professionals, and a curriculum co-created with industry leaders, not just recorded lectures.",
  },
  {
    q: "What are the fees and EMI options?",
    a: "Programs are priced to stay accessible, with flexible no-cost EMI plans and scholarship options. Our admissions team shares a detailed, transparent fee breakdown during counselling.",
  },
  {
    q: "Who is this program for?",
    a: "Working professionals, recent graduates, and career switchers who want a UGC-recognised degree with real industry exposure while continuing to work or study on their own schedule.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl bg-white shadow-md shadow-black/5 transition-shadow duration-300 hover:shadow-lg">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-3 text-left sm:px-6 sm:py-3.5"
      >
        <span className="text-sm font-bold text-atlas-navy sm:text-[15px]">
          {item.q}
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center">
          <Image
            src={ICON}
            alt=""
            aria-hidden="true"
            width={15}
            height={27}
            className={`h-auto w-[15px] transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* grid-rows trick animates height smoothly with no JS measuring */}
      <div
        className={`grid px-5 transition-all duration-300 ease-out sm:px-6 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-[13px] leading-relaxed text-atlas-navy/60">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-atlas-navy text-white"
      aria-labelledby="faq-heading"
    >
      {/* Decorative star — bleeds off the bottom-left edge */}
      <Image
        src={STAR}
        alt=""
        aria-hidden="true"
        width={270}
        height={386}
        className="pointer-events-none absolute bottom-0 left-0 w-[210px] -translate-x-1/4 translate-y-1/4 select-none opacity-40 sm:w-[250px] lg:w-[280px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:items-start lg:gap-12">
          {/* PART 1 — Left content */}
          <div>
            <h2 id="faq-heading" className="tracking-tight">
              <span className="block text-4xl font-medium leading-tight text-white sm:text-[2.6rem]">
                Questions, answered
              </span>
              <span className="mt-3 block text-4xl font-extrabold leading-[1.1] text-atlas-lime sm:text-[2.8rem]">
                Things every
                <br />
                applicant asks.
              </span>
            </h2>
          </div>

          {/* PART 2 — FAQ accordion */}
          <div className="space-y-2.5">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
