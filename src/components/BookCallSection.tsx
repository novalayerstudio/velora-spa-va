
import { ArrowRight, Calendar, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const handleBookCall = () => {
    // Replace with your actual Calendly or booking URL
    window.open('https://calendly.com/your-booking-link', '_blank');
  };

const BookCallSection = () => {
 

  const benefits = [
    {
      icon: Clock,
      title: "48-Hour Setup",
      description: "Get matched with your perfect VA within 2 days"
    },
    {
      icon: Shield,
      title: "No Risk Trial",
      description: "Cancel anytime, no long-term contracts"
    },
    {
      icon: Calendar,
      title: "Free Strategy Call",
      description: "Get a custom plan for your med spa's growth"
    }
  ];

  return (
    <section id="book-call" className="py-20 bg-gradient-to-br from-rose-gold/10 via-blush-pink/20 to-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blush-pink rounded-full blur-2xl opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Ready to fill your calendar?
            </h2>
            <p className="text-xl text-charcoal/70 font-inter mb-8 max-w-3xl mx-auto">
              Book a quick demo and we’ll match you with a VA who gets it.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <div>
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-rose-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-rose-gold" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-charcoal/70 font-inter text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - CTA Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl animate-fade-in-up animate-delay-400">
              <div className="mb-6">
                <img 
                  src="/velora-spa-va/images/54cf5ab3-6aa5-49cf-9162-c8ee6d31ce63.png"
                  alt="Virtual assistant consultation"
                  className="w-32 object-cover rounded-2xl mx-auto shadow-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-charcoal mb-4 text-center">
                Start Your Free Demo Today
              </h3>
              {/* <p className="text-charcoal/70 font-inter mb-8 text-center">
                Join 200+ med spas already using Velora VAs to stay booked solid. See exactly how our VAs will grow your business in our personalized demo.
              </p> */}
              
              <div className="flex flex-col gap-4 items-center mb-8">
                <Button 
                  onClick={handleBookCall}
                  className="bg-rose-gold hover:bg-rose-gold/90 text-white px-10 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg group w-full"
                >
                  Book Your Demo Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                {/* <span className="text-sm text-charcoal/60 font-inter">
                  ⚡ Usually responds within 30 minutes
                </span> */}
              </div>
              
              {/* <div className="flex flex-col space-y-2 text-sm text-charcoal/60 text-center">
                <div className="flex items-center justify-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Custom strategy included</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
