import { BookOpen, PieChart, Building } from "lucide-react";

export default function ComingSoon() {
  const comingSoonProducts = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Ledger IQ",
      description:
        "AI-powered bookkeeping that automates transaction categorization and financial reporting.",
      date: "Coming Q1 2025",
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "RSU Tracker",
      description:
        "Simplified management and tax planning for stock grants, options, and equity compensation.",
      date: "Coming Q2 2025",
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "AI Rental Property Manager",
      description:
        "Automated financial tracking, tenant management, and tax optimization for rental property owners.",
      date: "Coming Q3 2025",
    },
  ];

  return (
    <section className="pt-20 pb-5 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="overflow-visible py-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#25638b] mb-2">Coming Soon</h2>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We do more than just tax prep. We're developing software and apps for your complete financial ecosystem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comingSoonProducts.map((product, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-lg p-6 border border-dashed border-neutral-300 flex flex-col h-full"
            >
              <div className="bg-primary-100 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                {product.title}
              </h3>
              <p className="text-neutral-600 flex-grow">{product.description}</p>
              <div className="mt-4 pt-2">
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
