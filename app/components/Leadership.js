"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";

const BASE = "/fourth-section/leaders";

// Advisory team is shown active by default (matches the reference). Designations
// for the five reference-visible leaders are taken verbatim from the design.
const TEAMS = {
  advisory: [
    { slug: "deepak-parekh", name: "Deepak Parekh", title: "Chairman", person: "person.png", personW: 320, personH: 467, logo: "logo.webp", logoW: 120, logoH: 30, company: "HDFC" },
    { slug: "vivek-pandit", name: "Vivek Pandit", title: "Senior Partner", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 800, logoH: 249, company: "McKinsey & Company" },
    { slug: "ronnie-screwvala", name: "Ronnie Screwvala", title: "Founder", person: "person.webp", personW: 320, personH: 467, logo: "logo.png", logoW: 445, logoH: 123, company: "RSVP" },
    { slug: "keshav-murugesh", name: "Keshav Murugesh", title: "Group CEO", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 690, logoH: 358, company: "WNS" },
    { slug: "karan-singh", name: "Karan Singh", title: "Chairman", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 200, logoH: 42, company: "Bain & Company" },
    { slug: "anant-goenka", name: "Anant Goenka", title: "Vice Chairman", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 820, logoH: 283, company: "CEAT" },
    { slug: "ram-raghavan", name: "Ram Raghavan", title: "Managing Director", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 120, logoH: 30, company: "Colgate-Palmolive" },
    { slug: "jamil-katri", name: "Jamil Katri", title: "Managing Director", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 600, logoH: 217, company: "Partner" },
  ],
  leadership: [
    { slug: "dr-indu-shahani", name: "Dr. Indu Shahani", title: "President", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 1040, logoH: 469, company: "ATLAS SkillTech University" },
    { slug: "dr-rajan-welukar", name: "Dr. Rajan Welukar", title: "Vice Chancellor", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 1040, logoH: 469, company: "ATLAS SkillTech University" },
    { slug: "siddharth-shahani", name: "Siddharth Shahani", title: "Executive Director", person: "person.webp", personW: 640, personH: 934, logo: "logo.png", logoW: 1040, logoH: 469, company: "ATLAS SkillTech University" },
  ],
};

const TABS = [
  { key: "leadership", label: "Leadership Team" },
  { key: "advisory", label: "Advisory Team" },
];

function LeaderCard({ leader }) {
  return (
    <article className="leader-card relative w-[210px] shrink-0 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10 [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform,opacity,filter] sm:w-[240px] lg:w-[260px]">
      <div className="relative aspect-[640/934] w-full">
        <Image
          src={`${BASE}/${leader.slug}/${leader.person}`}
          alt={leader.name}
          fill
          sizes="(max-width: 640px) 210px, (max-width: 1024px) 240px, 260px"
          className="object-cover"
        />
        {/* Reinforce the built-in fade so the overlay text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-5 text-center">
        <h3 className="text-base font-bold text-white sm:text-lg">
          {leader.name}
        </h3>
        <span className="my-2 block h-px w-8 bg-white/40" />
        <p className="text-xs text-white/75">{leader.title}</p>
        <div className="mt-3 flex h-6 items-center justify-center sm:h-7">
          <Image
            src={`${BASE}/${leader.slug}/${leader.logo}`}
            alt={leader.company}
            width={leader.logoW}
            height={leader.logoH}
            className="h-full w-auto max-w-[85%] object-contain"
          />
        </div>
      </div>
    </article>
  );
}

const smoothstep = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export default function Leadership() {
  const [active, setActive] = useState("advisory");
  const leaders = TEAMS[active];

  // Repeat the team enough times that the visible track always holds several
  // full copies — guarantees a gap-free wrap and a true infinite loop.
  const repeats = Math.max(3, Math.ceil(18 / leaders.length));
  const cards = useMemo(
    () => Array.from({ length: repeats }).flatMap(() => leaders),
    [leaders, repeats]
  );

  const setLen = leaders.length;
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  // groupWidth = pixel distance of one full team copy (the loop period).
  const metricsRef = useRef({ groupWidth: 0, baseLefts: [], cardW: 0, containerW: 0 });

  const measure = useCallback(() => {
    const track = trackRef.current;
    const cont = containerRef.current;
    if (!track || !cont || track.children.length <= setLen) return;
    const children = Array.from(track.children);
    const baseLefts = children.map((c) => c.offsetLeft);
    metricsRef.current = {
      baseLefts,
      groupWidth: baseLefts[setLen] - baseLefts[0],
      cardW: children[0].offsetWidth,
      containerW: cont.offsetWidth,
    };
  }, [setLen]);

  useEffect(() => {
    offsetRef.current = 0;
    measure();

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SPEED = reduce ? 0 : 42; // px/s — slow, premium

    let raf;
    let last = performance.now();

    const frame = (now) => {
      const dt = Math.min(now - last, 64); // cap to avoid jumps after tab blur
      last = now;
      const m = metricsRef.current;

      if (!pausedRef.current && m.groupWidth > 0 && SPEED > 0) {
        let o = offsetRef.current - (SPEED * dt) / 1000;
        // Seamless wrap: advance by exactly one team copy when one scrolls past.
        if (-o >= m.groupWidth) o += m.groupWidth;
        offsetRef.current = o;
      }

      const o = offsetRef.current;
      const track = trackRef.current;
      if (track) track.style.transform = `translate3d(${o}px,0,0)`;

      if (track && m.containerW > 0) {
        const center = m.containerW / 2;
        const half = m.containerW / 2;
        const children = track.children;
        for (let i = 0; i < children.length; i++) {
          const cx = m.baseLefts[i] + o + m.cardW / 2;
          let d = (cx - center) / half; // -1 (left edge) .. 0 (center) .. 1 (right edge)
          d = Math.max(-1.8, Math.min(1.8, d));
          const ad = Math.abs(d);

          const scale = 1 - 0.14 * smoothstep(0.18, 1.1, ad);
          const ty = 40 * d * d; // arc: center high, edges drop
          const rot = 5.5 * d; // gentle fan away from center
          // Keep the central cluster crisp; only the outermost cards blur/fade.
          const blur = 6 * smoothstep(0.6, 1.25, ad);
          const opacity = 1 - 0.6 * smoothstep(0.6, 1.3, ad);

          const el = children[i];
          el.style.transform = `translateY(${ty.toFixed(2)}px) rotate(${rot.toFixed(
            2
          )}deg) scale(${scale.toFixed(3)})`;
          el.style.filter = blur > 0.06 ? `blur(${blur.toFixed(2)}px)` : "none";
          el.style.opacity = Math.max(0.12, opacity).toFixed(3);
          el.style.zIndex = String(Math.round(100 - ad * 60));
        }
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [active, measure]);

  // Re-measure once layout/fonts settle (card widths are fixed, so this is just a safety net).
  useEffect(() => {
    const t = setTimeout(measure, 200);
    return () => clearTimeout(t);
  }, [active, measure]);

  return (
    <section className="relative overflow-hidden bg-[#081f3d] text-white">
      {/* Subtle glow behind the cards for depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(120,150,200,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <h2 className="text-2xl font-extrabold tracking-tight text-atlas-lime sm:text-3xl lg:text-4xl">
          Leadership that Opens Doors
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          Industry leaders, entrepreneurs, innovators, and changemakers helping
          shape management education that&rsquo;s relevant, industry-connected,
          and built for what&rsquo;s next.
        </p>

        {/* Team toggle */}
        <div className="mt-7 flex flex-wrap gap-3">
          {TABS.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-atlas-lime text-atlas-navy"
                    : "border border-white/25 text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Auto-scrolling coverflow carousel */}
      <div
        ref={containerRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        className="relative mt-8 overflow-hidden py-12 sm:mt-10 lg:py-16"
      >
        {/* Edge gradient masks — cards fade into the dark instead of being cut */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-20 bg-gradient-to-r from-[#081f3d] via-[#081f3d]/80 to-transparent sm:w-40 lg:w-56" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-20 bg-gradient-to-l from-[#081f3d] via-[#081f3d]/80 to-transparent sm:w-40 lg:w-56" />

        <div
          ref={trackRef}
          className="flex w-max gap-5 will-change-transform sm:gap-6"
        >
          {cards.map((leader, i) => (
            <LeaderCard key={`${leader.slug}-${i}`} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
