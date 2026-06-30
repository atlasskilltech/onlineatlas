import Image from "next/image";
import Link from "next/link";

const NAV_COLUMNS = [
  {
    title: "Programs",
    links: [
      { label: "Online MBA", href: "#mba" },
      { label: "Online BBA", href: "#bba" },
      { label: "Specializations", href: "#specializations" },
      { label: "AI Curriculum", href: "#ai-curriculum" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "How to apply", href: "#how-to-apply" },
      { label: "Fees & EMI", href: "#fees" },
      { label: "Scholarships", href: "#scholarships" },
      { label: "Eligibility", href: "#eligibility" },
    ],
  },
  {
    title: "University",
    links: [
      { label: "About ATLAS", href: "#about" },
      { label: "Advisory Board", href: "#advisory-board" },
      { label: "Industry Connect", href: "#industry-connect" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
  { label: "Refund Policy", href: "#refund-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#00132a] text-[#92a2b4]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Atlas Online — home" className="inline-block">
              <Image
                src="ui-assets/logo/main-logos/atlas-online-logo.svg"
                alt="ATLAS SkillTech Online — School of Management"
                width={353}
                height={117}
                className="h-12 w-auto sm:h-14"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#92a2b4]">
              ATLAS SkillTech University&apos;s Online School &mdash; flexible,
              industry-connected education that builds future-ready skills,
              accelerates career growth, and helps you lead in an ever-evolving
              world.
            </p>

            <p className="mt-6 text-sm text-[#6e7e90]">
              UGC-DEB entitled &middot; Mumbai, India
            </p>
          </div>

          {/* Navigation columns */}
          {NAV_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#92a2b4] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#6e7e90] sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <p>
            &copy; 2026 ATLAS SkillTech University. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-2">
            {LEGAL_LINKS.map((link, i) => (
              <li key={link.label} className="flex items-center gap-x-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-[#6e7e90]/60">
                    &middot;
                  </span>
                )}
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
