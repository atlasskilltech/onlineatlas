import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { PrimaryButton } from "./ui/Button";

const CHECK_ICON = "/ui-assets/icons-image/green/right.png";

const SEMESTERS = [
  { label: "Semester 1", amount: "₹62,500" },
  { label: "Semester 2", amount: "₹62,500" },
  { label: "Semester 3", amount: "₹62,500" },
  { label: "Semester 4", amount: "₹62,500" },
];

const WHAT_YOU_GET = [
  "AI-Powered Learning Platform",
  "Career Readiness & Placement Support",
  "Internshala Student Account Access",
  "Industry Projects & Case Studies",
  "Campus Immersion Opportunities",
];

const BENEFITS = [
  {
    title: "No-Cost EMI Options Available",
    desc: "Flexible payment plans through our finance partners",
  },
  {
    title: "Scholarship Opportunities",
    desc: "Merit-based scholarships for eligible candidates",
  },
  {
    title: "Early Bird Benefits",
    desc: "Apply early for fee waivers and additional perks",
  },
];

// Programs "Investment in Your Future" — fee structure + benefits.
// Reuses the shared SectionHeading + PrimaryButton; the dark pricing card and
// flat-green benefit cards are local to this section.
export default function InvestmentFuture() {
  return (
    <section className="bg-[#f6f7ee]" aria-labelledby="investment-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header — heading left, CTA top-right (stacks on mobile) */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading
            eyebrow="Investment In"
            title={<span id="investment-heading">Your Future</span>}
          />
          <PrimaryButton
            href="#apply"
            variant="navy"
            withArrow
            className="self-start sm:self-auto"
          >
            Apply Now
          </PrimaryButton>
        </div>

        {/* Pricing card */}
        <div className="mt-8 rounded-3xl bg-[#13294d] p-7 text-white shadow-2xl shadow-black/20 sm:p-9 lg:mt-10 lg:p-12">
          <div className="grid gap-9 lg:grid-cols-2 lg:gap-0">
            {/* Left — semester fee structure */}
            <div className="lg:pr-12">
              <ul className="space-y-6 sm:space-y-7">
                {SEMESTERS.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-sm text-white/70 sm:text-[15px]">
                      {row.label}
                    </span>
                    <span className="text-sm font-bold text-white sm:text-base">
                      {row.amount}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-white/15 pt-7 sm:mt-8 sm:pt-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-white sm:text-base">
                    Total
                  </span>
                  {/* Amount intentionally left empty until provided */}
                  <span className="text-sm font-bold text-white sm:text-base" />
                </div>
              </div>
            </div>

            {/* Right — what you get (vertical divider on desktop, horizontal on mobile) */}
            <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h3 className="text-xl font-bold text-atlas-lime sm:text-2xl">
                What You Get:
              </h3>
              <ul className="mt-6 space-y-4 sm:space-y-5">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Image
                      src={CHECK_ICON}
                      alt=""
                      aria-hidden="true"
                      width={22}
                      height={23}
                      loading="lazy"
                      className="h-5 w-5 shrink-0"
                    />
                    <span className="text-sm text-white/90 sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefit cards */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl bg-[#3f7d54] p-6 shadow-lg shadow-black/10 sm:p-7"
            >
              <h3 className="text-base font-bold text-white sm:text-lg">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
