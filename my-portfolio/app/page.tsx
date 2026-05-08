import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechStackSummary } from "@/components/TechStackSummary";
import { Projects } from "@/components/Projects";
import { Infrastructure } from "@/components/Infrastructure";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-tech-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <TechStackSummary />
        <Projects />
        <Infrastructure />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
