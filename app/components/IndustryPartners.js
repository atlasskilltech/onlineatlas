import BrandLogoMarquee from "./ui/BrandLogoMarquee";
import { PARTNER_LOGO_ROWS } from "../data/partnerLogos";

export default function IndustryPartners() {
  return (
    <section className="bg-[#081f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-atlas-lime sm:text-3xl lg:text-4xl">
          Strong Industry Partnerships Driving Success
        </h2>

        <BrandLogoMarquee rows={PARTNER_LOGO_ROWS} className="mt-10 lg:mt-12" />

        {/* Divider with a short lime accent at the left */}
        <div className="relative mt-12 w-full">
  <div className="h-[3px] w-full bg-[#D6D6D6]" />
  <div className="absolute left-0 top-0 h-[4px] w-24 bg-atlas-lime" />
</div>
      </div>
    </section>
  );
}
