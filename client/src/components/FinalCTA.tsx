import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onStartTaxes: () => void;
}

export default function FinalCTA({ onStartTaxes }: FinalCTAProps) {
  return (
    <section className="pt-8 pb-10 bg-gradient-to-r from-primary-700 to-teal-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Manage Your Taxes Smarter Today
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-100">
          Join thousands of business owners and professionals who are saving time
          and money with UnitedTax.AI.
        </p>
        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto -mt-4">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#25638b]">Want to Chat?</h3>
          <p className="text-lg mb-6 text-neutral-600">
            If you'd like to discuss your tax situation before getting started, we'd be happy to chat and help you make an informed decision when choosing your next accountant.
          </p>
          <a 
            href="https://calendly.com/mike-unitedtax/15min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
          >
            Schedule a 15-Minute Call
          </a>
        </div>
      </div>
    </section>
  );
}
