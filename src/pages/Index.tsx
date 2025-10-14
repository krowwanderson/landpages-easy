import { HeroSection } from "@/components/sections/HeroSection";
import { WhyItMattersSection } from "@/components/sections/WhyItMattersSection";
import { MechanismSection } from "@/components/sections/MechanismSection";
import { FuturePictureSection } from "@/components/sections/FuturePictureSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/Footer";
import { StickyCtaButton } from "@/components/StickyCtaButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyItMattersSection />
      <MechanismSection />
      <FuturePictureSection />
      <ProductSection />
      <SocialProofSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
      <StickyCtaButton />
    </div>
  );
};

export default Index;
