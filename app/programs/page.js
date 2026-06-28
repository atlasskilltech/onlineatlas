// Programs route. Header and Footer come from the root layout; page sections
// are composed here. Currently the hero — more sections will follow.
import ProgramsHero from "../components/ProgramsHero";
import ProgramOverview from "../components/ProgramOverview";
import WhyAtlasMba from "../components/WhyAtlasMba";
import { SITE_URL, BRAND, pageMetadata } from "../seo";

export const metadata = {
  ...pageMetadata({
    title: "Online MBA Program | ATLAS SkillTech University",
    description:
      "Online Master of Business Administration from ATLAS SkillTech University — built for leaders shaping an AI-driven future. Flexible, UGC-recognised, industry-integrated learning.",
    path: "/programs",
    image: "/meta-image/programs-page.png",
    imageAlt: "Online MBA — ATLAS SkillTech University",
    keywords: [
      "online MBA",
      "AI-native MBA",
      "Master of Business Administration online",
      "ATLAS SkillTech University MBA",
      "MBA for working professionals",
      "UGC-DEB MBA",
      "online management degree India",
      "AI-driven business education",
    ],
  }),
  // Programs-page favicon — reuses the existing asset (scoped to this page only
  // so the Homepage and shared layout stay untouched).
  icons: {
    icon: [
      {
        url: "/meta-image/favicon/atlas-cube-1.png",
        type: "image/png",
        sizes: "256x256",
      },
    ],
    shortcut: ["/meta-image/favicon/atlas-cube-1.png"],
    apple: [{ url: "/meta-image/favicon/atlas-cube-1.png", sizes: "256x256" }],
  },
};

const programsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Online Master of Business Administration (MBA)",
      description:
        "An online, AI-native MBA built for leaders shaping an AI-driven future — combining world-class faculty, industry mentors, and real-world AI application.",
      url: `${SITE_URL}/programs`,
      provider: {
        "@type": "CollegeOrUniversity",
        name: BRAND,
        sameAs: SITE_URL,
      },
      educationalCredentialAwarded: "Master of Business Administration (MBA)",
      courseMode: "online",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Programs",
          item: `${SITE_URL}/programs`,
        },
      ],
    },
  ],
};

export default function ProgramsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programsJsonLd) }}
      />
      <ProgramsHero />
      <ProgramOverview />
      <WhyAtlasMba />
    </main>
  );
}
