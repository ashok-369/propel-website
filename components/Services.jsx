import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, BarChart2, Shield, Globe, ArrowRight, Briefcase, Activity, Heart, Umbrella, Anchor, Layers, Target, ArrowLeft, CheckCircle2, HelpCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const services = [
  { 
    id: 'mf', 
    title: 'Mutual Funds', 
    desc: 'Expert-curated funds for long-term wealth creation. Start SIPs or invest lumpsum.',
    longDesc: 'Mutual funds are one of the best ways to grow your wealth over the long term. Whether you are looking to save tax with ELSS, build a corpus for retirement, or just park your idle cash, we have a fund for every need. Our algorithms select the top performing funds across categories to ensure your portfolio stays green.',
    features: ['Zero Commission Direct Plans', 'Expert Fund Selection', 'Instant Redemption', 'Tax Saving (ELSS) options'],
    icon: PieChart, 
    color: 'text-blue-600' 
  },
  { 
    id: 'trading', 
    title: 'Equity Trading', 
    desc: 'Seamless equity, F&O, and commodity trading with advanced analytics.',
    longDesc: 'Experience lightning-fast trading with our state-of-the-art platform. Get real-time market data, advanced charting tools, and in-depth research reports to make informed trading decisions. Trade in Equities, Futures & Options, Commodities, and Currencies all from a single account.',
    features: ['Low Brokerage Rates', 'Advanced Charting Tools', 'Real-time Margin Calculator', 'Daily Research Calls'],
    icon: BarChart2, 
    color: 'text-purple-600' 
  },
  { 
    id: 'life-ins', 
    title: 'Life Insurance', 
    desc: 'Secure your family\'s future with term and endowment life insurance plans.',
    longDesc: 'Life is unpredictable, but your family\'s financial future shouldn\'t be. Our life insurance plans offer high coverage at affordable premiums. Choose from pure term plans for protection or endowment plans for a mix of insurance and investment.',
    features: ['High Claim Settlement Ratio', 'Tax Benefits u/s 80C', 'Critical Illness Riders', 'Coverage up to 99 years'],
    icon: Heart, 
    color: 'text-red-500' 
  },
  { 
    id: 'health-ins', 
    title: 'Health Insurance', 
    desc: 'Comprehensive health cover for you and your family against medical emergencies.',
    longDesc: 'With rising medical costs, a robust health insurance plan is a necessity. We offer cashless treatments at over 5000+ network hospitals. Our plans cover pre and post-hospitalization expenses, day-care procedures, and even annual health checkups.',
    features: ['Cashless Hospitalization', 'No Claim Bonus', 'Restoration of Sum Insured', 'Maternity Benefits'],
    icon: Activity, 
    color: 'text-green-500' 
  },
  { 
    id: 'gen-ins', 
    title: 'General Insurance', 
    desc: 'Protect your assets with vehicle, home, and travel insurance solutions.',
    longDesc: 'Safeguard your prized possessions against theft, damage, and natural calamities. From car and bike insurance to home and travel insurance, we provide comprehensive protection for all your assets with quick and hassle-free claim settlements.',
    features: ['Instant Policy Issuance', '24x7 Roadside Assistance', 'Zero Depreciation Cover', 'Worldwide Travel Support'],
    icon: Umbrella, 
    color: 'text-indigo-500' 
  },
  { 
    id: 'nri', 
    title: 'NRI Services', 
    desc: 'Specialized investment solutions tailored for Non-Resident Indians.',
    longDesc: 'Managing investments in India while living abroad can be challenging. Our dedicated NRI desk helps you with PIS account opening, tax compliance, and portfolio management, ensuring your money in India grows while you are away.',
    features: ['Dedicated Relationship Manager', 'PIS Account Support', 'Tax Compliant Investing', 'Seamless Repatriation'],
    icon: Globe, 
    color: 'text-orange-600' 
  },
  { 
    id: 'pms', 
    title: 'PMS', 
    desc: 'Portfolio Management Services for high net-worth individuals seeking customized strategies.',
    longDesc: 'For investors with a higher risk appetite and larger corpus, our PMS offers bespoke investment strategies. Managed by seasoned fund managers, our PMS aims to generate alpha over benchmark indices through concentrated and high-conviction bets.',
    features: ['Personalized Portfolio', 'Direct Equity Exposure', 'Regular Performance Reviews', 'Transparency in Holdings'],
    icon: Briefcase, 
    color: 'text-teal-600' 
  },
  { 
    id: 'aif', 
    title: 'AIF', 
    desc: 'Alternative Investment Funds including private equity and hedge funds.',
    longDesc: 'Diversify beyond traditional assets with our Alternative Investment Funds. Gain access to Private Equity, Venture Capital, Real Estate Funds, and Hedge Funds. These sophisticated investment vehicles are designed for HNIs looking for non-correlated returns.',
    features: ['Access to Unlisted Shares', 'Real Estate Opportunities', 'Hedge Fund Strategies', 'Long-term Capital Appreciation'],
    icon: Layers, 
    color: 'text-pink-600' 
  },
  { 
    id: 'retire', 
    title: 'Retirement Planning', 
    desc: 'Strategic planning to ensure financial independence during your golden years.',
    longDesc: 'Retirement is not the end of the road, but a new beginning. We help you estimate your retirement corpus, account for inflation, and create an investment plan that ensures you maintain your lifestyle even when the paycheck stops.',
    features: ['Inflation-adjusted Planning', 'Pension Plan Selection', 'NPS Assistance', 'Bucket Strategy for Withdrawals'],
    icon: Anchor, 
    color: 'text-cyan-600' 
  },
  { 
    id: 'synk', 
    title: 'Synk 360', 
    desc: 'A holistic 360-degree financial health checkup and wealth consolidation service.',
    longDesc: 'Synk 360 is our proprietary financial wellness program. We consolidate all your investments, analyze your risk profile, check your insurance adequacy, and provide a roadmap to optimize your financial health. It is a complete audit of your financial life.',
    features: ['Portfolio Consolidation', 'Risk Profiling', 'Insurance Adequacy Check', 'Goal Mapping'],
    icon: Target, 
    color: 'text-propelGold' 
  }
];

export default function Services() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  // Filter services if an ID is present
  const selectedService = id ? services.find(s => s.id === id) : null;

  // Scroll to top when query param changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // RENDER DETAIL VIEW (Separate Page Look)
  if (id && selectedService) {
    const SIcon = selectedService.icon;
    return (
      <section className="min-h-screen bg-white">
        {/* Header Banner */}
        <div className="bg-gray-50 border-b border-gray-200 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-propelBlue mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to All Services
            </Link>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className={`p-4 rounded-2xl bg-white shadow-sm border border-gray-100 ${selectedService.color}`}>
                <SIcon size={48} strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{selectedService.title}</h1>
                <p className="text-xl text-gray-600 max-w-2xl">{selectedService.desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-propelBlue mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedService.longDesc}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-propelBlue mb-6">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                    <CheckCircle2 className="text-propelBlue shrink-0 mt-0.5" size={20} />
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mt-8">
              <h3 className="font-bold text-lg mb-2">Why choose Propel for {selectedService.title}?</h3>
              <p className="text-gray-600 mb-6">
                We combine technology with human expertise to give you the best possible experience. 
                Our dedicated support team is available 24/7 to assist you with any queries.
              </p>
              <div className="flex gap-4">
                <Link to="/signup" className="px-6 py-3 bg-propelBlue text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Start Now
                </Link>
                <Link to="/contact" className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Talk to Expert
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
             <div className="bg-propelBlue text-white p-6 rounded-2xl shadow-lg">
                <HelpCircle size={32} className="mb-4 text-propelGold" />
                <h4 className="text-xl font-bold mb-2">Need Help?</h4>
                <p className="text-blue-100 mb-4 text-sm">Not sure if {selectedService.title} is right for you? Schedule a call with our financial advisors.</p>
                <Link to="/contact" className="block w-full text-center py-3 bg-white text-propelBlue font-bold rounded-lg hover:bg-blue-50 transition-colors">
                  Request Call Back
                </Link>
             </div>

             <div className="border border-gray-200 rounded-2xl p-6">
               <h4 className="font-bold text-gray-900 mb-4">Related Services</h4>
               <div className="space-y-3">
                 {services.filter(s => s.id !== id).slice(0, 4).map(s => (
                   <Link key={s.id} to={`/services?id=${s.id}`} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                      <div className={`p-2 rounded-md bg-gray-100 ${s.color} group-hover:bg-white`}>
                        <s.icon size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-propelBlue">{s.title}</span>
                   </Link>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>
    );
  }

  // RENDER LIST VIEW (All Services)
  return (
    <section className="py-16 bg-gray-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-propelBlue mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive financial solutions designed to meet your goals at every stage of life.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, index) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col"
            > 
              <div className={`w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${s.color}`}>
                <s.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {s.desc}
              </p>
              <Link 
                to={`/services?id=${s.id}`} 
                className="inline-flex items-center text-sm font-semibold text-propelBlue group-hover:gap-2 transition-all mt-auto"
              >
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}