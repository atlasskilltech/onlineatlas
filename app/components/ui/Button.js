import Link from "next/link";
import { ArrowRight } from "./icons";

// Primary CTA pill. `lime` (default) is the homepage hero button — identical
// classes to before, so existing usages are unchanged. `navy` is the same pill
// in navy/white for light sections.
const PRIMARY_VARIANTS = {
  lime: "bg-atlas-lime text-atlas-navy hover:bg-white",
  navy: "bg-atlas-navy text-white hover:bg-[#0a1a3a]",
};

export function PrimaryButton({
  href = "#",
  children,
  withArrow = false,
  variant = "lime",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold transition-colors ${
        PRIMARY_VARIANTS[variant] ?? PRIMARY_VARIANTS.lime
      } ${className}`}
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
