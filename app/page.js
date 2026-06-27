import HeroBanner from "./components/HeroBanner";
import Rankings from "./components/Rankings";
import IndustryFocus from "./components/IndustryFocus";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroBanner />
      <Rankings />
      <IndustryFocus />
    </main>
  );
}
