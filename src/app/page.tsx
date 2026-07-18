import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompletedWorks from "@/components/CompletedWorks";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <WhyChooseUs />
      <CompletedWorks />
      <ServiceAreas />
      <CTASection />
    </>
  );
}
