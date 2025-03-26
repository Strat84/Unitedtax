import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export default function PrivacyPolicy() {
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
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Last Updated: {formattedDate}
            </p>
          </div>
        </Container>
      </div>
      
      <main className="flex-grow">
        <div className="py-12 max-w-4xl mx-auto px-4 bg-white shadow-sm rounded-lg mt-8">
          <div className="prose prose-lg max-w-none">
            
            <p className="mb-6">
              At United Tax and Financial Planning, your privacy is important to us. We are committed to maintaining the confidentiality, integrity, and security of your personal information. This Privacy Policy describes how we collect, use, and protect your data when you engage with our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">1. Information We Collect</h2>
            <p className="mb-4">
              We collect personal and financial information solely for the purpose of providing our tax, financial planning, and related professional services. The types of information we may collect include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name, address, phone number, and email address</li>
              <li>Social Security Number or Tax Identification Number</li>
              <li>Financial records, income details, and tax documents</li>
              <li>Other information necessary to fulfill our professional obligations</li>
            </ul>
            <p>We collect information directly from you, through secure communications, or with your express authorization.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">2. How We Use Your Information</h2>
            <p className="mb-4">Your information is used exclusively for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Delivering tax preparation and financial planning services</li>
              <li>Communicating with you regarding your account or services</li>
              <li>Meeting legal and regulatory requirements</li>
              <li>Protecting against fraud or unauthorized transactions</li>
            </ul>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. We do not share your data with third parties unless:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Required by law or regulation</li>
              <li>Necessary to fulfill contractual or professional obligations (e.g., filing with the IRS or state agencies)</li>
              <li>Authorized explicitly by you</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">3. Data Security Measures</h2>
            <p className="mb-4">
              We maintain industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. These safeguards include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Secure client portals and encrypted communications</li>
              <li>Role-based access controls to limit access to authorized personnel</li>
              <li>Regular system monitoring and updates</li>
            </ul>
            <p>
              While we take every reasonable step to protect your information, no system can guarantee absolute security. We encourage you to safeguard your login credentials and notify us of any suspected unauthorized activity.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">4. Legal Compliance</h2>
            <p>
              We comply with all applicable federal and state laws governing the collection, use, and retention of personal information. Your data may be disclosed if required by law, subpoena, court order, or other legal process. We may also disclose your information when necessary to protect our rights, property, or safety.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">5. Data Retention</h2>
            <p className="mb-4">We retain your personal information only for as long as necessary to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fulfill the services you requested</li>
              <li>Comply with legal, regulatory, and tax record-keeping obligations</li>
              <li>Resolve disputes or enforce agreements</li>
            </ul>
            <p>
              Once your information is no longer required, it is securely deleted or anonymized in accordance with industry best practices.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">6. Your Rights & Choices</h2>
            <p className="mb-4">
              By using our services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. You may request to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Review or update your personal information</li>
              <li>Withdraw consent where applicable</li>
              <li>Opt out of specific communications or data processing activities</li>
            </ul>
            <p>
              To exercise these rights, please contact us directly at <a href="mailto:contact@unitedtax.ai" className="text-primary hover:underline">contact@unitedtax.ai</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">7. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. Any updates will be posted on our website with the revised date. We encourage you to review this policy regularly to stay informed.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}