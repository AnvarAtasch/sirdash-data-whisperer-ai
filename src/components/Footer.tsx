
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTechnology = () => {
    const technologySection = document.getElementById('technology');
    if (technologySection) {
      technologySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSecurity = () => {
    const securitySection = document.getElementById('security');
    if (securitySection) {
      securitySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToUseCases = () => {
    const useCasesSection = document.getElementById('use-cases');
    if (useCasesSection) {
      useCasesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEmailUs = () => {
    const emailUsSection = document.getElementById('email-us');
    if (emailUsSection) {
      emailUsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("Email Us section not found");
    }
  };

  const handleDemoRequestClick = () => {
    console.log("Request Demo button clicked");
    scrollToDemo();
  };

  // Changed to use scrollToEmailUs instead of scrollToDemo
  const handleContactClick = () => {
    console.log("Contact Us button clicked");
    scrollToEmailUs();
  };

  return <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Logo />
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Transforming how enterprises access and analyze data through AI-powered natural language interfaces.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://x.com/sirdashai19452" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sirdash-500">
                  <span className="sr-only">X (Twitter)</span>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/sirdash/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sirdash-500">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              
              {/* Email Contact Section - Added ID for scroll target */}
              <div id="email-us" className="mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 text-sirdash-500 mr-2" />
                  <h3 className="font-medium text-gray-900 dark:text-white">Email Us</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  For support & general inquiries:
                </p>
                <a href="mailto:support@sirdash.ai" className="text-sm text-sirdash-500 hover:text-sirdash-600 font-medium">
                  support@sirdash.ai
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <button 
                    onClick={scrollToTechnology} 
                    className="text-sm text-gray-600 hover:text-sirdash-500 dark:text-gray-400 dark:hover:text-sirdash-400 text-left cursor-pointer"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={scrollToSecurity} 
                    className="text-sm text-gray-600 hover:text-sirdash-500 dark:text-gray-400 dark:hover:text-sirdash-400 text-left cursor-pointer"
                  >
                    Security
                  </button>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-sirdash-500 dark:text-gray-400 dark:hover:text-sirdash-400">
                    Documentation
                  </a>
                </li>
                <li>
                  <button
                    onClick={scrollToUseCases}
                    className="text-sm text-gray-600 hover:text-sirdash-500 dark:text-gray-400 dark:hover:text-sirdash-400 text-left cursor-pointer"
                  >
                    Case Studies
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <button 
                    onClick={scrollToAbout}
                    className="text-sm text-gray-600 hover:text-sirdash-500 dark:text-gray-400 dark:hover:text-sirdash-400 text-left cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-sirdash-500 dark:text-gray-400 dark:hover:text-sirdash-400">
                    Careers
                  </a>
                </li>
                <li>
                  <button 
                    onClick={handleContactClick}
                    className="text-sm text-gray-600 hover:text-sirdash-500 dark:text-gray-400 dark:hover:text-sirdash-400 text-left cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleDemoRequestClick}
                    className="text-sm text-gray-600 hover:text-sirdash-500 dark:text-gray-400 dark:hover:text-sirdash-400 text-left cursor-pointer"
                  >
                    Request Demo
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} SirDash All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
