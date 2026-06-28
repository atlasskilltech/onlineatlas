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

const BASE = "/sixteen-section/section-1";

// Single source news item. Duplicated programmatically below to populate the
// carousel until more real articles are supplied.
const ARTICLES = [
  {
    slug: "atlas-blueprint",
    header: { src: `${BASE}/left-image.png`, width: 602, height: 32 },
    image: { src: `${BASE}/right-image.png`, width: 600, height: 316 },
    headline:
      "ATLAS SkillTech University: Creating a New Blueprint for Industry-Integrated Learning",
    lead:
      "ATLAS has designed its academic programmes around a central idea that professional readiness must be built gradually through continuous engagement with real workplaces. Instead of limiting industry exposure to short-term internships, ATLAS follows a structured 4-year industry-integrated journey.",
    body:
      "ATLAS SkillTech University is pioneering one of India's most comprehensive models of industry-integrated higher education. Located in the heart of Mumbai, ATLAS is designed as an urban, multidisciplinary campus where learning is closely connected to real-world practice. The University was founded with a clear and ambitious purpose: to rethink how higher education prepares students for the future of work. At a time when industries are evolving faster than ever, ATLAS has created a learning model where collaboration with industry is not an add-on, but the foundation of how students learn, grow, and build their careers.",
  },
];

// Duplicate the existing data into 4 slides (no manual JSX duplication).
const SLIDES = Array.from({ length: 4 }, (_, i) => ({
  ...ARTICLES[i % ARTICLES.length],
  key: i,
}));

const TRANSITION = "transform 560ms cubic-bezier(0.22, 0.61, 0.36, 1)";
const AUTOPLAY_MS = 4500;

function NewsSlide({ a, priority }) {
  return (
    <div className="w-full shrink-0 px-0.5">
      <div className="rounded-[28px] bg-white p-2.5 shadow-2xl shadow-black/30 sm:p-3">
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-5">
          {/* LEFT — article panel */}
          <article className="flex flex-col px-3 py-3 sm:px-4 sm:py-4 lg:px-5">
            <Image
              src={a.header.src}
              alt="ET Now"
              width={a.header.width}
              height={a.header.height}
              priority={priority}
              loading={priority ? undefined : "lazy"}
              className="h-auto w-full"
            />

            <h3 className="mt-5 text-lg font-bold leading-snug text-atlas-navy sm:text-xl lg:text-2xl">
              {a.headline}
            </h3>

            <p className="mt-3 text-[13px] leading-relaxed text-atlas-navy/70 sm:text-sm">
              {a.lead}
            </p>

            <p className="mt-3 text-xs leading-relaxed text-atlas-navy/60 first-letter:mr-0.5 first-letter:text-base first-letter:font-semibold first-letter:text-atlas-navy sm:text-[13px]">
              {a.body}
            </p>
          </article>

          {/* RIGHT — featured image */}
          <div className="relative aspect-[600/316] overflow-hidden rounded-[20px] lg:aspect-auto lg:min-h-[260px]">
            <Image
              src={a.image.src}
              alt="ATLAS SkillTech University campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={priority}
              loading={priority ? undefined : "lazy"}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AtlasNews() {
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
    <section className="bg-atlas-navy text-white" aria-labelledby="atlas-news-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2
          id="atlas-news-heading"
          className="text-3xl font-extrabold tracking-tight text-atlas-lime sm:text-4xl"
        >
          ATLAS in the News
        </h2>

        {/* Carousel */}
        <div
          ref={viewportRef}
          className="mt-8 overflow-hidden lg:mt-10"
          role="group"
          aria-roledescription="carousel"
          aria-label="ATLAS news articles"
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
            {slides.map((a, i) => (
              <NewsSlide key={i} a={a} priority={i === 1} />
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
                aria-label={`Go to article ${i + 1}`}
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
