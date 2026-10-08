'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    products: [
      { href: '/products', label: 'Vertical Tanks' },
      { href: '/products', label: 'Horizontal Tanks' },
      { href: '/products', label: 'Loft Tanks' },
      { href: '/products', label: 'Underground Tanks' },
      { href: '/products', label: 'Septic Tanks' },
      { href: '/products', label: 'Industrial Tanks' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/about', label: 'Our History' },
      { href: '/contact', label: 'Contact' },
      { href: '/blog', label: 'Blog' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
    support: [
      { href: '/contact', label: 'Get a Quote' },
      { href: '/contact', label: 'Installation' },
      { href: '/contact', label: 'FAQs' },
      { href: '/contact', label: 'Technical Support' },
      { href: '/contact', label: 'Warranty Claims' },
      { href: '/delivery', label: 'Delivery Policy' },
    ],
  };

  const paymentMethods = [
    { name: 'M-Pesa', icon: '💳' },
    { name: 'Bank Transfer', icon: '🏦' },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Kentank Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                  quality={90}
                />
              </div>
              <span className="font-bold text-xl">Kentank</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Kenya&apos;s leading manufacturer of premium water storage solutions. Trusted by homes, farms, and industries nationwide since 2009.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+254737042076" className="text-white hover:text-orange-500 transition-colors text-sm">
                    +254737042076
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a href="https://wa.me/254737042076" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors text-sm">
                    +254737042076
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@kentank.co.ke" className="text-white hover:text-orange-500 transition-colors text-sm">
                    info@kentank.co.ke
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white text-sm">Industrial Area, Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Business Hours</p>
                  <p className="text-white text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-white text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <div className="bg-gray-800 rounded-xl overflow-hidden h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.253749977852!2d36.8149!3d-1.28638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d8f8f8f8f9%3A0x8f8f8f8f8f8f8f8!2sIndustrial%20Area%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kentank Location Map"
            />
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-white/5 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get updates on new products, special offers, and water storage tips.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm"
              />
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm">
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Kentank Kenya. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-gray-400 text-sm">Payment Methods:</span>
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <span>{method.icon}</span>
                  <span className="text-sm">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
