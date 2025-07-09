import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm Velora's assistant. I can help you with our services and get your message to our team. What's your name?",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState<'name' | 'email' | 'question' | 'done'>('name');
  const [userData, setUserData] = useState({ name: '', email: '', question: '' });
  const messageEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    pricing: "Our plans start at $550/month for part-time VAs and $1,000/month for full-time. Would you like help choosing the right one?",
    plans: "We offer 3 plans: Starter Setter, Engagement Pro, and Elite Spa VA. Each adds more features for growing med spas!",
    demo: "You can book a free demo by clicking the 'Book My Free Demo' button. We’ll match you with a VA in 48 hours!",
    vas: "Our VAs are trained for med spas. They handle DM outreach, scheduling, engagement, and more!",
    setup: "Setup is fast! Book a demo, get matched within 48 hours, and your VA can start immediately.",
    support: "You’ll have dedicated support and weekly reports from your VA. We're always available if you need help!",
    default: "That's a great question! I recommend booking a free demo for personalized advice. Want the link?"
  };

  const getResponse = (message: string) => {
    const lower = message.toLowerCase();
    if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) return botResponses.pricing;
    if (lower.includes('plan') || lower.includes('package')) return botResponses.plans;
    if (lower.includes('demo') || lower.includes('book') || lower.includes('call')) return botResponses.demo;
    if (lower.includes('va') || lower.includes('assistant') || lower.includes('what do')) return botResponses.vas;
    if (lower.includes('setup') || lower.includes('start') || lower.includes('begin')) return botResponses.setup;
    if (lower.includes('support') || lower.includes('help') || lower.includes('service')) return botResponses.support;
    return botResponses.default;
  };

  const submitToFormspree = async () => {
    await fetch('https://formspree.io/f/xvgrydqv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        project: userData.question,
        _replyto: userData.email,
        _subject: `New Project Inquiry from ${userData.question}`
      })
    });
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setTyping(true);

    setTimeout(async () => {
      let botReply = '';

      if (step === 'name') {
        setUserData(prev => ({ ...prev, name: inputValue }));
        botReply = `Nice to meet you, ${inputValue}! What’s your email address?`;
        setStep('email');
      } else if (step === 'email') {
        setUserData(prev => ({ ...prev, email: inputValue }));
        botReply = "Thanks! And what's your main question or message for us?";
        setStep('question');
      } else if (step === 'question') {
        setUserData(prev => ({ ...prev, question: inputValue }));
        botReply = `Awesome, ${userData.name || 'friend'}! We’ll reach out to you at ${userData.email} soon. 😊`;
        setStep('done');
        await submitToFormspree();
      } else {
        botReply = getResponse(inputValue);
      }

      const botMessage = { id: Date.now() + 1, text: botReply, isBot: true };
      setTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-rose-gold hover:bg-rose-gold/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col animate-scale-in border border-gray-200">
          {/* Header */}
          <div className="bg-rose-gold text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="font-semibold">Velora Assistant</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-charcoal'
                      : 'bg-rose-gold text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-charcoal px-3 py-2 rounded-2xl text-sm animate-pulse">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 min-h-[40px] resize-none"
                rows={1}
              />
              <Button
                onClick={handleSend}
                className="bg-rose-gold hover:bg-rose-gold/90 text-white p-2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;