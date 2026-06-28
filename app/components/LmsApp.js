import Image from "next/image";
import FeatureItem from "./ui/FeatureItem";
import { PrimaryButton } from "./ui/Button";

const FEATURES = [
  "User-friendly interface",
  "Live and recorded lectures",
  "Instant notifications and updates",
  "AI-powered learning insights",
];

export default function LmsApp() {
  return (
    <section className="bg-atlas-lime">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-12">
          {/* LEFT — phone mockup */}
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

          {/* RIGHT — content */}
          <div className="lg:max-w-xl">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-atlas-navy sm:text-5xl">
              Learn Anytime,
              <br />
              <span className="text-[#958309]">Anywhere</span>
            </h2>

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
          </div>
        </div>
      </div>
    </section>
  );
}
