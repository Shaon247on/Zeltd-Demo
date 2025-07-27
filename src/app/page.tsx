import AboutSection from "@/components/landing/AboutSection";
import AccordionSection from "@/components/landing/AccordionSection";
import Hero from "@/components/landing/Hero";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProfessionalsSection from "@/components/landing/ProfessionalsSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import TestimonialSection from "@/components/landing/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TestimonialSection/>
      <AboutSection/>
      <HowItWorksSection/>
      <ProfessionalsSection/>
      <ReviewsSection/>
      <AccordionSection/>
    </div>
  );
}
