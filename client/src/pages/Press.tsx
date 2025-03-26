import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Calendar, Mail, Clock, ExternalLink, Building, FileText } from "lucide-react";

export default function Press() {
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none px-4 py-1">Media Resources</Badge>
            <h1 className="text-5xl font-bold mb-6">Press & Media Inquiries</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              At UnitedTax.AI, we're reimagining tax preparation for the modern business owner—combining expert guidance with smart technology.
            </p>
          </div>
        </Container>
      </div>
      
      <main className="flex-grow py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-3xl font-semibold mb-6 text-gray-900 flex items-center">
                  <Building className="h-6 w-6 mr-2 text-primary" />
                  Our Story
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At UnitedTax.AI, we're reimagining tax preparation for the modern business owner—combining expert guidance with smart technology to simplify compliance, optimize returns, and empower growth.
                </p>
                
                <h3 className="text-xl font-medium mt-8 mb-4 text-gray-800">We cover stories related to:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    "Tax compliance and regulations",
                    "Business incorporation and entity formation",
                    "Beneficial ownership reporting (BOIR)",
                    "AI-powered tax solutions",
                    "Small business tax strategy or technology",
                    "Financial planning and bookkeeping tools"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-3xl font-semibold mb-6 text-gray-900 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-primary" />
                  Expert Resources
                </h2>
                <p className="text-gray-700 mb-6">
                  Our team includes credentialed tax professionals and technologists building the future of tax automation—ready to speak on record with clarity and authority.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-4 text-gray-800">We're available for:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Media interviews",
                    "On-the-record quotes",
                    "Guest commentary or bylines",
                    "Background information",
                    "Product information or updates",
                    "Startup/Fintech stories"
                  ].map((service, i) => (
                    <Card key={i} className="p-4 border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all">
                      <div className="flex items-center text-gray-700">
                        <ExternalLink className="h-4 w-4 mr-2 text-primary" />
                        {service}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Media Contact
                </h2>
                
                <Separator className="my-4" />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Email Us</h3>
                    <a 
                      href="mailto:Sales@unitedtax.ai" 
                      className="text-primary hover:underline flex items-center font-medium"
                    >
                      Sales@unitedtax.ai
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Subject Line: "Press Inquiry"</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Response Time
                    </h3>
                    <p className="text-gray-700">We typically respond within 24 hours.</p>
                    <p className="text-sm text-gray-500 mt-1">For urgent requests, please indicate your timeline and outlet.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-6">
                    <h3 className="text-lg font-medium mb-2 text-gray-800 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Press Kit
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Need logos, executive bios, or company information? Our press kit has everything you need.
                    </p>
                    <button 
                      className="bg-primary/10 hover:bg-primary/20 text-primary py-2 px-4 rounded-md text-sm font-medium w-full transition-colors"
                      onClick={() => alert("Contact us to request a press kit")}
                    >
                      Request Press Kit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}