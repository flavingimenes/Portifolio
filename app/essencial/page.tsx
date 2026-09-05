import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import { Navbar } from "@/components/essencial/Navbar";
import { Hero } from "@/components/essencial/Hero";
import { About } from "@/components/essencial/About";
import { Projects } from "@/components/essencial/Projects";
import { Experience } from "@/components/essencial/Experience";
import { Skills } from "@/components/essencial/Skills";
import { Approach } from "@/components/essencial/Approach";
import { Contact } from "@/components/essencial/Contact";
import { Footer } from "@/components/essencial/Footer";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Flávio Gabriel — Software Engineer",
  description:
    "Desenvolvedor Full Stack focado em Next.js, React e TypeScript. Confira os projetos, a formação e as formas de entrar em contato.",
  openGraph: {
    title: "Flávio Gabriel — Software Engineer",
    description:
      "Desenvolvedor Full Stack focado em Next.js, React e TypeScript.",
    type: "website",
  },
};

export default function EssencialPage() {
  return (
    <div
      className={`${serif.variable} ${sans.variable} bg-[#FAFAF8] text-[#16181B]`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
