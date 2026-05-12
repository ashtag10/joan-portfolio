import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Parcours from "@/components/Parcours";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AOSInit from "@/components/Aos";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <AOSInit />
      <Navbar />
      <Hero />
      <Skills />
      <Parcours />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}