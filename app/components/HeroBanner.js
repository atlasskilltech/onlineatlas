"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "./ui/Badge";
import HeroBackground from "./ui/HeroBackground";
import { PrimaryButton, SecondaryButton } from "./ui/Button";
import { ArrowRight } from "./ui/icons";

const PROGRAMS = {
  mba: {
    tab: "Online MBA",
    title: ["Online MBA", "AI-Native Management"],
    specs: [
      { label: "Duration", value: "2 Years" },
      { label: "Mode", value: "100% Online" },
      { label: "Immersion", value: "Optional, on-campus" },
      { label: "Intake", value: "Oct 2026" },
    ],
    price: "₹2,12,500",
    original: "₹2,50,000",
    emi: "₹8,854",
  },
  bba: {
    tab: "Online BBA",
    title: ["Online BBA", "AI-Native Management"],
    specs: [
      { label: "Duration", value: "3 Years" },
      { label: "Mode", value: "100% Online" },
      { label: "Immersion", value: "Optional, on-campus" },
      { label: "Intake", value: "Oct 2026" },
    ],
    price: "₹1,80,000",
    original: "₹2,10,000",
    emi: "₹7,500",
  },
};

function ProgramCard() {
  const [active, setActive] = useState("mba");
  const program = PROGRAMS[active];

  return (
    <div className="w-full max-w-md rounded-[28px] bg-white p-4 text-atlas-navy shadow-2xl shadow-black/30 sm:p-6">
      {/* Segmented toggle */}
      <div className="flex rounded-full bg-[#eef0f2] p-1">
        {Object.entries(PROGRAMS).map(([key, p]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            aria-pressed={active === key}
            className={`flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
              active === key
                ? "bg-atlas-navy text-white shadow-sm"
                : "text-gray-500 hover:text-atlas-navy"
            }`}
          >
            {p.tab}
          </button>
        ))}
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-extrabold leading-snug sm:text-2xl">
        {program.title[0]}
        <br />
        {program.title[1]}
      </h2>

      {/* Specs grid */}
      <dl className="mt-4 grid grid-cols-2 gap-3">
        {program.specs.map((s) => (
          <div key={s.label} className="rounded-2xl bg-[#f6f7ed] px-4 py-3">
            <dt className="text-[11px] font-bold uppercase tracking-wide text-gray-400">
              {s.label}
            </dt>
            <dd className="mt-1 text-sm font-bold text-atlas-navy">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Scholarship / price */}
      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[#001f3f] px-5 py-4 text-white">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-white/60">
            After Scholarship
          </p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold">{program.price}</span>
            <span className="text-sm text-white/50 line-through">
              {program.original}
            </span>
          </p>
        </div>
        <div className="text-right">
          <span className="text-lg font-extrabold text-atlas-lime">
            {program.emi}
          </span>
          <p className="text-[11px] text-white/60">/mo · EMI</p>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="#apply"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#529649] py-3.5 text-base font-bold text-atlas-navy transition-colors hover:bg-[#47853f]"
      >
        Apply Now
        <ArrowRight />
      </Link>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-atlas-navy text-white">
      {/* Background photo + navy overlay (provided assets) */}
      <HeroBackground />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* LEFT — copy */}
          <div>
            <Badge>Built for the AI era</Badge>

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              Online Business Education
              <br />
              for an{" "}
              <span className="text-atlas-lime">
                A
                <Image
                  src="/ui-assets/icons-image/yellow/i.png"
                  alt="i"
                  width={14}
                  height={51}
                  className="inline-block h-[0.92em] w-auto align-baseline"
                />
                -Native World
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85  sm:text-lg">
              In the AI era, the leaders who will define the next decade are
              those who know how to think, decide, and{" "}
              <strong className="font-bold text-[#DDE567]">build with AI</strong>.{" "}
              <strong className="font-bold text-[#DDE567]">
                ATLAS Online School
              </strong>{" "}
              of Management&apos;s AI-native programs are built for the world
              you&apos;re already working in, combining{" "}
              <strong className="font-bold text-[#DDE567]">
                world class faculty
              </strong>
              ,{" "}
              <strong className="font-bold text-[#DDE567]">industry mentors</strong>
              , and{" "}
              <strong className="font-bold text-[#DDE567]">
                real-world AI application
              </strong>{" "}
              to accelerate your career.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryButton href="#apply" withArrow>
                Start your application
              </PrimaryButton>
              <SecondaryButton href="#programs">Explore Programs</SecondaryButton>
            </div>
          </div>

          {/* RIGHT — program card */}
          <div className="lg:justify-self-end">
            <ProgramCard />
          </div>
        </div>
      </div>
    </section>
  );
}
