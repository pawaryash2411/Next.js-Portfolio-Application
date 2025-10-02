// pages/index.js
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import CircularText from "@/components/sub/CircularText";
import Experience from "@/components/main/Experience";

export default function Home() {
  return (
    <main className="h-full w-full relative">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Encryption />
        <div className="fixed bottom-16 right-4 z-50">
          <CircularText
            text="YASH*DEV*UNIVERSE*"
            spinDuration={10}
            onHover="speedUp"
            className="text-cyan-400"
          />
        </div>
        <Footer />
      </div>
    </main>
  );
}
