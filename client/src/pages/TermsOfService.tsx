import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export default function TermsOfService() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  const handleStartTaxes = () => {
    window.location.href = "https://portal.unitedtax.ai/login?step=signUp";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar onStartTaxes={handleStartTaxes} />
      
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none px-4 py-1">Legal Document</Badge>
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Last Updated: {formattedDate}
            </p>
          </div>
        </Container>
      </div>
      
      <main className="flex-grow">
        <div className="py-12 max-w-4xl mx-auto px-4 bg-white shadow-sm rounded-lg mt-8">
          <div className="prose prose-lg max-w-none">
            
            <p className="my-4">
              Thank you for choosing UNITEDTAX.AI for your tax preparation and advisory needs. 
              Please review the following Terms of Service ("Terms") before using our platform 
              or engaging with our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">1. Services Offered</h2>
            <p className="my-3">
              UNITEDTAX.AI provides professional tax services to individuals and businesses. 
              Our offerings include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Federal and state tax return preparation</li>
              <li>Tax filing for individuals, partnerships, corporations, and S corporations</li>
              <li>Consultations and ongoing tax advisory</li>
              <li>Year-round support and strategic tax planning</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">2. Payment & Pricing</h2>
            <p className="my-3">
              Payment is required prior to the commencement of tax preparation services. 
              Base pricing is due upon signup, and any additional charges related to the 
              complexity of your tax situation will be communicated and billed prior to filing.
            </p>
            <p className="my-3">
              Our current pricing structure is available on our website and is subject to change. 
              Factors that may impact pricing include:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Type of return (individual, partnership, corporation)</li>
              <li>Additional schedules or forms (e.g., Schedule C, E, K-1, D)</li>
              <li>Number of states filed</li>
              <li>Cryptocurrency transactions without 1099s</li>
              <li>Cleanup bookkeeping for disorganized or incomplete records</li>
            </ul>
            <p className="my-3">
              For custom or complex tax situations, we encourage you to request a quote.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">3. Accuracy & Responsibility</h2>
            <p className="my-3">
              While we strive for thoroughness and accuracy in every return, we rely on the 
              information you provide. It is your responsibility to submit accurate, complete, 
              and truthful documentation.
            </p>
            <p className="my-3">
              We cannot be held liable for penalties, interest, or other consequences arising 
              from errors or omissions due to incomplete or inaccurate client-provided information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">4. Confidentiality & Data Security</h2>
            <p className="my-3">
              We take your privacy seriously. All information shared with UNITEDTAX.AI is 
              protected in accordance with applicable privacy laws and industry-standard 
              security practices. Your data will never be shared or sold.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">5. Client Responsibilities</h2>
            <p className="my-3">Clients agree to:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Provide accurate, timely, and complete information</li>
              <li>Use the services in compliance with applicable tax laws and regulations</li>
              <li>Not misuse, manipulate, or interfere with the platform or services</li>
            </ul>
            <p className="my-3">
              Failure to comply with these responsibilities may result in suspension or 
              termination of services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">6. Client Portal & Document Management</h2>
            <p className="my-3">You will be provided with access to a secure, encrypted client portal for:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Uploading and managing tax documents</li>
              <li>Communicating with our team</li>
              <li>Receiving updates and finalized returns</li>
              <li>Storing your tax records for future reference</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">7. Intellectual Property</h2>
            <p className="my-3">
              All content, branding, and materials on the UNITEDTAX.AI website are the 
              intellectual property of UNITEDTAX.AI. You may not copy, reproduce, or 
              distribute any content without prior written consent.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">8. Modifications to Terms</h2>
            <p className="my-3">
              We reserve the right to modify these Terms at any time. Updates will be posted 
              to our website, and continued use of our services after changes are posted 
              constitutes your acceptance of those changes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">9. Termination of Services</h2>
            <p className="my-3">
              UNITEDTAX.AI may suspend or terminate services at our discretion for reasons 
              including, but not limited to:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Violation of these Terms</li>
              <li>Non-payment</li>
              <li>Abuse or misuse of the service</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">10. Pricing Notes & Additional Services</h2>
            <p className="my-3">
              Some services may require additional effort and incur supplemental charges. 
              Examples include:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Returns with depreciable property (setup fees may apply in the first year)</li>
              <li>Revisions due to missing or late information</li>
              <li>Crypto tax reporting without 1099 forms</li>
              <li>Cleanup bookkeeping for incomplete or disorganized records</li>
            </ul>
            <p className="my-3">
              For specific services and associated costs, please refer to our Pricing Calculator 
              or contact us for a personalized quote.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}