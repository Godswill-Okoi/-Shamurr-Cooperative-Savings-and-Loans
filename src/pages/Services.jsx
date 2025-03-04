import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Services = () => {
  const [activeTab, setActiveTab] = useState("loans");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-20 font-poppins">
        {/* Hero Banner */}
        <div className="relative h-[90vh] bg-gradient-to-r from-yellow-900/70 to-black overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/services-hero.jpg"
              alt="Shamurr Cooperative Services"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 rounded-full bg-yellow-600/30 text-yellow-300 border border-yellow-500/50 text-sm font-medium mb-4"
              >
                Trusted Financial Partner Since 2010
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive financial solutions designed to empower
                individuals, businesses, and communities to achieve sustainable
                prosperity.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/20">
                  Explore Services
                </button>
                <button className="px-8 py-3 bg-transparent text-yellow-300 border border-yellow-500/50 hover:bg-yellow-500/10 font-semibold rounded-lg transition-all duration-300">
                  Book a Consultation
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-0 right-0 flex justify-center"
              >

              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Service Category Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <button
                onClick={() => setActiveTab("loans")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "loans"
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Loan Services
              </button>
              <button
                onClick={() => setActiveTab("savings")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "savings"
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Savings & Investments
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "business"
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Business Support
              </button>
              <button
                onClick={() => setActiveTab("community")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "community"
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Community Programs
              </button>
              <button
                onClick={() => setActiveTab("digital")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "digital"
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Digital Services
              </button>
            </div>
          </div>

          {/* Service Category Content */}
          <div className="mb-16">
            {/* Loan Services */}
            {activeTab === "loans" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Personal Loans
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Flexible financing solutions for personal needs with
                    competitive rates and customized repayment plans.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Loan amounts from $500 to $25,000
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Terms from 6 to 60 months
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      No prepayment penalties
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Same-day approval available
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Business Loans
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Fuel your business growth with our tailored financing
                    options designed for entrepreneurs and SMEs.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Loans up to $100,000 for qualified businesses
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Working capital and equipment financing
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Simplified application process
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Business mentoring included
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Mortgage Solutions
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Make your homeownership dreams a reality with our affordable
                    and accessible mortgage options.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      First-time homebuyer programs
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Flexible down payment options
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Competitive fixed and variable rates
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Personalized mortgage counseling
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Microfinance
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Empowering small-scale entrepreneurs with accessible
                    financing to start or expand micro-businesses.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Loans from $100 to $5,000
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Group lending options
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Business skills training
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Weekly, bi-weekly or monthly repayments
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Emergency Loans
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Quick access to funds when you need them most, with
                    simplified application and fast approvals.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Same-day funding available
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Minimal documentation required
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Transparent fee structure
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Flexible repayment options
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Debt Consolidation
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Simplify your finances by combining multiple debts into one
                    manageable monthly payment.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Lower your overall interest rate
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Reduce monthly payments
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Personalized debt management plan
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Financial counseling included
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Savings & Investments */}
            {activeTab === "savings" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Flexible Savings Account
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Build your savings with our easy-access account offering
                    competitive interest rates and no minimum balance.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      No monthly fees
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Competitive interest rates
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Unlimited withdrawals
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Mobile and online access
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Term Deposits
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Lock in higher interest rates with our fixed-term deposit
                    options for guaranteed returns on your investment.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Terms from 3 months to 5 years
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Higher rates for longer terms
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Minimum deposit of $500
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Interest paid at maturity or periodically
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Business Support */}
            {activeTab === "business" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Business Mentoring
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Expert guidance and support to help your business thrive in
                    today's competitive market.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      One-on-one consulting sessions
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Business plan development
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Market analysis support
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Growth strategy planning
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Community Programs */}
            {activeTab === "community" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Financial Education
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Free workshops and resources to help community members build
                    financial literacy and confidence.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Monthly workshops
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Online learning resources
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Youth financial programs
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Personal finance coaching
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Digital Services */}
            {activeTab === "digital" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Mobile Banking
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Secure and convenient banking services available 24/7
                    through our mobile app.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Account management
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Mobile check deposit
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Bill pay services
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full mr-2"></span>
                      Secure messaging
                    </li>
                  </ul>
                  <button className="text-yellow-400 font-medium flex items-center hover:text-yellow-300 transition-colors">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
