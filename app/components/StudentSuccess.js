"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

const BASE = "/studentsuccess/students";

// Full literal gradient strings so Tailwind's scanner keeps them in the build.
const GRADIENTS = {
  blue: "bg-gradient-to-b from-[#16307b] via-[#0c5f8f] to-[#08a4b4]",
  green: "bg-gradient-to-tr from-[#01382c] via-[#057151] to-[#07c79f]",
  teal: "bg-gradient-to-b from-[#0a3f54] via-[#0a6470] to-[#03888f]",
};

const STUDENTS = [
  { slug: "dia-joshi", first: "Dia", last: "Joshi", title: "Consultant", company: "IBM", gradient: "blue", personW: 187, personH: 216, logoW: 120, logoH: 60 },
  { slug: "vansh-mehta", first: "Vansh", last: "Mehta", title: "Investment Banking Analyst", company: "J.P. Morgan", gradient: "green", personW: 170, personH: 216, logoW: 126, logoH: 31 },
  { slug: "mridul-nadar", first: "Mridul", last: "Nadar", title: "Analyst", company: "Accenture", gradient: "teal", personW: 198, personH: 232, logoW: 127, logoH: 44 },
  { slug: "kanak-suri", first: "Kanak", last: "Suri", title: "Associate", company: "Boston Consulting Group", gradient: "blue", personW: 155, personH: 236, logoW: 124, logoH: 36 },
  { slug: "durva-pawaskar", first: "Durva", last: "Pawaskar", title: "Brand Strategist", company: "dentsu", gradient: "teal", personW: 155, personH: 228, logoW: 133, logoH: 29 },
  { slug: "annika-acharya", first: "Annika", last: "Acharya", title: "Consultant", company: "KPMG", gradient: "blue", personW: 162, personH: 204, logoW: 121, logoH: 48 },
  { slug: "atharv-gorkhe", first: "Atharv", last: "Gorkhe", title: "Internship at", company: "Axis Max Life Insurance", gradient: "green", personW: 147, personH: 226, logoW: 127, logoH: 42 },
  { slug: "jeroze-baria", first: "Jeroze", last: "Baria", title: "Internship at", company: "BMW", gradient: "teal", personW: 162, personH: 204, logoW: 86, logoH: 80 },
  { slug: "dia-joshi", first: "Dia", last: "Joshi", title: "Consultant", company: "IBM", gradient: "blue", personW: 187, personH: 216, logoW: 120, logoH: 60 },
  { slug: "vansh-mehta", first: "Vansh", last: "Mehta", title: "Investment Banking Analyst", company: "J.P. Morgan", gradient: "green", personW: 170, personH: 216, logoW: 126, logoH: 31 },
  { slug: "mridul-nadar", first: "Mridul", last: "Nadar", title: "Analyst", company: "Accenture", gradient: "teal", personW: 198, personH: 232, logoW: 127, logoH: 44 },
  { slug: "kanak-suri", first: "Kanak", last: "Suri", title: "Associate", company: "Boston Consulting Group", gradient: "blue", personW: 155, personH: 236, logoW: 124, logoH: 36 },
  { slug: "durva-pawaskar", first: "Durva", last: "Pawaskar", title: "Brand Strategist", company: "dentsu", gradient: "teal", personW: 155, personH: 228, logoW: 133, logoH: 29 },
  { slug: "annika-acharya", first: "Annika", last: "Acharya", title: "Consultant", company: "KPMG", gradient: "blue", personW: 162, personH: 204, logoW: 121, logoH: 48 },
  { slug: "atharv-gorkhe", first: "Atharv", last: "Gorkhe", title: "Internship at", company: "Axis Max Life Insurance", gradient: "green", personW: 147, personH: 226, logoW: 127, logoH: 42 },
  { slug: "jeroze-baria", first: "Jeroze", last: "Baria", title: "Internship at", company: "BMW", gradient: "teal", personW: 162, personH: 204, logoW: 86, logoH: 80 },
];

function StudentCard({ s }) {
  return (
    <article
      className={`relative aspect-[239/176] overflow-hidden rounded-2xl border border-white/15 shadow-lg shadow-black/30 ${GRADIENTS[s.gradient]}`}
    >
      {/* Student cutout, anchored to the bottom-right edge */}
      <Image
        src={`${BASE}/${s.slug}/person.png`}
        alt={`${s.first} ${s.last}`}
        width={s.personW}
        height={s.personH}
        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 18vw"
        loading="lazy"
        className="absolute bottom-0 right-0 h-[96%] w-auto object-contain object-right-bottom drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
      />

      {/* Copy block on the gradient side */}
      <div className="relative z-10 flex h-full max-w-[60%] flex-col p-4 sm:p-5">
        <h3 className="text-xl font-bold leading-[1.08] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.3)] sm:text-xl">
          {s.first}
          <br />
          {s.last}
        </h3>
        <p className="mt-2 text-sm leading-snug text-white/85 sm:text-[13px]">
          {s.title}
        </p>
        <div className="mt-auto pt-3">
          <Image
            src={`${BASE}/${s.slug}/logo.png`}
            alt={s.company}
            width={s.logoW}
            height={s.logoH}
            loading="lazy"
            className="h-8 w-auto object-contain object-left sm:h-7"
          />
        </div>
      </div>
    </article>
  );
}

export default function StudentSuccess() {
  const swiperRef = useRef(null);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);

  // Page count + active page come from Swiper's snap grid, so they stay correct
  // across breakpoints (2×4 → 2×2 → 2×1) and after resize.
  const sync = (sw) => {
    setPages(sw.snapGrid.length);
    setActive(sw.snapIndex);
  };

  const goToPage = (i) => {
    const sw = swiperRef.current;
    if (!sw) return;
    const perView = sw.params.slidesPerView || 1;
    const rows = sw.params.grid?.rows || 1;
    sw.slideTo(i * perView * rows);
  };

  return (
    <section className="bg-[#081f3d] text-white" aria-label="Student success stories">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <h2 className="text-3xl font-extrabold tracking-tight text-atlas-lime sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          ATLAS Students Join Industry Leaders
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70 sm:text-base">
          Career growth, industry opportunities, and professional success
          stories from the ATLAS ecosystem
        </p>

        {/* Carousel — paged 2-row grid: 2×4 desktop, 2×2 tablet, 2×1 mobile */}
        <div className="mt-10 lg:mt-12">
          <Swiper
            modules={[Grid, Keyboard, A11y]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={12}
            grid={{ rows: 2, fill: "row" }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
                grid: { rows: 2, fill: "row" },
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 16,
                grid: { rows: 2, fill: "row" },
              },
            }}
            rewind
            keyboard={{ enabled: true }}
            onSwiper={(s) => {
              swiperRef.current = s;
              sync(s);
            }}
            onSlideChange={sync}
            onSnapGridLengthChange={sync}
            onResize={sync}
            aria-label="Student success stories"
          >
            {STUDENTS.map((s, i) => (
              <SwiperSlide key={i} className="h-auto">
                <StudentCard s={s} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Controls */}
        <div className="relative mt-8 flex items-center justify-center lg:mt-10">
          {/* Pagination dots — centered */}
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => goToPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-7 bg-atlas-lime" : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next arrows — bottom-right */}
          <div className="absolute right-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
              className="transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-lime"
            >
              <Image
                src="/ui-assets/icons-image/yellow/left-arrow.png"
                alt=""
                aria-hidden="true"
                width={33}
                height={33}
                className="h-9 w-9 sm:h-10 sm:w-10"
              />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              className="transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-lime"
            >
              <Image
                src="/ui-assets/icons-image/yellow/right-arrow.png"
                alt=""
                aria-hidden="true"
                width={33}
                height={33}
                className="h-9 w-9 sm:h-10 sm:w-10"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
