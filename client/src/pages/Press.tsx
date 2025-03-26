import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Press() {
  const handleStartTaxes = () => {
    window.location.href = "https://portal.unitedtax.ai/login?step=signUp";
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onStartTaxes={handleStartTaxes} />
      
      <main className="flex-grow">
        <div className="py-12 max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6 text-primary-dark">Press & Media Inquiries</h1>
            
            <p className="my-6">
              At UnitedTax.AI, we're reimagining tax preparation for the modern business owner—combining expert guidance with smart technology to simplify compliance, optimize returns, and empower growth.
            </p>

            <p className="my-6">
              If you're a journalist, editor, content creator, or media professional working on a story related to:
            </p>

            <ul className="list-disc pl-6 my-6 space-y-2">
              <li>Tax compliance and regulations</li>
              <li>Business incorporation and entity formation</li>
              <li>Beneficial ownership reporting (BOIR)</li>
              <li>AI-powered tax solutions</li>
              <li>Small business tax strategy or technology</li>
              <li>Financial planning and bookkeeping tools</li>
            </ul>

            <p className="my-4">—we'd love to connect.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-primary-dark">
              🔍 Need a Quote or Expert Insight?
            </h2>
            
            <p className="my-4">We're available for:</p>

            <ul className="list-disc pl-6 my-6 space-y-2">
              <li>Media interviews</li>
              <li>On-the-record quotes</li>
              <li>Guest commentary or bylines</li>
              <li>Background information</li>
              <li>Product information or updates</li>
              <li>Startup/Fintech stories</li>
            </ul>

            <p className="my-6">
              Our team includes credentialed tax professionals and technologists building the future of tax automation—ready to speak on record with clarity and authority.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-primary-dark">
              📩 Media Contact
            </h2>
            
            <p className="my-4">For all press inquiries, please email:</p>

            <p className="my-6 font-medium">
              📬 <a href="mailto:Sales@unitedtax.ai" className="text-primary hover:underline">Sales@unitedtax.ai</a><br />
              <span className="text-gray-600">Subject Line: "Press Inquiry"</span>
            </p>

            <p className="my-6">
              We typically respond within 24 hours. For urgent deadline requests, please indicate your timeline and outlet in your message.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}