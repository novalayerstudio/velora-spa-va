
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-cream z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cream via-blush-pink to-rose-gold z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center animate-scale-in">
        <div className="relative mb-6">
          <Sparkles className="w-16 h-16 text-rose-gold mx-auto animate-float" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-rose-gold rounded-full animate-pulse"></div>
        </div>
        <h1 className="font-playfair text-6xl font-bold text-charcoal mb-4 animate-fade-in-up animate-delay-200">
          Velora
        </h1>
        <p className="font-inter text-lg text-charcoal/70 animate-fade-in-up animate-delay-300">
          Elite Virtual Assistants for Med Spas
        </p>
        <div className="mt-8 flex justify-center animate-fade-in-up animate-delay-400">
          <div className="w-12 h-1 bg-rose-gold rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
