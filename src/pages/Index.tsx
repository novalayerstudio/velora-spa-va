
import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PlansSection from '@/components/PlansSection';
import BookCallSection from '@/components/BookCallSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <PlansSection />
      <BookCallSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
