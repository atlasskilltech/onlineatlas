import Image from "next/image";

const BG = "/eighteen-section/bg/1.png";

export default function FinalCta() {
  return (
    <section className="group relative isolate overflow-hidden bg-atlas-navy">
      {/* PART 1 — Background image (full-width, composition preserved) */}
      <Image
        src={BG}
        alt="ATLAS students"
        fill
        sizes="100vw"
        loading="lazy"
        className="-z-20 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Dark navy overlay for text readability */}
      <div className="absolute inset-0 -z-10 bg-[#0a1326]/45" />

      {/* PART 2 — Centered content */}
      <div className="mx-auto flex min-h-[360px] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[400px] sm:px-6 lg:min-h-[440px] lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your next chapter starts now.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Applications for the October 2026 cohort are open. Lock in your Future
          Leader Scholarship today.
        </p>

        {/* PART 3 — CTA buttons */}
        <div className="mt-7 flex w-full max-w-xs flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <a
            href="#apply"
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-atlas-lime px-7 py-3 text-sm font-bold text-atlas-navy shadow-lg shadow-black/20 transition-colors duration-300 hover:bg-[#cdd45a] sm:w-auto sm:py-3.5"
          >
            Start your application
            <span aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#brochure"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10 sm:w-auto sm:py-3.5"
          >
            Download brochure
          </a>
        </div>
      </div>
    </section>
  );
}
