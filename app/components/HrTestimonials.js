"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";

const BASE = "/fourtheen-section/hr-leaders";
const QUOTE_ICON = "/fourtheen-section/icon/qoute.png";

// Single source testimonial. Duplicated programmatically below to populate the
// carousel until more real testimonials are supplied.
const TESTIMONIALS = [
  {
    slug: "alok-sheopurkar",
    quote:
      "HDFC AMC’s engagement with ATLAS SkillTech University has been truly enriching. The level of preparedness displayed by the students is a testament to the university’s forward-thinking approach.",
    name: "Alok Sheopurkar",
    designation: "Head of HR",
    company: "HDFC Mutual Fund",
    logoW: 222,
    logoH: 72,
  },
];

// Duplicate the existing data into 4 slides (no manual JSX duplication).
const SLIDES = Array.from({ length: 4 }, (_, i) => ({
  ...TESTIMONIALS[i % TESTIMONIALS.length],
  key: i,
}));

const TRANSITION = "transform 560ms cubic-bezier(0.22, 0.61, 0.36, 1)";
const AUTOPLAY_MS = 4500;

function TestimonialSlide({ t, priority }) {
  return (
    <div className="w-full shrink-0 px-0.5">
      <div className="grid items-stretch gap-5 lg:grid-cols-[1.38fr_1fr] lg:gap-8">
        {/* LEFT — testimonial card */}
        <article className="flex flex-col rounded-3xl bg-[#f4f3e8] p-7 shadow-2xl shadow-black/30 sm:p-9 lg:p-10">
          <Image
            src={QUOTE_ICON}
            alt=""
            aria-hidden="true"
            width={54}
            height={40}
            className="h-7 w-auto self-start sm:h-8"
          />

          <blockquote className="mt-5 text-base leading-relaxed text-atlas-navy sm:text-lg sm:leading-relaxed">
            {t.quote}
          </blockquote>

          <div className="mt-auto flex items-end justify-between gap-4 pt-7 lg:pt-8">
            <div>
              <p className="text-base font-bold text-atlas-navy sm:text-lg">
                {t.name}
              </p>
              <p className="mt-0.5 text-sm text-atlas-navy/70">
                {t.designation}
              </p>
            </div>
            <Image
              src={`${BASE}/${t.slug}/logo.png`}
              alt={t.company}
              width={t.logoW}
              height={t.logoH}
              className="h-9 w-auto shrink-0 object-contain object-right sm:h-10"
            />
          </div>
        </article>

        {/* RIGHT — profile image */}
        <div className="relative aspect-[500/498] overflow-hidden rounded-3xl shadow-2xl shadow-black/30">
          <Image
            src={`${BASE}/${t.slug}/person.png`}
            alt={`${t.name}, ${t.designation} at ${t.company}`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default function HrTestimonials() {
  const pageCount = SLIDES.length;
  const loop = pageCount > 1;

  // Clone-pad for a seamless loop: [last, ...slides, first]; start at real index 1.
  const slides = useMemo(
    () => (loop ? [SLIDES[pageCount - 1], ...SLIDES, SLIDES[0]] : SLIDES),
    [loop, pageCount]
  );

  const [index, setIndex] = useState(loop ? 1 : 0);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const animateRef = useRef(true);
  const pausedRef = useRef(false);
  const [snapTick, setSnapTick] = useState(0);
  const drag = useRef({ active: false, startX: 0, dx: 0 });

  const activeDot = loop ? (((index - 1) % pageCount) + pageCount) % pageCount : index;

  const applyTransform = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    t.style.transition = animateRef.current ? TRANSITION : "none";
    t.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
    if (!animateRef.current) {
      void t.offsetHeight; // commit the instant jump before re-arming animation
      animateRef.current = true;
    }
  }, [index]);

  useLayoutEffect(() => {
    applyTransform();
  }, [applyTransform, snapTick]);

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
      setIndex(loop ? p + 1 : p);
    },
    [loop]
  );

  // Seamless wrap: after landing on a clone, snap to the matching real slide.
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

  // Autoplay — paused on hover or while dragging, and disabled for reduced motion.
  useEffect(() => {
    if (!loop) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      if (!pausedRef.current && !drag.current.active) goNext();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [loop, goNext]);

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
    else setSnapTick((n) => n + 1); // snap back to current
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
    <section className="bg-atlas-navy text-white" aria-labelledby="hr-testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2
          id="hr-testimonials-heading"
          className="text-3xl font-extrabold tracking-tight text-atlas-lime sm:text-4xl"
        >
          What HR Leaders Say About Us
        </h2>

        {/* Carousel */}
        <div
          ref={viewportRef}
          className="mt-8 overflow-hidden lg:mt-10"
          role="group"
          aria-roledescription="carousel"
          aria-label="HR leader testimonials"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          style={{ touchAction: "pan-y" }}
        >
          <div ref={trackRef} className="flex" onTransitionEnd={onTransitionEnd}>
            {slides.map((t, i) => (
              <TestimonialSlide key={i} t={t} priority={i === 1} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {SLIDES.map((_, i) => {
            const isActive = i === activeDot;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={isActive}
                onClick={() => goToPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? "w-6 bg-atlas-lime" : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
