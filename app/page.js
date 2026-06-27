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

export default function Home() {
  return (
    <main className="flex-1">
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
    </main>
  );
}
