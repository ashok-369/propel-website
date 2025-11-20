import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Signup() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 w-full max-w-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-propelBlue">Create Account</h2>
          <p className="text-gray-500 mt-2">Start your investment journey in minutes</p>
        </div>

        <div className="flex gap-4 mb-8 text-sm text-gray-600 justify-center">
          <div className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> Free Account</div>
          <div className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> Paperless</div>
          <div className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> Secure</div>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-propelBlue focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-propelBlue focus:border-transparent outline-none transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-propelBlue focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
            <div className="relative">
              <div className="absolute left-4 top-3 text-gray-500 font-medium">+91</div>
              <input type="tel" className="w-full pl-14 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-propelBlue focus:border-transparent outline-none transition-all" placeholder="98765 43210" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Create Password</label>
            <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-propelBlue focus:border-transparent outline-none transition-all" placeholder="••••••••" />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" id="terms" className="w-4 h-4 text-propelBlue rounded border-gray-300 focus:ring-propelBlue" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <button type="button" className="text-propelBlue hover:underline">Terms</button> & <button type="button" className="text-propelBlue hover:underline">Privacy Policy</button>
            </label>
          </div>

          <button type="submit" className="w-full bg-propelBlue text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 mt-2">
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-propelBlue font-bold hover:underline">Log In</Link>
        </div>
      </div>
    </div>
  );
}