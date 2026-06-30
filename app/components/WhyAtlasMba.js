import ProgramsHighlightSection from "./shared/ProgramsHighlightSection";
import { PrimaryButton } from "./ui/Button";

const ICON = "/ui-assets/icons-image";

const CHIPS = [
  {
    label: "AI Native Learning",
    icon: `${ICON}/white/ai-native-learning.png`,
    w: 23,
    h: 19,
    gradient: "bg-gradient-to-r from-[#1c3f78] to-[#2a8ba2]",
  },
  {
    label: "CXO Masterclasses",
    icon: `${ICON}/white/cxo-masterclasses.png`,
    w: 15,
    h: 15,
    gradient: "bg-gradient-to-r from-[#0c6e5f] to-[#06c194]",
  },
  {
    label: "Live Industry Projects",
    icon: `${ICON}/white/live-industry-projects.png`,
    w: 14,
    h: 14,
    gradient: "bg-gradient-to-r from-[#0d6f8e] to-[#10b6b2]",
  },
];

// 2 rows × 3 cols. Colour pattern matches the reference: middle column white,
// outer columns alternate blue/green between the two rows.
const CARDS = [
  {
    title: "Master AI Tools Used By Industry",
    body: "Gain hands-on experience with tools like Claude, Perplexity, Canva AI, Lovable, Bolt, v0, PostHog, and GA4 to solve real business challenges.",
    icon: `${ICON}/blue/industry-relevant-learning.png`,
    w: 23,
    h: 19,
    variant: "blue",
  },
  {
    title: "Industry-Integrated Learning & Exposure",
    body: "Engage in live projects, gain real-world experience, interact with industry professionals, and develop job-ready skills through experiential learning.",
    icon: `${ICON}/white/ai-first-business-education.png`,
    w: 24,
    h: 28,
    variant: "white",
  },
  {
    title: "Learn by Building Real Solutions",
    body: "Create an AI-powered content channel, launch a working AI product, implement AI workflows, and pitch an AI venture by graduation.",
    icon: `${ICON}/blue/build-with-industry.png`,
    w: 33,
    h: 33,
    variant: "green",
  },
  {
    title: "Global Academic Exposure & Collaboration",
    body: "60+ university partnerships that expand your learning beyond borders and connect you to a world of opportunities.",
    icon: `${ICON}/blue/a-new-way-to-study-business-online.png`,
    w: 23,
    h: 29,
    variant: "green",
  },
  {
    title: "Career-First Learning Ecosystem",
    body: "Comprehensive support with mentorship, employability training, interview preparation, and hiring opportunities.",
    icon: `${ICON}/white/skills-for-careers-of-the-future.png`,
    w: 33,
    h: 25,
    variant: "white",
  },
  {
    title: "Built by Industry & Academic Leaders",
    body: "Designed with insights from experts shaping the future of business, education, and global innovation worldwide.",
    icon: `${ICON}/blue/atlas-skillTechuniversity-alumni-status.png`,
    w: 27,
    h: 35,
    variant: "blue",
  },
];

export default function WhyAtlasMba() {
  return (
    <ProgramsHighlightSection
      image="/indumaam-with-piyushbansal/indu-maam-with-peyush-bansal.png"
      imageAlt="ATLAS leadership in conversation with Peyush Bansal"
      eyebrow="Why Say Yes to"
      heading="ATLAS Online MBA"
      description="Designed for real-world relevance, the ATLAS Online MBA blends AI-first learning with global business insight to help you lead with confidence in a rapidly evolving world."
      chips={CHIPS}
      cards={CARDS}
      cta={
        <div className="mt-7">
          <PrimaryButton href="#apply" withArrow>
            Apply Now
          </PrimaryButton>
        </div>
      }
    />
  );
}
