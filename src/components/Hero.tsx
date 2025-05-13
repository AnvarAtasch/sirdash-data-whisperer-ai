
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Table, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 lg:pr-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Your Data, <span className="text-gradient">Intelligent</span> Conversations
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl text-balance">
              Enterprise-grade AI that turns natural language into database insights—no SQL required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-sirdash-500 hover:bg-sirdash-600">
                <a href="#demo" className="flex items-center">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#technology">Learn More</a>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Table className="h-5 w-5 text-sirdash-500 mr-2" />
                <span>Connect all your tables</span>
              </div>
              <div className="flex items-center">
                <Search className="h-5 w-5 text-sirdash-500 mr-2" />
                <span>Natural language queries</span>
              </div>
              <div className="flex items-center">
                <BarChart2 className="h-5 w-5 text-sirdash-500 mr-2" />
                <span>Interactive dashboards</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sirdash-300 to-sirdash-500 rounded-lg blur-lg opacity-30"></div>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl p-4 relative">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 font-mono text-sm mb-3">
                  <div className="mb-2">
                    <span className="text-sirdash-500 dark:text-sirdash-400">SirDash&gt;</span> 
                    <span className="ml-2">Show me subscriptions with happend last month but without cash</span>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 overflow-hidden">
                  <img 
                    src="/lovable-uploads/efb53dd2-d35a-49ac-9205-53a3eb73c12d.png"
                    alt="SirDash AI Interface showing data query results" 
                    className="rounded-md border border-gray-200 dark:border-gray-700 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
