"use client";

import { useState } from "react";
import Image from "next/image";

const ICON = "/seventheen-section/icon/plus-cross.png";

// Single reusable FAQ accordion (one item open at a time). Shared by the
// Homepage Faq and the Programs ProgramFaq so the cards, animation, icon,
// spacing and accessibility live in one place.
export function FaqItem({ item, isOpen, onToggle }) {
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

export default function FaqAccordion({
  faqs,
  defaultOpenIndex = 0,
  className = "space-y-2.5",
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={className}>
      {faqs.map((item, i) => (
        <FaqItem
          key={item.q}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
