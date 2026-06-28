// Homepage hero pill/badge — outlined, frosted, with a lime status dot.
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-atlas-lime" />
      {children}
    </span>
  );
}
