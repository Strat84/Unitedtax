import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStartTaxes: () => void;
  onSeePricing: () => void;
}

export default function HeroSection({
  onStartTaxes,
  onSeePricing,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-neutral-50 to-white pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#25638b]">
              Professional Tax Preparation{" "}
              <span className="text-primary">Without the Premium Price</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Experience smarter tax filing. We paired real experienced tax pros with powerful AI technology 
              to give modern businesses and professionals faster turnaround times, greater accuracy, and lower costs—without 
              sacrificing expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={onStartTaxes}
                className="btn-gradient"
              >
                Start My Taxes
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-dark text-primary-dark hover:bg-primary-50"
                onClick={onSeePricing}
              >
                See My Price
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/hero-image.png"
              alt="Business professional using United Tax service"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
        
        {/* Trustpilot logo with link */}
        <div className="mt-12 mb-6 flex justify-center">
          <a 
            href="https://www.trustpilot.com/review/unitedtax.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-80"
            aria-label="Read our reviews on Trustpilot"
          >
            <img 
              src="/images/trustpilot-logo.png" 
              alt="Rated 5 stars on Trustpilot" 
              className="h-[84px] sm:h-[96px]" 
            />
          </a>
        </div>
      </div>
    </section>
  );
}
