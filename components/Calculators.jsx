import React, { useState, useEffect } from 'react';
import { 
  Calculator, Newspaper, TrendingUp, Activity, Download, CreditCard, ArrowLeft, FileText, AlertTriangle, HeartPulse,
  PieChart, Coins, ArrowRightLeft, Banknote, Armchair, Hourglass, Shield, Calculator as CalcIcon, Percent, Gem, GraduationCap, Home, Car, Plane, User, Save
} from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

function formatINR(x) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(x);
}

// --- MAIN TOOLS CONFIGURATION ---
const toolsList = [
  { id: 'news', title: 'Market News', icon: Newspaper, desc: 'Latest updates from financial markets.', color: 'text-blue-600' },
  { id: 'performer', title: 'Fund Performer', icon: TrendingUp, desc: 'Analyze top performing mutual funds.', color: 'text-green-600' },
  { id: 'risk', title: 'Risk Analyzer', icon: AlertTriangle, desc: 'Assess your risk appetite before investing.', color: 'text-orange-500' },
  { id: 'health', title: 'Health Check', icon: HeartPulse, desc: 'Financial health score calculator.', color: 'text-red-500' },
  { id: 'download', title: 'Downloads', icon: Download, desc: 'Forms, reports, and policy documents.', color: 'text-purple-600' },
  { id: 'calculator', title: 'Calculators', icon: Calculator, desc: 'Comprehensive suite of financial calculators.', color: 'text-propelBlue' },
  { id: 'pay', title: 'Pay Premium', icon: CreditCard, desc: 'Quickly pay your insurance premiums.', color: 'text-teal-600' },
];

export default function ToolsHub() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const activeTool = toolsList.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // --- DASHBOARD VIEW (No ID) ---
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
            {toolsList.map((tool) => (
              <Link 
                key={tool.id} 
                to={`/tools?id=${tool.id}`}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${tool.color}`}>
                  <tool.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // --- DETAILED VIEW ---
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

// --- SUB-COMPONENTS FOR NON-CALCULATOR TOOLS ---

function NewsTool() {
  const news = [
    { title: "Sensex hits all-time high amid global rally", time: "2 hours ago", tag: "Market" },
    { title: "RBI keeps repo rate unchanged at 6.5%", time: "4 hours ago", tag: "Policy" },
    { title: "Top 5 Mutual Funds to watch in 2024", time: "1 day ago", tag: "Investing" },
    { title: "Gold prices dip as dollar strengthens", time: "1 day ago", tag: "Commodities" }
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {news.map((n, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
              <Newspaper className="text-gray-400" />
            </div>
            <div className="flex-grow">
              <div className="text-xs font-bold text-propelBlue uppercase mb-1">{n.tag}</div>
              <h3 className="font-bold text-lg text-gray-800">{n.title}</h3>
              <div className="text-sm text-gray-500 mt-1">{n.time}</div>
            </div>
            <button className="px-4 py-2 text-sm font-semibold text-propelBlue border border-propelBlue rounded-lg hover:bg-blue-50">Read</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function FundPerformerTool() {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="p-4 font-semibold">Fund Name</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">1Y Return</th>
              <th className="p-4 font-semibold">3Y Return</th>
              <th className="p-4 font-semibold">Risk</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {[1,2,3,4,5].map((i) => (
              <tr key={i} className="border-t border-gray-100 hover:bg-blue-50/30">
                <td className="p-4 font-medium">Propel Bluechip Fund {i}</td>
                <td className="p-4 text-gray-500">Large Cap</td>
                <td className="p-4 text-green-600 font-semibold">+{12 + i}%</td>
                <td className="p-4 text-green-600 font-semibold">+{18 + i}%</td>
                <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">High</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RiskTool() {
  return (
    <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
      <AlertTriangle size={64} className="mx-auto text-orange-500 mb-6" />
      <h3 className="text-2xl font-bold mb-4">Discover Your Risk Profile</h3>
      <p className="text-gray-600 mb-8">
        Answer 5 simple questions to understand your investment style. Are you a conservative, balanced, or aggressive investor?
      </p>
      <button className="px-8 py-4 bg-propelBlue text-white text-lg font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-colors">
        Start Assessment
      </button>
    </div>
  );
}

function HealthTool() {
  return (
    <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
      <HeartPulse size={64} className="mx-auto text-red-500 mb-6" />
      <h3 className="text-2xl font-bold mb-4">Financial Health Check</h3>
      <p className="text-gray-600 mb-8">
        Is your portfolio healthy? Get a comprehensive report on your asset allocation, insurance coverage, and emergency funds.
      </p>
      <button className="px-8 py-4 bg-propelBlue text-white text-lg font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-colors">
        Check Now
      </button>
    </div>
  );
}

function DownloadsTool() {
  const docs = ["KYC Form", "Account Opening Form", "Nomination Form", "Risk Disclosure Document"];
  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      {docs.map((d, i) => (
        <div key={i} className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-propelBlue transition-colors group">
          <div className="flex items-center gap-4">
             <FileText className="text-gray-400 group-hover:text-propelBlue" />
             <span className="font-semibold text-gray-800">{d}</span>
          </div>
          <button className="text-propelBlue hover:underline text-sm font-bold">Download PDF</button>
        </div>
      ))}
    </div>
  );
}

function PayPremiumTool() {
   return (
     <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
       <h3 className="text-xl font-bold mb-6">Quick Pay</h3>
       <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">Policy Number</label>
           <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-propelBlue outline-none" placeholder="Enter Policy No." />
         </div>
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
           <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-propelBlue outline-none" />
         </div>
         <button className="w-full bg-propelBlue text-white py-3 rounded-lg font-bold hover:bg-blue-800 mt-4">Fetch Details</button>
       </form>
     </div>
   );
}


// ============================================================================
// === COMPREHENSIVE CALCULATOR SUITE ===
// ============================================================================

const calculators = [
  { id: 'sip', name: 'SIP Calculator', icon: PieChart },
  { id: 'lumpsum', name: 'Lumpsum Calculator', icon: Coins },
  { id: 'stp', name: 'STP Calculator', icon: ArrowRightLeft },
  { id: 'swp', name: 'SWP Calculator', icon: Banknote },
  { id: 'retire', name: 'Retirement Planning', icon: Armchair },
  { id: 'delay', name: 'Delay Planning', icon: Hourglass },
  { id: 'insurance', name: 'Life Insurance', icon: Shield },
  { id: 'emi', name: 'EMI Calculator', icon: CalcIcon },
  { id: 'tax', name: 'Tax Calculator', icon: Percent },
  { id: 'marriage', name: 'Marriage Planning', icon: Gem },
  { id: 'education', name: 'Education Planning', icon: GraduationCap },
  { id: 'home', name: 'Home Loan Calculator', icon: Home },
  { id: 'car', name: 'Car Planning', icon: Car },
  { id: 'vacation', name: 'Vacation Planning', icon: Plane },
];

function CalculatorSuite() {
  const [activeCalc, setActiveCalc] = useState(null);

  useEffect(() => {
    if(activeCalc) window.scrollTo(0, 0);
  }, [activeCalc]);

  // --- CALCULATOR DASHBOARD ---
  if (!activeCalc) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
           <div>
             <h2 className="text-2xl font-bold text-gray-800">Calculator Dashboard</h2>
             <p className="text-gray-500 text-sm">Select a tool to plan your finances</p>
           </div>
           <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-600">
                <User size={16} /> Profile
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-600">
                <Save size={16} /> Saved Plans
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {calculators.map((c) => (
            <button 
              key={c.id}
              onClick={() => setActiveCalc(c.id)}
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white hover:shadow-xl hover:-translate-y-1 transition-all shadow-md text-left group"
            >
              <div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                <c.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="font-bold text-sm sm:text-base leading-tight">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- ACTIVE CALCULATOR CONTAINER ---
  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => setActiveCalc(null)}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-propelBlue font-medium transition-colors"
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </button>
      
      {activeCalc === 'sip' && <SIPCalculator />}
      {activeCalc === 'lumpsum' && <LumpsumCalculator />}
      {activeCalc === 'emi' && <EMICalculator title="EMI Calculator" />}
      {activeCalc === 'home' && <EMICalculator title="Home Loan Calculator" isHomeLoan />}
      {activeCalc === 'stp' && <STPCalculator />}
      {activeCalc === 'swp' && <SWPCalculator />}
      {activeCalc === 'retire' && <RetirementCalculator />}
      {activeCalc === 'delay' && <DelayCostCalculator />}
      {activeCalc === 'insurance' && <InsuranceCalculator />}
      {activeCalc === 'tax' && <TaxCalculator />}
      
      {/* Goal Based Calculators (Reuse Logic) */}
      {activeCalc === 'marriage' && <GoalCalculator title="Marriage Planning" icon={Gem} />}
      {activeCalc === 'education' && <GoalCalculator title="Education Planning" icon={GraduationCap} />}
      {activeCalc === 'car' && <GoalCalculator title="Car Planning" icon={Car} />}
      {activeCalc === 'vacation' && <GoalCalculator title="Vacation Planning" icon={Plane} />}
    </div>
  );
}

// ============================================================================
// === INDIVIDUAL CALCULATOR LOGIC COMPONENTS ===
// ============================================================================

function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const n = years * 12;
  const r = rate / 12 / 100;
  const fv = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthly * n;
  
  return <CalculatorLayout title="SIP Calculator" invested={invested} fv={fv}>
    <InputGroup label="Monthly Investment" value={monthly} setValue={setMonthly} min={500} max={100000} step={500} suffix="₹" isCurrency />
    <InputGroup label="Time Period" value={years} setValue={setYears} min={1} max={30} step={1} suffix="Yr" />
    <InputGroup label="Expected Return (p.a)" value={rate} setValue={setRate} min={1} max={30} step={0.5} suffix="%" />
  </CalculatorLayout>;
}

function LumpsumCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(10);
  const fv = principal * Math.pow(1 + rate / 100, years);

  return <CalculatorLayout title="Lumpsum Calculator" invested={principal} fv={fv}>
    <InputGroup label="Total Investment" value={principal} setValue={setPrincipal} min={5000} max={10000000} step={1000} suffix="₹" isCurrency />
    <InputGroup label="Time Period" value={years} setValue={setYears} min={1} max={30} step={1} suffix="Yr" />
    <InputGroup label="Expected Return (p.a)" value={rate} setValue={setRate} min={1} max={30} step={0.5} suffix="%" />
  </CalculatorLayout>;
}

function STPCalculator() {
  const [amount, setAmount] = useState(500000);
  const [transfer, setTransfer] = useState(10000);
  const [years, setYears] = useState(5);
  const [sourceRate, setSourceRate] = useState(6);
  const [targetRate, setTargetRate] = useState(12);
  
  // Simplified STP Logic
  const months = years * 12;
  
  // Target fund growth (SIP of transfer amount)
  const rTarget = targetRate / 12 / 100;
  const targetValue = transfer * ((Math.pow(1 + rTarget, months) - 1) / rTarget) * (1 + rTarget);
  
  // Source fund depletion (Simplified logic for UI demo: Principal - transfers, compounding remainder)
  // Real logic requires month-by-month iteration
  let sourceBalance = amount;
  const rSource = sourceRate / 12 / 100;
  
  // Rough estimate loop
  for(let i=0; i<months; i++) {
    sourceBalance = (sourceBalance - transfer) * (1 + rSource);
  }
  const finalSourceValue = Math.max(0, sourceBalance); // Can't be negative
  const totalValue = targetValue + finalSourceValue;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-2xl mb-8 text-gray-800">STP Calculator</h3>
      <div className="space-y-6">
        <InputGroup label="Initial Lumpsum" value={amount} setValue={setAmount} min={50000} max={5000000} step={5000} suffix="₹" isCurrency />
        <InputGroup label="Monthly Transfer (STP)" value={transfer} setValue={setTransfer} min={1000} max={100000} step={500} suffix="₹" isCurrency />
        <InputGroup label="Period (Years)" value={years} setValue={setYears} min={1} max={10} step={1} suffix="Yr" />
        <div className="grid grid-cols-2 gap-4">
           <InputGroup label="Source Rate" value={sourceRate} setValue={setSourceRate} min={3} max={10} step={0.5} suffix="%" />
           <InputGroup label="Target Rate" value={targetRate} setValue={setTargetRate} min={8} max={20} step={0.5} suffix="%" />
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="grid grid-cols-2 gap-4 mb-4">
             <div className="text-center">
                <div className="text-xs text-gray-500 uppercase font-bold">Source Fund Value</div>
                <div className="text-lg font-semibold text-gray-700">₹ {formatINR(finalSourceValue)}</div>
             </div>
             <div className="text-center">
                <div className="text-xs text-gray-500 uppercase font-bold">Target Fund Value</div>
                <div className="text-lg font-semibold text-green-600">₹ {formatINR(targetValue)}</div>
             </div>
          </div>
          <div className="border-t border-gray-200 pt-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Total Portfolio Value</p>
            <div className="text-3xl font-bold text-propelBlue">₹ {formatINR(totalValue)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SWPCalculator() {
  const [investment, setInvestment] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(8000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(9);
  
  const months = years * 12;
  const totalWithdrawn = withdrawal * months;
  
  // Final Value calculation for SWP
  const r = rate / 12 / 100;
  // FV = PV * (1+r)^n - PMT * [((1+r)^n - 1)/r]
  let finalValue = investment * Math.pow(1+r, months) - (withdrawal * (Math.pow(1+r, months) - 1) / r);
  if (finalValue < 0) finalValue = 0;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-2xl mb-8 text-gray-800">SWP Calculator</h3>
      <div className="space-y-8">
        <InputGroup label="Total Investment" value={investment} setValue={setInvestment} min={100000} max={10000000} step={10000} suffix="₹" isCurrency />
        <InputGroup label="Monthly Withdrawal" value={withdrawal} setValue={setWithdrawal} min={1000} max={100000} step={500} suffix="₹" isCurrency />
        <InputGroup label="Period" value={years} setValue={setYears} min={1} max={30} step={1} suffix="Yr" />
        <InputGroup label="Exp Return (p.a)" value={rate} setValue={setRate} min={6} max={15} step={0.5} suffix="%" />

        <div className="mt-8 grid grid-cols-2 gap-4">
           <div className="p-4 bg-gray-50 rounded-xl text-center">
             <div className="text-xs text-gray-500 font-bold uppercase">Total Withdrawn</div>
             <div className="text-xl font-bold text-gray-800">₹ {formatINR(totalWithdrawn)}</div>
           </div>
           <div className="p-4 bg-blue-50 rounded-xl text-center">
             <div className="text-xs text-gray-500 font-bold uppercase">Final Value</div>
             <div className="text-xl font-bold text-propelBlue">₹ {formatINR(finalValue)}</div>
           </div>
        </div>
      </div>
    </div>
  );
}

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [expenses, setExpenses] = useState(50000);
  const [inflation, setInflation] = useState(6);
  
  const yearsToRetire = retireAge - currentAge;
  
  // Expense at retirement
  const monthlyExpenseAtRetire = expenses * Math.pow(1 + inflation/100, yearsToRetire);
  
  // Corpus Needed (Simplified rule of thumb: 20x annual expense)
  const annualExpense = monthlyExpenseAtRetire * 12;
  const corpusNeeded = annualExpense * 20; 
  
  // SIP needed to reach corpus (Assuming 12% return)
  const r = 12 / 12 / 100;
  const n = yearsToRetire * 12;
  const sipNeeded = corpusNeeded / ( ((Math.pow(1+r, n) - 1)/r) * (1+r) );

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-2xl mb-8 text-gray-800">Retirement Planning</h3>
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-6">
           <InputGroup label="Current Age" value={currentAge} setValue={setCurrentAge} min={20} max={60} step={1} suffix="" />
           <InputGroup label="Retirement Age" value={retireAge} setValue={setRetireAge} min={40} max={75} step={1} suffix="" />
        </div>
        <InputGroup label="Current Monthly Expense" value={expenses} setValue={setExpenses} min={10000} max={500000} step={5000} suffix="₹" isCurrency />
        <InputGroup label="Inflation" value={inflation} setValue={setInflation} min={4} max={10} step={0.5} suffix="%" />
        
        <div className="mt-8 p-6 bg-gray-900 text-white rounded-2xl">
           <div className="grid grid-cols-2 gap-4 mb-4">
             <div>
               <div className="text-gray-400 text-xs mb-1">Monthly Exp @ {retireAge}</div>
               <div className="text-xl font-bold">₹ {formatINR(monthlyExpenseAtRetire)}</div>
             </div>
             <div>
               <div className="text-gray-400 text-xs mb-1">SIP Required</div>
               <div className="text-xl font-bold text-green-400">₹ {formatINR(sipNeeded)}</div>
             </div>
           </div>
           <div className="border-t border-gray-700 pt-4">
             <div className="text-gray-400 text-sm mb-1">Total Corpus Required</div>
             <div className="text-3xl font-bold text-propelGold">₹ {formatINR(corpusNeeded)}</div>
           </div>
        </div>
      </div>
    </div>
  );
}

function DelayCostCalculator() {
  const [sip, setSip] = useState(10000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(12);
  const [delay, setDelay] = useState(5); // Years
  
  const n1 = years * 12;
  const r = rate / 12 / 100;
  const fvNow = sip * ((Math.pow(1 + r, n1) - 1) / r) * (1 + r);
  
  const n2 = (years - delay) * 12;
  const fvLater = sip * ((Math.pow(1 + r, n2) - 1) / r) * (1 + r);
  
  const costOfDelay = fvNow - fvLater;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-2xl mb-8 text-gray-800">Delay Cost Calculator</h3>
      <div className="space-y-8">
        <InputGroup label="Monthly SIP" value={sip} setValue={setSip} min={1000} max={100000} step={1000} suffix="₹" isCurrency />
        <InputGroup label="Investment Tenure" value={years} setValue={setYears} min={10} max={40} step={1} suffix="Yr" />
        <InputGroup label="Delay in Starting" value={delay} setValue={setDelay} min={1} max={10} step={1} suffix="Yr" />
        
        <div className="mt-8 p-6 bg-red-50 border border-red-100 rounded-2xl text-center">
          <div className="text-sm text-red-600 font-bold uppercase mb-2">Cost of Delaying by {delay} Years</div>
          <div className="text-3xl font-extrabold text-red-600">₹ {formatINR(costOfDelay)}</div>
          <p className="text-xs text-gray-500 mt-2">You lose this much wealth by waiting!</p>
        </div>
      </div>
    </div>
  );
}

function InsuranceCalculator() {
  const [expenses, setExpenses] = useState(50000);
  const [years, setYears] = useState(20);
  const [loans, setLoans] = useState(2000000);
  const [savings, setSavings] = useState(1000000);
  
  const coverNeeded = (expenses * 12 * years) + loans - savings;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-2xl mb-8 text-gray-800">Life Insurance Calculator</h3>
      <div className="space-y-8">
        <InputGroup label="Monthly Family Expense" value={expenses} setValue={setExpenses} min={20000} max={200000} step={5000} suffix="₹" isCurrency />
        <InputGroup label="Years to Support" value={years} setValue={setYears} min={5} max={40} step={1} suffix="Yr" />
        <InputGroup label="Outstanding Loans" value={loans} setValue={setLoans} min={0} max={10000000} step={100000} suffix="₹" isCurrency />
        <InputGroup label="Existing Savings" value={savings} setValue={setSavings} min={0} max={10000000} step={100000} suffix="₹" isCurrency />
        
        <div className="mt-8 p-6 bg-blue-600 text-white rounded-2xl text-center shadow-lg">
           <div className="text-blue-100 text-sm font-bold uppercase mb-1">Recommended Insurance Cover</div>
           <div className="text-3xl font-bold">₹ {formatINR(coverNeeded > 0 ? coverNeeded : 0)}</div>
        </div>
      </div>
    </div>
  );
}

function EMICalculator({ title, isHomeLoan }) {
  const [amount, setAmount] = useState(isHomeLoan ? 5000000 : 1000000);
  const [rate, setRate] = useState(isHomeLoan ? 8.5 : 9);
  const [years, setYears] = useState(isHomeLoan ? 20 : 5);
  
  const r = rate / 12 / 100;
  const n = years * 12;
  const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalInterest = (emi * n) - amount;
  const totalAmt = emi * n;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-2xl mb-8 text-gray-800">{title}</h3>
      <div className="space-y-8">
        <InputGroup label="Loan Amount" value={amount} setValue={setAmount} min={100000} max={isHomeLoan ? 50000000 : 10000000} step={50000} suffix="₹" isCurrency />
        <InputGroup label="Interest Rate (p.a)" value={rate} setValue={setRate} min={5} max={20} step={0.1} suffix="%" />
        <InputGroup label="Loan Tenure" value={years} setValue={setYears} min={1} max={30} step={1} suffix="Yr" />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
           <div className="p-4 bg-blue-50 rounded-xl">
             <div className="text-xs text-gray-500 uppercase font-bold">Monthly EMI</div>
             <div className="text-xl font-bold text-propelBlue">₹ {formatINR(emi)}</div>
           </div>
           <div className="p-4 bg-gray-50 rounded-xl">
             <div className="text-xs text-gray-500 uppercase font-bold">Total Interest</div>
             <div className="text-xl font-bold text-gray-700">₹ {formatINR(totalInterest)}</div>
           </div>
           <div className="p-4 bg-gray-50 rounded-xl">
             <div className="text-xs text-gray-500 uppercase font-bold">Total Amount</div>
             <div className="text-xl font-bold text-gray-700">₹ {formatINR(totalAmt)}</div>
           </div>
        </div>
      </div>
    </div>
  );
}

function TaxCalculator() {
  const [income, setIncome] = useState(1200000);
  const [deduction80C, setDeduction80C] = useState(150000);
  const [deduction80D, setDeduction80D] = useState(25000);
  
  // Old Regime Calc
  const oldRegimeTax = () => {
    const taxable = Math.max(0, income - 50000 - deduction80C - deduction80D);
    let tax = 0;
    if(taxable > 1000000) { tax += (taxable-1000000)*0.3; tax += 112500; }
    else if(taxable > 500000) { tax += (taxable-500000)*0.2; tax += 12500; }
    else if(taxable > 250000) { tax += (taxable-250000)*0.05; }
    return taxable <= 500000 ? 0 : tax * 1.04;
  };

  // New Regime Calc (FY23-24 Slabs)
  const newRegimeTax = () => {
    const taxable = Math.max(0, income - 50000);
    let tax = 0;
    if (taxable > 1500000) tax += (taxable - 1500000) * 0.30 + 150000;
    else if (taxable > 1200000) tax += (taxable - 1200000) * 0.20 + 90000;
    else if (taxable > 900000) tax += (taxable - 900000) * 0.15 + 45000;
    else if (taxable > 600000) tax += (taxable - 600000) * 0.10 + 15000;
    else if (taxable > 300000) tax += (taxable - 300000) * 0.05;
    return taxable <= 700000 ? 0 : tax * 1.04;
  };

  const oldTax = Math.round(oldRegimeTax());
  const newTax = Math.round(newRegimeTax());

  return (
     <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-2xl mb-8 text-gray-800">Tax Calculator</h3>
      <div className="space-y-6">
        <InputGroup label="Annual Income" value={income} setValue={setIncome} min={300000} max={5000000} step={50000} suffix="₹" isCurrency />
        <InputGroup label="80C Deductions" value={deduction80C} setValue={setDeduction80C} min={0} max={150000} step={5000} suffix="₹" isCurrency />
        <InputGroup label="80D Deductions" value={deduction80D} setValue={setDeduction80D} min={0} max={100000} step={5000} suffix="₹" isCurrency />

        <div className="mt-8 grid grid-cols-2 gap-6">
           <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
             <div className="text-gray-600 font-bold mb-1">Old Regime</div>
             <div className="text-2xl font-bold text-propelBlue">₹ {formatINR(oldTax)}</div>
           </div>
           <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
             <div className="text-gray-600 font-bold mb-1">New Regime</div>
             <div className="text-2xl font-bold text-green-700">₹ {formatINR(newTax)}</div>
           </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-2">
          Recommendation: <span className="font-bold text-gray-800">{oldTax < newTax ? "Old Regime" : "New Regime"}</span> saves you ₹ {formatINR(Math.abs(oldTax - newTax))}
        </div>
      </div>
    </div>
  );
}

function GoalCalculator({ title, icon: Icon }) {
  const [currentCost, setCurrentCost] = useState(1000000);
  const [years, setYears] = useState(10);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(12);

  // Future Value of Goal
  const fv = currentCost * Math.pow(1 + inflation / 100, years);
  
  // Monthly SIP needed
  const r = returnRate / 12 / 100;
  const n = years * 12;
  const sipNeeded = fv / ( ((Math.pow(1+r, n) - 1)/r) * (1+r) );

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
      <Icon className="absolute top-6 right-6 text-gray-100" size={120} />
      <h3 className="font-bold text-2xl mb-8 text-gray-800 relative z-10">{title}</h3>
      <div className="space-y-8 relative z-10">
        <InputGroup label="Current Cost" value={currentCost} setValue={setCurrentCost} min={100000} max={10000000} step={50000} suffix="₹" isCurrency />
        <InputGroup label="Years to Goal" value={years} setValue={setYears} min={1} max={30} step={1} suffix="Yr" />
        <InputGroup label="Inflation Rate" value={inflation} setValue={setInflation} min={4} max={12} step={0.5} suffix="%" />
        <InputGroup label="Exp Return" value={returnRate} setValue={setReturnRate} min={8} max={15} step={0.5} suffix="%" />
        
        <div className="mt-8 p-6 bg-propelBlue text-white rounded-2xl shadow-lg">
          <div className="flex justify-between items-end mb-4 border-b border-blue-400 pb-4">
            <span className="text-blue-100 text-sm">Future Cost of Goal</span>
            <span className="text-2xl font-bold">₹ {formatINR(fv)}</span>
          </div>
          <div className="flex justify-between items-end">
             <span className="text-blue-100 text-sm">Monthly SIP Needed</span>
             <span className="text-3xl font-bold text-propelGold">₹ {formatINR(sipNeeded)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function CalculatorLayout({ title, invested, fv, children }) {
  const gains = fv - invested;
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
      <h3 className="font-bold text-2xl mb-8 relative z-10 text-gray-800">{title}</h3>
      <div className="space-y-8 relative z-10">
        {children}
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><div className="text-xs text-gray-500 uppercase font-semibold">Invested</div><div className="text-lg font-semibold text-gray-800">₹ {formatINR(invested)}</div></div>
            <div><div className="text-xs text-gray-500 uppercase font-semibold">Est. Returns</div><div className="text-lg font-semibold text-green-600">+ ₹ {formatINR(gains)}</div></div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="text-sm text-gray-500 mb-1">Total Value</div>
            <div className="text-3xl font-bold text-propelBlue">₹ {formatINR(fv)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, value, setValue, min, max, step, suffix, isCurrency }) {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="bg-blue-50 text-propelBlue px-3 py-1 rounded-md text-sm font-bold min-w-[80px] text-center">
          {isCurrency ? `₹ ${formatINR(value)}` : `${value} ${suffix}`}
        </div>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value} 
        onChange={(e) => setValue(+e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-propelBlue focus:outline-none focus:ring-2 focus:ring-propelBlue/30"
      />
    </div>
  );
}