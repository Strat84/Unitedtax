import { Check, Quote } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      title: "Human Expert Review",
      description:
        "Every return is reviewed by a licensed tax professional before filing.",
    },
    {
      title: "AI-Powered Accuracy",
      description:
        "Our AI analyzes thousands of tax rules to maximize your deductions while ensuring compliance.",
    },
    {
      title: "Transparent Flat-Rate Pricing",
      description:
        "No surprise fees or hidden costs—just straightforward pricing based on your needs.",
    },
    {
      title: "Secure Platform",
      description:
        "Bank-level encryption and security protocols to protect your sensitive information.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              Why Choose UnitedTax.AI?
            </h2>
            <p className="text-lg text-neutral-600">
              We're revolutionizing tax preparation by combining cutting-edge AI
              with human expertise at an affordable price.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                    <Check className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-neutral-50 rounded-xl p-8 shadow-md border border-neutral-200">
              <div className="text-teal-600 mb-4">
                <Quote className="h-8 w-8 opacity-50" />
              </div>
              <p className="text-lg text-neutral-700 mb-6">
                "UnitedTax.AI saved me thousands in deductions I would have
                missed while cutting my tax prep costs in half. Their AI found
                business expenses I forgot about, and my tax professional
                answered all my questions promptly. Best tax experience I've had
                in 10 years of running my business."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt="Sarah J., Small Business Owner"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Sarah J.</h4>
                  <p className="text-neutral-500 text-sm">
                    Small Business Owner, Atlanta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
