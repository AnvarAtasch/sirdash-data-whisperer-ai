
import React from 'react';
import { Card } from "@/components/ui/card";
import { BarChart2, LineChart, PieChart, TrendingUp, Users, MessageSquare } from 'lucide-react';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Use Cases
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 text-balance">
            Empowering every data professional with AI-powered insights tailored to their needs.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Manager Use Case */}
          <Card className="overflow-hidden border-2 border-sirdash-100 dark:border-gray-800 hover:border-sirdash-300 dark:hover:border-sirdash-700 transition-colors">
            <div className="bg-gradient-to-r from-sirdash-100 to-sirdash-200 dark:from-sirdash-900 dark:to-sirdash-800 p-6">
              <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-sirdash-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Product Manager</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Track product metrics, analyze feature adoption, and uncover user behavior patterns without waiting for data team support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "How has feature X adoption changed since our last release across different user segments?"
                  </p>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Show me the correlation between feature usage and customer retention over the past 6 months."
                  </p>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "What user demographics are driving the most growth in our premium tier?"
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Key benefits:</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Data-driven product decisions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Rapid impact analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">No dependency on data teams</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Data Analyst Use Case */}
          <Card className="overflow-hidden border-2 border-sirdash-100 dark:border-gray-800 hover:border-sirdash-300 dark:hover:border-sirdash-700 transition-colors">
            <div className="bg-gradient-to-r from-sirdash-100 to-sirdash-200 dark:from-sirdash-900 dark:to-sirdash-800 p-6">
              <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-sirdash-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Data Analyst</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Exponentially increase productivity with AI assistance for complex queries across multiple databases, advanced visualizations, and shareable reports.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Join our sales data with customer support tickets to find correlations between issues and churn."
                  </p>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Create a cohort analysis of customer retention rates by acquisition channel."
                  </p>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Show a time series of transaction anomalies across our payment systems for the last quarter."
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Key benefits:</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">10x faster analysis workflows</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Cross-database insights</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Advanced visualization creation</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Data Scientist Use Case */}
          <Card className="overflow-hidden border-2 border-sirdash-100 dark:border-gray-800 hover:border-sirdash-300 dark:hover:border-sirdash-700 transition-colors">
            <div className="bg-gradient-to-r from-sirdash-100 to-sirdash-200 dark:from-sirdash-900 dark:to-sirdash-800 p-6">
              <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-sirdash-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Data Scientist</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Streamline data preparation and exploration to focus on high-value modeling and machine learning tasks instead of writing complex queries.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Extract a balanced dataset of customer features for my churn prediction model."
                  </p>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Find all anomalous transactions based on historical patterns and prepare a training dataset."
                  </p>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-sirdash-500 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Identify correlations between user behavior metrics and conversion rates across product lines."
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Key benefits:</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Accelerated data preparation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Simplified feature engineering</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sirdash-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Direct database-to-model workflows</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
