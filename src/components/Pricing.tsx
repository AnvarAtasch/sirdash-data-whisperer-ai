import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <Card className="relative border-2">
            <CardHeader className="space-y-1 pb-4">
              <h3 className="text-2xl font-bold">Starter</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">€50</span>
                <span className="text-gray-500 ml-2">/month per user</span>
              </div>
              <p className="text-sm text-gray-500">Billed annually</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">For small teams exploring data analysis</p>
              <ul className="space-y-3">
                <PricingItem included>Up to 5 users</PricingItem>
                <PricingItem included>3 database connections</PricingItem>
                <PricingItem included>500 queries per user/month</PricingItem>
                <PricingItem included>Basic visualization tools</PricingItem>
                <PricingItem included>Standard support</PricingItem>
                <PricingItem included={false}>Cross-database joins</PricingItem>
              </ul>
              <Button className="w-full mt-6">Contact Sales</Button>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="relative border-2 border-sirdash-500">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-sirdash-500 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <CardHeader className="space-y-1 pb-4">
              <h3 className="text-2xl font-bold">Professional</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">€150</span>
                <span className="text-gray-500 ml-2">/month per user</span>
              </div>
              <p className="text-sm text-gray-500">Billed annually</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">For growing teams with advanced needs</p>
              <ul className="space-y-3">
                <PricingItem included>Up to 20 users</PricingItem>
                <PricingItem included>10 database connections</PricingItem>
                <PricingItem included>1,000 queries per user/month</PricingItem>
                <PricingItem included>Advanced visualization tools</PricingItem>
                <PricingItem included>Priority support</PricingItem>
                <PricingItem included>Cross-database joins</PricingItem>
              </ul>
              <Button className="w-full mt-6 bg-sirdash-500 hover:bg-sirdash-600">
                Contact Sales
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative border-2">
            <CardHeader className="space-y-1 pb-4">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-sm text-gray-500">Billed annually</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">For organizations with complex requirements</p>
              <ul className="space-y-3">
                <PricingItem included>Unlimited users</PricingItem>
                <PricingItem included>Unlimited database connections</PricingItem>
                <PricingItem included>Unlimited queries</PricingItem>
                <PricingItem included>Custom dashboard builder</PricingItem>
                <PricingItem included>24/7 dedicated support</PricingItem>
                <PricingItem included>On-premises deployment option</PricingItem>
              </ul>
              <Button className="w-full mt-6">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact our sales team for a tailored pricing plan that fits your specific needs.
          </p>
          <Button variant="outline">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
};

const PricingItem = ({ children, included }: { children: React.ReactNode; included: boolean }) => (
  <li className="flex items-center space-x-3">
    {included ? (
      <Check className="h-5 w-5 text-green-500" />
    ) : (
      <X className="h-5 w-5 text-red-500" />
    )}
    <span className={included ? "text-gray-600" : "text-gray-400"}>{children}</span>
  </li>
);

export default Pricing;
