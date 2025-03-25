import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onStartTaxes: () => void;
}

export default function FinalCTA({ onStartTaxes }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-700 to-teal-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Manage Your Taxes Smarter Today
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-100">
          Join thousands of business owners and professionals who are saving time
          and money with UnitedTax.AI.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary-dark hover:bg-primary-50 border-2 border-primary-light shadow-md text-lg py-6"
          onClick={onStartTaxes}
        >
          Start My Taxes Today
        </Button>
      </div>
    </section>
  );
}
