import HeroBanner from "./components/HeroBanner";
import Rankings from "./components/Rankings";
import IndustryFocus from "./components/IndustryFocus";
import IndustryPartners from "./components/IndustryPartners";
import Leadership from "./components/Leadership";
import AdmissionsCTA from "./components/AdmissionsCTA";
import StudentSuccess from "./components/StudentSuccess";
import AboutUniversity from "./components/AboutUniversity";
import OnlinePrograms from "./components/OnlinePrograms";
import TheDifference from "./components/TheDifference";
import ProgramsShowcase from "./components/ProgramsShowcase";
import AiCurriculum from "./components/AiCurriculum";
import IndustryCurriculum from "./components/IndustryCurriculum";
import HrTestimonials from "./components/HrTestimonials";
import IndustryEcosystem from "./components/IndustryEcosystem";
import AtlasNews from "./components/AtlasNews";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import { SITE_URL, BRAND, pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Online MBA & BBA Programs | ATLAS SkillTech University",
  description:
    "100% online MBA & BBA programs from ATLAS SkillTech University — world-class faculty, industry mentors, and real-world AI application built for an AI-native world.",
  path: "/",
  image: "/meta-image/home-page.png",
  imageAlt: "ATLAS Online — ATLAS SkillTech University",
  keywords: [
    "ATLAS SkillTech University",
    "ATLAS Online",
    "online MBA",
    "online BBA",
    "AI-native management",
    "online business degree India",
    "UGC recognised online degree",
    "Future Leader Scholarship",
  ],
});

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollegeOrUniversity",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND,
      alternateName: "ATLAS Online",
      url: SITE_URL,
      logo: `${SITE_URL}/ui-assets/logo/main-logos/atlas-online-logo.svg`,
      description:
        "ATLAS SkillTech University offers 100% online, AI-native MBA and BBA programs combining world-class faculty, industry mentors, and real-world AI application.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ATLAS Online",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroBanner />
      <Rankings />
      <IndustryFocus />
      <IndustryPartners />
      <Leadership />
      <AdmissionsCTA />
      <StudentSuccess />
      <AboutUniversity />
      <OnlinePrograms />
      <TheDifference />
      <ProgramsShowcase />
      <AiCurriculum />
      <AdmissionsCTA
        profile={{
          image: {
            src: "/twelth-section/person/vivek-pandit/1.png",
            alt: "Vivek Pandit at the ATLAS Convocation",
          },
          name: "Vivek Pandit",
          title: "Founder & CEO",
          convocation: "@ ATLAS Convocation",
          logo: {
            src: "/fourth-section/leaders/vivek-pandit/logo.png",
            width: 800,
            height: 249,
            alt: "McKinsey & Company",
          },
        }}
        checkSrc="/twelth-section/icon/right.png"
        starSrc="/twelth-section/shape/vector.png"
      />
      <IndustryCurriculum />
      <HrTestimonials />
      <IndustryEcosystem />
      <AtlasNews />
      <Faq />
      <FinalCta />
    </main>
  );
}
