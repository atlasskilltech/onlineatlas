"use client";

import { useState } from "react";
import Image from "next/image";

const ICON = "/ui-assets/icons-image/green";
const ICONWHITE = "/ui-assets/icons-image/white";

// One reusable "traditional vs ATLAS" comparison section.
//  - `collapsible` → homepage accordion (one open at a time, chevrons).
//  - `!collapsible` → static list (all descriptions visible).
// All colours/typography/layout are driven by className props so each page
// themes it without forking the component. Defaults render the homepage style.
export default function ComparisonSection({
  ariaLabelledBy,
  eyebrow,
  eyebrowClassName = "text-xs font-bold uppercase tracking-[0.18em] text-[#081f3d]",
  heading,
  headingId,
  headingClassName = "mt-3 text-2xl font-medium tracking-tight text-[#081f3d] sm:text-3xl lg:text-4xl",
  description,
  descriptionClassName = "mt-4 text-sm leading-relaxed text-white/70 sm:text-[15px]",
  rows,
  cta,
  oldIconSrc = `${ICONWHITE}/wrong.png`,
  rightIconSrc = `${ICON}/right.png`,
  collapsible = false,
  defaultOpenIndex = 0,
  sectionClassName = "bg-[#f6f7ee]",
  innerClassName = "",
  cardClassName = "mt-8 rounded-3xl bg-[#081f3d] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:mt-10 lg:p-10",
  dividerClassName = "divide-white/10",
  oldClassName = "text-white/40",
  titleClassName = "text-atlas-lime",
  descClassName = "text-white/60",
  chevronClosedClassName = "text-white/40 group-hover:text-white/70",
  chevronOpenClassName = "text-atlas-lime",
}) {
  const [activeIndex, setActiveIndex] = useState(defaultOpenIndex);

  return (
    <section className={sectionClassName} aria-labelledby={ariaLabelledBy}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className={innerClassName}>
          {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}
          {heading ? (
            <h2 id={headingId} className={headingClassName}>
              {heading}
            </h2>
          ) : null}
          {description ? <p className={descriptionClassName}>{description}</p> : null}

          <div className={cardClassName}>
            <ul className={`divide-y ${dividerClassName}`}>
              {rows.map((row, i) => {
                const open = collapsible && activeIndex === i;
                const base = ariaLabelledBy || "comparison";
                const panelId = `${base}-panel-${i}`;
                const headerId = `${base}-header-${i}`;

                return (
                  <li key={row.title} className="py-5">
                    {collapsible ? (
                      <>
                        <button
                          type="button"
                          id={headerId}
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() =>
                            setActiveIndex((cur) => (cur === i ? -1 : i))
                          }
                          className="group flex w-full items-center gap-4 text-left"
                        >
                          <span className="flex-1">
                            <span className="flex items-center gap-3">
                              <Image
                                src={oldIconSrc}
                                alt=""
                                aria-hidden="true"
                                width={22}
                                height={22}
                                loading="lazy"
                                className="h-5 w-5 shrink-0"
                              />
                              <span
                                className={`text-sm line-through sm:text-[15px] ${oldClassName}`}
                              >
                                {row.old}
                              </span>
                            </span>
                            <span className="mt-3 flex items-center gap-3">
                              <Image
                                src={rightIconSrc}
                                alt=""
                                aria-hidden="true"
                                width={22}
                                height={23}
                                loading="lazy"
                                className="h-5 w-5 shrink-0"
                              />
                              <span
                                className={`text-sm font-bold sm:text-base ${titleClassName}`}
                              >
                                {row.title}
                              </span>
                            </span>
                          </span>
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
                              open
                                ? `rotate-180 ${chevronOpenClassName}`
                                : chevronClosedClassName
                            }`}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>

                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={headerId}
                          className={`grid transition-all duration-300 ease-out ${
                            open
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p
                              className={`pl-8 pt-2 text-xs leading-relaxed sm:text-[13px] ${descClassName}`}
                            >
                              {row.desc}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <Image
                            src={oldIconSrc}
                            alt="Not at ATLAS"
                            width={22}
                            height={22}
                            loading="lazy"
                            className="h-5 w-5 shrink-0"
                          />
                          <span
                            className={`text-sm line-through sm:text-[15px] ${oldClassName}`}
                          >
                            {row.old}
                          </span>
                        </div>
                        <div className="mt-3 flex items-start gap-3">
                          <Image
                            src={rightIconSrc}
                            alt="At ATLAS"
                            width={22}
                            height={23}
                            loading="lazy"
                            className="mt-0.5 h-5 w-5 shrink-0"
                          />
                          <div className="min-w-0">
                            <p
                              className={`text-sm font-bold sm:text-base ${titleClassName}`}
                            >
                              {row.title}
                            </p>
                            <p
                              className={`mt-1 text-[13px] leading-relaxed sm:text-sm ${descClassName}`}
                            >
                              {row.desc}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>

            {cta}
          </div>
        </div>
      </div>
    </section>
  );
}
