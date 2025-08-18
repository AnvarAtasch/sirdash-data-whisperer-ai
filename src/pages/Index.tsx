
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoDemo from '@/components/VideoDemo';
import About from '@/components/About';
import Technology from '@/components/Technology';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import BookDemo from '@/components/BookDemo';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VideoDemo />
        <div id="about">
          <About />
        </div>
        <div id="technology">
          <Technology />
        </div>
        <div id="use-cases">
          <UseCases />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="demo">
          <BookDemo />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
