"use client";

import Image from "next/image";
import SwiperCarousel from "./shared/SwiperCarousel";

const LOGO = "/ninetheen-section/brand-logo";

// Challenge slides. Items with a logo render on a white card; the logo-less
// entry (Mahindra) renders the brief on a dark card, matching the reference.
const CHALLENGES = [
  {
    label: "Mahindra War Room",
    desc: "Develop innovative, implementable solutions to real-life challenges faced by the Mahindra Group",
  },
  {
    label: "HUL LIME",
    logo: { src: `${LOGO}/hindustan-univiler-limited.png`, w: 198, h: 74 },
  },
  {
    label: "ITC Interrobang",
    logo: { src: `${LOGO}/itc.png`, w: 120, h: 99 },
  },
  {
    label: "TAS InvicTAS",
    logo: { src: `${LOGO}/tata.png`, w: 82, h: 74 },
  },
  {
    label: "Flipkart",
    logo: { src: `${LOGO}/flipkart.png`, w: 183, h: 53 },
  },
];

function ChallengeCard({ item }) {
  return (
    <div className="flex h-full flex-col">
      {/* Only this box flips on hover (hover-capable devices only); the label
          below stays static. Same aspect ratio / radius / shadow as before.
          The OUTER wrapper is the stable hover target (it never transforms), so
          the whole card flips smoothly from any edge — no dead zones. */}
      <div className="group [perspective:1000px]">
        <div className="relative aspect-[16/10] transition-transform duration-[600ms] ease-in-out [transform-style:preserve-3d] [@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]">
          {/* FRONT — unchanged card */}
          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl p-5 shadow-xl shadow-black/20 [backface-visibility:hidden] ${
              item.logo ? "bg-white" : "bg-[#3a4d65]"
            }`}
          >
            {item.logo ? (
              <Image
                src={item.logo.src}
                alt={item.label}
                width={item.logo.w}
                height={item.logo.h}
                loading="lazy"
                className="max-h-14 w-auto max-w-[82%] object-contain"
              />
            ) : (
              <p className="text-center text-xs font-medium leading-snug text-white/90 sm:text-[13px]">
                {item.desc}
              </p>
            )}
          </div>

          {/* BACK — dummy brief */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-[#3a4d65] p-5 shadow-xl shadow-black/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-center text-xs font-medium leading-snug text-white sm:text-[13px]">
              Develop innovative, implementable solutions to real-life business
              challenges faced by industry leaders.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-sm font-bold text-white">
        {item.label}
      </p>
    </div>
  );
}

export default function CaseChallenges() {
  return (
    <section className="bg-[#081f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — header */}
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Compete in Real
          <br />
          <span className="text-atlas-lime">Corporate Case Challenges</span>
        </h2>
        <p className="mt-5 max-w-4xl text-[15px] leading-relaxed text-white/80 sm:text-base">
          Work on live business problems set by India&apos;s top companies—the
          same flagship competitions that decide pre-placement interviews at{" "}
          <span className="font-bold text-atlas-lime">
            IIMs, XLRI, and FMS. Build strategy,
          </span>{" "}
          present to corporate juries, and solve challenges that real managers
          face today.
        </p>

        {/* PART 2 — brand challenge carousel */}
        <div className="mt-12 lg:mt-14">
          <SwiperCarousel
            ariaLabel="Corporate case challenges"
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            loop
            autoplay
            autoplayDelay={4000}
            paginationWrapClass="mt-10 flex items-center justify-center gap-2"
            dotActiveClass="h-2 w-7 rounded-full bg-atlas-lime transition-all duration-300"
            dotLabel={(i) => `Go to ${CHALLENGES[i].label}`}
          >
            {CHALLENGES.map((item, i) => (
              <ChallengeCard key={`${item.label}-${i}`} item={item} />
            ))}
          </SwiperCarousel>
        </div>
      </div>
    </section>
  );
}
