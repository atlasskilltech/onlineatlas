import Image from "next/image";

// Gradient pill/chip with a leading icon. Extracted verbatim from the homepage
// OnlinePrograms banner so both pages share one implementation.
export default function FeatureChip({ label, icon, w, h, gradient }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/25 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] ${gradient}`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/25">
        <Image src={icon} alt="" aria-hidden="true" width={w} height={h} className="h-3.5 w-auto" />
      </span>
      {label}
    </span>
  );
}
