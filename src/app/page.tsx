import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseSolar from "@/components/sections/WhyChooseSolar";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import SolarSavings from "@/components/SolarSavings";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solar Power Solutions - Go Green</title>
        <meta name="description" content="Switch to solar energy and save money. Reliable and affordable solar power solutions." />
        <meta name="keywords" content="solar, renewable energy, solar panels, sustainable power" />
      </Head>
      <Navbar />
      <Hero />
      <WhyChooseSolar />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <ContactForm />
      <SolarSavings />
      <Footer />
    </div>
  );
}