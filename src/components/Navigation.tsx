
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Sparkles className="w-6 h-6 text-rose-gold" />
            <span className="font-playfair text-2xl font-bold text-charcoal">Velora</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-charcoal hover:text-rose-gold transition-colors duration-200"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('plans')}
              className="text-charcoal hover:text-rose-gold transition-colors duration-200"
            >
              Plans
            </button>
            <button 
              onClick={() => scrollToSection('book-call')}
              className="text-charcoal hover:text-rose-gold transition-colors duration-200"
            >
              Book a Demo
            </button>
            <Button 
              onClick={() => scrollToSection('book-call')}
              className="bg-rose-gold hover:bg-rose-gold/90 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal hover:text-rose-gold transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glassmorphism rounded-lg mt-2 p-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-charcoal hover:text-rose-gold transition-colors duration-200"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('plans')}
                className="text-left text-charcoal hover:text-rose-gold transition-colors duration-200"
              >
                Plans
              </button>
              <button 
                onClick={() => scrollToSection('book-call')}
                className="text-left text-charcoal hover:text-rose-gold transition-colors duration-200"
              >
                Book a Demo
              </button>
              <Button 
                onClick={() => scrollToSection('book-call')}
                className="bg-rose-gold hover:bg-rose-gold/90 text-white px-6 py-2 rounded-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
