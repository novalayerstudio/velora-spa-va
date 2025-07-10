import {
  Check,
  Crown,
  Sparkles,
  Star,
  List,
  MessageCircle,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { handleBookCall } from './BookCallSection';

const PlansSection = () => {
  const formatPrice = (price: number | string, isFullTime: boolean) => {
    const hours = isFullTime ? '(40 hours/week)' : '(20 hours/week)';
    if (typeof price === 'string') {
      return `${price}`;
    }
    return `$${price} ${hours} `;
  };

  const plans = [
    {
      name: 'Glow Getter VA',
      icon: Sparkles,
      description: 'Daily DM outreach and appointment-setting from trained VAs',
      fullTimePrice: 650,
      partTimePrice: 350,
      features: [
        'Fully trained VA — you provide task guidance',
        'Ideal for DM replies, lead lists, and booking links',
        'Calendly or Sheets setup included',
        'Solid support to keep your calendar full.',
      ],
      popular: false,
      gradient: 'from-blush-pink to-white',
    },
    {
      name: 'Client Magnet VA',
      icon: Star,
      description: 'Lead handling, social engagement, and light strategy',
      fullTimePrice: 1300,
      partTimePrice: 700,
      features: [
        'Includes everything in Glow Getter',
        'VA works independently and offers optimization suggestions',
        'Manages CRM, outreach, and DM flows',
        'Weekly performance reports sent directly to you',
        'For business owners who want proactive support.',
      ],
      popular: true,
      gradient: 'from-rose-gold/20 to-blush-pink',
    },
    {
      name: 'Elite Spa VA',
      icon: Crown,
      description: 'All-in-one VA for spa growth, strategy, and conversions',
      fullTimePrice: 1900,
      partTimePrice: 900,
      features: [
        'Includes everything in Client Magnet',
        'Targeting: VA identifies and engages high-fit leads based on your ideal client profile',
        'Reactivation: VA reaches out to cold leads and past clients using strategic outreach',
        'Daily reporting via Sheets or Notion',
        'Priority Microsoft Teams access and monthly strategy call',
        'Built for spa owners ready to scale and delegate with confidence',
      ],
      popular: false,
      gradient: 'from-rose-gold/30 to-rose-gold/10',
    },
    {
      name: 'Enterprise VA Plan',
      icon: Building,
      description: 'Custom solutions for multi-location spas and franchises',
      fullTimePrice: 'Custom pricing – tailored to your needs',
      features: [
        'Multi-VA teams aligned with your tools and team structure',
        'Works with your existing systems (Vagaro, Zenoti, ClickUp, etc.)',
        'Dedicated onboarding specialist and account strategist',
        'Fully integrated dashboards and performance analytics',
        'For chains and high-volume brands with complex operational needs.',
      ],
      popular: false,
      gradient: 'from-rose-gold/30 to-rose-gold/10',
    },
  ];

  const addOns = [
    {
      name: 'Local Lead List',
      icon: List,
      price: 100,
      description: 'Curated list of 100+ local potential clients.',
    },
    {
      name: 'DM Script Pack',
      icon: MessageCircle,
      price: 250,
      description: 'Pre-written follow-up messages that convert.',
    },
    {
      name: 'Paid Ad Starter Kit',
      icon: Crown,
      price: 500,
      description: 'We build your first IG/FB ads to feed more DMs.',
    },
  ];

  const testimonials = [
    {
      quote:
        'I was overwhelmed, my VA booked 12 facials in 10 days without me touching ads.',
      handle: '@beautywithsoph',
      initial: 'S',
      rating: 5,
      image: '/velora-spa-va/images/soph-logo.png',
    },
    {
      quote: 'No more no-shows. My calendar is 3 weeks full, and I\'m relaxed.',
      handle: '@theglowmethod',
      initial: 'G',
      rating: 5,
      image: '/velora-spa-va/images/glow-logo.png',
    },
  ];

  return (
    <section
      id="plans"
      className="py-20 bg-gradient-to-br from-blush-pink/30 to-cream relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Intro */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-rose-gold" />
            <span className="text-rose-gold font-inter font-medium">
              Choose Your Plan
            </span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Pick the plan that fits your vibe
          </h2>
          <p className="text-xl text-charcoal/70 font-inter max-w-3xl mx-auto">
            All plans include dedicated VAs, training, and ongoing support.
            Switch between full-time and part-time as needed.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up animate-delay-${(index + 1) * 100} ${
                plan.popular
                  ? 'border-2 border-rose-gold'
                  : 'border border-blush-pink/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-rose-gold text-white text-center py-2 text-sm font-medium z-10">
                  Most Popular
                </div>
              )}

              <CardHeader
                className={`bg-gradient-to-br ${plan.gradient} ${
                  plan.popular ? 'pt-12' : 'pt-8'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <plan.icon className="w-6 h-6 text-rose-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-charcoal/70 font-inter">{plan.description}</p>

                <div className="mt-6 space-y-1">
                  <div className="text-charcoal font-inter font-medium text-base">
                    {formatPrice(plan.fullTimePrice, true)}
                  </div>
                  {typeof plan.partTimePrice !== 'undefined' && (
                    <div className="text-charcoal/80 font-inter text-sm">
                      {formatPrice(plan.partTimePrice, false)}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6 bg-white flex-1 flex flex-col">
                <ul className="space-y-4 mb-6 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-rose-gold mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal font-inter">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleBookCall()}
                  className={`w-full py-3 rounded-full transition-all duration-200 hover:scale-105 mt-auto ${
                    plan.popular
                      ? 'bg-rose-gold hover:bg-rose-gold/90 text-white'
                      : 'bg-white border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white'
                  }`}
                >
                  Book a Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="animate-fade-in-up animate-delay-400 mb-20">
          <h3 className="font-playfair text-3xl font-bold text-charcoal text-center mb-8">
            Want more? Add these
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                className="border border-blush-pink/50 hover:border-rose-gold/30 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white rounded-full p-3">
                        <addon.icon className="w-4 h-4 text-rose-gold" />
                      </div>
                      <h4 className="font-playfair text-xl font-semibold text-charcoal">
                        {addon.name}
                      </h4>
                    </div>
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

        {/* Testimonials */}
        <div className="animate-fade-in-up animate-delay-500 mt-16">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl lg:text-4xl font-light text-charcoal/80 mb-4">
              Words from spa owners like you
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-blush-pink/50 hover:border-rose-gold/30 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-rose-gold/20">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.handle} profile`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-rose-gold to-blush-pink rounded-full flex items-center justify-center"><span class="text-white font-bold text-lg">${testimonial.initial}</span></div>`;
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-charcoal font-inter text-lg italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <span className="text-rose-gold font-medium">
                          {testimonial.handle}
                        </span>
                      </div>
                    </div>
                  </div>
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