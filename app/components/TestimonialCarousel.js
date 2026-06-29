import Image from "next/image";
import SwiperCarousel from "./shared/SwiperCarousel";

const DEFAULT_QUOTE_ICON = "/fourtheen-section/icon/qoute.png";

// Reusable testimonial carousel: cream quote card + portrait, dark navy
// section, lime heading, pill pagination. Used by the Homepage (HrTestimonials)
// and the Programs page (IndustryConversations). Carousel mechanics come from
// the shared Swiper wrapper; only heading, data and image base path differ.
function TestimonialSlide({
  t,
  imageBase,
  quoteIcon,
  priority,
  imageBgClassName,
  logoClassName,
}) {
  return (
    <div className="px-0.5">
      <div className="grid items-stretch gap-5 lg:grid-cols-[1.38fr_1fr] lg:gap-8">
        {/* LEFT — testimonial card */}
        <article className="flex flex-col rounded-3xl bg-[#f4f3e8] p-7 shadow-2xl shadow-black/30 sm:p-9 lg:p-10">
          <Image
            src={quoteIcon}
            alt=""
            aria-hidden="true"
            width={54}
            height={40}
            className="h-7 w-auto self-start sm:h-8"
          />

          <blockquote className="mt-5 text-base leading-relaxed text-atlas-navy sm:text-lg sm:leading-relaxed">
            {t.quote}
          </blockquote>

          <div className="mt-auto flex items-end justify-between gap-4 pt-7 lg:pt-8">
            <div>
              <p className="text-base font-bold text-atlas-navy sm:text-lg">
                {t.name}
              </p>
              <p className="mt-0.5 text-sm text-atlas-navy/70">
                {t.designation}
              </p>
            </div>
            <Image
              src={`${imageBase}/${t.slug}/logo.png`}
              alt={t.company}
              width={t.logoW}
              height={t.logoH}
              className={logoClassName}
            />
          </div>
        </article>

        {/* RIGHT — profile image */}
        <div
          className={`relative aspect-[500/498] overflow-hidden rounded-3xl shadow-2xl shadow-black/30 ${imageBgClassName}`}
        >
          <Image
            src={`${imageBase}/${t.slug}/person.png`}
            alt={`${t.name}, ${t.designation} at ${t.company}`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCarousel({
  ariaLabelledBy,
  heading,
  testimonials,
  imageBase,
  quoteIcon = DEFAULT_QUOTE_ICON,
  slideCount = 4,
  ariaLabel = "Testimonials",
  imageBgClassName = "",
  logoClassName = "h-9 w-auto shrink-0 object-contain object-right sm:h-10",
}) {
  // Duplicate the supplied testimonials into `slideCount` slides until more real
  // testimonials are available.
  const SLIDES = Array.from({ length: slideCount }, (_, i) => ({
    ...testimonials[i % testimonials.length],
    key: i,
  }));

  return (
    <section className="bg-[#182E5D] text-white" aria-labelledby={ariaLabelledBy}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2
          id={ariaLabelledBy}
          className="text-3xl font-extrabold tracking-tight text-atlas-lime sm:text-4xl"
        >
          {heading}
        </h2>

        <div className="mt-8 lg:mt-10">
          <SwiperCarousel
            ariaLabel={ariaLabel}
            slidesPerView={1}
            spaceBetween={8}
            loop
            autoplay
            autoplayDelay={4500}
            paginationWrapClass="mt-8 flex items-center justify-center gap-2.5"
          >
            {SLIDES.map((t, i) => (
              <TestimonialSlide
                key={i}
                t={t}
                imageBase={imageBase}
                quoteIcon={quoteIcon}
                priority={i === 0}
                imageBgClassName={imageBgClassName}
                logoClassName={logoClassName}
              />
            ))}
          </SwiperCarousel>
        </div>
      </div>
    </section>
  );
}
