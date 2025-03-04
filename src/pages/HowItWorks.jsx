import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          How It Works
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Step 1: Join</h3>
            <p className="text-gray-300">
              Apply to become a member of our cooperative. Fill out a simple application and we'll review it promptly.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Step 2: Participate</h3>
            <p className="text-gray-300">
              Start saving, apply for loans, or participate in our community development programs.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Step 3: Grow</h3>
            <p className="text-gray-300">
              Watch your investments grow while helping build a stronger community.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/apply"
            className="inline-block px-8 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
