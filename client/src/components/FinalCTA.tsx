import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onStartTaxes: () => void;
}

export default function FinalCTA({ onStartTaxes }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-700 to-teal-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Manage Your Taxes Smarter with AI
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-100">
          Join thousands of business owners and professionals who are saving time
          and money with UnitedTax.AI.
        </p>
        <Button
          size="xl"
          className="bg-white text-primary-dark hover:bg-primary-50 border-2 border-primary-light shadow-md"
          onClick={onStartTaxes}
        >
          Start My Taxes Today
        </Button>
      </div>
    </section>
  );
}
