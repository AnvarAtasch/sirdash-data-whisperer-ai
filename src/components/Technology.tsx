
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Link, MessagesSquare, BarChart2, Shield, ShieldCheck, Lock, Server, Database } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Technology = () => {
  return (
    <section id="technology" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Our Technology
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 text-balance">
            Cutting-edge AI that adapts to your domain and speaks your data's language.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sirdash-100 dark:bg-sirdash-900">
                      <Brain className="h-5 w-5 text-sirdash-600 dark:text-sirdash-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Agentic RAG Intelligence</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Our advanced Retrieval-Augmented Generation (RAG) model doesn't just respond to queries—it actively 
                      shapes responses based on your specific domain knowledge and data context.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sirdash-100 dark:bg-sirdash-900">
                      <BarChart2 className="h-5 w-5 text-sirdash-600 dark:text-sirdash-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Semantic Data Layer</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Our built-in semantic layer interprets your table schemas and creates meaningful connections 
                      between disparate data sources, enabling cross-table queries and insights.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sirdash-100 dark:bg-sirdash-900">
                      <Link className="h-5 w-5 text-sirdash-600 dark:text-sirdash-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Adaptive SQL Generation</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Natural language queries are transformed into precise SQL statements optimized for your specific 
                      data structures, with automated joins and relationship mapping.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sirdash-100 dark:bg-sirdash-900">
                      <MessagesSquare className="h-5 w-5 text-sirdash-600 dark:text-sirdash-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Interactive Refinement</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Our system learns from every interaction, allowing users to refine queries conversationally and 
                      improving accuracy over time through continuous feedback loops.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-sirdash-500 hover:bg-sirdash-600">
                  <a href="#demo" className="flex items-center">
                    See it in action <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-sirdash-300 to-sirdash-500 rounded-lg blur-lg opacity-30"></div>
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl">
                  <img 
                    src="/lovable-uploads/3e83643b-98d1-4a9e-ab25-dd3956cd7c28.png" 
                    alt="SirDash AI Chart Interface" 
                    className="w-full rounded-md border border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Highlights Section - Redesigned */}
        <div id="security" className="mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-sirdash-100 dark:bg-sirdash-900/50 rounded-full mb-4">
              <ShieldCheck className="h-6 w-6 text-sirdash-600 dark:text-sirdash-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Enterprise-Grade Security
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 text-balance">
              Your data stays protected with our comprehensive security framework
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Data Protection */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Protection</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">End-to-end TLS 1.3 encryption for all data in transit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">AES-256 encryption for metadata at rest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Customer data never leaves your environment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Card 2: Access Controls */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Access Management</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Granular role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Row and column-level security policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">SSO integration with Okta, Azure AD, Google Workspace</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Card 3: Infrastructure */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30">
                    <Server className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Infrastructure</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">On-prem, private VPC, or air-gapped installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Isolated tenant environments in Docker networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Customer-managed vault integration for credentials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Card 4: Audit & Compliance */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30">
                    <Database className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Audit & Compliance</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Immutable audit logs for all system activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">SIEM integration for centralized monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">SOC 2 Type II and ISO 27001 compliance roadmap</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Card 5: Vulnerability Management */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30">
                    <ShieldCheck className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security Testing</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Weekly dependency vulnerability scans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Container image hardening to CIS Benchmarks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Regular third-party penetration testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Card 6: Compliance */}
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                    <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Compliance</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">GDPR-ready data handling policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">HIPAA-compliant infrastructure options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Data residency options for regulatory compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-sirdash-50 to-sirdash-100 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-sm border border-sirdash-200 dark:border-gray-600">
            <div className="p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-full shadow-md">
                <ShieldCheck className="h-10 w-10 text-sirdash-600 dark:text-sirdash-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Your data never leaves your environment</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  SirDash never copies or stores raw customer tables—queries run where your data lives, and only aggregated results are cached. 
                  Your sensitive information stays within your security perimeter at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
