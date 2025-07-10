// pages/index.tsx
import { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PlansSection from '@/components/PlansSection';
import BookCallSection from '@/components/BookCallSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import FAQ from '@/components/FAQ';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true); // Controls if SplashScreen is rendered
  const [mainContentReady, setMainContentReady] = useState(false); // Controls fade-in for main content

  // Callback from SplashScreen when its fade-out animation is complete
  const handleSplashComplete = () => {
    setShowSplash(false); // Remove SplashScreen from the DOM
    // Give a tiny moment for React to unmount the splash screen, then start main content fade-in
    setTimeout(() => {
      setMainContentReady(true); // Trigger the fade-in for the main app content
    }, 50); // Small delay (e.g., 50ms)
  };

  // If showSplash is true, only render the SplashScreen
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  // Once showSplash is false, render the main application content
  return (
    // The main container for your entire application.
    // It will fade in smoothly once the SplashScreen is done.
    <div
      className={`min-h-screen bg-cream
        transition-opacity duration-1000 ease-in-out // Apply a longer transition for main content fade-in
        ${mainContentReady ? 'opacity-100' : 'opacity-0'} // Conditional opacity for fade-in
      `}
    >
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <PlansSection />
      <FAQ />
      <BookCallSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;