import React from 'react';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          Member Testimonials
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            <p className="text-gray-300 mb-4">
              "Joining Shamurr Cooperative was one of the best financial decisions I've made. Their personal loan helped me start my small business, and their support has been invaluable."
            </p>
            <div className="text-yellow-400 font-semibold">- Sarah Johnson</div>
            <div className="text-sm text-gray-400">Small Business Owner</div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            <p className="text-gray-300 mb-4">
              "The savings programs at Shamurr have helped me secure my financial future. The competitive rates and friendly service make banking here a pleasure."
            </p>
            <div className="text-yellow-400 font-semibold">- Michael Chen</div>
            <div className="text-sm text-gray-400">Long-term Member</div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            <p className="text-gray-300 mb-4">
              "I appreciate how Shamurr Cooperative truly cares about the community. Their financial education programs have helped many young people learn about money management."
            </p>
            <div className="text-yellow-400 font-semibold">- Emily Rodriguez</div>
            <div className="text-sm text-gray-400">Community Leader</div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            <p className="text-gray-300 mb-4">
              "The business advisory services have been crucial for my company's growth. Shamurr doesn't just provide loans; they provide partnership and guidance."
            </p>
            <div className="text-yellow-400 font-semibold">- David Thompson</div>
            <div className="text-sm text-gray-400">Business Owner</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/apply"
            className="inline-block px-8 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
