'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Truck, Clock, CreditCard, Package, Phone } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is the warranty on Kentank water tanks?',
      answer: 'All our Kentank water tanks come with a 15-year manufacturer warranty. This covers manufacturing defects, UV degradation, and material failures under normal use conditions.',
      icon: Shield,
    },
    {
      question: 'Do you offer free delivery?',
      answer: 'Yes! We offer FREE countrywide delivery to all 47 counties in Kenya. Delivery typically takes 2-3 business days depending on your location.',
      icon: Truck,
    },
    {
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 2-3 business days to most locations in Kenya. For remote areas, it may take up to 5 business days. We will contact you to confirm the delivery date.',
      icon: Clock,
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including M-Pesa (most popular) and bank transfers. Payment is processed after order confirmation.',
      icon: CreditCard,
    },
    {
      question: 'Are the tanks KEBS certified?',
      answer: 'Yes, all our tanks are KEBS certified and made from 100% food-grade polyethylene, making them safe for storing drinking water. They are UV-stabilized for outdoor durability.',
      icon: Package,
    },
    {
      question: 'How do I place an order?',
      answer: 'You can order in three ways: 1) Add to cart on our website and checkout, 2) Call us at +254784400492, or 3) Use WhatsApp to place your order directly.',
      icon: Phone,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-left flex items-start gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-navy-900 pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="tel:+2540784400492"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call +254784400492
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
