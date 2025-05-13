
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle2, MessageSquare, Users } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const BookDemo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send data to server endpoint
      const response = await fetch('http://localhost:3003/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit demo request');
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Demo request submitted!",
        description: "Our team will contact you shortly to schedule a demo.",
      });
    } catch (error) {
      console.error('Error submitting demo request:', error);
      setIsSubmitting(false);
      toast({
        title: "Submission failed",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Book a Demo
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Experience the power of SirDash.ai firsthand with a personalized demonstration tailored to your data needs.
            </p>
            
            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sirdash-100 dark:bg-sirdash-900">
                    <Users className="h-5 w-5 text-sirdash-600 dark:text-sirdash-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tailored to Your Team</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    We'll customize the demo for your specific role and use cases, whether you're a product manager, data analyst, or data scientist.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sirdash-100 dark:bg-sirdash-900">
                    <Calendar className="h-5 w-5 text-sirdash-600 dark:text-sirdash-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flexible Scheduling</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Pick a time that works for your team. We offer demos across global time zones to accommodate your schedule.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sirdash-100 dark:bg-sirdash-900">
                    <MessageSquare className="h-5 w-5 text-sirdash-600 dark:text-sirdash-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Q&A Session</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Every demo includes time for in-depth questions with our product specialists to address your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border-2 border-sirdash-100 dark:border-gray-700">
              <CardContent className="pt-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Business Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Company *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Inc."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="role" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Your Role *
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select your role</option>
                          <option value="product_manager">Product Manager</option>
                          <option value="data_analyst">Data Analyst</option>
                          <option value="data_scientist">Data Scientist</option>
                          <option value="data_engineer">Data Engineer</option>
                          <option value="executive">Executive</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        What are you hoping to learn from the demo?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your specific data challenges or use cases..."
                        rows={4}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-sirdash-500 hover:bg-sirdash-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request a Demo"}
                    </Button>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                ) : (
                  <div className="py-12 text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Thank you for your interest!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We've received your demo request. A member of our team will contact you within 24 hours to schedule your personalized demo.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
