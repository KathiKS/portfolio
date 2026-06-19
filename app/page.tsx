import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Internships from "../components/Internships";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="about">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="internships">
        <Internships />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="connect">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}