import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseSolar from "@/components/sections/WhyChooseSolar";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseSolar />
      <Services />
      <HowItWorks />
    </div>
  );
}