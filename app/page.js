import HeroBanner from "./components/HeroBanner";
import Rankings from "./components/Rankings";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroBanner />
      <Rankings />
    </main>
  );
}
