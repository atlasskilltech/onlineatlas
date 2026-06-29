"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import FeatureItem from "./ui/FeatureItem";
import { PrimaryButton } from "./ui/Button";

const LOGO = "/twenty-two-section/brand-logo";

// Dummy curriculum data — shaped so real API/CMS data can replace it without
// touching the UI. Each semester has its own rows so tab switching changes view.
const SEMESTERS = [
  {
    label: "Semester 1",
    rows: [
      { type: "Core", subject: "Financial Statement Analysis", credits: 3 },
      { type: "Core", subject: "Managerial Economics", credits: 4 },
      { type: "AI", subject: "Prompt Engineering", credits: 2 },
      { type: "Business", subject: "Marketing Strategy", credits: 3 },
      { type: "Elective", subject: "Product Innovation", credits: 2 },
    ],
  },
  {
    label: "Semester 2",
    rows: [
      { type: "Core", subject: "Corporate Finance", credits: 4 },
      { type: "Core", subject: "Operations Management", credits: 3 },
      { type: "AI", subject: "Generative AI for Business", credits: 3 },
      { type: "Business", subject: "Consumer Behaviour", credits: 3 },
      { type: "Elective", subject: "Supply Chain Analytics", credits: 2 },
    ],
  },
  {
    label: "Semester 3",
    rows: [
      { type: "Core", subject: "Strategic Management", credits: 4 },
      { type: "Core", subject: "Business Law & Ethics", credits: 3 },
      { type: "AI", subject: "AI-Driven Decision Making", credits: 3 },
      { type: "Business", subject: "Digital Marketing", credits: 3 },
      { type: "Elective", subject: "FinTech Essentials", credits: 2 },
    ],
  },
  {
    label: "Semester 4",
    rows: [
      { type: "Core", subject: "Leadership & Change", credits: 3 },
      { type: "Core", subject: "Entrepreneurship", credits: 4 },
      { type: "AI", subject: "Applied Machine Learning", credits: 3 },
      { type: "Business", subject: "Brand Management", credits: 2 },
      { type: "Elective", subject: "Capstone Project", credits: 4 },
    ],
  },
];

const TOOLS = [
  { name: "Claude", src: `${LOGO}/1.png`, w: 78, h: 28 },
  { name: "Perplexity", src: `${LOGO}/2.png`, w: 79, h: 21 },
  { name: "Canva", src: `${LOGO}/3.png`, w: 74, h: 26 },
  { name: "Ideogram", src: `${LOGO}/4.png`, w: 78, h: 28 },
  { name: "CapCut", src: `${LOGO}/5.png`, w: 79, h: 21 },
  { name: "NotebookLM", src: `${LOGO}/6.png`, w: 96, h: 18 },
];

const SKILLS = [
  "Product Thinking",
  "User Research",
  "AI Product Development",
  "Analytics",
];

export default function Curriculum() {
  const [active, setActive] = useState(0);
  const rows = SEMESTERS[active].rows;

  return (
    <section className="bg-[#f6f7ee] text-atlas-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[7fr_3fr] lg:gap-12">
          {/* LEFT — heading + tabs + table */}
          <div className="min-w-0">
            <SectionHeading eyebrow="Learn What The" title="Industry Actually Uses" />

            {/* Semester tabs */}
            <div
              role="tablist"
              aria-label="Semesters"
              className="mt-6 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {SEMESTERS.map((sem, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={sem.label}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-200 ${
                      isActive
                        ? "bg-[#357e51] text-white"
                        : "bg-[#0c2340] text-white hover:bg-[#16335c]"
                    }`}
                  >
                    {sem.label}
                  </button>
                );
              })}
            </div>

            {/* Curriculum table — scrolls inside its own box on very small
                screens (never the page); full width once it fits. */}
            <div className="mt-6 overflow-x-auto rounded-2xl shadow-xl shadow-black/10">
              <table className="w-full min-w-[440px] table-fixed text-left text-sm text-white">
                <thead className="bg-[#06182f]">
                  <tr>
                    <th className="w-[22%] px-4 py-4 font-bold sm:px-6">Type</th>
                    <th className="border-l border-white/10 px-4 py-4 font-bold sm:px-6">
                      Subject
                    </th>
                    <th className="w-[18%] border-l border-white/10 px-4 py-4 font-bold sm:px-6">
                      Credits
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-[#081f3d]">
                  {rows.map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-4 text-white/90 sm:px-6">{row.type}</td>
                      <td className="border-l border-white/10 px-4 py-4 font-medium sm:px-6">
                        {row.subject}
                      </td>
                      <td className="border-l border-white/10 px-4 py-4 text-white/90 sm:px-6">
                        {row.credits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT — sidebar */}
          <div className="min-w-0">
            <h3 className="text-2xl font-extrabold tracking-tight text-atlas-navy sm:text-[1.75rem]">
              Total Credits : 87
            </h3>

            {/* Tools card */}
            <div className="mt-6 rounded-3xl bg-gradient-to-b from-[#192f60] to-[#2a4fa1] p-6 text-white shadow-xl shadow-black/20">
              <h4 className="text-base font-bold">Tools You&apos;ll Master</h4>
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex h-11 items-center justify-center rounded-lg bg-white px-1.5"
                  >
                    <Image
                      src={tool.src}
                      alt={tool.name}
                      width={tool.w}
                      height={tool.h}
                      loading="lazy"
                      className="max-h-6 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              <h4 className="mt-7 text-base font-bold">Tools You&apos;ll Master</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-white/90">
                {SKILLS.map((skill) => (
                  <FeatureItem key={skill}>{skill}</FeatureItem>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <PrimaryButton
                href="#apply"
                variant="navy"
                withArrow
                className="w-full md:w-auto"
              >
                Apply Now
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
