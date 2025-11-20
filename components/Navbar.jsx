import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const serviceItems = [
  { name: "Mutual Funds", path: "/services?id=mf" },
  { name: "Equity Trading", path: "/services?id=trading" },
  { name: "Life Insurance", path: "/services?id=life-ins" },
  { name: "Health Insurance", path: "/services?id=health-ins" },
  { name: "General Insurance", path: "/services?id=gen-ins" },
  { name: "NRI Services", path: "/services?id=nri" },
  { name: "PMS", path: "/services?id=pms" },
  { name: "AIF", path: "/services?id=aif" },
  { name: "Retirement Planning", path: "/services?id=retire" },
  { name: "Synk 360", path: "/services?id=synk" }
];

const toolItems = [
  { name: "News", path: "/tools?id=news" },
  { name: "Fund Performer", path: "/tools?id=performer" },
  { name: "Risk Analyzer", path: "/tools?id=risk" },
  { name: "Health Check", path: "/tools?id=health" },
  { name: "Downloads", path: "/tools?id=download" },
  { name: "Calculators", path: "/tools?id=calculator" },
  { name: "Pay Premium", path: "/tools?id=pay" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const isActive = (path) => {
    return location.pathname === path.split('?')[0];
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/95 backdrop-blur-sm py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            onClick={closeMenu}
            className="text-2xl font-extrabold tracking-tight text-propelBlue"
          >
            PROPEL
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-600">
            <Link to="/" className={`hover:text-propelBlue transition-colors ${isActive('/') ? 'text-propelBlue font-bold' : ''}`}>Home</Link>
            <Link to="/about" className={`hover:text-propelBlue transition-colors ${isActive('/about') ? 'text-propelBlue font-bold' : ''}`}>About</Link>
            
            {/* Services Dropdown */}
            <div className="group relative py-4">
              <Link to="/services" className={`flex items-center gap-1 hover:text-propelBlue transition-colors ${isActive('/services') ? 'text-propelBlue font-bold' : ''}`}>
                Services <ChevronDown size={14} />
              </Link>
              <div className="absolute left-0 top-full pt-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 w-64">
                <div className="bg-[#2a2a2a] rounded-lg shadow-xl py-2 overflow-hidden border border-gray-800">
                  {serviceItems.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className="block px-5 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors border-b border-gray-800/50 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Dropdown */}
            <div className="group relative py-4">
              <Link to="/tools" className={`flex items-center gap-1 hover:text-propelBlue transition-colors ${isActive('/tools') ? 'text-propelBlue font-bold' : ''}`}>
                Tools <ChevronDown size={14} />
              </Link>
              <div className="absolute left-0 top-full pt-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 w-56">
                <div className="bg-[#2a2a2a] rounded-lg shadow-xl py-2 overflow-hidden border border-gray-800">
                  {toolItems.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className="block px-5 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors border-b border-gray-800/50 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="#" className="hover:text-propelBlue transition-colors">Blogs</Link>
            <Link to="/contact" className={`hover:text-propelBlue transition-colors ${isActive('/contact') ? 'text-propelBlue font-bold' : ''}`}>Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            onClick={closeMenu}
            className="hidden md:inline-block text-sm font-medium text-propelBlue hover:underline"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            onClick={closeMenu}
            className="bg-propelBlue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
          <button 
            className="md:hidden p-2 text-gray-600" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-lg font-medium text-gray-700">
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/about" onClick={closeMenu}>About</Link>
              <div className="font-bold text-propelBlue mt-2">Services</div>
              <div className="pl-4 flex flex-col gap-3 text-base text-gray-600 border-l-2 border-gray-100 ml-1">
                {serviceItems.slice(0, 5).map(s => <Link key={s.name} to={s.path} onClick={closeMenu}>{s.name}</Link>)}
                <Link to="/services" onClick={closeMenu} className="text-propelBlue text-sm font-semibold">View All Services</Link>
              </div>
              <div className="font-bold text-propelBlue mt-2">Tools</div>
              <div className="pl-4 flex flex-col gap-3 text-base text-gray-600 border-l-2 border-gray-100 ml-1">
                {toolItems.slice(0, 4).map(t => <Link key={t.name} to={t.path} onClick={closeMenu}>{t.name}</Link>)}
                <Link to="/tools" onClick={closeMenu} className="text-propelBlue text-sm font-semibold">View All Tools</Link>
              </div>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
              <div className="h-px bg-gray-100 my-2"></div>
              <Link to="/login" onClick={closeMenu} className="text-propelBlue">Login</Link>
              <Link to="/signup" onClick={closeMenu} className="text-propelBlue">Sign Up</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}