import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface PricingProps {
  onSelectPlan: (plan: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const pricingTiers = [
    {
      name: "Personal",
      description: "For individuals & freelancers with single income sources",
      price: "$250",
      features: [
        "Federal & state filing",
        "W-2 income reporting",
        "Basic investment income",
        "Standard deductions",
        "Digital document storage",
        "24/7 AI tax assistant",
      ],
      unavailable: ["Business entity filing"],
      popular: false,
    },
    {
      name: "Business",
      description: "For business owners, LLCs, S-Corps & multi-income sources",
      price: "$550",
      features: [
        "All Personal features",
        "Business entity returns",
        "Income & expense categorization",
        "Tax deduction optimization",
        "Quarterly tax planning",
        "Year-round tax support",
        "Priority expert review",
      ],
      unavailable: [],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25638b] mb-2">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Flat-rate pricing with no hidden fees or surprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full ${
                tier.popular
                  ? "border-primary border-2 relative"
                  : "border border-neutral-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 bg-primary text-white text-center py-1 font-medium text-sm">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${tier.popular ? "pt-10" : ""} flex flex-col h-full`}>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                  {tier.name}
                </h3>
                <p className="text-neutral-600 h-12">{tier.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-neutral-900">
                    {tier.price}
                  </span>
                  <span className="text-neutral-500">/base price</span>
                  <div className="mt-1">
                    <button 
                      onClick={() => onSelectPlan(tier.name)} 
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Calculate My Price
                    </button>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-teal-500 mt-1 mr-2" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                  {tier.unavailable.map((feature, idx) => (
                    <li key={idx} className="flex items-start opacity-50">
                      <X className="h-4 w-4 text-neutral-400 mt-1 mr-2" />
                      <span className="text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-auto"
                  onClick={() => onSelectPlan(tier.name)}
                >
                  Start My Taxes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
