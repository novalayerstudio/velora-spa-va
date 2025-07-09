
import { Sparkles, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-rose-gold" />
              <span className="font-playfair text-3xl font-bold">Velora</span>
            </div>
            <p className="text-gray-300 font-inter mb-6 max-w-md">
              Elite Virtual Assistants for Med Spas. We help beauty businesses stay booked solid with trained VAs that handle DMs, scheduling, and lead conversion.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="bg-rose-gold/20 hover:bg-rose-gold/30 p-3 rounded-full transition-colors duration-200">
                <Instagram className="w-5 h-5 text-rose-gold" />
              </a>
              <a href="mailto:hello@velora.com" className="bg-rose-gold/20 hover:bg-rose-gold/30 p-3 rounded-full transition-colors duration-200">
                <Mail className="w-5 h-5 text-rose-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6 text-rose-gold">Quick Links</h4>
            <ul className="space-y-3 font-inter">
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-rose-gold transition-colors duration-200"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('plans')}
                  className="text-gray-300 hover:text-rose-gold transition-colors duration-200"
                >
                  Plans & Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('book-call')}
                  className="text-gray-300 hover:text-rose-gold transition-colors duration-200"
                >
                  Book a Demo
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-gold transition-colors duration-200">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6 text-rose-gold">Contact</h4>
            <ul className="space-y-3 font-inter text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-rose-gold" />
                <span>hello@velora.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-rose-gold" />
                <span>Available Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-inter text-sm">
              © 2024 Velora. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm font-inter">
              <a href="#" className="text-gray-400 hover:text-rose-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-gold transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
