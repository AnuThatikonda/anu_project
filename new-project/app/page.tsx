import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Skills } from "@/components/skills";
import { portfolio } from "@/lib/portfolio-data";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar name={portfolio.name} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
