
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, LogIn, PlayCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useGoogleLogin } from "@react-oauth/google";
import { useToast } from "@/components/ui/use-toast";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().default(false),
});

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsSubmitting(true);
    try {
      console.log("Login attempt with:", data);
      // In a real application, you would authenticate with a backend here
      // For now, we'll just simulate a successful login
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/coming-soon"); // Redirect to coming soon page after successful login
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsGoogleLoading(true);
      try {
        console.log('Google OAuth success:', tokenResponse);
        
        // Fetch user info from Google using the access token
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            'Authorization': `Bearer ${tokenResponse.access_token}`
          }
        });
        
        if (!userInfoResponse.ok) {
          throw new Error('Failed to fetch user info from Google');
        }
        
        const userInfo = await userInfoResponse.json();
        console.log('Google user info:', userInfo);
        
        // In a real application, you would:
        // 1. Send this token to your backend to verify
        // 2. Create or login the user in your system
        // 3. Set authentication state/cookies
        
        toast({
          title: 'Google Sign-in Successful',
          description: `Signed in as ${userInfo.email}`,
        });
        
        // Redirect to home page after successful login
        setTimeout(() => {
          setIsGoogleLoading(false);
          navigate('/');
        }, 1000);
      } catch (error) {
        console.error('Google login error:', error);
        toast({
          title: 'Sign-in Failed',
          description: 'There was a problem signing in with Google',
          variant: 'destructive',
        });
        setIsGoogleLoading(false);
      }
    },
    onError: (errorResponse) => {
      console.error('Google login error:', errorResponse);
      toast({
        title: 'Sign-in Failed',
        description: 'There was a problem signing in with Google',
        variant: 'destructive',
      });
    },
    scope: 'email profile',
  });

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="text-center">
            <a href="/" className="flex justify-center">
              <img src="/images/sirdash-logo-circle.svg" alt="SirDash.ai Logo" className="h-16 w-auto" />
            </a>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Try Our Sandbox
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-sirdash-600 hover:text-sirdash-500">
                Sign up now
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-300"
                onClick={() => handleGoogleLogin()}
                disabled={isGoogleLoading}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Sign in with Google
              </Button>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500">Or continue with</span>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
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
                          <Input 
                            type="password" 
                            placeholder="Enter your password" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <div className="flex items-center">
                          <Checkbox 
                            id="rememberMe" 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <label 
                            htmlFor="rememberMe" 
                            className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      )}
                    />

                    <a 
                      href="#" 
                      className="text-sm font-medium text-sirdash-600 hover:text-sirdash-500"
                    >
                      Forgot your password?
                    </a>
                  </div>

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
                        Authenticating...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <PlayCircle className="mr-2 h-4 w-4" /> Try Our Sandbox
                      </span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Query your data using natural language</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-sirdash-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Create dashboards without technical knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-sirdash-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Share insights with your team in real-time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
