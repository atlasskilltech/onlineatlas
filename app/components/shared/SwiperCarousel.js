"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Keyboard } from "swiper/modules";
import "swiper/css";

// One production-grade carousel built on Swiper, shared across the site.
// Handles infinite loop, mouse/touch/trackpad drag, keyboard, autoplay
// (pause-on-hover, resume after interaction) and responsive slides-per-view.
//
// Pagination is rendered by us (not Swiper's pagination DOM) and driven by
// Swiper's `realIndex`, so it always shows the exact ATLAS dots (lime pill +
// grey circles), stays centred, updates on autoplay/swipe/loop/resize, and is
// clickable (slideToLoop). One dot per real slide.
//
// Props:
//   children              array of slide nodes
//   slidesPerView         number | "auto"
//   spaceBetween          px gap between slides
//   breakpoints           Swiper breakpoints ({ 640: { slidesPerView: 3 }, ... })
//   loop, autoplay, autoplayDelay
//   slideClassName        classes for each <SwiperSlide> (e.g. fixed widths)
//   paginationWrapClass   classes for the dots container
//   dotActiveClass / dotInactiveClass  Tailwind dot styles
export default function SwiperCarousel({
  children,
  slidesPerView = 1,
  spaceBetween = 0,
  breakpoints,
  loop = true,
  autoplay = false,
  autoplayDelay = 4500,
  slideClassName = "h-auto",
  className = "",
  ariaLabel,
  showPagination = true,
  paginationWrapClass = "mt-8 flex items-center justify-center gap-2.5",
  dotActiveClass = "h-2 w-6 rounded-full bg-atlas-lime transition-all duration-300",
  dotInactiveClass = "h-2 w-2 rounded-full bg-white/25 transition-all duration-300 hover:bg-white/40",
  dotLabel = (i) => `Go to slide ${i + 1}`,
}) {
  const slides = (Array.isArray(children) ? children : [children]).filter(Boolean);

  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  const modules = [A11y, Keyboard];
  if (autoplay) modules.push(Autoplay);

  return (
    <>
      <Swiper
        className={className}
        modules={modules}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        loop={loop}
        keyboard={{ enabled: true }}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        onSwiper={(sw) => {
          setSwiper(sw);
          setActive(sw.realIndex || 0);
        }}
        onSlideChange={(sw) => setActive(sw.realIndex || 0)}
        aria-label={ariaLabel}
      >
        {slides.map((node, i) => (
          <SwiperSlide key={i} className={slideClassName}>
            {node}
          </SwiperSlide>
        ))}
      </Swiper>

      {showPagination ? (
        <div className={paginationWrapClass}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={dotLabel(i)}
              aria-current={i === active}
              onClick={() => swiper?.slideToLoop(i)}
              className={i === active ? dotActiveClass : dotInactiveClass}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
