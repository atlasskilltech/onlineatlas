import Image from "next/image";
import FeatureChip from "../ui/FeatureChip";
import FeatureCard from "../ui/FeatureCard";
import FeatureCardsSlider from "../FeatureCardsSlider";

// Shared layout for the Homepage "OnlinePrograms" and Programs "WhyAtlasMba"
// sections: a hero promo card (image + gradient content + chips + CTA) above a
// 2×3 feature grid. Everything that differs between pages comes through props,
// so the markup/styling here stays identical for both.
//
// Props:
//   image, imageAlt, priority — hero image
//   eyebrow, heading, description — hero copy (heading/description accept nodes)
//   chips  — [{ label, icon, w, h, gradient }] for FeatureChip
//   cta    — rendered CTA node (each page owns its own button markup/spacing)
//   cards  — [{ title, body, icon, w, h, variant }] for FeatureCard
export default function ProgramsHighlightSection({
  image,
  imageAlt,
  priority = false,
  eyebrow,
  heading,
  description,
  chips,
  cta,
  cards,
  mobileSlider = false,
}) {
  return (
    <section className="bg-[#081f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — hero promotional card */}
        <div className="group overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
          <div className="grid lg:grid-cols-[3fr_5fr]">
            {/* Image */}
            <div className="relative aspect-[418/344] w-full overflow-hidden lg:aspect-auto lg:h-full">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={priority}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Content */}
            <div className="bg-gradient-to-br from-[#142c78] via-[#0a82a0] to-[#22787a] p-8 sm:p-10">
              <p className="text-[13px] text-white/80 sm:text-sm">{eyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2rem]">
                {heading}
              </h2>
              {description ? (
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                  {description}
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                {chips.map((c) => (
                  <FeatureChip key={c.label} {...c} />
                ))}
              </div>

              {cta}
            </div>
          </div>
        </div>

        {/* PART 2 — feature grid (optionally a Swiper on mobile) */}
        {mobileSlider ? (
          <div className="mt-6 lg:mt-7">
            <FeatureCardsSlider cards={cards} />
          </div>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-7 lg:grid-cols-3">
            {cards.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
