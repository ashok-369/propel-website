import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-propelBlue">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Log in to manage your portfolio</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email / User ID</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-propelBlue focus:border-transparent outline-none transition-all" placeholder="Enter your email" />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <button type="button" className="text-sm text-propelBlue font-medium hover:underline focus:outline-none">Forgot?</button>
            </div>
            <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-propelBlue focus:border-transparent outline-none transition-all" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-propelBlue text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
            Log In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-propelBlue font-bold hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}