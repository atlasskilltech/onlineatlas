import Image from "next/image";

const FEATURES = [
  {
    title: "Industry at the Core",
    desc: "Learning shaped through industry collaborations, live projects, masterclasses, & practitioner-led experiences",
  },
  {
    title: "A Multidisciplinary Ecosystem",
    desc: "A unique environment where business, design, technology, innovation, & entrepreneurship intersect",
  },
  {
    title: "Global by Design",
    desc: "Collaborations and partnerships with leading universities across the world, creating opportunities for global exposure and learning",
  },
  {
    title: "Built for the Future",
    desc: "Programs designed around emerging industries, future skills, innovation, & the evolving world of work",
  },
];

function StatCard({ title, desc, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#102643] p-5 shadow-lg shadow-black/20 sm:p-6 ${className}`}
    >
      <p className="text-3xl font-extrabold leading-none text-atlas-lime sm:text-4xl">
        {title}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-[13px]">
        {desc}
      </p>
    </div>
  );
}

export default function AboutUniversity() {
  return (
    <section className="bg-[#081f3d] text-white" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — narrative */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-atlas-lime">
              About ATLAS SkillTech University
            </p>

            <h2
              id="about-heading"
              className="mt-3 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl xl:text-[2.5rem]"
            >
              India&rsquo;s Most
              <br />
              Industry Focused University
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
              ATLAS SkillTech University was founded to reimagine higher
              education for a rapidly changing world. Located in the heart of
              Mumbai&rsquo;s business district, ATLAS brings together business,
              design, technology, entrepreneurship, and innovation under one
              multidisciplinary ecosystem.
            </p>

            <ul className="mt-8 space-y-5">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <Image
                    src="/ui-assets/icons-image/green/right.png"
                    alt=""
                    aria-hidden="true"
                    width={26}
                    height={27}
                    className="mt-0.5 h-5 w-5 shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white sm:text-[15px]">
                      {f.title}
                    </h3>
                    <p className="mt-1 max-w-md text-xs leading-relaxed text-white/60 sm:text-[13px]">
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — stats + campus */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <StatCard title="65+" desc="Global University Partnerships" />
              <StatCard title="Mumbai" desc="Located in India's Financial Capital" />
            </div>

            <StatCard
              title="5 Schools"
              desc="Business & Management, Design, Technology, Law & Online Learning"
            />

            <div className="relative aspect-[602/258] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30">
              <Image
                src="/aboutuniversity/university-view/1.png"
                alt="Aerial view of the ATLAS SkillTech University campus in Mumbai"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
