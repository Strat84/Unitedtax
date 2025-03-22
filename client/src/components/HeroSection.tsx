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
    <section className="bg-gradient-to-b from-neutral-50 to-white pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-neutral-900">
              AI-Powered Tax Preparation{" "}
              <span className="text-primary">Without the Premium Price</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              We combine AI technology with real tax professionals to deliver a
              faster, more accurate, and affordable tax filing experience
              designed for modern businesses and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={onStartTaxes}>
                Start My Taxes
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary-50"
                onClick={onSeePricing}
              >
                See Pricing
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1593510987185-1ec2256148a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="AI-powered tax preparation illustration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
