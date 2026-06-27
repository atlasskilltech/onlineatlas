import Image from "next/image";

const FEATURES = [
  {
    icon: { src: "/third-section/icon/ai.svg", width: 42, height: 35 },
    line1: "Learn",
    line2: (
      <>
        with <span className="font-bold">Ai</span>
      </>
    ),
    desc: "Build AI fluency and learn to apply emerging technologies across business, strategy, marketing & decision-making",
  },
  {
    icon: { src: "/third-section/icon/light.svg", width: 52, height: 52 },
    line1: "Experiential Industry",
    line2: "First Approach",
    desc: "Learn from practitioners, solve real business challenges & gain insights from leaders shaping today's industries",
  },
  {
    icon: { src: "/third-section/icon/bag.svg", width: 45, height: 45 },
    line1: "Career",
    line2: "Acceleration",
    desc: "Develop the skills, portfolio, and professional network needed to grow, transition, & lead in the future of work",
  },
];

export default function IndustryFocus() {
  return (
    // `isolate` creates a stacking context so the video (z-20) reliably paints
    // on top of the white features block (z-10).
    <section className="relative isolate bg-[#f6f7ee]">
      {/* ── Hero (navy) ───────────────────────────────────────────────
          Contains heading, copy and the video. The video is wrapped in a
          spacer that only reserves ~72% of the video's height, so the navy
          block ends ~72% down the video — the remaining ~28% spills below. */}
      <div className="relative z-20 bg-[#081f3d] text-white">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Learn Business at
            <br />
            <span className="text-atlas-lime">
              India&rsquo;s Most Industry Focused University
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 lg:text-lg">
            At ATLAS Online School of Management, learning goes beyond lectures.
            Gain future-ready skills, industry exposure, and practical
            experience designed to help you thrive in an AI-driven world.
          </p>

          {/* Spacer: aspect 21/7.2 == 72% of the video's 21/10 height. This is
              the only part of the video that lives inside the navy block, so
              navy ends here and the lower ~28% of the video floats out below. */}
          <div className="relative mt-10 aspect-[21/7.2] lg:mt-12">
            {/* The actual video: absolutely anchored to the spacer's top with
                its full 21/10 height, so it overflows the spacer (and the navy
                block) downward by ~28% of its height. */}
            <div className="absolute inset-x-0 top-0 z-20 aspect-[21/10] overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source
                  src="/third-section/video/atlas-tour.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* ── Features (white) ──────────────────────────────────────────
          A sibling that begins exactly where the navy block ends, so its top
          sits *behind* the spilled ~28% of the video (lower z-index). The top
          padding clears that overlap (≈13.5% of width) plus a gap, pushing the
          cards below the video so they never overlap it. */}
      <div className="relative z-10 bg-[#f6f7ee]">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 pb-16 pt-[calc(13.5%+4rem)] sm:px-6 lg:px-8 lg:pb-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
              {FEATURES.map((f, i) => (
                <div key={i}>
                  <div className="flex items-start gap-3">
                    <Image
                      src={f.icon.src}
                      alt=""
                      aria-hidden="true"
                      width={f.icon.width}
                      height={f.icon.height}
                      className="h-9 w-auto shrink-0 sm:h-10"
                    />
                    <h3 className="text-lg leading-tight text-[#081f3d] sm:text-xl">
                      <span className="font-bold">{f.line1}</span>
                      <br />
                      <span className="font-normal">{f.line2}</span>
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
