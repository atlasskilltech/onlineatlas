import Image from "next/image";

// Shared hero background: campus photo + navy overlay (the exact homepage
// treatment). Reused by every page hero so the look stays consistent.
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/herobanner/hero-banner-image.png"
        alt="ATLAS campus building"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <Image
        src="/herobanner/transparent-blue.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}
