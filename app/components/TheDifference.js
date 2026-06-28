import Link from "next/link";
import ComparisonSection from "./ComparisonSection";
import { DIFFERENCE_ROWS } from "../data/difference";

// Homepage comparison — accordion on a light section with a dark card.
// Renders the shared ComparisonSection with the homepage's exact styling.
export default function TheDifference() {
  return (
    <ComparisonSection
      ariaLabelledBy="difference-heading"
      eyebrow="The Difference"
      heading={
        <>
          Other Online Business Programs vs.{" "}
          <span className="font-extrabold">ATLAS</span>
        </>
      }
      headingId="difference-heading"
      rows={DIFFERENCE_ROWS}
      collapsible
      defaultOpenIndex={0}
      cta={
        <Link
          href="#apply"
          className="mt-7 flex w-full items-center justify-center rounded-xl bg-atlas-lime py-3.5 text-sm font-bold text-[#081f3d] shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-white sm:text-base"
        >
          Apply Now
        </Link>
      }
    />
  );
}
