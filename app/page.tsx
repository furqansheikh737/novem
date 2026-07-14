import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Applications from "@/components/applications";
import Process from "@/components/process";
import Services from "@/components/services";
import WhyNovem from "@/components/why-novem";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import BackToTop from "@/components/back-to-top";
import About from "@/components/about";
import ScrollProgress from "@/components/scroll-progress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Applications />

        <Process />

        <Services />

        <WhyNovem />

        <CTA />

        <Contact />
      </main>

      <BackToTop />

      <Footer />
    </>
  );
}
