import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-propelBlue mb-6">About Propel</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a technology-first financial platform dedicated to making wealth creation simple, accessible, and transparent for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <div className="w-14 h-14 bg-propelBlue text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To democratize access to premium financial tools and advice, enabling every Indian to achieve financial independence.
            </p>
          </div>
          <div className="p-8 bg-yellow-50 rounded-2xl border border-yellow-100 text-center">
            <div className="w-14 h-14 bg-propelGold text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Team</h3>
            <p className="text-gray-600">
              Founded by industry veterans from top financial institutes, we combine financial expertise with cutting-edge technology.
            </p>
          </div>
          <div className="p-8 bg-green-50 rounded-2xl border border-green-100 text-center">
            <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Transparency, and Customer First. We believe in building trust through honest and unbiased advice.
            </p>
          </div>
        </div>

        <div className="bg-propelBlue rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Join 10,000+ Investors</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Start your journey towards financial freedom today with Propel. Safe, secure, and simple.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 border-t border-blue-700 pt-12">
              <div>
                <div className="text-3xl font-bold mb-1">₹500Cr+</div>
                <div className="text-blue-200 text-sm">Assets Under Management</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-blue-200 text-sm">Active SIPs</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">4.8/5</div>
                <div className="text-blue-200 text-sm">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-blue-200 text-sm">Support Available</div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}