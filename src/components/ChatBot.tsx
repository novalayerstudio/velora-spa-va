
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm here to help with any questions about Velora's VA services. What would you like to know?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const botResponses = {
    pricing: "Our plans start at $550/month for part-time VAs and $1,000/month for full-time. Each plan includes different levels of service - would you like me to explain the differences?",
    plans: "We have 3 main plans: Starter Setter ($550-$1000), Engagement Pro ($700-$1300), and Elite Spa VA ($800-$1500). Each builds on the previous with more advanced features!",
    demo: "Great! You can book a free demo by clicking the 'Book My Free Demo' button. We'll match you with the perfect VA within 48 hours!",
    vas: "Our VAs are specially trained for med spas and beauty clinics. They handle DM outreach, appointment scheduling, social media engagement, and lead follow-up.",
    setup: "Setup is super quick! Once you book a demo, we'll match you with a VA within 48 hours and they can start working immediately.",
    support: "You'll have dedicated support throughout your journey. Your VA will provide weekly reports and we're always here if you need adjustments!",
    default: "That's a great question! I'd recommend booking a free demo where our team can give you personalized answers. Would you like me to help you with that?"
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return botResponses.pricing;
    } else if (lowerMessage.includes('plan') || lowerMessage.includes('package')) {
      return botResponses.plans;
    } else if (lowerMessage.includes('demo') || lowerMessage.includes('call') || lowerMessage.includes('book')) {
      return botResponses.demo;
    } else if (lowerMessage.includes('va') || lowerMessage.includes('assistant') || lowerMessage.includes('what do')) {
      return botResponses.vas;
    } else if (lowerMessage.includes('setup') || lowerMessage.includes('start') || lowerMessage.includes('begin')) {
      return botResponses.setup;
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('service')) {
      return botResponses.support;
    } else {
      return botResponses.default;
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, text: getResponse(inputValue), isBot: true };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
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
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col animate-scale-in">
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
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
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
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
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
