import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Careers() {
  const handleStartTaxes = () => {
    window.location.href = "https://portal.unitedtax.ai/login?step=signUp";
  };

  const handleApply = () => {
    window.location.href = "mailto:Matt@unitedtax.ai";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar onStartTaxes={handleStartTaxes} />
      
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none px-4 py-1">Join Our Team</Badge>
            <h1 className="text-5xl font-bold mb-6">Careers at UnitedTax.AI</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Help Us Build the Future of Finance, One App at a Time.
            </p>
          </div>
        </Container>
      </div>
      
      <main className="flex-grow">
        <div className="py-12 max-w-5xl mx-auto px-4 bg-white shadow-sm rounded-lg mt-8 mb-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-xl font-medium text-gray-800 mb-6">
              We're not building just another fintech app.
              We're building a family of powerful, AI-driven financial tools — designed to disrupt the tax, accounting, and financial planning space. 
            </p>
            
            <p className="mb-8">
              From intelligent bookkeeping to compliance automation and predictive financial insights, our mission is clear: 
              to become the next unicorn in the AI + finance space.
            </p>
            
            <p className="text-xl font-semibold text-primary-dark mb-6">
              And we're looking for exceptional engineers to join us on this journey.
            </p>
            
            {/* We're Not Hiring. We're Inviting. */}
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-8 rounded-lg my-10 border border-blue-100">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">We're Not Hiring. We're Inviting.</h2>
              <p className="mb-4">
                We're not looking to fill seats. We're looking for vision-aligned builders who thrive at the intersection of finance, AI, and software craftsmanship.
              </p>
              
              <p className="mb-4">If you're here, it's probably because:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>You've built scalable tech in the financial or AI space.</li>
                <li>You think in systems, not tasks.</li>
                <li>You care more about impact than job titles.</li>
                <li>You want ownership — not just a paycheck.</li>
              </ul>
              
              <p className="font-medium text-gray-800">
                This is an invitation to build something meaningful with us, not for us.
              </p>
            </div>
            
            {/* The Offer */}
            <h2 className="text-3xl font-bold text-primary-dark mb-4">The Offer</h2>
            <p className="mb-4">For the right person, we offer:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg border border-gray-200 flex items-start">
                <span className="text-green-500 font-bold mr-2 text-xl">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Equity ownership</h3>
                  <p className="text-gray-600">Be a true stakeholder from day one.</p>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 flex items-start">
                <span className="text-red-500 font-bold mr-2 text-xl">🚫</span>
                <div>
                  <h3 className="font-semibold text-gray-800">No upfront salary</h3>
                  <p className="text-gray-600">This isn't a job. It's a co-founding opportunity.</p>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 flex items-start">
                <span className="text-blue-500 font-bold mr-2 text-xl">🔓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Unlimited upside</h3>
                  <p className="text-gray-600">Help us win, and you win big.</p>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 flex items-start">
                <span className="text-purple-500 font-bold mr-2 text-xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Technical autonomy</h3>
                  <p className="text-gray-600">You'll help architect the foundation of products that scale.</p>
                </div>
              </div>
            </div>
            
            <p className="font-medium text-center text-xl my-8">
              We're pre-raising. We're post-idea. And we're shipping. Fast.
            </p>
            
            {/* What We're Building */}
            <h2 className="text-3xl font-bold text-primary-dark mb-4 mt-12">What We're Building</h2>
            <p className="mb-4">Our products revolve around:</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>AI-powered tax automation</li>
              <li>Bookkeeping and compliance software</li>
              <li>Financial insights and analytics dashboards</li>
              <li>B2B and B2C SaaS tools for small businesses and tax pros</li>
            </ul>
            
            <p className="mb-8 italic">
              Think: the next evolution of tools like QuickBooks, TurboTax, and Bench — with modern AI at the core.
            </p>
            
            {/* Tech Stack */}
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Tech Stack Preferences</h2>
            <p className="mb-4">We're primarily working in:</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 px-3">TypeScript</Badge>
              <Badge className="bg-green-100 hover:bg-green-200 text-green-800 py-1 px-3">Python</Badge>
              <Badge className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-1 px-3">Node.js</Badge>
              <Badge className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 py-1 px-3">Vue.js</Badge>
              <Badge className="bg-cyan-100 hover:bg-cyan-200 text-cyan-800 py-1 px-3">React</Badge>
            </div>
            
            <p className="mb-6">
              If you have deep experience with these technologies and an understanding of financial platforms, you'll feel right at home.
            </p>
            
            <p className="font-medium">Bonus if you've worked with:</p>
            <p className="mb-8">
              Open Banking APIs, Stripe, AWS Lambda, FinTech security standards, or LLM integrations.
            </p>
            
            {/* Who We're Looking For */}
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-8 rounded-lg my-10 border border-blue-100">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Who We're Looking For</h2>
              <p className="font-semibold text-gray-800 mb-4">We will not consider everyone.</p>
              <p className="mb-4">We're looking for builders, not tourists. Specifically:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Full-stack developers with 5+ years experience in product environments</li>
                <li>Engineers who've shipped financial, compliance, or AI products</li>
                <li>People who move fast, think like owners, and care about quality</li>
                <li>Collaborators with strong communication and initiative</li>
              </ul>
              
              <p className="font-medium text-gray-800">
                If that's you — and you're ready to be a core part of something big — we want to meet you.
              </p>
            </div>
            
            {/* Call to Action */}
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Sound Like You?</h2>
            <p className="mb-6">
              Send us your GitHub, portfolio, or LinkedIn. Tell us why you're interested.
              We don't care about résumés. We care about real work and real vision.
            </p>
            
            <div className="text-center my-10">
              <p className="text-xl mb-6">📬 Reach out to: <a href="mailto:Matt@unitedtax.ai" className="text-primary hover:underline">Matt@unitedtax.ai</a></p>
              
              <p className="mt-8 text-xl font-semibold text-primary-dark">
                Let's build the future of finance. Together.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}