import Link from "next/link";
import ProgramsHighlightSection from "./shared/ProgramsHighlightSection";
import { ArrowRight } from "./ui/icons";

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

// Colour pattern preserves the previous `i % 3 === 1 ? "white" : "blue"`:
// blue, white, blue, blue, white, blue.
const CARDS = [
  {
    title: "Industry-Relevant Learning",
    body: "Contemporary case studies, masterclasses, industry interactions, global perspectives and practical business applications that connect directly to career growth.",
    icon: `${ICON}/blue/industry-relevant-learning.png`,
    w: 24,
    h: 28,
    variant: "blue",
  },
  {
    title: "AI-First Business Education",
    body: "AI is embedded throughout the learning journey as a tool for decision-making, productivity, innovation and strategic thinking across every discipline.",
    icon: `${ICON}/white/ai-first-business-education.png`,
    w: 23,
    h: 19,
    variant: "white",
  },
  {
    title: "Build With Industry",
    body: "Work on live briefs with real companies, collaborate with CXOs through exclusive masterclasses, and graduate with a portfolio of work.",
    icon: `${ICON}/blue/build-with-industry.png`,
    w: 33,
    h: 33,
    variant: "blue",
  },
  {
    title: "A New Way to Study Business Online",
    body: "Forget pre-recorded lectures. These programs are built around doing — blending AI tools, peer learning & industry immersion into business programs designed for the world you're entering.",
    icon: `${ICON}/blue/a-new-way-to-study-business-online.png`,
    w: 23,
    h: 29,
    variant: "blue",
  },
  {
    title: "Skills for Careers of the Future",
    body: "Build critical capabilities such as strategic thinking, problem solving, communication, collaboration & decision-making that will define success in the decades ahead.",
    icon: `${ICON}/white/skills-for-careers-of-the-future.png`,
    w: 33,
    h: 25,
    variant: "white",
  },
  {
    title: "ATLAS SkillTech University Alumni Status",
    body: "Join a network of change-makers across business, design, law and technology. Your ATLAS alumni credential signals more than a degree, it signals that you're built for what's next.",
    icon: `${ICON}/blue/atlas-skillTechuniversity-alumni-status.png`,
    w: 27,
    h: 35,
    variant: "blue",
  },
];

export default function OnlinePrograms() {
  return (
    <ProgramsHighlightSection
      image="/indumaam-with-piyushbansal/indu-maam-with-peyush-bansal.png"
      imageAlt="ATLAS leadership in conversation with Peyush Bansal"
      priority
      eyebrow="Where Business Education Meets the Age of AI"
      heading={
        <>
          Online Management Programs Built
          <br className="hidden sm:block" /> for How Businesses Work Today
        </>
      }
      chips={CHIPS}
      cards={CARDS}
      mobileSlider
      cta={
        <Link
          href="#apply"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-atlas-lime px-7 py-3 text-base font-bold text-[#0a2348] transition-colors duration-200 hover:bg-white sm:w-auto"
        >
          Apply Now
          <ArrowRight />
        </Link>
      }
    />
  );
}
