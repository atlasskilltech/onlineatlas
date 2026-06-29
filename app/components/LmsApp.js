import Image from "next/image";
import FeatureItem from "./ui/FeatureItem";
import { PrimaryButton } from "./ui/Button";

const FEATURES = [
  "User-friendly interface",
  "Live and recorded lectures",
  "Instant notifications and updates",
  "AI-powered learning insights",
];

// Shared copy so the desktop and mobile layouts stay in sync.
function Heading() {
  return (
    <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-atlas-navy sm:text-5xl">
      Learn Anytime,
      <br />
      <span className="text-[#958309]">Anywhere</span>
    </h2>
  );
}

function Copy() {
  return (
    <>
      <p className="mt-5 text-lg font-medium leading-snug text-atlas-navy sm:text-xl">
        Seamless Learning on the Go with our
        <br />
        <span className="text-[#958309]">AI-Powered LMS App</span>
      </p>

      <ul className="mt-7 space-y-3.5 text-base font-medium text-atlas-navy">
        {FEATURES.map((feature) => (
          <FeatureItem key={feature}>{feature}</FeatureItem>
        ))}
      </ul>

      <div className="mt-8">
        <PrimaryButton href="#apply" variant="navy" withArrow>
          Apply Now
        </PrimaryButton>
      </div>
    </>
  );
}

export default function LmsApp() {
  return (
    <section className="bg-atlas-lime">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        {/* DESKTOP (lg+) — unchanged two-column layout: image left, content right */}
        <div className="hidden items-center lg:grid lg:grid-cols-[45fr_55fr] lg:gap-12">
          <div className="flex justify-center">
            <Image
              src="/twenty-three-section/poster/1.png"
              alt="ATLAS LMS mobile app showing tutorials, live lectures, assignments, and learning analytics"
              width={384}
              height={561}
              loading="lazy"
              className="h-auto w-[280px] drop-shadow-2xl sm:w-[320px] lg:w-[360px]"
            />
          </div>

          <div className="lg:max-w-xl">
            <Heading />
            <Copy />
          </div>
        </div>

        {/* MOBILE / TABLET (< lg) — heading, copy, button, then the phone image */}
        <div className="flex flex-col lg:hidden">
          <Heading />
          <Copy />
          <div className="mt-10 flex justify-center">
            <Image
              src="/twenty-three-section/poster/1.png"
              alt="ATLAS LMS mobile app showing tutorials, live lectures, assignments, and learning analytics"
              width={384}
              height={561}
              loading="lazy"
              className="h-auto w-[280px] drop-shadow-2xl sm:w-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
