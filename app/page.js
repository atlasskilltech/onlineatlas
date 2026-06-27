import HeroBanner from "./components/HeroBanner";
import Rankings from "./components/Rankings";
import IndustryFocus from "./components/IndustryFocus";
import IndustryPartners from "./components/IndustryPartners";
import Leadership from "./components/Leadership";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroBanner />
      <Rankings />
      <IndustryFocus />
      <IndustryPartners />
      <Leadership />
    </main>
  );
}
