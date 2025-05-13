
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, BarChart2, PlayCircle } from "lucide-react";

const Sandbox = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sirdash-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Experience Data Intelligence <span className="text-gradient">in Action</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Our interactive sandbox lets you test how natural language transforms into powerful queries across multiple tables — no SQL required.
              </p>
              <div className="flex justify-center">
                <Button className="bg-sirdash-500 hover:bg-sirdash-600" size="lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Launch Sandbox
                </Button>
              </div>
            </div>
            
            <div className="mt-12 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sirdash-300 to-sirdash-500 rounded-lg blur-lg opacity-30"></div>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl p-6 relative">
                <img 
                  src="/lovable-uploads/df2e4ccf-a97f-4865-bbef-2b971a6fa94b.png" 
                  alt="SirDash.ai Sandbox Interface" 
                  className="rounded-md w-full"
                />
              </div>
            </div>
            
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Database className="h-12 w-12 text-sirdash-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sample Datasets</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore pre-loaded tables with real-world examples, including e-commerce, finance, and marketing data.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <BarChart2 className="h-12 w-12 text-sirdash-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Interactive Visualization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  See your natural language queries transformed into interactive charts and dashboards instantly.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <ArrowRight className="h-12 w-12 text-sirdash-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">No Setup Required</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Start exploring data instantly — everything is ready to go in our browser-based environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sandbox;
