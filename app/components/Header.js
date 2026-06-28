"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ANNOUNCEMENTS = [
  "100% Online",
  "EMI from ₹7,500/mo",
  "ATLAS Career Services Update 2026 - Know More",
  "Admissions open OCT 2026 Apply Now",
  "Future Leader Scholarship - up to 20% off tuition",
];

const NAV_LINKS = [
  { label: "Industry", href: "#industry" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Advantages", href: "#advantages" },
  { label: "Programs", href: "/programs" },
  { label: "Fees", href: "#fees" },
];

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="mx-4 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-navy/70 sm:mx-6"
    />
  );
}

function AnnouncementBar() {
  // The list is rendered twice so the marquee can loop seamlessly.
  const track = (
    <ul className="flex shrink-0 items-center py-2.5 pr-0">
      {ANNOUNCEMENTS.map((text, i) => (
        <li key={i} className="flex items-center">
          {i > 0 && <Dot />}
          <span className="text-sm font-semibold whitespace-nowrap text-atlas-navy">
            {text}
          </span>
        </li>
      ))}
      <Dot />
    </ul>
  );

  return (
    <div className="bg-atlas-lime">
      {/* Continuous right-to-left ticker at every breakpoint. `overflow-hidden`
          guarantees the (intentionally wider-than-viewport) content can never
          add horizontal page overflow. Four identical copies animated by -50%
          keep the loop seamless — gap-free, jump-free — even on ultra-wide
          screens where a single copy is narrower than the viewport. The fixed
          duration keeps the scroll speed identical across all screen sizes. */}
      <div className="group flex overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap [animation-duration:56s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track}
          {track}
          {track}
          {track}
        </div>
      </div>
    </div>
  );
}

function ApplyButton({ className = "" }) {
  return (
    <Link
      href="#apply"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-atlas-lime px-6 py-2.5 text-sm font-bold text-atlas-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-lime ${className}`}
    >
      Apply Now
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
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // A link is "active" only when it targets a real route (not a same-page hash
  // anchor) and matches the current path.
  const isActiveLink = (href) => href.startsWith("/") && pathname === href;

  return (
    <header className="w-full">
      <AnnouncementBar />

      <nav className="bg-atlas-navy">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="Atlas Online — home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo/atlas-online-logo.svg"
              alt="Atlas Online"
              width={326}
              height={92}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm font-semibold transition-colors hover:text-atlas-lime ${
                      active ? "text-atlas-lime" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop call-to-action */}
          <div className="hidden lg:block">
            <ApplyButton />
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-lime lg:hidden"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown panel */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 ease-in-out lg:hidden ${
            open ? "max-h-96" : "max-h-0 border-t-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-3 text-base font-semibold transition-colors hover:bg-white/10 hover:text-atlas-lime ${
                      active ? "bg-white/5 text-atlas-lime" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="px-3 pt-3 pb-2">
              <ApplyButton className="w-full" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
