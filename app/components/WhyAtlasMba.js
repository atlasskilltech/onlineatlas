import Image from "next/image";
import FeatureChip from "./ui/FeatureChip";
import FeatureCard from "./ui/FeatureCard";
import { PrimaryButton } from "./ui/Button";

const ICON = "/eight-section/icon";

const CHIPS = [
  {
    label: "AI Native Learning",
    icon: `${ICON}/two/ai-first-business-education.png`,
    w: 23,
    h: 19,
    gradient: "bg-gradient-to-r from-[#1c3f78] to-[#2a8ba2]",
  },
  {
    label: "CXO Masterclasses",
    icon: `${ICON}/one/cxo-masterclasses.png`,
    w: 15,
    h: 15,
    gradient: "bg-gradient-to-r from-[#0c6e5f] to-[#06c194]",
  },
  {
    label: "Live Industry Projects",
    icon: `${ICON}/one/live-industry-projects.png`,
    w: 14,
    h: 14,
    gradient: "bg-gradient-to-r from-[#0d6f8e] to-[#10b6b2]",
  },
];

// 2 rows × 3 cols. Colour pattern matches the reference: middle column white,
// outer columns alternate blue/green between the two rows.
const FEATURES = [
  {
    title: "Master AI Tools Used By Industry",
    body: "Gain hands-on experience with tools like Claude, Perplexity, Canva AI, Lovable, Bolt, v0, PostHog, and GA4 to solve real business challenges.",
    icon: `${ICON}/two/ai-first-business-education.png`,
    w: 23,
    h: 19,
    variant: "blue",
  },
  {
    title: "Industry-Integrated Learning & Exposure",
    body: "Engage in live projects, gain real-world experience, interact with industry professionals, and develop job-ready skills through experiential learning.",
    icon: `${ICON}/two/industry-relevant-learning.png`,
    w: 24,
    h: 28,
    variant: "white",
  },
  {
    title: "Learn by Building Real Solutions",
    body: "Create an AI-powered content channel, launch a working AI product, implement AI workflows, and pitch an AI venture by graduation.",
    icon: `${ICON}/two/build-with-industry.png`,
    w: 33,
    h: 33,
    variant: "green",
  },
  {
    title: "Global Academic Exposure & Collaboration",
    body: "60+ university partnerships that expand your learning beyond borders and connect you to a world of opportunities.",
    icon: `${ICON}/two/a-new-way-to-study-business-online.png`,
    w: 23,
    h: 29,
    variant: "green",
  },
  {
    title: "Career-First Learning Ecosystem",
    body: "Comprehensive support with mentorship, employability training, interview preparation, and hiring opportunities.",
    icon: `${ICON}/two/skills-for-careers-of-the-future.png`,
    w: 33,
    h: 25,
    variant: "white",
  },
  {
    title: "Built by Industry & Academic Leaders",
    body: "Designed with insights from experts shaping the future of business, education, and global innovation worldwide.",
    icon: `${ICON}/two/atlas-skillTechuniversity-alumni-status.png`,
    w: 27,
    h: 35,
    variant: "blue",
  },
];

export default function WhyAtlasMba() {
  return (
    <section className="bg-[#081f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* PART 1 — featured hero banner */}
        <div className="group overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
          <div className="grid lg:grid-cols-[3fr_5fr]">
            {/* Left — featured image */}
            <div className="relative aspect-[418/344] w-full overflow-hidden lg:aspect-auto lg:h-full">
              <Image
                src="/eight-section/poster/indu-maam-with-peyush-bansal.png"
                alt="ATLAS leadership in conversation with Peyush Bansal"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Right — gradient CTA content */}
            <div className="bg-gradient-to-br from-[#142c78] via-[#0a82a0] to-[#22787a] p-8 sm:p-10">
              <p className="text-[13px] text-white/80 sm:text-sm">Why Say Yes to</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2rem]">
                ATLAS Online MBA
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                Designed for real-world relevance, the ATLAS Online MBA blends
                AI-first learning with global business insight to help you lead
                with confidence in a rapidly evolving world.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {CHIPS.map((c) => (
                  <FeatureChip key={c.label} {...c} />
                ))}
              </div>

              <div className="mt-7">
                <PrimaryButton href="#apply" withArrow>
                  Apply Now
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2 — feature grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-7 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
