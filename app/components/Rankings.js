"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, A11y } from "swiper/modules";
import "swiper/css";

const ITEMS = [
  {
    big: "#5",
    lines: ["Nationally", "(Private B-Schools)"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/times-now.png",
      alt: "Times Now",
      width: 298,
      height: 36,
      className: "h-6 sm:h-7",
    },
  },
   
  {
    big: "#2",
    lines: ["Private Engineering & Technology University In Maharashtra  "],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/educationworld.png",
      alt: "Education World",
      width: 298,
      height: 36,
      className: "h-10 sm:h-14",
    },
  },
 
  {
    heading: ["Prestigious", "Education Brand"],
    lines: ["Two time in a row", "2024-2025"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/makrsmen-daily.png",
      alt: "Marksmen Daily",
      width: 225,
      height: 63,
      className: "h-11 sm:h-12",
    },
  },
  {
    heading: ["Top 5"],
    lines: ["B-School", "(West Zone)"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/bw-bussinessword.png",
      alt: "BW Businessworld",
      width: 243,
      height: 34,
      className: "h-6 sm:h-7",
    },
  },
  {
    big: "#14",
    lines: ["Overall", "National Rank"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/times-now.png",
      alt: "Times Now",
      width: 298,
      height: 36,
      className: "h-6 sm:h-7",
    },
  },
  {
    heading: ["Top 15 "],
    lines: ["Private B-Schools in India  "],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/bw-bussinessword.png",
      alt: "BW Businessworld ",
      width: 243,
      height: 34,
      className: "h-6 sm:h-7",
    },
  },
   
  {
    big: "#5",
    lines: ["West ", "Zone "],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/times-now.png",
      alt: "Times Now",
      width: 298,
      height: 36,
      className: "h-6 sm:h-7",
    },
  },
   {
    heading: ["Best Institution "],
    lines: ["Two Times in a Row ","(2024 and 2025)"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/world-education-congress1.png",
      alt: "Education World",
      width: 298,
      height: 36,
      className: "h-10 sm:h-22",
    },
  },
   {
    heading: ["Excellence In"],
    lines: [" Industry Collaboration ", "2025"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/times-now.png",
      alt: "Times Now",
     width: 298,
      height: 36,
      className: "h-6 sm:h-7",
    },
  },
  {
    big: "#22",
    lines: ["Overall in India  "],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/bw-bussinessword.png",
      alt: "BW Businessworld  ",
      width: 243,
      height: 34,
      className: "h-6 sm:h-7",
    },
  },

  {
    big: "#1",
    lines: ["Top Emerging", "Management University (2022)"],
    logo: {
      src: "/ui-assets/logo/brand-logos/1/the-times-of-india.png",
      alt: "Times Education Icons — The Times of India",
      width: 249,
      height: 79,
      className: "h-12 sm:h-14",
    },
  },
  
  
  
];

function RankingCard({ item }) {
  return (
    <div className="flex h-full flex-col items-center text-center text-atlas-navy">
      {/* Stat / heading — fixed-height zone, bottom-aligned so subtitles line up */}
      <div className="flex h-[76px] w-full items-end justify-center lg:h-[88px]">
        {item.big ? (
          <p className="text-6xl font-extrabold leading-none tracking-tight lg:text-7xl">
            {item.big}
          </p>
        ) : (
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight lg:text-3xl">
            {item.heading[0]}
            <br />
            {item.heading[1]}
          </h3>
        )}
      </div>

      {/* Supporting text */}
      <p className="mt-3 text-base font-medium leading-snug text-atlas-navy/90 lg:text-lg">
        {item.lines[0]}
        <br />
        {item.lines[1]}
      </p>

      {/* Logo — fixed-height wrapper pinned to bottom, centered on both axes so
          every logo sits on the same horizontal baseline without stretching. */}
      <div className="mt-auto flex h-16 w-full items-center justify-center lg:h-20">
        <Image
          src={item.logo.src}
          alt={item.logo.alt}
          width={item.logo.width}
          height={item.logo.height}
          className={`${item.logo.className} max-h-full w-auto object-contain`}
        />
      </div>
    </div>
  );
}

export default function Rankings() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  // With loop enabled, realIndex maps every snap position back to the original
  // 0..(ITEMS.length-1) slide, so pagination stays correct on every breakpoint.
  const sync = (sw) => setActive(sw.realIndex);

  const goToPage = (i) => swiperRef.current?.slideToLoop(i);

  return (
    <section className="bg-[#f6f7ee]" aria-label="Rankings and recognitions">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Responsive carousel — 1 / 2 / 3 / 4 cards per view */}
        <Swiper
          modules={[Autoplay, Keyboard, A11y]}
          loop
          grabCursor
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={16}
          keyboard={{ enabled: true }}
          breakpoints={{
            768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 24 },
            1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 24 },
            1280: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 32 },
          }}
          onSwiper={(s) => {
            swiperRef.current = s;
            sync(s);
          }}
          onSlideChange={sync}
          onResize={sync}
          aria-label="Rankings and recognitions"
        >
          {ITEMS.map((item, i) => (
            <SwiperSlide key={i} className="h-auto">
              <RankingCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination — centered below */}
        <div className="mt-8 flex items-center justify-center gap-2 lg:mt-10">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              onClick={() => goToPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 bg-atlas-navy"
                  : "w-2 bg-atlas-navy/25 hover:bg-atlas-navy/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
