import Image from "next/image";

// Strips trimmed flush to the first/last logo (no leading/trailing margin), so
// the only gap is the `mr` we add between copies — kept equal to the strip's own
// inter-logo spacing (≈ the row height) so every gap stays consistent.
const ROWS = [
  {
    src: "/fourth-section/brand-logos/first-row-trim.png",
    width: 2481,
    height: 120,
  },
  {
    src: "/fourth-section/brand-logos/second-row-trim.png",
    width: 2241,
    height: 120,
  },
];

function MarqueeRow({ src, width, height, reverse }) {
  return (
    <div className="flex overflow-hidden">
      {/* The transform-based marquee forms its own stacking context, so the navy
          bg lives here on the track — the backdrop `mix-blend-lighten` blends the
          logos' black background against (turning it invisible).

          Seamless loop: the track holds 4 identical copies and animates by -50%
          (= 2 copies). Because 2 copies are always wider than the container, the
          viewport is never left with blank space; and since copies 3–4 are
          identical to 1–2, the reset at -50% is invisible. The -50% now spans
          twice the distance of a single copy, so the duration is doubled (90s)
          to keep the on-screen scroll speed unchanged. */}
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
            className="mr-8 h-8 w-auto max-w-none shrink-0 mix-blend-lighten sm:mr-10 sm:h-10"
          />
        ))}
      </div>
    </div>
  );
}

export default function IndustryPartners() {
  return (
    <section className="bg-[#081f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-atlas-lime sm:text-3xl lg:text-4xl">
          Strong Industry Partnerships Driving Success
        </h2>

        <div className="mt-10 flex flex-col gap-6 lg:mt-12 lg:gap-8">
          <MarqueeRow {...ROWS[0]} />
          <MarqueeRow {...ROWS[1]} reverse />
        </div>

        {/* Divider with a short lime accent at the left */}
        <div className="relative mt-12 w-full">
  <div className="h-[3px] w-full bg-[#D6D6D6]" />
  <div className="absolute left-0 top-0 h-[4px] w-24 bg-atlas-lime" />
</div>
      </div>
    </section>
  );
}
