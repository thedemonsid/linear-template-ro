import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-500 text-sm font-semibold mb-2">PRICING</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your team's needs. All plans include unlimited tasks and projects.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className="text-gray-400">Monthly</span>
          <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-purple-500 transition-colors duration-200 ease-in-out">
            <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
          </button>
          <span className="text-white font-medium">Yearly</span>
          <span className="text-sm text-purple-500">(Save 20%)</span>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-8 hover:border-purple-500/50 transition-colors">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Free</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="mt-4 text-gray-400">Perfect for individuals and small teams getting started</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Up to 5 team members
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Basic issue tracking
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                1GB storage
              </li>
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-xl bg-white/5 border border-purple-500 p-8 relative transform hover:scale-105 transition-transform">
            <div className="absolute -top-4 right-8 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Pro</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$12</span>
                <span className="text-gray-400 ml-2">/user/month</span>
              </div>
              <p className="mt-4 text-gray-400">For growing teams that need more features</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Unlimited team members
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Advanced issue tracking
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                10GB storage
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Priority support
              </li>
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-8 hover:border-purple-500/50 transition-colors">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <p className="mt-4 text-gray-400">For large organizations with specific needs</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom deployment
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Advanced security
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Unlimited storage
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 dedicated support
              </li>
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;