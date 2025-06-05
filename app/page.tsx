import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section
        id="about"
        className="flex justify-center items-center min-h-[60dvh] bg-secondary"
      >
        <h1>About</h1>
      </section>
      <section
        id="projects"
        className="flex justify-center items-center min-h-screen"
      >
        <h1>Project</h1>
      </section>
      <section
        id="certificates"
        className="flex justify-center items-center min-h-screen bg-secondary"
      >
        <h1>Certificates</h1>
      </section>
      <section
        id="skills"
        className="flex justify-center items-center min-h-screen "
      >
        <h1>Skills</h1>
      </section>

      <section
        id="testimonials"
        className="flex justify-center items-center min-h-screen bg-secondary"
      >
        <h1>Testimonials</h1>
      </section>
      <section
        id="contact"
        className="flex justify-center items-center min-h-screen"
      >
        <h1>Contact</h1>
      </section>
    </>
  );
}
