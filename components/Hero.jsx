import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, ShieldCheck, Sparkles, Target, Settings, Menu } from 'lucide-react';

// Color Mapping for single-file consistency:
// propelBlue -> indigo-700
// propelGold -> amber-500

const Hero = () => {
  // NOTE: Link components replaced with <a> for single-file compatibility.
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white min-h-[calc(100vh-80px)] flex items-center pt-24 pb-12 lg:py-0">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-700/10 rounded-full blur-3xl hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-700 animate-pulse"></span>
              #1 Investment Platform
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-700 leading-tight">
              Make investing simple. <br className="hidden lg:block" />
              Grow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">PROPEL</span>.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Smart tools, personalised advice, and a robust platform built to secure your financial future.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#signup" 
                className="px-8 py-4 rounded-xl bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-700/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Start Investing <ArrowRight size={18} />
              </a>
              <a 
                href="#tools" 
                className="px-8 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-indigo-700 hover:text-indigo-700 transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Explore Tools
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 flex-wrap">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-600" />
                <span>SEBI Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-600" />
                <span>Bank Grade Security</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 relative z-10">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Total Portfolio Value</h3>
                <div className="text-3xl font-bold text-gray-900 mt-1">₹ 1,24,567</div>
              </div>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-lg font-semibold text-sm flex items-center gap-1">
                <TrendingUp size={16} /> +4.2%
              </div>
            </div>

            <div className="space-y-4">
              {/* Mock Chart Bars */}
              <div className="h-40 flex items-end gap-2 justify-between px-2 mb-6">
                {[35, 45, 30, 60, 55, 75, 65].map((h, i) => (
                  <div key={i} className="w-full bg-blue-50 rounded-t-md relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="absolute bottom-0 left-0 right-0 bg-indigo-700 rounded-t-md opacity-80 group-hover:opacity-100 transition-opacity"
                    ></motion.div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gray-50 rounded-xl flex justify-between items-center group hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 font-bold">
                    S
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">SIP Installment</div>
                    <div className="text-xs text-gray-500">Due Today</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="text-right">
                    <div className="font-bold">₹ 5,000</div>
                  </div>
                  <button className="px-4 py-2 bg-amber-500 text-white text-xs font-bold rounded-lg shadow-md hover:bg-amber-600 transition-colors">
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorative card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-3 z-20 hidden sm:flex"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500">NIFTY 50</div>
              <div className="font-bold text-sm text-green-600">+145.20 (0.8%)</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay }}
    viewport={{ once: true, amount: 0.4 }}
    className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
  >
    <div className="w-12 h-12 mb-6 p-2 rounded-xl bg-green-100/70 flex items-center justify-center text-green-500">
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Hybrid Expertise + Technology",
      description: "Our advisory combines human advisors' experience with AI-enabled planning tools — giving you the best of both worlds.",
      delay: 0.1
    },
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "We don't just pick investments. We align your money with your life goals: retirement, children's education, buying a home, and more.",
      delay: 0.3
    },
    {
      icon: ShieldCheck,
      title: "Transparent Risk Management",
      description: 'Through our proprietary risk-profiling questionnaire, we build a customized risk map and rebalance actively — not just "set-and-forget."',
      delay: 0.5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Three powerful reasons to trust us with your financial future</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-indigo-700">
        <span className="text-amber-500">P</span>ROPEL
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <a href="#features" className="hover:text-indigo-700 transition-colors">Features</a>
        <a href="#pricing" className="hover:text-indigo-700 transition-colors">Pricing</a>
        <a href="#about" className="hover:text-indigo-700 transition-colors">About Us</a>
        <a href="#contact" className="hover:text-indigo-700 transition-colors">Contact</a>
      </nav>
      <div className="hidden md:block">
        <a 
          href="#login"
          className="px-6 py-2 rounded-xl border border-indigo-700 text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors"
        >
          Login
        </a>
      </div>
      <button className="md:hidden text-indigo-700 p-2 rounded-lg hover:bg-indigo-50 transition-colors">
        <Menu size={24} />
      </button>
    </div>
  </header>
);


export default function App() {
  return (
    <div className="min-h-screen font-[Inter] antialiased">
      {/* Tailwind configuration for custom colors (assumed to be available) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      
      {/* <Header /> */}
      <Hero />
      <WhyChooseUs />
     
    </div>
  );
}