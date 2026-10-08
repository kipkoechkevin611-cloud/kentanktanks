'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TankCalculator from '../components/TankCalculator';
import WhatsAppOrderModal from '../components/WhatsAppOrderModal';
import DeliveryEstimator from '../components/DeliveryEstimator';
import FAQ from '../components/FAQ';
import TrustBadges from '../components/TrustBadges';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProcess from '../components/OurProcess';
import BlogSection from '../components/BlogSection';
import CategoriesSection from '../components/CategoriesSection';
import ApplicationsSection from '../components/ApplicationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useCart } from '../context/CartContext';
import {
  ShoppingCart,
  Phone,
  CheckCircle,
  Truck,
  Shield,
  Award,
  Star,
  ArrowRight,
  Droplets,
  Factory,
  Users,
  Clock,
  Mail,
  MapPin,
  CreditCard
} from 'lucide-react';

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      capacity: product.capacity,
      price: `KSh ${product.salePrice.toLocaleString()}`,
      image: product.image,
    });
  };

  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50K+', label: 'Happy Customers', icon: Users },
    { value: '47', label: 'Counties Covered', icon: Truck },
    { value: '100%', label: 'KEBS Certified', icon: Shield },
  ];

  const products = [
    {
      id: 17,
      name: 'Vertical Tank 24000L',
      capacity: '24000L',
      originalPrice: 180000,
      salePrice: 132500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Largest capacity for major industrial operations',
    },
    {
      id: 16,
      name: 'Vertical Tank 20000L',
      capacity: '20000L',
      originalPrice: 135000,
      salePrice: 98500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Massive industrial tank for factories',
    },
    {
      id: 15,
      name: 'Vertical Tank 16000L',
      capacity: '16000L',
      originalPrice: 100000,
      salePrice: 72500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Premium industrial capacity',
    },
    {
      id: 14,
      name: 'Vertical Tank 12000L',
      capacity: '12000L',
      originalPrice: 80000,
      salePrice: 58000,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Extra-large capacity for major operations',
    },
    {
      id: 13,
      name: 'Vertical Tank 10000L',
      capacity: '10000L',
      originalPrice: 70000,
      salePrice: 51000,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Massive capacity for commercial and industrial',
    },
    {
      id: 12,
      name: 'Vertical Tank 8000L',
      capacity: '8000L',
      originalPrice: 55000,
      salePrice: 38500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Extra-large capacity for industrial use',
    },
    {
      id: 11,
      name: 'Vertical Tank 6000L',
      capacity: '6000L',
      originalPrice: 45000,
      salePrice: 32500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Large capacity for commercial properties',
    },
    {
      id: 10,
      name: 'Vertical Tank 5000L',
      capacity: '5000L',
      originalPrice: 38000,
      salePrice: 27500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Premium capacity for homes and businesses',
    },
    {
      id: 9,
      name: 'Vertical Tank 4000L',
      capacity: '4000L',
      originalPrice: 26000,
      salePrice: 18500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Extra-large capacity for commercial use',
    },
    {
      id: 8,
      name: 'Vertical Tank 3000L',
      capacity: '3000L',
      originalPrice: 20000,
      salePrice: 14500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Large capacity for homes and small businesses',
    },
    {
      id: 7,
      name: 'Vertical Tank 2300L',
      capacity: '2300L',
      originalPrice: 15500,
      salePrice: 10800,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Premium vertical tank capacity',
    },
    {
      id: 6,
      name: 'Vertical Tank 2000L',
      capacity: '2000L',
      originalPrice: 15000,
      salePrice: 10500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Extra-large vertical tank for homes',
    },
    {
      id: 5,
      name: 'Vertical Tank 1500L',
      capacity: '1500L',
      originalPrice: 9500,
      salePrice: 6800,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Large vertical tank for family use',
    },
    {
      id: 4,
      name: 'Vertical Tank 1000L',
      capacity: '1000L',
      originalPrice: 7500,
      salePrice: 5500,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Standard vertical tank for average households',
    },
    {
      id: 3,
      name: 'Vertical Tank 500L',
      capacity: '500L',
      originalPrice: 3800,
      salePrice: 2800,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Medium vertical tank for small families',
    },
    {
      id: 2,
      name: 'Vertical Tank 250L',
      capacity: '250L',
      originalPrice: 2500,
      salePrice: 1800,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Small vertical tank for basic water storage',
    },
    {
      id: 1,
      name: 'Vertical Tank 100L',
      capacity: '100L',
      originalPrice: 1500,
      salePrice: 1100,
      image: '/assets/kentank-water-tank8.jpeg',
      description: 'Compact vertical tank perfect for small households',
    },
  ];

  const testimonials = [
    {
      name: 'John Kamau',
      location: 'Nairobi',
      text: 'Excellent quality tanks! The delivery was fast and the installation team was professional. Highly recommended!',
      rating: 5,
      date: '2 weeks ago',
    },
    {
      name: 'Mary Wanjiku',
      location: 'Mombasa',
      text: 'Best water tanks in Kenya. Have been using Kentank for 5 years now and never had any issues.',
      rating: 5,
      date: '1 month ago',
    },
    {
      name: 'Peter Ochieng',
      location: 'Kisumu',
      text: 'Great customer service and durable products. The tank calculator helped me choose the right size.',
      rating: 5,
      date: '3 weeks ago',
    },
    {
      name: 'Grace Njoroge',
      location: 'Nakuru',
      text: 'Ordered a 5000L tank and it arrived within 3 days. The quality is outstanding and the price was very competitive.',
      rating: 5,
      date: '1 week ago',
    },
    {
      name: 'David Kimani',
      location: 'Eldoret',
      text: 'Professional installation team and excellent after-sales support. Would definitely buy again.',
      rating: 5,
      date: '2 months ago',
    },
    {
      name: 'Sarah Akinyi',
      location: 'Thika',
      text: 'The WhatsApp ordering process was so convenient. Got my tank delivered to my farm without any hassle.',
      rating: 5,
      date: '3 days ago',
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Genuine Kentank Products',
      description: '100% authentic Kentank water tanks with manufacturer warranty',
    },
    {
      icon: Truck,
      title: 'Free Countrywide Delivery',
      description: 'Free delivery to all 47 counties in Kenya',
    },
    {
      icon: Clock,
      title: '15 Year Warranty',
      description: 'Industry-leading warranty for peace of mind',
    },
    {
      icon: Users,
      title: 'Expert Installation',
      description: 'Professional team for perfect setup',
    },
    {
      icon: Award,
      title: 'KEBS Certified',
      description: 'All tanks meet strict quality standards',
    },
    {
      icon: CheckCircle,
      title: 'Secure Ordering',
      description: 'Safe and secure ordering process via email',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section - Amazing Design */}
      <section className="relative h-[calc(100vh-80px)] min-h-[500px] md:min-h-[650px] lg:min-h-[750px] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="/assets/vertical (2).jpeg"
            alt="Kentank Water Tanks"
            fill
            className="object-cover opacity-15"
            priority
            quality={80}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/95" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-orange-500/30">
                🇰🇪 Kenya&apos;s #1 Water Tank Supplier
              </span>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Premium Water Storage Solutions
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-3xl">
              Genuine Kentank water tanks with free countrywide delivery. From 500L to 24,000L for homes, farms, and industries.
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
              <Link href="/products" className="flex-1 sm:flex-none min-w-[160px] md:min-w-[200px]">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base lg:text-lg py-3 md:py-4 px-4 md:px-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Browse Products
                </Button>
              </Link>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="flex-1 sm:flex-none min-w-[160px] md:min-w-[200px] inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm md:text-base lg:text-lg font-semibold py-3 md:py-4 px-4 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Order Now
              </button>
              <a
                href="tel:+254737042076"
                className="flex-1 sm:flex-none min-w-[160px] md:min-w-[200px] inline-flex items-center justify-center gap-2 bg-white text-navy-900 hover:bg-gray-100 text-sm md:text-base lg:text-lg font-bold py-3 md:py-4 px-4 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                +254737042076
              </a>
            </div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20">
                <Shield className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-bold text-white text-base">15-Year Warranty</p>
                  <p className="text-xs text-gray-300">Industry-leading</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20">
                <Award className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="font-bold text-white text-base">KEBS Certified</p>
                  <p className="text-xs text-gray-300">Quality assured</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20">
                <Truck className="w-6 h-6 text-orange-400" />
                <div>
                  <p className="font-bold text-white text-base">Free Delivery</p>
                  <p className="text-xs text-gray-300">Countrywide</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Vertical Tanks</h2>
            <Link href="/products">
              <button className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {products.map((product, index) => {
              const savings = product.originalPrice - product.salePrice;
              const isBestSeller = index === 0 || index === 2;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group border border-gray-100 hover:border-orange-200">
                    <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 flex flex-col gap-1.5">
                        {isBestSeller && (
                          <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                            BEST SELLER
                          </span>
                        )}
                        <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                          SALE
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                        {product.capacity}
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 flex-1 flex flex-col">
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-navy-900 mb-1.5 line-clamp-2">{product.name}</h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                      <div className="mb-2">
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 line-through">KSh {product.originalPrice.toLocaleString()}</p>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-green-600">KSh {product.salePrice.toLocaleString()}</p>
                        <p className="text-[10px] sm:text-xs md:text-sm text-green-600 font-semibold">Save KSh {savings.toLocaleString()}</p>
                      </div>
                      <div className="mt-auto space-y-2">
                        <Button
                          variant="primary"
                          className="w-full text-[10px] sm:text-xs md:text-sm py-2"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <CategoriesSection />

      <ApplicationsSection />

      {/* Tank Calculator */}
      <TankCalculator />

      {/* Testimonials */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What Our Customers Say</h2>
            <p className="text-gray-300">
              Trusted by thousands of satisfied customers across Kenya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">{testimonial.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-navy-900 text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">How to Order</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to get your water tank delivered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: 'Choose Your Tank',
                description: 'Browse our catalog and select the perfect tank for your needs',
                step: '1',
              },
              {
                icon: ShoppingCart,
                title: 'Place Your Order',
                description: 'Order via our website or call us directly',
                step: '2',
              },
              {
                icon: CreditCard,
                title: 'Make Payment',
                description: 'Pay via M-Pesa or bank transfer',
                step: '3',
              },
              {
                icon: Truck,
                title: 'Free Delivery',
                description: 'Get your tank delivered to your doorstep nationwide',
                step: '4',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <Card className="p-6 pt-8 h-full">
                  <item.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Delivery Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fast and reliable delivery to all 47 counties
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: 'Order Confirmation',
                  time: 'Within 1 hour',
                  description: 'We confirm your order and provide delivery details',
                },
                {
                  title: 'Processing',
                  time: '1-2 business days',
                  description: 'Your tank is prepared and scheduled for delivery',
                },
                {
                  title: 'Transit',
                  time: '2-5 business days',
                  description: 'Your tank is on the way to your location',
                },
                {
                  title: 'Delivery',
                  time: '2-3 business days total',
                  description: 'Your tank arrives at your location with installation support',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                      <span className="text-orange-500 font-semibold">{item.time}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Order Your Water Tank?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Get premium quality water tanks delivered to your doorstep anywhere in Kenya
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100"
                onClick={() => setIsOrderModalOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                Order Now
              </Button>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-navy-900 text-white hover:bg-navy-800">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Nationwide Delivery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver to all 47 counties in Kenya with fast and reliable shipping
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru',
              'Eldoret', 'Thika', 'Kitale', 'Garissa',
            ].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange-50 transition-colors cursor-pointer"
              >
                <Truck className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="font-semibold text-navy-900 text-sm">{city}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">And 39 more counties across Kenya</p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <OurProcess />

      <BlogSection />

      <TrustBadges />

      <FAQ />

      {/* Delivery Estimator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Estimate Your Delivery Time</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check how long it will take to deliver your water tank to your location
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <DeliveryEstimator />
          </motion.div>
        </div>
      </section>

      <Footer />

      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </main>
  );
}
