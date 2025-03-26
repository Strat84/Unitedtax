import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import PricingCalculator from "@/components/PricingCalculator";
import ComingSoon from "@/components/ComingSoon";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const handleStartTaxes = () => {
    console.log("Starting taxes");
    // Redirect to the sign-up portal
    window.location.href = "https://portal.unitedtax.ai/login?step=signUp";
  };

  const handleSeePricing = () => {
    // Open the pricing calculator instead of scrolling
    setCalculatorOpen(true);
  };

  const handleSelectPlan = (plan: string) => {
    // Open the calculator with the selected plan
    setCalculatorOpen(true);
    toast({
      title: `${plan} Plan Selected`,
      description: "Let's calculate your personalized price.",
    });
    console.log(`Selected plan: ${plan}`);
  };

  useEffect(() => {
    // Set document title
    document.title = "UnitedTax.AI - AI-Assisted Tax Preparation";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onStartTaxes={handleStartTaxes} />
      <main>
        <HeroSection
          onStartTaxes={handleStartTaxes}
          onSeePricing={handleSeePricing}
        />

        <HowItWorks />
        <WhoWeHelp />
        <WhyUs />
        <Pricing onSelectPlan={handleSelectPlan} />
        <ComingSoon />
        <FinalCTA onStartTaxes={handleStartTaxes} />
        
        {/* Pricing Calculator Dialog */}
        <PricingCalculator 
          open={calculatorOpen} 
          onOpenChange={setCalculatorOpen}
        />
      </main>
      <Footer />
    </div>
  );
}
