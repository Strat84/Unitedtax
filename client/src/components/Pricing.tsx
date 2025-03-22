import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface PricingProps {
  onSelectPlan: (plan: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const pricingTiers = [
    {
      name: "Freelancer",
      description: "For independent contractors & simple business structures",
      price: "$299",
      features: [
        "Personal return + Schedule C",
        "1099-NEC/MISC processing",
        "Business expense deductions",
        "Home office deductions",
      ],
      unavailable: ["Entity tax return filing"],
      popular: false,
    },
    {
      name: "Business Owner",
      description: "For LLCs, S-Corps, and growing businesses",
      price: "$599",
      features: [
        "Personal + Entity return",
        "1 State filing included",
        "Business expense optimization",
        "Quarterly tax planning",
        "1 hour tax consultation",
      ],
      unavailable: [],
      popular: true,
    },
    {
      name: "Premium",
      description: "For complex situations with multiple income sources",
      price: "$999",
      features: [
        "All Business Owner features",
        "Multi-state filings (up to 3)",
        "Rental property tax optimization",
        "RSU & stock option planning",
        "Year-round tax support",
      ],
      unavailable: [],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Flat-rate pricing with no hidden fees or surprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden ${
                tier.popular
                  ? "border-primary border relative transform scale-105"
                  : "border border-neutral-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 bg-primary text-white text-center py-1 font-medium text-sm">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${tier.popular ? "pt-10" : ""}`}>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                  {tier.name}
                </h3>
                <p className="text-neutral-600 h-12">{tier.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-neutral-900">
                    {tier.price}
                  </span>
                  <span className="text-neutral-500">/year</span>
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
                  className="w-full"
                  onClick={() => onSelectPlan(tier.name)}
                >
                  Select Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
