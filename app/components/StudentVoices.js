import Image from "next/image";
import { PrimaryButton } from "./ui/Button";
import MultiViewCarousel from "./ui/MultiViewCarousel";

const QUOTE_ICON = "/fourtheen-section/icon/qoute.png";

// Single source testimonial, duplicated below to keep the carousel running until
// more student stories are supplied.
// NOTE: twenty-five-section only ships the lime name graphic (no portrait), so
// the photo is a stand-in reused from sixth-section — swap `photo` once the real
// Ansh Maheshwari portrait is added under /twenty-five-section/students/.
const STUDENTS = [
  {
    name: "Ansh Maheshwari",
    batch: "Batch of 2025",
    photo: "/sixth-section/students/mridul-nadar/person.png",
    quote:
      "Conducted an interactive session on entrepreneurship, digital disruption, and building scalable modern brands, focusing on innovation, business growth, and sustainable branding.",
  },
];

// 3 slides → 3 pagination dots, matching the reference.
const SLIDES = Array.from({ length: 3 }, (_, i) => ({
  ...STUDENTS[i % STUDENTS.length],
}));

function StudentCard({ s }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#15294e] p-7 shadow-xl shadow-black/30 sm:p-8">
      <Image
        src={QUOTE_ICON}
        alt=""
        aria-hidden="true"
        width={54}
        height={40}
        className="h-9 w-auto self-start sm:h-10"
      />

      {/* Testimonial + name on the left, photo top-right */}
      <div className="mt-5 flex gap-4 sm:gap-5">
        <div className="min-w-0 flex-1">
          <blockquote className="text-[13.5px] leading-relaxed text-white/85 sm:text-sm">
            {s.quote}
          </blockquote>
          <div className="mt-6">
            <p className="text-lg font-bold text-atlas-lime">{s.name}</p>
            <p className="mt-1 text-sm text-white/60">{s.batch}</p>
          </div>
        </div>

        <div className="relative aspect-[9/10] w-[115px] shrink-0 self-start overflow-hidden rounded-xl bg-white/5">
          <Image
            src={s.photo}
            alt={s.name}
            fill
            sizes="125px"
            loading="lazy"
            className="object-cover object-top"
          />
        </div>
      </div>
    </article>
  );
}

// Programs "Hear From Those Who've Been There" — heading + CTA on the left
// (~34%), a responsive testimonial carousel on the right (~66%).
export default function StudentVoices() {
  return (
    <section className="bg-[#0a1f3d] text-white" aria-labelledby="student-voices-heading">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[34fr_66fr] lg:gap-12">
          {/* Left — heading + CTA (min-w-0 lets the grid track stay at 34%) */}
          <div className="min-w-0 text-center lg:text-left">
            <h2
              id="student-voices-heading"
              className="text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.5rem]"
            >
              <span className="block">Hear From Those</span>
              <span className="block text-atlas-lime">Who&apos;ve Been There</span>
            </h2>
            <div className="mt-8 flex justify-center lg:justify-start">
              <PrimaryButton href="#apply" withArrow className="whitespace-nowrap">
                Apply Now
              </PrimaryButton>
            </div>
          </div>

          {/* Right — carousel (min-w-0 so it stays inside its grid track) */}
          <div className="min-w-0">
            <MultiViewCarousel
              slides={SLIDES.map((s, i) => (
                <StudentCard key={i} s={s} />
              ))}
              ariaLabel="Student testimonials"
              slideClassName="basis-[86%] sm:basis-[360px]"
              gapClassName="gap-6"
              paginationClassName="mt-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
