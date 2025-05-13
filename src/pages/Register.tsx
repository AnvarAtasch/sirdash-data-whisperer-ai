import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User, Lock, CheckCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    setIsSubmitting(true);
    try {
      console.log("Registration attempt with:", data);
      
      // In a real application, this would be a call to your backend API
      // For demonstration, we'll simulate a successful registration
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Registration Successful",
        description: "A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account.",
      });
      
      setVerificationSent(true);
      setIsSubmitting(false);
      
      // In a real application, you would redirect to a verification pending page
      // or show a message asking the user to check their email
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: "There was a problem with your registration. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  if (verificationSent) {
    return (
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md mx-auto space-y-8">
            <div className="text-center">
              <a href="/" className="flex justify-center">
                <img src="/images/sirdash-logo-circle.svg" alt="SirDash.ai Logo" className="h-16 w-auto" />
              </a>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                Email Verification Sent
              </h2>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <p className="text-lg mb-4">
                We've sent a verification email to <span className="font-medium">{form.getValues().email}</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Please check your inbox and click on the verification link to complete your registration.
              </p>
              <div className="space-y-4">
                <Button 
                  className="w-full"
                  onClick={() => navigate("/login")}
                >
                  Go to Login
                </Button>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => setVerificationSent(false)}
                >
                  Back to Registration
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative flex-1 hidden w-0 lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-sirdash-500 to-sirdash-700">
            <div className="flex flex-col items-center justify-center h-full p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">Welcome to SirDash</h2>
              <p className="text-xl mb-8 max-w-md text-center">
                Natural language data queries - no SQL knowledge required
              </p>
              <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <p className="mb-4 text-lg font-medium">With SirDash you can:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-sirdash-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Query your data using natural language</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-sirdash-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Visualize results instantly</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-sirdash-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Share insights with your team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="text-center">
            <a href="/" className="flex justify-center">
              <img src="/images/sirdash-logo-circle.svg" alt="SirDash.ai Logo" className="h-16 w-auto" />
            </a>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-sirdash-600 hover:text-sirdash-500">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input 
                              placeholder="Enter your full name" 
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input 
                              placeholder="Enter your email" 
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input 
                              type="password" 
                              placeholder="Create a password" 
                              className="pl-10"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input 
                              type="password" 
                              placeholder="Confirm your password" 
                              className="pl-10"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-sirdash-500 hover:bg-sirdash-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      <span>Create Account</span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative flex-1 hidden w-0 lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-sirdash-500 to-sirdash-700">
          <div className="flex flex-col items-center justify-center h-full p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Welcome to SirDash</h2>
            <p className="text-xl mb-8 max-w-md text-center">
              Natural language data queries - no SQL knowledge required
            </p>
            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
              <p className="mb-4 text-lg font-medium">With SirDash you can:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-sirdash-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Query your data using natural language</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-sirdash-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visualize results instantly</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-sirdash-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Share insights with your team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
