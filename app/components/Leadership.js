"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const BASE = "/industrypartners/leaders";

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
    <article className="leader-card relative w-[210px] shrink-0 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10 [backface-visibility:hidden] [transform:translateZ(0)] sm:w-[240px] lg:w-[260px]">
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

// Depth-aware opacity + subtle blur driven by each slide's distance from centre
// (coverflow itself handles scale / rotate / z-index). The transition duration
// is matched to the Swiper speed so blur/fade animate DURING the slide, not after.
function applyDepth(swiper) {
  for (const slide of swiper.slides) {
    const p = Math.min(Math.abs(slide.progress || 0), 3);
    const blur = p > 0.6 ? Math.min((p - 0.6) * 3, 5) : 0;
    slide.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : "";
    slide.style.opacity = Math.max(0.3, 1 - 0.4 * p).toFixed(3);
  }
}

function applyDepthTransition(swiper, duration) {
  for (const slide of swiper.slides) {
    slide.style.transitionProperty = "transform, filter, opacity";
    slide.style.transitionDuration = `${duration}ms`;
  }
}

export default function Leadership() {
  const [active, setActive] = useState("advisory");
  const leaders = TEAMS[active];

  // Repeat the team to a comfortable count so the centred coverflow loop always
  // has enough slides to fill both edges (same leaders cycling — no new people).
  const repeats = Math.max(2, Math.ceil(14 / leaders.length));
  const cards = useMemo(
    () => Array.from({ length: repeats }).flatMap(() => leaders),
    [leaders, repeats]
  );

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

      {/* Cinematic coverflow carousel — step → pause → step (infinite) */}
      <div className="relative mt-8 overflow-hidden py-12 sm:mt-10 lg:py-16">
        {/* Edge gradient masks — cards fade into the dark instead of being cut */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-20 bg-gradient-to-r from-[#081f3d] via-[#081f3d]/80 to-transparent sm:w-40 lg:w-56" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-20 bg-gradient-to-l from-[#081f3d] via-[#081f3d]/80 to-transparent sm:w-40 lg:w-56" />

        <Swiper
          key={active}
          modules={[EffectCoverflow, Autoplay, Keyboard, A11y]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          watchSlidesProgress
          speed={900}
          spaceBetween={20}
          breakpoints={{ 640: { spaceBetween: 24 } }}
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 140,
            modifier: 1,
            scale: 0.88,
            slideShadows: false,
          }}
          onSwiper={applyDepth}
          onSetTranslate={applyDepth}
          onSetTransition={(swiper, duration) =>
            applyDepthTransition(swiper, duration)
          }
          onResize={applyDepth}
          aria-label="ATLAS leadership and advisory team"
        >
          {cards.map((leader, i) => (
            <SwiperSlide
              key={`${leader.slug}-${i}`}
              className="w-[210px]! sm:w-[240px]! lg:w-[260px]!"
            >
              <LeaderCard leader={leader} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
