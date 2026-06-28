import Image from "next/image";

// Seamless logo marquee row. Extracted verbatim from the homepage
// IndustryPartners section so both pages share one implementation.
function MarqueeRow({ src, width, height, reverse }) {
  return (
    <div className="flex overflow-hidden">
      {/* The transform-based marquee forms its own stacking context, so the navy
          bg lives here on the track — the backdrop `mix-blend-lighten` blends the
          logos' black background against it (turning it invisible).

          Seamless loop: the track holds 4 identical copies and animates by -50%
          (= 2 copies). Because 2 copies are always wider than the container, the
          viewport is never left with blank space; and since copies 3–4 are
          identical to 1–2, the reset at -50% is invisible. */}
      <div
        className={`flex w-max items-center bg-[#081f3d] animate-marquee [animation-duration:90s] motion-reduce:animate-none ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {[0, 1, 2, 3].map((i) => (
          <Image
            key={i}
            src={src}
            width={width}
            height={height}
            alt={i === 0 ? "ATLAS industry partners" : ""}
            aria-hidden={i !== 0}
            className="mr-10 h-10 w-auto max-w-none shrink-0 mix-blend-lighten sm:mr-12 sm:h-12 lg:mr-14 lg:h-14"
          />
        ))}
      </div>
    </div>
  );
}

// Stacked logo marquee. Rows alternate scroll direction (even → left, odd → right).
export default function BrandLogoMarquee({ rows, className = "" }) {
  return (
    <div className={`flex flex-col gap-6 lg:gap-8 ${className}`}>
      {rows.map((row, i) => (
        <MarqueeRow key={row.src} {...row} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}
