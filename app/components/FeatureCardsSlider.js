"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import FeatureCard from "./ui/FeatureCard";

// Feature cards for the OnlinePrograms highlight section:
//   - Desktop / laptop / tablet (sm and up): the existing 2/3-col grid, unchanged.
//   - Mobile (below sm): a smooth, touch/drag Swiper showing ~1.1 cards.
// The same FeatureCard + data drive both, so styling stays identical.
export default function FeatureCardsSlider({ cards }) {
  return (
    <>
      {/* Desktop / laptop / tablet — unchanged grid (sm and up) */}
      <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      {/* Mobile — Swiper slider */}
      <div className="sm:hidden">
        <Swiper
          modules={[Keyboard, A11y]}
          slidesPerView={1.1}
          spaceBetween={16}
          grabCursor
          keyboard={{ enabled: true }}
          aria-label="Program highlights"
        >
          {cards.map((f) => (
            <SwiperSlide
              key={f.title}
              className="!h-auto [&>article]:h-full"
            >
              <FeatureCard {...f} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
