import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FabButtons from "@/components/FabButtons";
import AudioToggle from "@/components/AudioToggle";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header />
      <Hero />
      <FabButtons />
      <AudioToggle />
    </div>
  );
}
