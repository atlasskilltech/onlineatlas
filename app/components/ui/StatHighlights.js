// Reusable highlight row: a responsive grid of value/label blocks with subtle
// vertical dividers between columns on desktop. Data-driven via `items`.
// Reuses the homepage stat grid breakpoints (1 / 2 / 4 columns) and green token.
export default function StatHighlights({ items, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0 ${className}`}
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`flex flex-col ${
            i === 0
              ? "lg:pr-6"
              : "lg:border-l lg:border-black/10 lg:px-6"
          }`}
        >
          <p className="text-2xl font-extrabold tracking-tight text-[#529649] sm:text-[1.7rem]">
            {item.value}
          </p>
          <p className="mt-2 text-sm font-semibold text-atlas-navy">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
