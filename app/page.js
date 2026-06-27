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
    </main>
  );
}
