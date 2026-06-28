// Reusable section header (eyebrow + heading + description) using the exact
// homepage light-section typography. Shared so every Programs section stays
// visually consistent with the Homepage without duplicating class strings.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  descriptionClassName = "",
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#081f3d]">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-atlas-navy sm:text-4xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={`mt-5 text-sm leading-relaxed text-atlas-navy/70 sm:text-[15px] ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
