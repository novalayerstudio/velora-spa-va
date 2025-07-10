import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const faqData = [
  {
    question: 'Can my VA DM in my style?',
    answer: 'Yes - your VA will mirror your tone and follow your brand voice. Whether it’s confirming appointments or answering questions, we make sure your clients feel like they’re talking to you.',
  },
  {
    question: 'I don’t have a system—can I still work with you?',
    answer: 'Absolutely. Many of our clients start from scratch. During onboarding, we’ll help you set up a clear structure so your VA knows exactly how to support you.',
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes, you can adjust your plan at any time. Whether you need to pause, upgrade, or scale back, we’ll make it easy.',
  },
  {
    question: 'How will my VA know what to do day-to-day?',
    answer: 'We walk through your needs together during onboarding. You’ll get a clear plan, dedicated support, and full transparency around how your VA will help from day one.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Whenever openIndex changes, adjust max-height to scrollHeight for a smooth transition
  useEffect(() => {
    answerRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      if (openIndex === idx) {
        ref.style.maxHeight = ref.scrollHeight + 'px';
      } else {
        ref.style.maxHeight = '0px';
      }
    });
  }, [openIndex]);

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-rose-gold/10 via-blush-pink/20 to-cream relative overflow-hidden"
    >
      {/* Decorative Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blush-pink rounded-full blur-2xl opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-charcoal mb-12 text-center">
          Got questions?
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-white/70 border border-rose-gold/30 rounded-2xl shadow-md p-6 cursor-pointer"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-inter font-medium text-lg text-charcoal focus:outline-none"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* hidden container whose max-height animates */}
              <div
                ref={el => (answerRefs.current[index] = el)}
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: '0px' }}
              >
                <div className="mt-4 text-charcoal/70 text-base font-inter leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;