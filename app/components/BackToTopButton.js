"use client";

import { useEffect, useState } from "react";

// Floating "back to top" button. Fades/slides in after the user scrolls past a
// threshold and smooth-scrolls to the top on click. Self-contained — mounted
// once in the root layout; affects nothing else on the page.
const SHOW_AFTER = 450; // px scrolled before the button appears

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > SHOW_AFTER);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync initial state (e.g. refresh mid-page)
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-atlas-lime text-atlas-navy shadow-lg shadow-black/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-lime motion-reduce:transition-none sm:bottom-8 sm:right-8 sm:h-[52px] sm:w-[52px] lg:h-14 lg:w-14 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
