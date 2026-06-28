import Link from "next/link";
import { ArrowRight } from "./icons";

// Homepage primary CTA — lime pill, navy bold text. Identical classes to the
// original homepage hero button so both pages share one style.
export function PrimaryButton({ href = "#", children, withArrow = false, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-atlas-lime px-7 py-3.5 text-base font-bold text-atlas-navy transition-colors hover:bg-white ${className}`}
    >
      {children}
      {withArrow && <ArrowRight />}
    </Link>
  );
}

// Homepage secondary CTA — transparent pill with a thin white border.
export function SecondaryButton({ href = "#", children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 ${className}`}
    >
      {children}
    </Link>
  );
}
