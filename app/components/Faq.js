import Image from "next/image";
import FaqAccordion from "./ui/FaqAccordion";

const STAR = "/seventheen-section/shape/vector.png";

// FAQ content is data-driven; the shared FaqAccordion renders the list.
const FAQS = [
  {
    q: "Is the ATLAS Online degree UGC recognised?",
    a: "Yes. The Online MBA and BBA carry the same UGC-DEB recognition and entitlement as ATLAS' on-campus programs — a fully valid degree from ATLAS SkillTech University.",
  },
  {
    q: "Is it really 100% online?",
    a: "Yes. Lectures, assignments, mentoring, and assessments are delivered entirely online through our digital campus, so you can learn from anywhere without ever visiting in person.",
  },
  {
    q: "What makes ATLAS Online different?",
    a: "ATLAS Online is built around industry-integrated learning — live projects, mentorship from working professionals, and a curriculum co-created with industry leaders, not just recorded lectures.",
  },
  {
    q: "What are the fees and EMI options?",
    a: "Programs are priced to stay accessible, with flexible no-cost EMI plans and scholarship options. Our admissions team shares a detailed, transparent fee breakdown during counselling.",
  },
  {
    q: "Who is this program for?",
    a: "Working professionals, recent graduates, and career switchers who want a UGC-recognised degree with real industry exposure while continuing to work or study on their own schedule.",
  },
];

export default function Faq() {
  return (
    <section
      className="relative overflow-hidden bg-atlas-navy text-white"
      aria-labelledby="faq-heading"
    >
      {/* Decorative star — bleeds off the bottom-left edge */}
      <Image
        src={STAR}
        alt=""
        aria-hidden="true"
        width={270}
        height={386}
        className="pointer-events-none absolute bottom-0 left-0 w-[210px] -translate-x-1/4 translate-y-1/4 select-none opacity-40 sm:w-[250px] lg:w-[280px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:items-start lg:gap-12">
          {/* PART 1 — Left content */}
          <div>
            <h2 id="faq-heading" className="tracking-tight">
              <span className="block text-4xl font-medium leading-tight text-white sm:text-[2.6rem]">
                Questions, answered
              </span>
              <span className="mt-3 block text-4xl font-extrabold leading-[1.1] text-atlas-lime sm:text-[2.8rem]">
                Things every
                <br />
                applicant asks.
              </span>
            </h2>
          </div>

          {/* PART 2 — FAQ accordion */}
          <FaqAccordion faqs={FAQS} />
        </div>
      </div>
    </section>
  );
}
