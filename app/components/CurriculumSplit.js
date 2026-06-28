import Image from "next/image";
import { PrimaryButton } from "./ui/Button";

const FEATURES = [
  {
    title: "Co-Created with Industry Experts",
    desc: "Designed alongside practitioners to reflect real business challenges and emerging trends.",
  },
  { title: "Balanced Academic & Industry Expertise" },
  { title: "AI Embedded Across Learning" },
  { title: "Continuously Updated Curriculum" },
];

export default function CurriculumSplit() {
  return (
    <section className="bg-atlas-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* LEFT — content */}
        <div className="px-4 py-14 sm:px-6 lg:py-16 lg:pl-8 lg:pr-12">
          <h2 className="text-3xl tracking-tight sm:text-4xl">
            <span className="font-semibold text-atlas-lime">
              Industry-Integrated,
            </span>
            <br />
            <span className="font-extrabold text-white">AI-First Curriculum</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[15px]">
            At ATLAS, the curriculum is built to stay aligned with the real
            world, not catch up to it. Every program follows an industry-led,
            AI-first approach, equipping students with skills, tools, and
            mindsets that reflect how modern businesses actually operate.
          </p>

          {/* Feature timeline */}
          <ul className="mt-8 sm:mt-10">
            {FEATURES.map((feature, i) => {
              const last = i === FEATURES.length - 1;
              return (
                <li
                  key={feature.title}
                  className={`relative flex gap-4 ${last ? "" : "pb-6"}`}
                >
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[10px] top-[13px] h-full w-px bg-white/20"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-0.5 h-[21px] w-[21px] shrink-0 rounded-full border-2 border-[#DDE567] bg-atlas-navy"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold leading-snug text-white">
                      {feature.title}
                    </h3>
                    {feature.desc && (
                      <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-white/55">
                        {feature.desc}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <PrimaryButton href="#apply" withArrow>
              Apply Now
            </PrimaryButton>
          </div>
        </div>

        {/* RIGHT — image fills its 50% column and stretches to the same height
            as the left content (grid stretch). Plain width/height: 100% + cover. */}
        <div className="min-h-[360px] sm:min-h-[460px] lg:min-h-0">
          <Image
            src="/twenty-section/right-section/2.png"
            alt="An ATLAS learner exploring AI and VR technology in a data centre"
            width={705}
            height={775}
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
