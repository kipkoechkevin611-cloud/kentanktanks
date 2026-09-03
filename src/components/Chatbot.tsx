'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! Welcome to Kentank. I'm here to help you find the perfect water tank. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return "Our prices range from KSh 1,800 for 250L tanks to KSh 85,000 for 24,000L tanks. All prices include free countrywide delivery. Popular sizes: 1000L (~KSh 5,500), 2000L (~KSh 8,500), 5000L (~KSh 18,000). Would you like to see our full product catalog?";
    }

    if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping') || lowerMessage.includes('deliver')) {
      return "We offer FREE countrywide delivery to all 47 counties in Kenya! Delivery typically takes 2-3 business days. Orders placed before 2 PM ship same day. Our team will contact you to confirm the delivery date.";
    }

    if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
      return "All our Kentank water tanks come with a 15-year manufacturer warranty. This covers manufacturing defects, UV degradation, and material failures under normal use. This is the longest warranty in the industry!";
    }

    if (lowerMessage.includes('size') || lowerMessage.includes('capacity') || lowerMessage.includes('liter')) {
      return "We offer tanks in various sizes: 250L, 500L, 1000L, 1500L, 2000L, 2500L, 3000L, 5000L, 8000L, 10000L, 15000L, and 24000L. For homes: 1000L-5000L. For farms: 5000L-24000L. What size are you looking for?";
    }

    if (lowerMessage.includes('vertical') || lowerMessage.includes('horizontal') || lowerMessage.includes('loft') || lowerMessage.includes('septic') || lowerMessage.includes('underground') || lowerMessage.includes('industrial')) {
      return "We offer five main tank types:\n• Vertical Tanks - Standard upright design, most popular\n• Horizontal Tanks - For spaces with height restrictions\n• Loft Tanks - Compact for rooftop installations\n• Underground Tanks - Space-efficient, buried installation\n• Industrial Tanks - Large capacity for commercial use\n\nWhich type interests you?";
    }

    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('mpesa')) {
      return "We accept multiple payment methods:\n• M-Pesa (most popular - instant confirmation)\n• Bank Transfer\n\nPayment is processed after order confirmation. We do NOT accept cash on delivery.";
    }

    if (lowerMessage.includes('install') || lowerMessage.includes('setup')) {
      return "Yes! We offer professional installation services. Our experienced team will ensure your tank is properly installed and ready for use. Installation can be added to your order for a small fee.";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('call')) {
      return "You can reach us at:\n• Phone: +254784400492\n• WhatsApp: +254784400492\n• Email: info@kentank.co.ke\n\nOur team is available Mon-Sat, 8AM-6PM.";
    }

    if (lowerMessage.includes('order') || lowerMessage.includes('buy') || lowerMessage.includes('purchase')) {
      return "You can order in three ways:\n1. Add to cart on our website and checkout\n2. Call us at +254784400492\n3. Use WhatsApp to place your order\n\nWhich method would you prefer?";
    }

    if (lowerMessage.includes('kebs') || lowerMessage.includes('certified') || lowerMessage.includes('quality')) {
      return "Yes! All our tanks are KEBS certified and made from 100% food-grade polyethylene, making them safe for storing drinking water. They're UV-stabilized for outdoor durability and resistant to algae growth.";
    }

    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('kentank')) {
      return "Kentank is Kenya's #1 water tank supplier. We specialize in genuine Kentank water tanks with free countrywide delivery, 15-year warranty, and KEBS certification. We've served thousands of customers across all 47 counties.";
    }

    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('address')) {
      return "We are based in Nairobi but deliver countrywide to all 47 counties in Kenya. You can visit our website to browse products and order online, or call us for assistance.";
    }

    if (lowerMessage.includes('material') || lowerMessage.includes('made of') || lowerMessage.includes('plastic')) {
      return "Our tanks are made from 100% food-grade polyethylene (plastic) that is UV-stabilized, non-toxic, and safe for drinking water. They're durable, rust-proof, and resistant to algae growth.";
    }

    if (lowerMessage.includes('maintain') || lowerMessage.includes('clean') || lowerMessage.includes('care')) {
      return "To maintain your tank:\n• Clean annually with mild soap and water\n• Keep the lid closed to prevent contamination\n• Inspect for cracks or damage\n• Ensure proper drainage around the tank\n• Avoid placing heavy objects on top";
    }

    if (lowerMessage.includes('color') || lowerMessage.includes('colour') || lowerMessage.includes('black') || lowerMessage.includes('green')) {
      return "Our tanks come in standard colors: Black (most popular - prevents algae growth), Green (blends with environment), and sometimes Blue. Black tanks are recommended for drinking water storage.";
    }

    if (lowerMessage.includes('return') || lowerMessage.includes('refund') || lowerMessage.includes('exchange')) {
      return "We accept returns within 7 days if the tank is unused and in original packaging. For manufacturing defects covered by warranty, we provide free replacement. Contact us for return authorization.";
    }

    if (lowerMessage.includes('discount') || lowerMessage.includes('offer') || lowerMessage.includes('sale') || lowerMessage.includes('cheap')) {
      return "We offer competitive prices with periodic sales and promotions. Check our Featured Products section for current deals. Bulk orders (5+ tanks) qualify for special pricing. Contact us for bulk quotes.";
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to Kentank. I'm here to help you find the perfect water tank. Are you looking for a specific tank size, or do you have questions about our products and services?";
    }

    if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with regarding water tanks or our services?";
    }

    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Thank you for chatting with Kentank! Feel free to reach out anytime. Have a great day!";
    }

    return "I'd be happy to help with that! You can:\n• Browse our products page for detailed information\n• Call us at +254784400492 for immediate assistance\n• Use WhatsApp to place an order\n\nAsk me about prices, delivery, warranty, tank types, sizes, installation, or anything else about water tanks!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl overflow-hidden ${
              isMinimized ? 'h-14' : 'w-96 h-[500px]'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Kentank Support</h3>
                  <p className="text-xs text-gray-300">Online • Typically replies instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-[380px] overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-orange-500 text-white'
                            : 'bg-white text-gray-800 shadow-sm'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white text-gray-800 p-3 rounded-2xl shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
