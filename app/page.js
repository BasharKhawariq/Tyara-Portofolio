import About from "@/components/About/about";
import Experiences from "@/components/experience/Experiences";
import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#EDF4FA] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
    </main>
  );
}
