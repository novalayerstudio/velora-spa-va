// components/SplashScreen.tsx
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react'; // Assuming you use lucide-react for the Sparkles icon

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isFadingOut, setIsFadingOut] = useState(false); // Controls the fade-out CSS class

  useEffect(() => {
    // 1. Timer to start the fade-out of the splash screen content
    //    Adjust 2500ms (2.5 seconds) based on how long you want the logo/text to be fully visible.
    const startFadeOutTimer = setTimeout(() => {
      setIsFadingOut(true); // This will add 'opacity-0' to the main splash div
    }, 2500);

    // 2. Timer to actually remove the SplashScreen component from the DOM
    //    This should be AFTER the fade-out animation duration (500ms in CSS).
    //    Total time = startFadeOutTimer + CSS transition duration
    const completeRemovalTimer = setTimeout(() => {
      onComplete(); // Notify the parent (Index) that the splash is completely done
    }, 2500 + 500); // 2500ms + 500ms = 3000ms (3 seconds)

    // Cleanup timers if the component unmounts prematurely
    return () => {
      clearTimeout(startFadeOutTimer);
      clearTimeout(completeRemovalTimer);
    };
  }, [onComplete]);

  return (
    // The main container for the splash screen content.
    // This div's opacity will be animated.
    <div
      className={`fixed inset-0 bg-gradient-to-br from-cream via-blush-pink to-rose-gold z-50 flex items-center justify-center
        transition-opacity duration-500 ease-in-out // CSS transition for opacity
        ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'} // Conditional opacity and pointer events
      `}
    >
      {/* Splash screen content */}
      <div className="text-center animate-scale-in">
        <div className="mb-6 flex justify-center relative">
          <img
            src="/velora-spa-va/logo.png" // Ensure this path is correct relative to your public folder
            alt="Velora"
            className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
          {/* Optional sparkle effect with Lucide React, ensure it's installed */}
          {/* <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-yellow-400 animate-pulse" /> */}
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