import About from "@/components/About";
import Carousel from "@/components/Carousel";
import ContactUS from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/FadeIn";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import StarsCanvas from "@/components/StarCanvas";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <FadeIn>  
      <Hero />
      <About />
      <Work />
      <OurServices />
      <Carousel />
      <GetApp />
      <ContactUS />
      <FAQ />
      </FadeIn>
    </main>
  )
}
