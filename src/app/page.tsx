import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Techstack from "@/sections/Techstack";
import TerminalIntro from "@/sections/TerminalIntro";

// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen items-center justify-center px-2 lg:px-16">
      <Navbar />
      <TerminalIntro />
      <Techstack />
      <Projects />
      <Footer />
    </main>
  );
}
