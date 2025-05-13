
import React from 'react';
import { Table, ShieldCheck, Users, Stars, Target, Compass, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Who We Are
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 text-balance">
            SirDash.ai is your enterprise data confidant, breaking down silos and unlocking insights instantly.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-sirdash-100 dark:bg-sirdash-900 rounded-lg">
              <Table className="h-6 w-6 text-sirdash-600 dark:text-sirdash-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Natural Language Data Access
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Connect and query all your tables without writing a single SQL statement. Our platform bridges data sources seamlessly through natural language.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-sirdash-100 dark:bg-sirdash-900 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-sirdash-600 dark:text-sirdash-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Enterprise-Grade Security
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Strict role-based access controls ensure that sensitive data remains secure while delivering powerful insights to authorized users.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-sirdash-100 dark:bg-sirdash-900 rounded-lg">
              <Users className="h-6 w-6 text-sirdash-600 dark:text-sirdash-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              For Every Data User
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Designed for both non-technical users needing quick insights and power users requiring advanced data tools. Everyone gets what they need.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-sirdash-50 to-sirdash-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 shadow">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Trusted by data-intensive industries</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                From telecom giants managing customer data to financial institutions analyzing market trends, 
                SirDash.ai empowers teams to make data-driven decisions without the traditional bottlenecks of 
                database management and SQL expertise.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8 md:w-1/4 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md">
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-r from-sirdash-300 to-sirdash-500 flex items-center justify-center">
                  <span className="text-white text-4xl md:text-5xl font-bold">10x</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded p-4 text-center">
              <span className="block text-sirdash-500 dark:text-sirdash-400 text-2xl font-bold">Minutes</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">not days to insights</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded p-4 text-center">
              <span className="block text-sirdash-500 dark:text-sirdash-400 text-2xl font-bold">Unified</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">data access layer</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded p-4 text-center">
              <span className="block text-sirdash-500 dark:text-sirdash-400 text-2xl font-bold">Secure</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">role-based access</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded p-4 text-center">
              <span className="block text-sirdash-500 dark:text-sirdash-400 text-2xl font-bold">Domain</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">aware intelligence</span>
            </div>
          </div>
        </div>
        
        {/* Vision, Mission, Values Section */}
        <div className="mt-20 grid grid-cols-1 gap-12">
          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="inline-flex items-center justify-center p-4 bg-sirdash-100 dark:bg-sirdash-900 rounded-full">
                  <Target className="h-12 w-12 text-sirdash-600 dark:text-sirdash-400" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Turn every business question into an instant, trustworthy answer—no SQL required.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="inline-flex items-center justify-center p-4 bg-sirdash-100 dark:bg-sirdash-900 rounded-full">
                  <Compass className="h-12 w-12 text-sirdash-600 dark:text-sirdash-400" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Fuse LLM reasoning, a domain‑aware semantic layer, and rock‑solid governance so companies can unlock the full value of database — securely, conversationally, and at scale.
                </p>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="inline-flex items-center justify-center p-4 bg-sirdash-100 dark:bg-sirdash-900 rounded-full">
                  <Shield className="h-12 w-12 text-sirdash-600 dark:text-sirdash-400" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="bg-sirdash-50 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sirdash-600 dark:text-sirdash-300 font-medium">Clarity</span>
                  </div>
                  <div className="bg-sirdash-50 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sirdash-600 dark:text-sirdash-300 font-medium">Trust</span>
                  </div>
                  <div className="bg-sirdash-50 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sirdash-600 dark:text-sirdash-300 font-medium">Bold Innovation</span>
                  </div>
                  <div className="bg-sirdash-50 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sirdash-600 dark:text-sirdash-300 font-medium">Customer‑First Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
