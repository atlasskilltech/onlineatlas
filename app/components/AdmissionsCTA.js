import Image from "next/image";
import Link from "next/link";

const DEFAULT_FEATURES = [
  "Flexible learning with AI",
  "Build with Industry",
  "Real-world outcomes",
];

// Default profile = the fifth-section CTA (Nikhil Kamath / Zerodha), so existing
// usage keeps working with no props.
const DEFAULT_PROFILE = {
  image: {
    src: "/fiveth-section/person/nikhil-kamath/1.png",
    alt: "Nikhil Kamath speaking at the ATLAS Convocation",
  },
  name: "Nikhil Kamath",
  title: "Founder & CEO",
  convocation: "@ ATLAS Convocation",
  logo: {
    src: "/fiveth-section/logo/zerodha.png",
    width: 103,
    height: 52,
    alt: "Zerodha",
  },
};

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ProfileCard({ profile }) {
  return (
    <div className="group mx-auto w-full max-w-sm rounded-[26px] bg-[#f6f7ee] shadow-xl shadow-black/15 lg:mx-0 lg:w-[360px] lg:shrink-0">
      <div className="relative aspect-[339/336] w-full overflow-hidden rounded-[20px]">
        {/* Featured profile photo */}
        <Image
          src={profile.image.src}
          alt={profile.image.alt}
          fill
          sizes="(max-width: 1024px) 384px, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Identity badge overlaid on the lower portion of the photo. */}
        <div className="absolute inset-x-3 bottom-3 flex items-stretch rounded-xl bg-[#081f3dc9] px-3.5 py-3 shadow-lg shadow-black/30 sm:inset-x-4 sm:bottom-4">
          <div className="flex min-w-0 flex-col justify-center pr-3.5">
            <p className="truncate text-base font-bold leading-tight text-atlas-lime">
              {profile.name}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-white">
              {profile.title}
            </p>
            <p className="mt-0.5 text-[11px] leading-tight text-white/70">
              {profile.convocation}
            </p>
          </div>

          <span aria-hidden="true" className="w-px self-stretch bg-white/25" />

          <div className="flex shrink-0 items-center pl-3.5">
            <Image
              src={profile.logo.src}
              alt={profile.logo.alt}
              width={profile.logo.width}
              height={profile.logo.height}
              className="h-9 w-auto max-w-[120px] object-contain sm:h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdmissionsCTA({
  profile = DEFAULT_PROFILE,
  features = DEFAULT_FEATURES,
  heading = "Admissions Open for 2026",
  paragraph = "Join a new generation of business professionals equipped to navigate change, leverage AI, and create impact.",
  checkSrc = "/fiveth-section/icon/right.png",
  starSrc = "/fiveth-section/shape/vector.png",
  applyHref = "#apply",
  prospectusHref = "#prospectus",
}) {
  return (
    <section className="relative overflow-hidden bg-atlas-lime">
      {/* Decorative four-point star — the asset is a semi-transparent navy that
          composites over the lime into the reference's olive tone. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <Image
          src={starSrc}
          alt=""
          width={176}
          height={278}
          className="h-[260px] w-auto xl:h-[300px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          {/* LEFT — featured profile card */}
          <ProfileCard profile={profile} />

          {/* RIGHT — admissions copy + CTAs */}
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#081f3d] sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#081f3d]/80 sm:text-lg">
              {paragraph}
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Image
                    src={checkSrc}
                    alt=""
                    aria-hidden="true"
                    width={26}
                    height={26}
                    className="h-5 w-5 shrink-0"
                  />
                  <span className="text-sm font-bold text-[#081f3d] sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={applyHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#081f3d] px-7 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#0d2c54] sm:w-auto sm:text-base"
              >
                Apply Now
                <ArrowRight />
              </Link>
              <Link
                href={prospectusHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#081f3d]/50 px-7 py-3.5 text-sm font-bold text-[#081f3d] transition-colors duration-200 hover:bg-[#081f3d]/5 sm:w-auto sm:text-base"
              >
                Prospectus
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
