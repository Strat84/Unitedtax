import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

interface NavbarProps {
  onStartTaxes: () => void;
}

export default function Navbar({ onStartTaxes }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/images/united-tax-logo.png" 
                alt="United Tax Logo" 
                className="h-12 mr-2" 
              />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a
                href="#how-it-works"
                className="text-neutral-600 hover:text-primary transition-colors font-medium"
              >
                How It Works
              </a>
              <a
                href="#who-we-help"
                className="text-neutral-600 hover:text-primary transition-colors font-medium"
              >
                Who We Help
              </a>
              <a
                href="#why-us"
                className="text-neutral-600 hover:text-primary transition-colors font-medium"
              >
                Why Us
              </a>
              <a
                href="#pricing"
                className="text-neutral-600 hover:text-primary transition-colors font-medium"
              >
                Pricing
              </a>
              <Button className="ml-4 btn-gradient" onClick={onStartTaxes}>
                Start My Taxes
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-neutral-600 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#who-we-help"
              className="block px-3 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who We Help
            </a>
            <a
              href="#why-us"
              className="block px-3 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Button
              className="mt-3 w-full btn-gradient"
              onClick={() => {
                onStartTaxes();
                setMobileMenuOpen(false);
              }}
            >
              Start My Taxes
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
