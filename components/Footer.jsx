import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-propelBlue text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-extrabold tracking-tight mb-4">PROPEL</div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Empowering individuals to achieve financial freedom through smart, simple, and secure investment solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-200 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-200 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-200 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-200 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-propelGold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link to="/" className="hover:text-white hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white hover:underline">Services</Link></li>
              <li><Link to="/tools" className="hover:text-white hover:underline">Financial Tools</Link></li>
              <li><Link to="#" className="hover:text-white hover:underline">Market Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-propelGold">Services</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link to="/services" className="hover:text-white hover:underline">Mutual Funds</Link></li>
              <li><Link to="/services" className="hover:text-white hover:underline">Stock Trading</Link></li>
              <li><Link to="#" className="hover:text-white hover:underline">Retirement Planning</Link></li>
              <li><Link to="#" className="hover:text-white hover:underline">Tax Saving</Link></li>
              <li><Link to="/services" className="hover:text-white hover:underline">Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-propelGold">Contact</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0" />
                <span>support@propel.com<br/>help@propel.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0" />
                <span>+91 98765 43210<br/>Mon-Fri, 9am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <div>
            &copy; {currentYear} Propel Financial Services. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
            <Link to="#" className="hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}