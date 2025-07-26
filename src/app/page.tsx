import AboutSection from "@/components/landing/AboutSection";
import Hero from "@/components/landing/Hero";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProfessionalsSection from "@/components/landing/ProfessionalsSection";
import ReviewSection from "@/components/landing/ReviewSection";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ReviewSection/>
      <AboutSection/>
      <HowItWorksSection/>
      <ProfessionalsSection/>
    </div>
  );
}
