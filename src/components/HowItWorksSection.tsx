
import { MessageSquare, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorksSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: MessageSquare,
      title: "DM Local Leads",
      description: "Reach out to women in your city who already want Botox, facials, and more",
      image: "/images/1c2f5425-2685-4b52-af4f-1c5efea01933.png"
    },
    {
      icon: Calendar,
      title: "Book Appointments",
      description: "Handle scheduling and follow-up with no-shows and past clients",
      image: "/images/bc1627cc-1ce4-4ac2-8a83-d2c6f50d91ee.png"
    },
    {
      icon: Heart,
      title: "Keep Your Social Active",
      description: "Post before/afters, reply to comments, and manage reviews",
      image: "/images/3bbea62c-37fd-436f-87a1-8241b408b2cc.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blush-pink rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-gold/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Here's What Our VAs Will Do For You Daily
          </h2>
          <p className="text-xl text-charcoal/70 font-inter max-w-3xl mx-auto">
            Our trained virtual assistants work seamlessly with your med spa to generate leads, book appointments, and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className={`group hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blush-pink/50 hover:border-rose-gold/30">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full object-fit group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <feature.icon className="w-6 h-6 text-rose-gold" />
                  </div>
                </div>
                
                <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animate-delay-400">
          <Button 
            onClick={() => scrollToSection('plans')}
            className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Get a VA That Grows Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
