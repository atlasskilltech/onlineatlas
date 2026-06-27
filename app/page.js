import HeroBanner from "./components/HeroBanner";
import Rankings from "./components/Rankings";
import IndustryFocus from "./components/IndustryFocus";
import IndustryPartners from "./components/IndustryPartners";
import Leadership from "./components/Leadership";
import AdmissionsCTA from "./components/AdmissionsCTA";
import StudentSuccess from "./components/StudentSuccess";

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
    </main>
  );
}
