import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Notification subscription for:', email);
    setIsSubscribed(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-sirdash-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <div className="relative h-40 bg-gradient-to-r from-sirdash-500 to-sirdash-700">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/c32b18d7-f2e2-4cd8-8a3a-47cac95b5d6e.png" 
              alt="SirDash.ai Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>
        
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Sandbox is Coming Soon!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're working hard to bring you an amazing data exploration experience. 
            The SirDash Sandbox will be available shortly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sirdash-500 dark:bg-gray-700 dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-sirdash-500 hover:bg-sirdash-600">
                  <Bell className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
              </form>
            ) : (
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-4 py-2 rounded-md">
                Thanks! We'll notify you when the sandbox is ready.
              </div>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Natural Language Queries</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ask questions in plain English and get instant insights from your data.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Interactive Dashboards</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Visualize your data with beautiful, interactive charts and dashboards.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Discover patterns and trends you might have missed with AI assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} SirDash.ai. All rights reserved.
      </p>
    </div>
  );
};

export default ComingSoon;
