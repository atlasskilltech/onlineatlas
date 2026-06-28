import Image from "next/image";

// Feature card with three colour variants from the homepage design system:
//   white — light card (homepage default light card)
//   blue  — navy/blue gradient (homepage default gradient card)
//   green — green→navy gradient (reuses the homepage green token)
// `white`/`blue` reproduce the homepage OnlinePrograms cards exactly.
const VARIANTS = {
  white: {
    card: "border-black/5 bg-[#f6f7ee] shadow-black/10 hover:shadow-black/20",
    iconBox: "bg-[#357e51]",
    title: "text-[#0c2340]",
    body: "text-slate-600",
  },
  blue: {
    card: "border-white/10 bg-gradient-to-br from-[#173a8c] to-[#0a2146] shadow-black/30 hover:shadow-black/50",
    iconBox: "bg-white",
    title: "text-atlas-lime",
    body: "text-white/70",
  },
  green: {
    card: "border-white/10 bg-gradient-to-br from-[#0c6e5f] to-[#0a2146] shadow-black/30 hover:shadow-black/50",
    iconBox: "bg-white",
    title: "text-atlas-lime",
    body: "text-white/70",
  },
};

export default function FeatureCard({ title, body, icon, w, h, variant = "blue" }) {
  const v = VARIANTS[variant] ?? VARIANTS.blue;
  return (
    <article
      className={`group rounded-2xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 sm:p-7 ${v.card}`}
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${v.iconBox}`}
      >
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={w}
          height={h}
          loading="lazy"
          className="h-5 w-auto"
        />
      </span>
      <h3 className={`mt-4 text-lg font-bold leading-snug ${v.title}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${v.body}`}>{body}</p>
    </article>
  );
}
