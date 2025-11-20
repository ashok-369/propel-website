import React, { useState, useEffect } from 'react';
import { 
  Calculator, Newspaper, TrendingUp, AlertTriangle, HeartPulse,
  Download, CreditCard, ArrowLeft, FileText,
  PieChart, Coins, ArrowRightLeft, Banknote, Armchair,
  Hourglass, Shield, Calculator as CalcIcon, Percent,
  Gem, GraduationCap, Home, Car, Plane, User, Save
} from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

function formatINR(x) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(x);
}

const toolsList = [
  { id: 'news', title: 'Market News', icon: Newspaper, desc: 'Latest updates from financial markets.', color: 'text-blue-600' },
  { id: 'performer', title: 'Fund Performer', icon: TrendingUp, desc: 'Analyze top performing mutual funds.', color: 'text-green-600' },
  { id: 'risk', title: 'Risk Analyzer', icon: AlertTriangle, desc: 'Assess your risk appetite before investing.', color: 'text-orange-500' },
  { id: 'health', title: 'Health Check', icon: HeartPulse, desc: 'Financial health score calculator.', color: 'text-red-500' },
  { id: 'download', title: 'Downloads', icon: Download, desc: 'Forms, reports, and policy documents.', color: 'text-purple-600' },
  { id: 'calculator', title: 'Calculators', icon: Calculator, desc: 'Comprehensive suite of financial calculators.', color: 'text-propelBlue' },
  { id: 'pay', title: 'Pay Premium', icon: CreditCard, desc: 'Quickly pay your insurance premiums.', color: 'text-teal-600' }
];

export default function ToolsHub() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const activeTool = toolsList.find(t => t.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!id) {
    return (
      <section className="py-16 bg-gray-50 min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-propelBlue mb-4">Financial Tools</h2>
            <p className="text-gray-600 text-lg">
              A suite of powerful tools to help you analyze, plan, and manage your finances better.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsList.map(tool => (
              <Link 
                key={tool.id}
                to={`/tools?id=${tool.id}`}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 transition-transform ${tool.color}`}>
                  <tool.icon size={24} />
                </div>
                <h3 className="font-bold text-lg">{tool.title}</h3>
                <p className="text-sm text-gray-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-500 hover:text-propelBlue mb-4 text-sm font-medium">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-4">
            {activeTool && <activeTool.icon size={32} className={activeTool.color} />}
            <h1 className="text-3xl font-bold text-gray-900">{activeTool?.title || 'Tool'}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {id === 'calculator' && <CalculatorSuite />}
        {id === 'news' && <NewsTool />}
        {id === 'performer' && <FundPerformerTool />}
        {id === 'risk' && <RiskTool />}
        {id === 'health' && <HealthTool />}
        {id === 'download' && <DownloadsTool />}
        {id === 'pay' && <PayPremiumTool />}
      </div>
    </section>
  );
}
