import { Upload, Cpu, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "1. Upload Your Documents",
      description:
        "Securely upload your tax documents and financial information through our user-friendly portal.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "2. AI Review & Processing",
      description:
        "Our AI analyzes your documents, identifies potential deductions, and prepares your tax returns.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "3. Expert Review & Filing",
      description:
        "A tax professional reviews everything, answers your questions, and files your taxes with guaranteed accuracy.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900">How It Works</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Our AI-powered tax preparation system simplifies the entire process,
            saving you time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-neutral-200"
            >
              <div className="h-3 bg-gradient-to-r from-primary to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
