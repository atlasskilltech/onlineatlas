"use client";

import { useState } from "react";
import Image from "next/image";

const BASE = "/fiftheen-section/brand-logo/all";

// Tab order matches the reference navigation, left to right.
const CATEGORIES = [
  "All",
  "BFSI",
  "FMCG",
  "Consultancy",
  "Media & Entertainment",
  "Technology",
  "Retail",
];

// Logos in reference reading order (row 1: 6 logos, row 2: 7 logos).
// `width`/`height` are the native asset dimensions so next/image keeps the
// correct aspect ratio and reserves space (no layout shift). Display size is
// normalised via max-h / max-w + object-contain so every logo carries a
// similar visual weight without ever being stretched.
const LOGOS = [
  { slug: "morgan-stanley", name: "Morgan Stanley", width: 237, height: 35, categories: ["BFSI"] },
  { slug: "apple", name: "Apple", width: 134, height: 54, categories: ["Technology", "Retail"] },
  { slug: "meta", name: "Meta", width: 168, height: 63, categories: ["Technology", "Media & Entertainment"] },
  { slug: "samsung", name: "Samsung", width: 178, height: 36, categories: ["Technology", "Retail"] },
  { slug: "google", name: "Google", width: 133, height: 44, categories: ["Technology"] },
  { slug: "bcg", name: "Boston Consulting Group", width: 168, height: 49, categories: ["Consultancy"] },
  { slug: "kpmg", name: "KPMG", width: 140, height: 56, categories: ["Consultancy", "BFSI"] },
  { slug: "hdfc", name: "HDFC Bank", width: 251, height: 53, categories: ["BFSI"] },
  { slug: "ibm", name: "IBM", width: 112, height: 56, categories: ["Technology", "Consultancy"] },
  { slug: "p-g", name: "P&G", width: 94, height: 41, categories: ["FMCG"] },
  { slug: "uniliveral", name: "Unilever", width: 66, height: 66, categories: ["FMCG"] },
  { slug: "tata", name: "TATA", width: 71, height: 66, categories: ["FMCG", "Retail"] },
  { slug: "ogilvy", name: "Ogilvy", width: 138, height: 54, categories: ["Media & Entertainment"] },
];

export default function IndustryEcosystem() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? LOGOS
      : LOGOS.filter((logo) => logo.categories.includes(active));

  return (
    <section
      className="bg-atlas-navy text-white"
      aria-labelledby="industry-ecosystem-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — Section header */}
        <h2
          id="industry-ecosystem-heading"
          className="text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          Powered by <span className="text-atlas-lime">Industry</span>
        </h2>
        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-white/70 sm:text-base">
          ATLAS is powered by a strong ecosystem of industry leaders, global
          partners, and innovators, ensuring every learning experience stays
          connected to the real world.
        </p>

        {/* PART 2 — Category tabs */}
        <div className="mt-10 border-b border-white/15 sm:mt-12">
          <div
            role="tablist"
            aria-label="Filter partners by industry"
            className="-mb-px flex gap-x-7 overflow-x-auto pb-3 sm:gap-x-9 lg:gap-x-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CATEGORIES.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(category)}
                  className={`relative shrink-0 whitespace-nowrap pb-3 text-sm font-medium transition-colors duration-300 sm:text-[0.95rem] ${
                    isActive
                      ? "text-atlas-lime"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {category}
                  <span
                    className={`absolute -bottom-px left-0 h-0.5 w-full origin-left rounded-full bg-atlas-lime transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* PART 3 — Logo grid (re-keyed per filter so it fades in) */}
        <div
          key={active}
          className="mt-12 flex animate-fade-in flex-wrap items-center justify-center gap-x-10 gap-y-10 sm:mt-14 sm:gap-x-12 lg:mt-16 lg:gap-x-14 lg:gap-y-12"
        >
          {filtered.map((logo) => (
            <div
              key={logo.slug}
              className="flex h-10 items-center justify-center sm:h-11 lg:h-12"
            >
              <Image
                src={`${BASE}/${logo.slug}.png`}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 150px"
                className="h-auto w-auto max-h-8 max-w-[110px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:max-h-9 sm:max-w-[130px] lg:max-h-9 lg:max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
