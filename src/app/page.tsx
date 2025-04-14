import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseSolar from "@/components/sections/WhyChooseSolar";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import SolarSavings from "@/components/SolarSavings";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseSolar />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <SolarSavings />
    </div>
  );
}