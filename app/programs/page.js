// Programs route. Header and Footer come from the root layout; page sections
// are composed here. Currently the hero — more sections will follow.
import ProgramsHero from "../components/ProgramsHero";

export const metadata = {
  title: "Online MBA — Atlas Online",
  description:
    "Master of Business Administration — built for leaders shaping an AI-driven future. 100% online from Atlas SkillTech University, School of Management.",
};

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsHero />
    </main>
  );
}
