import BrandLogoMarquee from "./ui/BrandLogoMarquee";
import { PARTNER_LOGO_ROWS } from "../data/partnerLogos";

export default function IndustryLeaders() {
  return (
    <section className="bg-[#081f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — header */}
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
          <span className="text-atlas-lime">Strong Industry Partnerships</span>{" "}
          <span className="text-white">Driving Success</span>
        </h2>
        <p className="mt-4 max-w-4xl text-[15px] leading-relaxed text-white/80 sm:text-base">
          Access 300+ CXO-led sessions annually featuring experts from Google,
          Meta, McKinsey, BCG, Amazon, Mastercard, and more—bringing boardroom
          insights straight to your learning experience.
        </p>

        {/* PART 2 — brand logo showcase (reused marquee) */}
        <BrandLogoMarquee rows={PARTNER_LOGO_ROWS} className="mt-10 lg:mt-12" />
      </div>
    </section>
  );
}
