"use client";

import { useEffect } from "react";
import "lenis/dist/lenis.css";

/**
 * Lenis smooth scrolling — an isolated, fully removable enhancement.
 *
 * Mounted once in the root layout. Renders nothing and changes no markup,
 * styling, content, or behaviour anywhere else in the project.
 *
 * To remove smooth scrolling completely:
 *   1. Delete this file.
 *   2. Remove its import and the <SmoothScroll /> tag from app/layout.js.
 *   3. Run `npm remove lenis`.
 *
 * Design notes:
 *  - Client-only and dynamically imported, so the Lenis runtime never ships in
 *    the SSR/SSG payload or the initial JS bundle. The server layout stays a
 *    Server Component and every page remains fully crawlable — markup, metadata,
 *    structured data, headings and links are untouched.
 *  - Respects prefers-reduced-motion: when reduced motion is requested, smooth
 *    scrolling is skipped entirely and the browser's native scrolling is used.
 *  - Native touch scrolling is preserved (syncTouch: false), so mobile momentum
 *    and the existing carousels / horizontal scroll strips behave exactly as
 *    before.
 *  - allowNestedScroll lets nested scrollable regions scroll natively without
 *    any markup changes (no data-lenis-prevent attributes required).
 *  - The rAF loop and the instance are cleaned up on unmount — no dangling
 *    listeners, no memory leaks.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Accessibility: honour the user's reduced-motion preference.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let lenis;
    let rafId;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        lerp: 0.1, // natural, premium easing without feeling sluggish
        smoothWheel: true, // mouse wheel + trackpad
        syncTouch: false, // keep native touch momentum on touch devices
        allowNestedScroll: true, // nested/horizontal scrollers scroll natively
        anchors: true, // smooth in-page anchor-link navigation
      });

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };
  }, []);

  return null;
}
