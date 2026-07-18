import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CompletedWorks from "@/components/CompletedWorks";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <WhyChooseUs />
      <Process />
      <CompletedWorks />
      <ServiceAreas />
      <Testimonials />
      <CTASection />
    </>
  );
}
