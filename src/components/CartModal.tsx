'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, User, Phone as PhoneIcon, MapPin, Truck, Clock, CheckCircle, ChevronRight, ChevronLeft, MessageCircle, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Modal from './ui/Modal';
import Image from 'next/image';

const CartModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    notes: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.phone.length < 10) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.includes('@') || !formData.email.includes('.')) newErrors.email = 'Please enter a valid email';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppCheckout = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          notes: formData.notes,
          orderItems: cart,
          total: cartTotal.toLocaleString(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Order submitted successfully! We will contact you shortly.');
        clearCart();
        setShowCheckoutForm(false);
        onClose();
        setFormData({ name: '', phone: '', email: '', location: '', notes: '' });
      } else {
        alert('Failed to submit order. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailCheckout = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          notes: formData.notes,
          orderItems: cart,
          total: cartTotal.toLocaleString(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Order submitted successfully! We will contact you shortly.');
        clearCart();
        setShowCheckoutForm(false);
        onClose();
        setFormData({ name: '', phone: '', email: '', location: '', notes: '' });
      } else {
        alert('Failed to submit order. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const deliveryInfo = {
    estimate: '2-3 Business Days',
    cost: 'FREE',
    coverage: 'All 47 Counties',
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Shopping Cart">
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <ShoppingBag className="w-10 h-10 text-gray-400" />
          </motion.div>
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <button
            onClick={onClose}
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${!showCheckoutForm ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>
                {!showCheckoutForm ? '1' : <CheckCircle className="w-4 h-4" />}
              </div>
              <span className={`text-sm font-medium ${!showCheckoutForm ? 'text-navy-900' : 'text-green-600'}`}>
                {!showCheckoutForm ? 'Cart' : 'Cart'}
              </span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className={`h-full transition-all duration-300 ${showCheckoutForm ? 'bg-green-500 w-full' : 'bg-orange-500 w-1/2'}`}></div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${showCheckoutForm ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {showCheckoutForm ? '2' : '2'}
              </div>
              <span className={`text-sm font-medium ${showCheckoutForm ? 'text-navy-900' : 'text-gray-500'}`}>
                Checkout
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showCheckoutForm ? (
              <motion.div
                key="cart"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                        sizes="80px"
                        quality={75}
                      />
                    </div>
                    <div className="flex-1 w-full min-w-0">
                      <h4 className="font-semibold text-navy-900 text-sm sm:text-base truncate">{item.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{item.capacity}</p>
                      <p className="text-orange-500 font-bold text-sm sm:text-base">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-gray-800 hover:bg-gray-100 flex items-center justify-center transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900" />
                        </button>
                        <span className="w-6 sm:w-8 text-center font-semibold text-gray-900 text-sm sm:text-base">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-gray-800 hover:bg-gray-100 flex items-center justify-center transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>
                  </motion.div>
                ))}

                {/* Delivery Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900 mb-2">Delivery Information</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-blue-600 font-medium">Estimate</p>
                          <p className="text-blue-800">{deliveryInfo.estimate}</p>
                        </div>
                        <div>
                          <p className="text-blue-600 font-medium">Cost</p>
                          <p className="text-blue-800 font-bold">{deliveryInfo.cost}</p>
                        </div>
                        <div>
                          <p className="text-blue-600 font-medium">Coverage</p>
                          <p className="text-blue-800">{deliveryInfo.coverage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-orange-500">
                      KSh {cartTotal.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => setShowCheckoutForm(true)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    Proceed to Checkout
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="checkout"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <button
                  onClick={() => setShowCheckoutForm(false)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to Cart
                </button>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <PhoneIcon className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="07XXXXXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Delivery Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500 ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="City, County, Address"
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
                      rows={3}
                      placeholder="Any special instructions..."
                    />
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-navy-900 mb-3">Order Summary</h4>
                    <div className="space-y-2 text-sm">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span className="text-gray-600">{item.name} x {item.quantity}</span>
                          <span className="font-medium">{item.price}</span>
                        </div>
                      ))}
                      <div className="border-t pt-2 mt-2 flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-orange-500">KSh {cartTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleWhatsAppCheckout}
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <ShoppingBag className="w-5 h-5" />
                          </motion.div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          Submit Order
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </Modal>
  );
};

export default CartModal;
