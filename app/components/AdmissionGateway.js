import Image from "next/image";

const ELIGIBILITY = [
  {
    title: "Future Leaders & Entrepreneurs",
    desc: "Aspiring professionals seeking business, leadership, and strategic decision-making skills.",
  },
  {
    title: "Working Professionals",
    desc: "Individuals looking to enhance their managerial capabilities and accelerate career growth.",
  },
  {
    title: "Bachelor's Degree Holders",
    desc: "Candidates with a recognized undergraduate degree and a minimum of 50% aggregate marks.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Submit Application",
    desc: "Complete the online application form and submit required documents.",
  },
  {
    num: "02",
    title: "Reserve Your Seat",
    desc: "Secure your seat by completing the program fee payment.",
  },
  {
    num: "03",
    title: "Start Learning",
    desc: "Begin your learning journey on the designated cohort start date.",
  },
];

export default function AdmissionGateway() {
  return (
    <section className="relative overflow-hidden bg-[#081f3d] text-white">
      {/* Subtle decorative glow, bottom-left (matches the reference) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[#163c43]/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="text-atlas-lime">Your Gateway To</span>{" "}
          <span className="text-white">The ATLAS MBA</span>
        </h2>

        {/* Eligibility pill */}
        <span className="mt-6 inline-flex items-center rounded-full border border-white/20 bg-atlas-navy px-5 py-2 text-sm font-semibold text-white">
          Who Can Apply?
        </span>

        {/* Eligibility cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {ELIGIBILITY.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border-t-[3px] border-[#357e51] bg-[#f6f7ee] p-5 shadow-lg shadow-black/10 sm:p-6"
            >
              <h3 className="text-base font-bold text-atlas-navy sm:text-lg">
                {card.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-atlas-navy/60 sm:text-sm">
                {card.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Admission process card */}
        <div className="relative mt-7 rounded-3xl border border-white/10 bg-gradient-to-br from-[#13315f] via-[#1d4587] to-[#0c2348] shadow-2xl shadow-black/40 lg:mt-8 lg:min-h-[400px]">
          {/* Lighting / glow, clipped to the rounded card */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -top-12 left-1/4 h-72 w-[28rem] rounded-full bg-[#3f74d8]/25 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-72 w-80 rounded-full bg-[#2a55ad]/25 blur-3xl" />
          </div>

          {/* Steps */}
          <div className="relative p-7 sm:p-10 lg:p-12 lg:pr-[350px]">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2rem]">
              Admission Process
            </h3>

            <div className="mt-8 grid gap-y-8 sm:grid-cols-3 sm:gap-x-8 lg:mt-9">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute -left-4 top-1 bottom-1 hidden w-px bg-white/15 sm:block"
                    />
                  )}
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f2ea] text-lg font-extrabold text-atlas-navy shadow-sm">
                    {step.num}
                  </span>
                  <h4 className="mt-4 text-lg font-bold text-atlas-lime">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Person — below the steps on mobile, large bottom-right on desktop */}
          <Image
            src="/twenty-one-section/person/1.png"
            alt="An ATLAS MBA applicant"
            width={360}
            height={416}
            sizes="(max-width: 1024px) 250px, 330px"
            loading="lazy"
            className="relative z-10 mx-auto mt-8 block h-auto w-[230px] sm:w-[260px] lg:absolute lg:bottom-0 lg:right-6 lg:mt-0 lg:h-[376px] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
