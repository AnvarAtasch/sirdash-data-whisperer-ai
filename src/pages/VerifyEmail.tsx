import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Verifying your email...');
  
  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setVerificationStatus('error');
        setMessage('Invalid verification link. No token provided.');
        return;
      }
      
      try {
        // In a real application, you would call your backend API
        // For demonstration, we'll simulate a successful verification after a delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate successful verification
        setVerificationStatus('success');
        setMessage('Your email has been successfully verified! You can now log in to your account.');
      } catch (error) {
        console.error('Verification error:', error);
        setVerificationStatus('error');
        setMessage('There was a problem verifying your email. The link may have expired or is invalid.');
      }
    };
    
    verifyEmail();
  }, [token]);
  
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="text-center">
            <a href="/" className="flex justify-center">
              <img src="/images/sirdash-logo-circle.svg" alt="SirDash.ai Logo" className="h-16 w-auto" />
            </a>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Email Verification
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            {verificationStatus === 'loading' && (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-sirdash-500 mb-4"></div>
                <p className="text-lg">{message}</p>
              </div>
            )}
            
            {verificationStatus === 'success' && (
              <div className="flex flex-col items-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <p className="text-lg mb-6">{message}</p>
                <Button 
                  className="w-full"
                  onClick={() => navigate("/login")}
                >
                  Go to Login
                </Button>
              </div>
            )}
            
            {verificationStatus === 'error' && (
              <div className="flex flex-col items-center">
                <XCircle className="h-16 w-16 text-red-500 mb-4" />
                <p className="text-lg mb-6">{message}</p>
                <div className="space-y-4">
                  <Button 
                    className="w-full"
                    onClick={() => navigate("/register")}
                  >
                    Back to Registration
                  </Button>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="font-medium text-sirdash-600 hover:text-sirdash-500">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            )}
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

export default VerifyEmail;
