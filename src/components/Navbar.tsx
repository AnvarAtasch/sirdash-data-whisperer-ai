
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, PlaySquare } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track which section is currently in view
      const sections = ['about', 'technology', 'use-cases', 'pricing', 'demo'];
      const scrollPosition = window.scrollY + 200; // Adding offset to improve detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          } else if (scrollPosition < document.getElementById('about')?.offsetTop || 0) {
            setActiveSection('');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (section: string) => activeSection === section;

  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/">
              <Logo />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className={`text-sm font-medium transition-colors ${isActive('about') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`}
            >
              About
            </a>
            <a 
              href="#technology" 
              className={`text-sm font-medium transition-colors ${isActive('technology') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`}
            >
              Technology
            </a>
            <a 
              href="#use-cases" 
              className={`text-sm font-medium transition-colors ${isActive('use-cases') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`}
            >
              Use Cases
            </a>
            <a 
              href="#demo" 
              className={`text-sm font-medium transition-colors ${isActive('demo') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`}
            >
              Book Demo
            </a>
            <button 
              onClick={scrollToPricing} 
              className={`text-sm font-medium transition-colors ${isActive('pricing') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`}
            >
              Pricing
            </button>
            <Link 
              to="/documentation" 
              className="text-sm font-medium transition-colors text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400"
            >
              Documentation
            </Link>
            <Button asChild variant="outline" size="sm" className="flex items-center bg-sirdash-100 hover:bg-sirdash-200 text-sirdash-700 border-sirdash-300">
              <Link to="/waitlist" onClick={() => setIsMobileMenuOpen(false)}>
                <PlaySquare className="w-4 h-4 mr-2" />
                Try Our Sandbox
              </Link>
            </Button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-sirdash-500 hover:bg-sirdash-600" size="sm">
              <a href="#demo">Request Demo</a>
            </Button>
          </div>
          
          <button className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-8 space-y-6">
            <div className="space-y-3">
              <a 
                href="#about" 
                className={`block py-2 text-base font-medium ${isActive('about') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`}
                onClick={toggleMobileMenu}
              >
                About
              </a>
              <a 
                href="#technology" 
                className={`block py-2 text-base font-medium ${isActive('technology') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`} 
                onClick={toggleMobileMenu}
              >
                Technology
              </a>
              <a 
                href="#use-cases" 
                className={`block py-2 text-base font-medium ${isActive('use-cases') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`} 
                onClick={toggleMobileMenu}
              >
                Use Cases
              </a>
              <a 
                href="#demo" 
                className={`block py-2 text-base font-medium ${isActive('demo') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`} 
                onClick={toggleMobileMenu}
              >
                Book Demo
              </a>
              <button 
                onClick={scrollToPricing} 
                className={`block w-full text-left py-2 text-base font-medium ${isActive('pricing') ? 'text-sirdash-600 dark:text-sirdash-400' : 'text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400'}`}
              >
                Pricing
              </button>
              <Link to="/waitlist" onClick={toggleMobileMenu} className="flex items-center py-2 text-base font-medium text-sirdash-700 hover:text-sirdash-600 dark:text-sirdash-400 dark:hover:text-sirdash-300">
                <PlaySquare className="w-5 h-5 mr-2" />
                Try Our Sandbox
              </Link>
              <Link 
                to="/documentation" 
                className="block py-2 text-base font-medium text-gray-700 hover:text-sirdash-600 dark:text-gray-200 dark:hover:text-sirdash-400"
                onClick={toggleMobileMenu}
              >
                Documentation
              </Link>
            </div>
            <div className="space-y-3">
              <Button asChild className="bg-sirdash-500 hover:bg-sirdash-600 w-full" size="sm">
                <a href="#demo">Request Demo</a>
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};

export default Navbar;
