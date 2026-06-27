"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
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

function Sparkle({ className }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c.5 6.2 3.3 9 9.5 9.5C15.3 10 12.5 12.8 12 19c-.5-6.2-3.3-9-9.5-9.5C8.7 9 11.5 6.2 12 0Z" />
    </svg>
  );
}

const PROGRAMS = [
  {
    degree: "BBA",
    apply: "Apply for Online BBA",
    info: [
      { label: "Mode", value: "100% Online" },
      { label: "Duration", value: "3 Years" },
      { label: "Immersion", value: "Optional, on-campus" },
      { label: "Intake", value: "Aug 2026" },
    ],
    specializations: ["Finance", "Marketing", "Business Analytics", "Entrepreneurship"],
    features: [
      "GenAI fundamentals from year one",
      "Industry credentials from leading firms",
      "Builder Pods from Day 1",
      "Optional campus immersions + city chapters",
    ],
  },
  {
    degree: "MBA",
    apply: "Apply for Online MBA",
    info: [
      { label: "Mode", value: "100% Online" },
      { label: "Duration", value: "2 Years" },
      { label: "Immersion", value: "Optional, on-campus" },
      { label: "Intake", value: "Aug 2026" },
    ],
    specializations: [
      "Finance",
      "Marketing",
      "Business Analytics",
      "Finance + Marketing",
      "Finance + Analytics",
      "Marketing + Analytics",
    ],
    features: [
      "GenAI Mastery track built with Microsoft",
      "Industry credentials from PwC, KPMG & Deloitte",
      "Harvard business simulations",
      "Optional campus immersions + city chapters",
    ],
  },
];

// Temporary auto-looping carousel config
const COPIES = 3; // duplicate the program set this many times for seamless looping
const AUTOPLAY_MS = 4000;
const TRANSITION = "transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1)";

function InfoBox({ label, value }) {
  return (
    <div className="rounded-xl bg-[#f6f7ee] px-4 py-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-[#0c2340]">{value}</p>
    </div>
  );
}

function ProgramCard({ program }) {
  return (
    <article className="flex h-full flex-col">
      {/* Title + lime divider */}
      <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
        Online {program.degree}{" "}
        <span className="text-atlas-lime">in Ai-Native Management</span>
      </h3>
      <div className="relative mt-3 h-px w-full bg-white/15">
        <span className="absolute -top-px left-0 h-[3px] w-24 rounded-full bg-atlas-lime" />
      </div>

      {/* Card body */}
      <div className="mt-5 flex flex-1 flex-col rounded-2xl border border-white/10 bg-[#152a47] p-5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 sm:p-6">
        {/* Information grid */}
        <div className="grid grid-cols-2 gap-3">
          {program.info.map((box) => (
            <InfoBox key={box.label} {...box} />
          ))}
        </div>

        {/* Specializations */}
        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.12em] text-atlas-lime">
          Specializations
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {program.specializations.map((spec) => (
            <span
              key={spec}
              className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/90 transition-colors hover:border-white/35 hover:bg-white/5"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-white/10" />

        {/* Feature list */}
        <ul className="space-y-3">
          {program.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <Image
                src="/tenth-section/icon/right.png"
                alt=""
                aria-hidden="true"
                width={14}
                height={19}
                loading="lazy"
                className="h-3.5 w-auto shrink-0"
              />
              <span className="text-[13px] text-white/70">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
          <Link
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-atlas-lime px-5 py-2.5 text-sm font-bold text-[#0c2340] transition-colors duration-200 hover:bg-white"
          >
            {program.apply}
            <ArrowRight />
          </Link>
          <Link
            href="#brochure"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            Download Brochure
            <ArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProgramsShowcase() {
  const baseLen = PROGRAMS.length;
  // Programmatically duplicate the slides (>= 3 copies) for seamless looping.
  const slides = useMemo(
    () => Array.from({ length: COPIES }).flatMap(() => PROGRAMS),
    []
  );

  const [perView, setPerView] = useState(2);
  const [index, setIndex] = useState(0);
  const [snapTick, setSnapTick] = useState(0);

  const trackRef = useRef(null);
  const animateRef = useRef(true);
  const pausedRef = useRef(false);

  const activeDot = ((index % baseLen) + baseLen) % baseLen;

  // Position the track at the current slide's measured offset (exact, gap-aware).
  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children[index]) return;
    const x = track.children[index].offsetLeft;
    track.style.transition = animateRef.current ? TRANSITION : "none";
    track.style.transform = `translate3d(${-x}px, 0, 0)`;
    if (!animateRef.current) {
      void track.offsetHeight; // commit the instant jump
      animateRef.current = true;
    }
  }, [index]);

  useLayoutEffect(() => {
    applyTransform();
  }, [applyTransform, perView, snapTick]);

  // Responsive cards-per-view (matches the lg:w-1/2 breakpoint below).
  useEffect(() => {
    const compute = () => (window.innerWidth >= 1024 ? 2 : 1);
    const onResize = () => {
      setPerView((p) => {
        const next = compute();
        return next === p ? p : next;
      });
      animateRef.current = false;
      setSnapTick((n) => n + 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Autoplay — advances one slide; pauses on hover.
  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      animateRef.current = true;
      setIndex((i) => i + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // Seamless wrap: once a full set has scrolled past, snap back by one set with
  // no animation. Copies are identical, so the reset is invisible.
  const onTransitionEnd = useCallback(() => {
    if (index >= baseLen) {
      animateRef.current = false;
      setIndex((i) => i - baseLen);
    }
  }, [index, baseLen]);

  const goToDot = useCallback((i) => {
    animateRef.current = true;
    setIndex(i);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#081f3d] text-white">
      {/* Decorative star — the asset is a low-alpha lime that composites over the
          navy into the reference's muted olive tone. */}
      <div className="pointer-events-none absolute right-0 top-6 hidden translate-x-1/4 sm:block">
        <Image
          src="/tenth-section/shape/vector.png"
          alt=""
          aria-hidden="true"
          width={173}
          height={194}
          className="h-28 w-auto lg:h-36"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-atlas-lime">
          Programs
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Business Education for an{" "}
          <span className="relative">
            A
            <span className="relative">
              i
              <Sparkle className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 text-atlas-lime sm:h-2.5 sm:w-2.5" />
            </span>
            -Native
          </span>{" "}
          World
        </h2>

        {/* Hero image */}
        <div className="relative mt-8 aspect-[1251/482] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/30 lg:mt-10">
          <Image
            src="/tenth-section/poster/1.png"
            alt="A professor teaching ATLAS students in a modern classroom"
            fill
            sizes="(max-width: 1280px) 100vw, 1216px"
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Program cards — auto-looping carousel (temporary) */}
        <div
          className="mt-10 overflow-hidden lg:mt-12"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          aria-roledescription="carousel"
        >
          <div
            ref={trackRef}
            onTransitionEnd={onTransitionEnd}
            className="flex items-stretch gap-8 will-change-transform"
          >
            {slides.map((program, i) => (
              <div
                key={`${program.degree}-${i}`}
                className="w-full shrink-0 lg:w-[calc(50%-1rem)]"
                aria-hidden={i < index || i >= index + perView}
              >
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {PROGRAMS.map((p, i) => (
            <button
              key={p.degree}
              type="button"
              aria-label={`Go to ${p.degree} program`}
              aria-current={i === activeDot}
              onClick={() => goToDot(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeDot ? "w-7 bg-atlas-lime" : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
