import { Building, Laptop, Home, TrendingUp, Check } from "lucide-react";

export default function WhoWeHelp() {
  const audiences = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Small Business Owners",
      description:
        "Specialized tax support for LLCs, S Corps, and small businesses with complex deductions.",
      features: [
        "Business expense optimization",
        "Entity-specific tax strategies",
      ],
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Freelancers & Contractors",
      description:
        "Tax solutions for self-employed professionals with 1099 income and business expenses.",
      features: ["Quarterly tax planning", "Home office deduction assistance"],
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Real Estate Investors",
      description:
        "Expert tax handling for rental properties, depreciation, and property-related deductions.",
      features: ["Depreciation optimization", "1031 exchange guidance"],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Tech Employees with RSUs",
      description:
        "Specialized tax handling for tech professionals with complex equity compensation.",
      features: ["Multi-state tax filing", "RSU vesting tax strategy"],
    },
  ];

  return (
    <section id="who-we-help" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900">Who We Help</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Our specialized tax solutions are designed for these specific groups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 border border-neutral-200"
            >
              <div className="text-primary mb-4">{audience.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                {audience.title}
              </h3>
              <p className="text-neutral-600 mb-4">{audience.description}</p>
              <ul className="text-sm text-neutral-500 space-y-2">
                {audience.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-4 w-4 text-teal-500 mt-1 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
