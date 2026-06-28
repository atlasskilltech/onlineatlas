import Tag from "./ui/Tag";

const TAGS = [
  "Product Teams",
  "Strategy Teams",
  "Consulting Firms",
  "Growth & Marketing",
  "AI & Innovation Teams",
  "FinTech",
  "Startups",
  "Global Enterprises",
  "E-Commerce Brands",
];

export default function CareerPaths() {
  return (
    <section className="bg-[#081f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — header */}
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          From Corporate Boardrooms to
          <br />
          <span className="text-atlas-lime">Emerging Startups</span>
        </h2>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-white/80 sm:text-base">
          Build the capabilities to lead products, drive growth, solve business
          challenges, and create impact across industries.
        </p>

        {/* PART 2 — career path tags */}
        <ul className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
          {TAGS.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
