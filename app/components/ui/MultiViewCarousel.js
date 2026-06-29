"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const TRANSITION = "transform 560ms cubic-bezier(0.22, 0.61, 0.36, 1)";

// Reusable RESPONSIVE multi-view carousel: shows N cards per view (driven by the
// slide's own width classes — e.g. 1 on mobile, 2 on desktop), steps ONE card at
// a time, seamless infinite loop (clone-padded each side), autoplay (pause on
// hover/drag, reduced-motion aware), pointer/touch drag, keyboard arrows and
// clickable dots. Transforms are pixel-measured from the DOM (offsetLeft), so
// responsive slide widths and gaps "just work" without per-breakpoint math.
//
// This is intentionally separate from the single-view TestimonialCarousel
// (which steps one full-width slide at a time): different mechanism, not a
// duplicate. Both share the same design tokens (lime/white dots, timing).
export default function MultiViewCarousel({
  slides,
  slideClassName = "basis-full sm:basis-[calc(50%_-_0.625rem)]",
  gapClassName = "gap-5",
  cloneCount = 2,
  autoplayMs = 4500,
  ariaLabel = "Carousel",
  paginationClassName = "mt-8",
  dotLabel = (i) => `Go to slide ${i + 1}`,
}) {
  const N = slides.length;
  const loop = N > 1;
  const clones = loop ? Math.min(cloneCount, N) : 0;

  // Padded list: [last `clones`, ...slides, first `clones`]. `slides` are
  // pre-rendered nodes (serializable across the server/client boundary).
  const padded = loop
    ? [...slides.slice(N - clones), ...slides, ...slides.slice(0, clones)]
    : slides;

  const [index, setIndex] = useState(clones); // first real slide
  const trackRef = useRef(null);
  const animateRef = useRef(true);
  const pausedRef = useRef(false);
  const drag = useRef({ active: false, startX: 0, dx: 0 });
  const [snapTick, setSnapTick] = useState(0);

  const activeDot = (((index - clones) % N) + N) % N;

  const slideOffset = useCallback((i) => {
    const track = trackRef.current;
    if (!track || !track.children[i]) return 0;
    return track.children[i].offsetLeft;
  }, []);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animateRef.current ? TRANSITION : "none";
    track.style.transform = `translate3d(${-slideOffset(index)}px, 0, 0)`;
    if (!animateRef.current) {
      void track.offsetHeight; // commit the instant jump before re-arming animation
      animateRef.current = true;
    }
  }, [index, slideOffset]);

  useLayoutEffect(() => {
    applyTransform();
  }, [applyTransform, snapTick]);

  // Slide widths change on resize → offsetLeft changes; re-align without animating.
  useEffect(() => {
    const onResize = () => {
      animateRef.current = false;
      setSnapTick((n) => n + 1);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
      setIndex(clones + p);
    },
    [clones]
  );

  // Seamless wrap: after stepping onto a clone, snap to the matching real slide.
  const onTransitionEnd = useCallback(() => {
    if (!loop) return;
    if (index >= clones + N) {
      animateRef.current = false;
      setIndex((i) => i - N);
    } else if (index < clones) {
      animateRef.current = false;
      setIndex((i) => i + N);
    }
  }, [index, loop, clones, N]);

  // Autoplay — paused on hover or while dragging, disabled for reduced motion.
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
    }, autoplayMs);
    return () => clearInterval(id);
  }, [loop, goNext, autoplayMs]);

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
      t.style.transform = `translate3d(${-slideOffset(index) + drag.current.dx}px, 0, 0)`;
    }
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    const { dx } = drag.current;
    drag.current.active = false;
    const slideW = trackRef.current?.children[index]?.offsetWidth || 1;
    const threshold = slideW * 0.2;
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
    <div>
      <div
        className="overflow-hidden"
        role="group"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
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
        <div
          ref={trackRef}
          className={`flex items-stretch ${gapClassName}`}
          onTransitionEnd={onTransitionEnd}
        >
          {padded.map((node, i) => {
            const isClone = loop && (i < clones || i >= clones + N);
            return (
              <div
                key={i}
                className={`shrink-0 grow-0 ${slideClassName}`}
                aria-hidden={isClone ? true : undefined}
              >
                {node}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`flex items-center justify-center gap-2.5 ${paginationClassName}`}>
        {slides.map((_, i) => {
          const isActive = i === activeDot;
          return (
            <button
              key={i}
              type="button"
              aria-label={dotLabel(i)}
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
  );
}
