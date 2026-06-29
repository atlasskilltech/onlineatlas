import Image from "next/image";
import SwiperCarousel from "./shared/SwiperCarousel";

const BASE = "/sixteen-section/section-1";

// Single source news item. Duplicated programmatically below to populate the
// carousel until more real articles are supplied.
const ARTICLES = [
  {
    slug: "atlas-blueprint",
    header: { src: `${BASE}/left-image.png`, width: 602, height: 32 },
    image: { src: `${BASE}/right-image.png`, width: 600, height: 316 },
    headline:
      "ATLAS SkillTech University: Creating a New Blueprint for Industry-Integrated Learning",
    lead:
      "ATLAS has designed its academic programmes around a central idea that professional readiness must be built gradually through continuous engagement with real workplaces. Instead of limiting industry exposure to short-term internships, ATLAS follows a structured 4-year industry-integrated journey.",
    body:
      "ATLAS SkillTech University is pioneering one of India's most comprehensive models of industry-integrated higher education. Located in the heart of Mumbai, ATLAS is designed as an urban, multidisciplinary campus where learning is closely connected to real-world practice. The University was founded with a clear and ambitious purpose: to rethink how higher education prepares students for the future of work. At a time when industries are evolving faster than ever, ATLAS has created a learning model where collaboration with industry is not an add-on, but the foundation of how students learn, grow, and build their careers.",
  },
];

// Duplicate the existing data into 4 slides (no manual JSX duplication).
const SLIDES = Array.from({ length: 4 }, (_, i) => ({
  ...ARTICLES[i % ARTICLES.length],
  key: i,
}));

function NewsSlide({ a, priority }) {
  return (
    <div className="px-0.5">
      <div className="rounded-[28px] bg-white p-2.5 shadow-2xl shadow-black/30 sm:p-3">
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-5">
          {/* LEFT — article panel */}
          <article className="flex flex-col px-3 py-3 sm:px-4 sm:py-4 lg:px-5">
            <Image
              src={a.header.src}
              alt="ET Now"
              width={a.header.width}
              height={a.header.height}
              priority={priority}
              loading={priority ? undefined : "lazy"}
              className="h-auto w-full"
            />

            <h3 className="mt-5 text-lg font-bold leading-snug text-atlas-navy sm:text-xl lg:text-2xl">
              {a.headline}
            </h3>

            <p className="mt-3 text-[13px] leading-relaxed text-atlas-navy/70 sm:text-sm">
              {a.lead}
            </p>

            <p className="mt-3 text-xs leading-relaxed text-atlas-navy/60 first-letter:mr-0.5 first-letter:text-base first-letter:font-semibold first-letter:text-atlas-navy sm:text-[13px]">
              {a.body}
            </p>
          </article>

          {/* RIGHT — featured image */}
          <div className="relative aspect-[600/316] overflow-hidden rounded-[20px] lg:aspect-auto lg:min-h-[260px]">
            <Image
              src={a.image.src}
              alt="ATLAS SkillTech University campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={priority}
              loading={priority ? undefined : "lazy"}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AtlasNews() {
  return (
    <section className="bg-atlas-navy text-white" aria-labelledby="atlas-news-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2
          id="atlas-news-heading"
          className="text-3xl font-extrabold tracking-tight text-atlas-lime sm:text-4xl"
        >
          ATLAS in the News
        </h2>

        <div className="mt-8 lg:mt-10">
          <SwiperCarousel
            ariaLabel="ATLAS news articles"
            slidesPerView={1}
            spaceBetween={8}
            loop
            autoplay
            autoplayDelay={4500}
            paginationWrapClass="mt-8 flex items-center justify-center gap-2.5"
          >
            {SLIDES.map((a, i) => (
              <NewsSlide key={i} a={a} priority={i === 0} />
            ))}
          </SwiperCarousel>
        </div>
      </div>
    </section>
  );
}
