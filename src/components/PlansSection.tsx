
import { Check, Crown, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const PlansSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Starter Setter",
      icon: Sparkles,
      description: "Daily appointment-setting and DM outreach from trained VAs",
      fullTimePrice: 1000,
      partTimePrice: 550,
      features: [
        "DM outreach on IG/TikTok",
        "Lead follow-up via DM/email",
        "Appointment scheduling",
        "Weekly lead report"
      ],
      popular: false,
      gradient: "from-blush-pink to-white"
    },
    {
      name: "Engagement Pro",
      icon: Star,
      description: "Advanced lead handling + social engagement tasks",
      fullTimePrice: 1300,
      partTimePrice: 700,
      features: [
        "Everything in Starter ✅",
        "Story engagement + comment replies",
        "Social post scheduling",
        "Follow-up with no-shows/past leads",
        "Review management"
      ],
      popular: true,
      gradient: "from-rose-gold/20 to-blush-pink"
    },
    {
      name: "Elite Spa VA",
      icon: Crown,
      description: "Your all-in-one VA for spa growth and lead conversion",
      fullTimePrice: 1500,
      partTimePrice: 800,
      features: [
        "Everything in Pro ✅",
        "Custom DM scripts + follow-up funnels",
        "CRM segmentation",
        "Google/Yelp review management",
        "Content reposting"
      ],
      popular: false,
      gradient: "from-rose-gold/30 to-rose-gold/10"
    }
  ];

  const addOns = [
    {
      name: "Local Lead Scraping",
      price: 100,
      description: "We'll build you a custom list of local leads to DM"
    },
    {
      name: "Email/SMS Follow-Up Funnel",
      price: "250+",
      description: "A 5-message rebooking flow that converts ghosted leads"
    },
    {
      name: "Paid Ad Starter Kit",
      price: "500+",
      description: "Basic FB/IG ad campaign setup to drive even more traffic to your DM funnel"
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-blush-pink/30 to-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blush-pink rounded-full blur-2xl opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-rose-gold" />
            <span className="text-rose-gold font-inter font-medium">Choose Your Plan</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Choose Your VA Plan
          </h2>
          <p className="text-xl text-charcoal/70 font-inter max-w-3xl mx-auto">
            All plans include dedicated VAs, training, and ongoing support. Switch between full-time and part-time as needed.
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up animate-delay-${(index + 1) * 100} ${
              plan.popular ? 'border-2 border-rose-gold' : 'border border-blush-pink/50'
            }`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-rose-gold text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`bg-gradient-to-br ${plan.gradient} ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <plan.icon className="w-6 h-6 text-rose-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-charcoal/70 font-inter mb-6">
                  {plan.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-charcoal">${plan.fullTimePrice}</span>
                    <span className="text-charcoal/70">/month (FT)</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-semibold text-charcoal">${plan.partTimePrice}</span>
                    <span className="text-charcoal/70">/month (PT)</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 bg-white">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-rose-gold mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection('book-call')}
                  className={`w-full py-3 rounded-full transition-all duration-200 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-rose-gold hover:bg-rose-gold/90 text-white' 
                      : 'bg-white border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="animate-fade-in-up animate-delay-400">
          <h3 className="font-playfair text-3xl font-bold text-charcoal text-center mb-8">
            Optional Add-Ons
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="border border-blush-pink/50 hover:border-rose-gold/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-playfair text-xl font-semibold text-charcoal">
                      {addon.name}
                    </h4>
                    <span className="text-2xl font-bold text-rose-gold">
                      ${addon.price}
                    </span>
                  </div>
                  <p className="text-charcoal/70 font-inter">
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
