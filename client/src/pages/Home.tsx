import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStats from "@/components/TrustStats";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import ComingSoon from "@/components/ComingSoon";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleStartTaxes = () => {
    toast({
      title: "Start My Taxes",
      description: "This would navigate to the sign-up flow.",
    });
    console.log("Starting taxes");
  };

  const handleSeePricing = () => {
    // Smooth scroll to pricing section
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectPlan = (plan: string) => {
    toast({
      title: `${plan} Plan Selected`,
      description: "This would begin the sign-up process with this plan.",
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
        <TrustStats />
        <HowItWorks />
        <WhoWeHelp />
        <WhyUs />
        <Pricing onSelectPlan={handleSelectPlan} />
        <ComingSoon />
        <FinalCTA onStartTaxes={handleStartTaxes} />
      </main>
      <Footer />
    </div>
  );
}
