import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const fullText =
    'Grow Your Med Spa with Trained Virtual Assistants That Fill Your Calendar';
  const highlightPhrase = 'Trained Virtual Assistants';
  const highlightStart = fullText.indexOf(highlightPhrase);
  const highlightEnd = highlightStart + highlightPhrase.length;

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35); // typing speed

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-cream via-blush-pink/30 to-cream pt-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-rose-gold/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-rose-gold/20 rounded-full blur-lg animate-float"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 text-rose-gold animate-fade-in-up animate-delay-100">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-inter text-sm font-medium">
                Trusted by 200+ Med Spas
              </span>
            </div>

            {/* Typing Headline with Highlight */}
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-charcoal leading-tight animate-fade-in-up animate-delay-200">
              <span className="border-r-2 border-black pr-1 animate-blink-caret">
                {displayText.split('').map((char, index) => {
                  const isHighlight = index >= highlightStart && index < highlightEnd;
                  return (
                    <span
                      key={index}
                      className={isHighlight ? 'text-rose-gold' : undefined}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            </h1>

            <p className="text-xl text-charcoal/70 font-inter leading-relaxed animate-fade-in-up animate-delay-300">
              Our VAs handle DMs, schedule clients, follow up with leads, and keep your
              spa booked—all for a fraction of the cost of a full-time hire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
              <Button
                onClick={() => scrollToSection('book-call')}
                className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg group"
              >
                Book a Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('how-it-works')}
                className="border-rose-gold text-rose-gold hover:bg-rose-gold/10 px-8 py-4 text-lg rounded-full transition-all duration-200"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-up animate-delay-300">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/velora-spa-va/images/93a05526-3f82-4c3f-8f28-4f89ed241dc4.png"
                alt="Professional virtual assistant working on laptop"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/20 to-transparent"></div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-gold">200+</div>
                <div className="text-sm text-charcoal/70">Happy Clients</div>
              </div>
            </div>

            <div
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-gold">85%</div>
                <div className="text-sm text-charcoal/70">More Bookings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;