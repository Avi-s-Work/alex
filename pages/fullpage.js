import Hero from "../components/hero";
import Network from "../components/network";
import Services from "../components/services";
import Experience from "../components/experience";
import Testimonial from "../components/testimonial";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function Fullpage() {
  return (
    <>
      <Hero />
      <Network />
      <Services />
      <Experience />
      <Testimonial />
      <Projects />
      <Footer />
    </>
  );
}
