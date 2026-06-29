"use client";

import { useState } from "react";
import Image from "next/image";
import FaqAccordion from "./ui/FaqAccordion";

const STAR = "/seventheen-section/shape/vector.png";

// Two local datasets — switching tabs swaps the accordion content (no API).
const TABS = [
  {
    id: "overview",
    label: "Program Overview",
    faqs: [
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
    ],
  },
  {
    id: "admissions",
    label: "Admissions",
    faqs: [
      {
        q: "How do I apply to ATLAS Online?",
        a: "Submit the online application form with your academic details and documents. Our admissions team then guides you through eligibility, counselling, and seat confirmation.",
      },
      {
        q: "What are the eligibility criteria?",
        a: "A recognised bachelor's degree for the MBA, or 10+2 for the BBA, with the minimum aggregate marks specified for each program.",
      },
      {
        q: "What documents are required?",
        a: "A government ID, your academic mark sheets and certificates, a passport-size photograph, and any program-specific documents shared during counselling.",
      },
      {
        q: "Is there an entrance exam?",
        a: "No separate entrance exam is required. Admission is based on your application, academic profile, and a counselling discussion with our team.",
      },
      {
        q: "When do cohorts start?",
        a: "New cohorts begin at regular intervals through the year. Your admissions counsellor shares the next available start date for your program.",
      },
    ],
  },
];

export default function ProgramFaq() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-atlas-navy text-white"
      aria-labelledby="program-faq-heading"
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
        <div className="grid gap-10 lg:grid-cols-[42fr_58fr] lg:items-start lg:gap-12">
          {/* Left — heading */}
          <div>
            <h2 id="program-faq-heading" className="tracking-tight">
              <span className="block text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
                Frequently Asked
              </span>
              <span className="mt-1 block text-4xl font-extrabold leading-[1.1] text-atlas-lime sm:text-5xl">
                Questions
              </span>
            </h2>
          </div>

          {/* Right — segmented toggle + accordion */}
          <div>
            <div
              role="tablist"
              aria-label="FAQ categories"
              className="flex w-full rounded-full bg-[#f4f3e8] p-1 sm:inline-flex sm:w-auto"
            >
              {TABS.map((tab, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`flex-1 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 sm:flex-none ${
                      isActive
                        ? "bg-atlas-navy text-white shadow-sm"
                        : "text-atlas-navy/70 hover:text-atlas-navy"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* key remount resets the open item when the tab changes */}
            <div className="mt-5">
              <FaqAccordion key={TABS[active].id} faqs={TABS[active].faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
