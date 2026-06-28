"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const TRANSITION = "transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1)";

/**
 * Reusable continuous auto-looping carousel (extracted from the homepage
 * ProgramsShowcase so both pages share one engine).
 *
 * - Programmatically duplicates `items` (`copies`) for a seamless infinite loop.
 * - Autoplay advances one card every `autoplayMs`; pauses on hover.
 * - Gap-aware transform (measures each slide's offset) — works with any item
 *   width, so the number of cards per view is driven purely by `itemClassName`.
 * - Pagination dots (one per real item) are clickable.
 *
 * @param items         array of real items
 * @param renderItem    (item, index) => node
 * @param getKey        (item, index) => key
 * @param itemClassName per-slide width classes (controls cards-per-view)
 * @param gapClassName  flex gap utility (e.g. "gap-8")
 * @param copies        how many times to duplicate items for looping
 * @param autoplayMs    autoplay interval
 * @param defaultPerView constant initial perView (avoids hydration mismatch)
 * @param getPerView    () => number, recomputed on resize (used for aria only)
 * @param dotLabel      (index) => aria-label for each dot
 * @param ariaLabel     carousel region label
 */
export default function Carousel({
  items,
  renderItem,
  getKey = (_, i) => i,
  itemClassName = "",
  gapClassName = "gap-8",
  copies = 3,
  autoplayMs = 4000,
  defaultPerView = 1,
  getPerView,
  dotLabel = (i) => `Go to slide ${i + 1}`,
  ariaLabel = "carousel",
}) {
  const baseLen = items.length;
  const slides = useMemo(
    () => Array.from({ length: copies }).flatMap(() => items),
    [items, copies]
  );

  const [index, setIndex] = useState(0);
  const [snapTick, setSnapTick] = useState(0);
  const [perView, setPerView] = useState(defaultPerView);

  const trackRef = useRef(null);
  const animateRef = useRef(true);
  const pausedRef = useRef(false);

  const activeDot = ((index % baseLen) + baseLen) % baseLen;

  // Position the track at the current slide's measured offset (gap-aware).
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

  // Responsive cards-per-view + re-measure on resize.
  useEffect(() => {
    if (!getPerView) return;
    const onResize = () => {
      setPerView(getPerView());
      animateRef.current = false;
      setSnapTick((n) => n + 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getPerView]);

  // Autoplay — advances one slide; pauses on hover.
  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      animateRef.current = true;
      setIndex((i) => i + 1);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs]);

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
    <>
      <div
        className="overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <div
          ref={trackRef}
          onTransitionEnd={onTransitionEnd}
          className={`flex items-stretch ${gapClassName} will-change-transform`}
        >
          {slides.map((item, i) => (
            <div
              key={getKey(item, i)}
              className={`shrink-0 ${itemClassName}`}
              aria-hidden={i < index || i >= index + perView}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={getKey(item, i)}
            type="button"
            aria-label={dotLabel(i)}
            aria-current={i === activeDot}
            onClick={() => goToDot(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeDot ? "w-7 bg-atlas-lime" : "w-2 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </>
  );
}
