import SectionHeading from "./ui/SectionHeading";

const STAR = "/seventheen-section/shape/vector.png";

// Roles rendered dynamically. Card layout matches the reference; titles/salaries
// are real, varied MBA outcomes (the reference repeats one placeholder role).
const CAREERS = [
  {
    title: "Business Analyst",
    desc: "Drive process improvement, data analysis, and business solutions.",
    salary: "8–12 LPA",
  },
  {
    title: "Product Manager",
    desc: "Own the product roadmap and ship customer-focused solutions.",
    salary: "7–12 LPA",
  },
  {
    title: "Marketing Manager",
    desc: "Lead campaigns, brand strategy, and growth across channels.",
    salary: "7–13 LPA",
  },
  {
    title: "Strategy Consultant",
    desc: "Solve complex business problems and advise leadership teams.",
    salary: "10–12 LPA",
  },
  {
    title: "Finance Manager",
    desc: "Drive financial planning, analysis, and investment decisions.",
    salary: "12–14 LPA",
  },
];

function CareerCard({ title, desc, salary }) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-2xl bg-atlas-navy p-5 shadow-xl shadow-black/20 sm:p-6">
      <div className="min-w-0">
        <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/70">{desc}</p>
      </div>
      <div className="shrink-0 rounded-xl bg-white px-4 py-2.5 text-center">
        <p className="text-base font-extrabold text-atlas-navy sm:text-lg">
          {salary}
        </p>
        <p className="text-[11px] font-medium text-atlas-navy/70">Avg salary</p>
      </div>
    </article>
  );
}

export default function CareerOutcomes() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[35fr_65fr]">
        {/* LEFT — cream informational panel */}
        <div className="relative px-4 py-12 sm:px-6 lg:py-20 lg:pl-8 lg:pr-12">
          {/* Cream background, bleeding to the left viewport edge */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 right-0 -z-20 w-screen bg-[#f6f7ee]"
          />
          {/* Decorative star (reused FAQ asset, recoloured sage via CSS mask) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 bottom-6 -z-10 w-40 bg-[#bdd3bf] [aspect-ratio:270/386] [mask-image:url(/seventheen-section/shape/vector.png)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url(/seventheen-section/shape/vector.png)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] sm:w-52"
          />

          <div className="relative">
            <SectionHeading
              title={
                <>
                  Where This MBA
                  <br />
                  Can Take You
                </>
              }
              description="Step into positions that turn vision into real business impact."
              descriptionClassName="max-w-xs"
            />
          </div>
        </div>

        {/* RIGHT — lime career-cards panel */}
        <div className="relative px-4 py-12 sm:px-6 lg:py-20 lg:pl-12 lg:pr-8">
          {/* Lime background, bleeding to the right viewport edge */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 -z-20 w-screen bg-atlas-lime"
          />
          <div className="space-y-4 sm:space-y-5">
            {CAREERS.map((career) => (
              <CareerCard key={career.title} {...career} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
