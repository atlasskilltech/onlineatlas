import Image from "next/image";

const BASE = "/thirteen-section/industry-leaders";

// Cinematic profile card (image + upward gradient + name + company logo).
// Extracted from the homepage IndustryCurriculum so both pages share it.
// `layoutClass` controls only width/snap behaviour; its default reproduces the
// homepage card exactly, while other layouts (e.g. a tablet grid) can override.
export default function ProfileCard({
  leader,
  layoutClass = "min-w-[210px] snap-start sm:min-w-[230px] lg:min-w-0",
}) {
  return (
    <article
      className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 bg-atlas-navy shadow-[0_12px_30px_-12px_rgba(12,35,64,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-14px_rgba(12,35,64,0.55)] ${layoutClass}`}
    >
      <Image
        src={`${BASE}/${leader.slug}/person.png`}
        alt={`${leader.first} ${leader.last}, ${leader.company}`}
        fill
        sizes="(max-width: 640px) 260px, (max-width: 1024px) 33vw, 18vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Soft cinematic gradient — fades upward into transparency. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(to_top,rgba(8,18,39,0.98)_0%,rgba(8,18,39,0.88)_25%,rgba(8,18,39,0.55)_50%,rgba(8,18,39,0.18)_75%,transparent_100%)]" />

      {/* Name + company logo, positioned inside the gradient */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="flex items-end justify-between gap-2 px-3.5 pb-3.5">
          <p className="text-sm font-bold leading-tight text-[#e7c84b]">
            <span className="block">{leader.first}</span>
            <span className="block">{leader.last}</span>
          </p>
          <Image
            src={`${BASE}/${leader.slug}/logo.png`}
            alt={`${leader.company} logo`}
            width={leader.logoW}
            height={leader.logoH}
            className="h-5 w-auto shrink-0 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}
