import { Upload, Cpu, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "1. Get Started in Minutes",
      description:
        "Just log in, answer a few simple questions, and upload your tax documents securely.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "2. We Do the Heavy Lifting",
      description:
        "Our expert team prepares your return, typically within a week—no stress, no delays.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "3. Review and Relax",
      description:
        "Once your return is ready, simply review, sign, and we'll e-file it for you—fast, accurate, and done.",
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
