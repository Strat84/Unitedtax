import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useLocation, Link } from "wouter";

interface NavbarProps {
  onStartTaxes: () => void;
}

export default function Navbar({ onStartTaxes }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const getNavLink = (section: string, text: string) => {
    if (isHomePage) {
      return (
        <a
          href={`#${section}`}
          className="text-neutral-600 hover:text-primary transition-colors font-medium"
        >
          {text}
        </a>
      );
    } else {
      return (
        <Link
          href={`/#${section}`}
          className="text-neutral-600 hover:text-primary transition-colors font-medium"
        >
          {text}
        </Link>
      );
    }
  };
  
  const getMobileNavLink = (section: string, text: string) => {
    if (isHomePage) {
      return (
        <a
          href={`#${section}`}
          className="block px-3 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
          onClick={() => setMobileMenuOpen(false)}
        >
          {text}
        </a>
      );
    } else {
      return (
        <Link
          href={`/#${section}`}
          className="block px-3 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
          onClick={() => setMobileMenuOpen(false)}
        >
          {text}
        </Link>
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/united-tax-logo.png" 
                alt="United Tax Logo" 
                className="h-16 mr-2" 
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {getNavLink("how-it-works", "How It Works")}
              {getNavLink("who-we-help", "Who We Help")}
              {getNavLink("why-us", "Why Us")}
              {getNavLink("pricing", "Pricing")}
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
            {getMobileNavLink("how-it-works", "How It Works")}
            {getMobileNavLink("who-we-help", "Who We Help")}
            {getMobileNavLink("why-us", "Why Us")}
            {getMobileNavLink("pricing", "Pricing")}
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
