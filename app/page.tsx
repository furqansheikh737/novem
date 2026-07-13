import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Applications from "@/components/applications";
import Process from "@/components/process";
import Services from "@/components/services";
import WhyNovem from "@/components/why-novem";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Applications />

        <Process />

        <Services />

        <WhyNovem />

        <CTA />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
