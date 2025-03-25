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
      image: "/images/female-entrepreneur.png",
      alt: "Female entrepreneur in a vineyard"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Freelancers & Contractors",
      description:
        "Tax solutions for self-employed professionals with 1099 income and business expenses.",
      features: ["Quarterly tax planning", "Home office deduction assistance"],
      image: "/images/freelancer.png",
      alt: "Freelancer working on laptop in coffee shop"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Real Estate Investors",
      description:
        "Expert tax handling for rental properties, depreciation, and property-related deductions.",
      features: ["Depreciation optimization", "1031 exchange guidance"],
      image: "/images/real-estate-investor.png",
      alt: "Real estate investor in property"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Tech Employees with RSUs",
      description:
        "Specialized tax handling for tech professionals with complex equity compensation.",
      features: ["Multi-state tax filing", "RSU vesting tax strategy"],
      image: "/images/tech-employee.png",
      alt: "Tech employee with RSUs"
    },
  ];

  return (
    <section id="who-we-help" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">Who We Help</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Our specialized tax solutions are designed for these specific groups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden border border-neutral-200 flex flex-col"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={audience.image} 
                  alt={audience.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-3">
                  <div className="text-primary mr-3">{audience.icon}</div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {audience.title}
                  </h3>
                </div>
                <p className="text-neutral-600 mb-4">{audience.description}</p>
                <ul className="text-sm text-neutral-500 space-y-2 mt-auto">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-teal-500 mt-1 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
