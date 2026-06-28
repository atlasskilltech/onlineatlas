// Outlined navy tag/pill used on dark sections. Uses design-system tokens
// (atlas-navy fill on the darker section background, subtle white border).
export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl border border-white/15 bg-atlas-navy px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/40 ${className}`}
    >
      {children}
    </span>
  );
}
