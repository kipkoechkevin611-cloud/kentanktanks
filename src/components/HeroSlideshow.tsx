'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Truck, Shield, Phone, ShoppingBag, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  badge?: string;
  cta?: string;
}

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: '/assets/vertical (2).jpeg',
      title: 'Kentank Premium Water Tanks',
      subtitle: 'Genuine Kentank water storage solutions with FREE countrywide delivery',
      badge: 'FREE DELIVERY',
      cta: 'Shop Now',
    },
    {
      image: '/assets/horizontal (2).jpeg',
      title: 'Starting from KSh 5,500',
      subtitle: 'Affordable prices for all tank sizes - 1,000L to 24,000L',
      badge: 'BEST PRICES',
      cta: 'View Products',
    },
    {
      image: '/assets/loft tank.jpeg',
      title: '25-Year Warranty',
      subtitle: 'Industry-leading warranty on all Kentank products',
      badge: 'WARRANTY',
      cta: 'Learn More',
    },
    {
      image: '/assets/under ground.jpeg',
      title: 'KEBS Certified',
      subtitle: '100% food-grade polyethylene - safe for drinking water',
      badge: 'CERTIFIED',
      cta: 'Order Now',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-800/85" />
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                  quality={85}
                />
              </div>
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl"
                  >
                    {slide.badge && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block mb-4"
                      >
                        <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                          {slide.badge}
                        </span>
                      </motion.div>
                    )}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                      {slide.subtitle}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Link href="/products">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
                        >
                          <ShoppingBag className="w-5 h-5" />
                          {slide.cta || 'Shop Now'}
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors border border-white/30"
                      >
                        <Mail className="w-5 h-5" />
                        Contact Us
                      </motion.button>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 flex flex-wrap gap-6 items-center"
                    >
                      <div className="flex items-center gap-2 text-white">
                        <Truck className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">Free Delivery</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <Shield className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">25-Year Warranty</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        <Phone className="w-6 h-6 text-orange-500" />
                        <a href="tel:+254737042076" className="text-lg font-bold text-white hover:text-orange-400 transition-colors">
                          +254737042076
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3" role="tablist" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${currentSlide === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={currentSlide === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
