import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onStartTaxes: () => void;
  onSeePricing: () => void;
}

export default function HeroSection({
  onStartTaxes,
  onSeePricing,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#1a4e6e] via-[#25638b] to-[#47a9c7] pt-24 pb-32 overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-white blur-3xl"></div>
        <div className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating badge */}
        <div className="flex justify-center mb-6">
          <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-none py-2 px-4 text-sm shadow-lg">
            <span className="animate-pulse mr-2">🔥</span> Save up to 40% compared to traditional tax services
          </Badge>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-md">
              Professional Tax Preparation{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Without the Premium Price</span>
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl leading-relaxed">
              Experience smarter tax filing. We paired real experienced tax pros with powerful AI technology 
              to give modern businesses and professionals faster turnaround times, greater accuracy, and lower costs—without 
              sacrificing expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                onClick={onStartTaxes}
                className="btn-gradient text-lg font-medium hover:scale-105 transition-transform shadow-lg"
              >
                Start My Taxes
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg font-medium shadow-lg"
                onClick={onSeePricing}
              >
                Calculate My Price
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-3xl font-bold text-white">40%</div>
                <div className="text-blue-100 text-sm">Average Savings</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-3xl font-bold text-white">4.9</div>
                <div className="text-blue-100 text-sm">Customer Rating</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 hidden sm:block">
                <div className="text-3xl font-bold text-white">24h</div>
                <div className="text-blue-100 text-sm">Avg. Response Time</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Decorative elements around the image */}
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-300 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-400 rounded-full blur-xl opacity-60"></div>
              
              <img
                src="/images/hero-image.png"
                alt="Business professional using United Tax service"
                className="rounded-xl shadow-2xl w-full object-cover border-4 border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
        
        {/* Trustpilot logo with link */}
        <div className="mt-16 mb-4 flex justify-center">
          <a 
            href="https://www.trustpilot.com/review/unitedtax.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block transition-all hover:opacity-90 hover:scale-105"
            aria-label="Read our reviews on Trustpilot"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <img 
                src="/images/trustpilot-logo.png" 
                alt="Rated 5 stars on Trustpilot" 
                className="h-[84px] sm:h-[96px]" 
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
