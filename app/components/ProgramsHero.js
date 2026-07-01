import Image from "next/image";
import Badge from "./ui/Badge";
import HeroBackground from "./ui/HeroBackground";
import FeatureItem from "./ui/FeatureItem";
import { PrimaryButton, SecondaryButton } from "./ui/Button";
import EnquiryForm from "./EnquiryForm";

const FEATURES = [
  <>
    Mode{" "}
    <strong className="font-bold text-white">
     100% Online
    </strong>
  </>,
  <>
    Duration{" "}
    <strong className="font-bold text-white">
    2 Years
    </strong>
  </>,
  <>
    Immersion{" "}
    <strong className="font-bold text-white">Optional, on-campus</strong>
  </>,
   <>
    Intake{" "}
    <strong className="font-bold text-white">Jan 2027</strong>
  </>,
];

const ACCREDITATIONS = [
  {
    src: "/programs/one/goverment-logo/naac.png",
    width: 76,
    height: 54,
    label: "Accredited by NAAC 'A'",
  },
  {
    src: "/programs/one/goverment-logo/associate-of-mumbai-universities.png",
    width: 51,
    height: 51,
    label: "Member of the AIU",
  },
  {
    src: "/programs/one/goverment-logo/gyan-wyan.png",
    width: 51,
    height: 55,
    label: "Under Section 2(f) of UGC Act 1956",
  },
];

export default function ProgramsHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-atlas-navy text-white">
      <HeroBackground />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          {/* LEFT — copy */}
          <div>
            <Badge>Online MBA</Badge>

            <h1 className="mt-6 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Master of Business Administration
            </h1>

            <p className="mt-4 text-lg font-semibold text-white sm:text-xl">
              Built for{" "}
              <span className="text-atlas-lime">
                leaders shaping an AI-Native  future
              </span>
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/85 sm:text-base">
              {FEATURES.map((feature, i) => (
                <FeatureItem key={i}>{feature}</FeatureItem>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryButton href="#apply" withArrow>
                Apply Now
              </PrimaryButton>
              <SecondaryButton href="#programs">Download Brochure</SecondaryButton>
            </div>

            {/* Accreditation */}
            <div className="mt-8 border-t border-white/15 pt-6">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
                {/* {ACCREDITATIONS.map((a) => (
                  <div key={a.label} className="flex items-center gap-2.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-lg shadow-black/10">
                      <Image
                        src={a.src}
                        alt=""
                        aria-hidden="true"
                        width={a.width}
                        height={a.height}
                        className="h-auto max-h-9 w-auto object-contain"
                      />
                    </span>
                    <span className="max-w-[120px] text-xs leading-tight text-white/80">
                      {a.label}
                    </span>
                  </div>
                ))} */}

                <p className="mt-0 text-sm font-semibold text-white sm:text-xl">
                <span className="text-atlas-lime">
               UGC Approved & NAAC 
              </span>  Accredited Online MBA Program
            </p>
              </div>
            </div>
          </div>

          {/* RIGHT — enquiry form */}
          <div className="w-full lg:justify-self-end">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
