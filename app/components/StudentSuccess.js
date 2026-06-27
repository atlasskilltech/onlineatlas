"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const BASE = "/sixth-section/students";

// Full literal gradient strings so Tailwind's scanner keeps them in the build.
const GRADIENTS = {
  blue: "bg-gradient-to-b from-[#16307b] via-[#0c5f8f] to-[#08a4b4]",
  green: "bg-gradient-to-tr from-[#01382c] via-[#057151] to-[#07c79f]",
  teal: "bg-gradient-to-b from-[#0a3f54] via-[#0a6470] to-[#03888f]",
};

const STUDENTS = [
  { slug: "dia-joshi", first: "Dia", last: "Joshi", title: "Consultant", company: "IBM", gradient: "blue", personW: 187, personH: 216, logoW: 120, logoH: 60 },
  { slug: "vansh-mehta", first: "Vansh", last: "Mehta", title: "Investment Banking Analyst", company: "J.P. Morgan", gradient: "green", personW: 170, personH: 216, logoW: 126, logoH: 31 },
  { slug: "mridul-nadar", first: "Mridul", last: "Nadar", title: "Analyst", company: "Accenture", gradient: "teal", personW: 198, personH: 232, logoW: 127, logoH: 44 },
  { slug: "kanak-suri", first: "Kanak", last: "Suri", title: "Associate", company: "Boston Consulting Group", gradient: "blue", personW: 155, personH: 236, logoW: 124, logoH: 36 },
  { slug: "durva-pawaskar", first: "Durva", last: "Pawaskar", title: "Brand Strategist", company: "dentsu", gradient: "teal", personW: 155, personH: 228, logoW: 133, logoH: 29 },
  { slug: "annika-acharya", first: "Annika", last: "Acharya", title: "Consultant", company: "KPMG", gradient: "blue", personW: 162, personH: 204, logoW: 121, logoH: 48 },
  { slug: "atharv-gorkhe", first: "Atharv", last: "Gorkhe", title: "Internship at", company: "Axis Max Life Insurance", gradient: "green", personW: 147, personH: 226, logoW: 127, logoH: 42 },
  { slug: "jeroze-baria", first: "Jeroze", last: "Baria", title: "Internship at", company: "BMW", gradient: "teal", personW: 162, personH: 204, logoW: 86, logoH: 80 },
  { slug: "dia-joshi", first: "Dia", last: "Joshi", title: "Consultant", company: "IBM", gradient: "blue", personW: 187, personH: 216, logoW: 120, logoH: 60 },
  { slug: "vansh-mehta", first: "Vansh", last: "Mehta", title: "Investment Banking Analyst", company: "J.P. Morgan", gradient: "green", personW: 170, personH: 216, logoW: 126, logoH: 31 },
  { slug: "mridul-nadar", first: "Mridul", last: "Nadar", title: "Analyst", company: "Accenture", gradient: "teal", personW: 198, personH: 232, logoW: 127, logoH: 44 },
  { slug: "kanak-suri", first: "Kanak", last: "Suri", title: "Associate", company: "Boston Consulting Group", gradient: "blue", personW: 155, personH: 236, logoW: 124, logoH: 36 },
  { slug: "durva-pawaskar", first: "Durva", last: "Pawaskar", title: "Brand Strategist", company: "dentsu", gradient: "teal", personW: 155, personH: 228, logoW: 133, logoH: 29 },
  { slug: "annika-acharya", first: "Annika", last: "Acharya", title: "Consultant", company: "KPMG", gradient: "blue", personW: 162, personH: 204, logoW: 121, logoH: 48 },
  { slug: "atharv-gorkhe", first: "Atharv", last: "Gorkhe", title: "Internship at", company: "Axis Max Life Insurance", gradient: "green", personW: 147, personH: 226, logoW: 127, logoH: 42 },
  { slug: "jeroze-baria", first: "Jeroze", last: "Baria", title: "Internship at", company: "BMW", gradient: "teal", personW: 162, personH: 204, logoW: 86, logoH: 80 },
];

function StudentCard({ s }) {
  return (
    <article
      className={`relative aspect-[239/176] overflow-hidden rounded-2xl border border-white/15 shadow-lg shadow-black/30 ${GRADIENTS[s.gradient]}`}
    >
      {/* Student cutout, anchored to the bottom-right edge */}
      <Image
        src={`${BASE}/${s.slug}/person.png`}
        alt={`${s.first} ${s.last}`}
        width={s.personW}
        height={s.personH}
        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 18vw"
        loading="lazy"
        className="absolute bottom-0 right-0 h-[96%] w-auto object-contain object-right-bottom drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
      />

      {/* Copy block on the gradient side */}
      <div className="relative z-10 flex h-full max-w-[60%] flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold leading-[1.08] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.3)] sm:text-xl">
          {s.first}
          <br />
          {s.last}
        </h3>
        <p className="mt-2 text-xs leading-snug text-white/85 sm:text-[13px]">
          {s.title}
        </p>
        <div className="mt-auto pt-3">
          <Image
            src={`${BASE}/${s.slug}/logo.png`}
            alt={s.company}
            width={s.logoW}
            height={s.logoH}
            loading="lazy"
            className="h-6 w-auto object-contain object-left sm:h-7"
          />
        </div>
      </div>
    </article>
  );
}

const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const TRANSITION = "transform 520ms cubic-bezier(0.22, 0.61, 0.36, 1)";

export default function StudentSuccess() {
  // Cards per page by breakpoint: desktop 8 (2×4), tablet 4 (2×2), mobile 2 (2×1).
  const [cardsPerPage, setCardsPerPage] = useState(8);

  const pages = useMemo(() => chunk(STUDENTS, cardsPerPage), [cardsPerPage]);
  const pageCount = pages.length;
  const loop = pageCount > 1;

  // With looping we pad with clones: [last, ...pages, first]; start at real index 1.
  const slides = useMemo(
    () => (loop ? [pages[pageCount - 1], ...pages, pages[0]] : pages),
    [pages, pageCount, loop]
  );

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const animateRef = useRef(true);
  const [snapTick, setSnapTick] = useState(0);

  // Drag/swipe state
  const drag = useRef({ active: false, startX: 0, dx: 0 });

  const activeDot = loop ? ((index - 1) % pageCount + pageCount) % pageCount : 0;

  const applyTransform = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    t.style.transition = animateRef.current ? TRANSITION : "none";
    t.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
    if (!animateRef.current) {
      // Commit the instant jump, then re-arm animation for the next move.
      void t.offsetHeight;
      animateRef.current = true;
    }
  }, [index]);

  useLayoutEffect(() => {
    applyTransform();
  }, [applyTransform, snapTick]);

  // Recompute cards-per-page on resize and reset to the first real page.
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      return w >= 1024 ? 8 : w >= 640 ? 4 : 2;
    };
    const onResize = () => {
      const c = compute();
      setCardsPerPage((prev) => (prev === c ? prev : c));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // When the layout (page count) changes, jump to the first real slide w/o animation.
  useEffect(() => {
    animateRef.current = false;
    setIndex(loop ? 1 : 0);
  }, [cardsPerPage, loop]);

  const goNext = useCallback(() => {
    animateRef.current = true;
    setIndex((i) => i + 1);
  }, []);
  const goPrev = useCallback(() => {
    animateRef.current = true;
    setIndex((i) => i - 1);
  }, []);
  const goToPage = useCallback(
    (p) => {
      animateRef.current = true;
      setIndex(loop ? p + 1 : 0);
    },
    [loop]
  );

  // Seamless wrap: after sliding onto a clone, snap to the matching real page.
  const onTransitionEnd = useCallback(() => {
    if (!loop) return;
    if (index === pageCount + 1) {
      animateRef.current = false;
      setIndex(1);
    } else if (index === 0) {
      animateRef.current = false;
      setIndex(pageCount);
    }
  }, [index, loop, pageCount]);

  // Pointer drag / touch swipe
  const onPointerDown = (e) => {
    if (!loop) return;
    drag.current = { active: true, startX: e.clientX, dx: 0 };
    const t = trackRef.current;
    if (t) t.style.transition = "none";
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    drag.current.dx = e.clientX - drag.current.startX;
    const t = trackRef.current;
    if (t) {
      t.style.transform = `translate3d(calc(${-index * 100}% + ${drag.current.dx}px), 0, 0)`;
    }
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    const { dx } = drag.current;
    drag.current.active = false;
    const w = viewportRef.current?.offsetWidth || 1;
    const threshold = w * 0.15;
    animateRef.current = true;
    if (dx <= -threshold) goNext();
    else if (dx >= threshold) goPrev();
    else setSnapTick((n) => n + 1); // snap back to current index
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  };

  return (
    <section className="bg-[#081f3d] text-white" aria-label="Student success stories">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <h2 className="text-3xl font-extrabold tracking-tight text-atlas-lime sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          ATLAS Students Join Industry Leaders
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70 sm:text-base">
          Career growth, industry opportunities, and professional success
          stories from the ATLAS ecosystem
        </p>

        {/* Carousel */}
        <div
          ref={viewportRef}
          className="mt-10 overflow-hidden lg:mt-12"
          role="group"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          style={{ touchAction: "pan-y" }}
        >
          <div
            ref={trackRef}
            className="flex"
            onTransitionEnd={onTransitionEnd}
          >
            {slides.map((page, pi) => (
              <div key={pi} className="w-full shrink-0" aria-hidden={loop && (pi === 0 || pi === slides.length - 1)}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                  {page.map((s) => (
                    <StudentCard key={s.slug} s={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="relative mt-8 flex items-center justify-center lg:mt-10">
          {/* Pagination dots — centered */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pagination">
            {pages.map((_, i) => {
              const isActive = i === activeDot;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goToPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? "w-7 bg-atlas-lime" : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                />
              );
            })}
          </div>

          {/* Prev / Next arrows — bottom-right */}
          <div className="absolute right-0 flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-lime"
            >
              <Image
                src="/sixth-section/icon/left-arrow.png"
                alt=""
                aria-hidden="true"
                width={33}
                height={33}
                className="h-9 w-9 sm:h-10 sm:w-10"
              />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-lime"
            >
              <Image
                src="/sixth-section/icon/right-arrow.png"
                alt=""
                aria-hidden="true"
                width={33}
                height={33}
                className="h-9 w-9 sm:h-10 sm:w-10"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
