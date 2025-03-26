import { BookOpen, PieChart, Building } from "lucide-react";

export default function ComingSoon() {
  const comingSoonProducts = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Ledger IQ",
      description:
        "AI-powered bookkeeping that automates transaction categorization and financial reporting.",
      date: "Coming Q1 2024",
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "RSU Tracker",
      description:
        "Simplified management and tax planning for stock grants, options, and equity compensation.",
      date: "Coming Q2 2024",
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "AI Rental Property Manager",
      description:
        "Automated financial tracking, tenant management, and tax optimization for rental property owners.",
      date: "Coming Q3 2024",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#74dcff] via-[#47a9c7] to-[#154060]">Coming Soon</h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto">
            We do more than just tax prep. We're developing software and apps for your complete financial ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comingSoonProducts.map((product, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-lg p-6 border border-dashed border-neutral-300"
            >
              <div className="bg-primary-100 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                {product.title}
              </h3>
              <p className="text-neutral-600">{product.description}</p>
              <div className="mt-4">
                <span className="inline-block bg-neutral-200 text-neutral-600 text-xs font-medium px-2.5 py-0.5 rounded">
                  {product.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
