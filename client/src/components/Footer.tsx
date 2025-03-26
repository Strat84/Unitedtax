import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/images/united-tax-logo.png" 
                alt="United Tax Logo" 
                className="h-16" 
              />
            </div>
            <p className="mb-4">
              Professional tax preparation for modern businesses and
              professionals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Business Tax Prep
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Individual Tax Filing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} UnitedTax.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
