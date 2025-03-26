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
        <p className="text-lg mb-4 max-w-2xl mx-auto text-primary-100">
          Join thousands of business owners and professionals who are saving time
          and money with UnitedTax.AI.
        </p>
        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-[#25638b]">Want to Chat?</h3>
          <p className="text-lg mb-6 text-neutral-600">
            If you'd like to discuss your tax situation before getting started, we'd be happy to chat and help you make an informed decision when choosing your next accountant.
          </p>
        </div>
      </div>
    </section>
  );
}
