import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";

import {
  BiCheckShield,
  BiLineChart,
  BiLock,
  BiGroup,
  BiTransfer,
  BiCreditCard,
  BiBook,
  BiBuildings,
  BiCalendarCheck,
  BiQuestionMark,
} from "react-icons/bi";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page bg-dark text-white overflow-hidden">
      {/* Replace the old navigation section with the Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <header
        className="hero-section mt-10 py-5 mb-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container py-5 text-center">
          <h1
            className="display-4 fw-bold mb-3"
            style={{ color: "#FFD700", fontFamily: "Sora" }}
          >
            Empowering You with Reliable Savings & Loans
          </h1>
          <p className="lead mb-4">
            Secure, Convenient, and Affordable Financial Services for Everyone
          </p>
          <div className="col-lg-8 mx-auto">
            <p className="mb-5">
              Shamurr Cooperative Savings and Loans is dedicated to helping you
              achieve your financial goals through accessible loan options,
              secure savings, and community-driven support.
            </p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <Link to="/apply" className="btn btn-warning btn-lg px-4 me-sm-3">
                Apply for a Loan
              </Link>
              <a href="#services" className="btn btn-outline-light btn-lg px-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Key Benefits Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2 font-sora">Why Choose Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm">
              Experience banking that puts your financial well-being first with
              our industry-leading benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center">
                <BiCheckShield className="text-yellow-400" size={60} />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2 font-sora">
                Bank-Grade Security
              </h3>
              <p className="text-gray-300 text-sm">
                Your assets are protected with military-grade encryption and
                multi-factor authentication.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center">
                <BiLineChart className="text-yellow-400" size={60} />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2 font-sora">
                Market-Leading Rates
              </h3>
              <p className="text-gray-300 text-sm">
                Maximize your earnings with our consistently competitive
                interest rates and minimal fees.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center">
                <BiLock className="text-yellow-400" size={60} />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2 font-sora">
                Total Transparency
              </h3>
              <p className="text-gray-300 text-sm">
                Crystal clear terms with no surprises—we believe in complete
                financial honesty.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center">
                <BiGroup className="text-yellow-400" size={60} />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2 font-sora">
                Community Impact
              </h3>
              <p className="text-gray-300 text-sm">
                We invest in local initiatives and sustainable projects that
                strengthen our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with Tailwind CSS */}
      <section id="services" className="py-12 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold text-yellow-400">
              Our Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Comprehensive financial solutions tailored to your personal and
              business needs with expert support at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Loan Services Card */}
            <div className="group">
              <div className="h-full bg-gray-800 border-2 border-yellow-400 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20">
                <div className="p-6 text-center h-full flex flex-col">
                  <div className="mb-6 mx-auto">
                    <div className="w-20 h-20 mx-auto bg-yellow-400/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400/20 group-hover:scale-110">
                      <BiCreditCard className="text-yellow-400" size={40} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">
                    Loan Services
                  </h3>
                  <ul className="text-left mb-6 flex-grow">
                    {[
                      "Personal Loans",
                      "Business Loans",
                      "Quick Approval Process",
                      "Flexible Repayment Options",
                      "Competitive Interest Rates",
                      "No Early Repayment Penalties",
                    ].map((item, index) => (
                      <li key={index} className="mb-2 flex items-center">
                        <span className="text-yellow-400 mr-2">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/loans"
                    className="w-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    View Loan Options
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Savings Options Card */}
            <div className="group">
              <div className="h-full bg-gray-800 border-2 border-yellow-400 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20">
                <div className="p-6 text-center h-full flex flex-col">
                  <div className="mb-6 mx-auto">
                    <div className="w-20 h-20 mx-auto bg-yellow-400/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400/20 group-hover:scale-110">
                      <BiTransfer className="text-yellow-400" size={40} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">
                    Savings Options
                  </h3>
                  <ul className="text-left mb-6 flex-grow">
                    {[
                      "Regular Savings Plans",
                      "Fixed Deposits",
                      "Goal-Based Savings",
                      "Competitive Interest Rates",
                      "Easy Access to Funds",
                      "Automated Savings Options",
                    ].map((item, index) => (
                      <li key={index} className="mb-2 flex items-center">
                        <span className="text-yellow-400 mr-2">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/savings"
                    className="w-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Explore Savings Plans
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Services Card */}
            <div className="group">
              <div className="h-full bg-gray-800 border-2 border-yellow-400 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20">
                <div className="p-6 text-center h-full flex flex-col">
                  <div className="mb-6 mx-auto">
                    <div className="w-20 h-20 mx-auto bg-yellow-400/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400/20 group-hover:scale-110">
                      <BiBook className="text-yellow-400" size={40} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">
                    Additional Services
                  </h3>
                  <ul className="text-left mb-6 flex-grow">
                    {[
                      "Financial Education & Counseling",
                      "Community Development Programs",
                      "Business Advisory Services",
                      "Financial Planning Assistance",
                      "Investment Guidance",
                      "Youth Savings Programs",
                    ].map((item, index) => (
                      <li key={index} className="mb-2 flex items-center">
                        <span className="text-yellow-400 mr-2">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/services"
                    className="w-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Added Call to Action Section */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-4">
              Ready to get started with our financial services?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md transition-colors duration-300"
            >
              Schedule a Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our simple process makes it easy to get started with Shamurr
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-black">1</span>
                    </div>
                    {/* Line connector */}
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-yellow-500 transform -translate-y-1/2 z-0"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Apply
                  </h3>
                  <p className="text-gray-400 text-center">
                    Complete our simple online application or visit our office
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                      <span className="text-2xl font-bold text-black">2</span>
                    </div>
                    {/* Line connectors */}
                    <div className="hidden md:block absolute top-1/2 right-full w-full h-0.5 bg-yellow-500 transform -translate-y-1/2 z-0"></div>
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-yellow-500 transform -translate-y-1/2 z-0"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Review
                  </h3>
                  <p className="text-gray-400 text-center">
                    Our team will review your application within 24 hours
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                      <span className="text-2xl font-bold text-black">3</span>
                    </div>
                    {/* Line connectors */}
                    <div className="hidden md:block absolute top-1/2 right-full w-full h-0.5 bg-yellow-500 transform -translate-y-1/2 z-0"></div>
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-yellow-500 transform -translate-y-1/2 z-0"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Approval
                  </h3>
                  <p className="text-gray-400 text-center">
                    Receive your approval notification and loan terms
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-black">4</span>
                    </div>
                    {/* Line connector */}
                    <div className="hidden md:block absolute top-1/2 right-full w-full h-0.5 bg-yellow-500 transform -translate-y-1/2 z-0"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Funding
                  </h3>
                  <p className="text-gray-400 text-center">
                    Receive funds directly to your account within 48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#apply"
              className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Application Now
            </a>
          </div>
        </div>
      </section>

      {/* About Shamurr Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Image Column */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img
                  src="/images/hero-bg.jpg"
                  alt="About Shamurr"
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                />
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400 rounded-lg -z-10 hidden md:block animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full -z-10 hidden md:block animate-bounce opacity-75"></div>
                <div className="absolute top-1/2 -right-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg -z-10 hidden md:block transform rotate-45 animate-float"></div>
                <style jsx>{`
                  @keyframes float {
                    0%,
                    100% {
                      transform: translateY(0) rotate(45deg);
                    }
                    50% {
                      transform: translateY(-10px) rotate(45deg);
                    }
                  }
                  .animate-float {
                    animation: float 3s ease-in-out infinite;
                  }
                `}</style>
              </div>
            </div>

            {/* Content Column - Text left-aligned on desktop, center on mobile */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">
                About Shamurr
              </h2>

              <div className="space-y-8">
                {/* Mission */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">
                    Our Mission
                  </h4>
                  <p className="text-gray-600">
                    Aim to provide accessible, affordable and innovative
                    financial solutions to members and the community through
                    cultivating a culture of savings, cooperation and
                    sustainable financial inclusion.
                  </p>
                </div>

                {/* Vision */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">
                    Our Vision
                  </h4>
                  <p className="text-gray-600">
                    To become a leading cooperative savings and loans concern
                    committed to customer-centric services, financial
                    sustainability and community development aimed at enhancing
                    livelihood and well-being of members and society
                  </p>
                </div>

                {/* Values */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">
                    Our Values
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 justify-center lg:justify-start">
                      <span className="text-yellow-500 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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
                      </span>
                      <span className="font-medium text-gray-700">
                        Integrity
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 justify-center lg:justify-start">
                      <span className="text-yellow-500 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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
                      </span>
                      <span className="font-medium text-gray-700">
                        Transparency
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 justify-center lg:justify-start">
                      <span className="text-yellow-500 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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
                      </span>
                      <span className="font-medium text-gray-700">
                        Accountability
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 justify-center lg:justify-start">
                      <span className="text-yellow-500 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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
                      </span>
                      <span className="font-medium text-gray-700">
                        Community Focus
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-px"
                >
                  Learn More About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 text-yellow-400">
              Our Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              How Shamurr is making a difference in our communities
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h2 className="text-5xl font-extrabold text-yellow-400">
                5,000+
              </h2>
              <p className="mt-2 text-gray-300">Members Served</p>
            </div>
            <div className="p-6">
              <h2 className="text-5xl font-extrabold text-yellow-400">$2M+</h2>
              <p className="mt-2 text-gray-300">Loans Disbursed</p>
            </div>
            <div className="p-6">
              <h2 className="text-5xl font-extrabold text-yellow-400">200+</h2>
              <p className="mt-2 text-gray-300">Businesses Supported</p>
            </div>
            <div className="p-6">
              <h2 className="text-5xl font-extrabold text-yellow-400">15+</h2>
              <p className="mt-2 text-gray-300">Community Projects</p>
            </div>
          </div>

          {/* Featured Community Project */}
          <div className="mt-16">
            <div className="max-w-3xl mx-auto bg-gray-800 border border-yellow-500/20 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">
                Featured Community Project
              </h4>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <img
                    src="/path-to-community-project.jpg"
                    alt="Community Project"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-6">
                  <h5 className="text-xl font-semibold text-white mb-2">
                    Youth Financial Literacy Program
                  </h5>
                  <p className="text-gray-300 mb-4">
                    Our flagship program that has reached over 1,000 young
                    people, teaching them essential skills in savings,
                    budgeting, and financial planning.
                  </p>
                  <a
                    href="/community-projects"
                    className="inline-block px-5 py-2 border border-yellow-400 text-yellow-400 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                  >
                    View All Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hear from people who have experienced our services
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 mb-3">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <p className="text-gray-300 mb-4">
                  "Shamurr helped me secure a business loan with flexible terms
                  that allowed my small business to grow. Their guidance
                  throughout the process was invaluable. I particularly
                  appreciated how they took the time to understand my business
                  model."
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Jane Doe"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-yellow-400 font-semibold">Jane Doe</p>
                  <small className="text-gray-400">Small Business Owner</small>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 mb-3">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <p className="text-gray-300 mb-4">
                  "The savings options at Shamurr have helped me prepare for my
                  children's education. The interest rates are competitive and
                  the staff is always helpful. Their goal-based savings program
                  made it easy to stay on track with my financial objectives."
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/path-to-testimonial-2.jpg"
                  alt="John Smith"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-yellow-400 font-semibold">John Smith</p>
                  <small className="text-gray-400">Parent & Educator</small>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 mb-3">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <p className="text-gray-300 mb-4">
                  "I appreciate how Shamurr is involved in our community.
                  They're not just a financial institution, but a partner in
                  local development. Their financial literacy workshops have
                  empowered many in our neighborhood to take control of their
                  finances."
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/path-to-testimonial-3.jpg"
                  alt="Mary Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-yellow-400 font-semibold">Mary Johnson</p>
                  <small className="text-gray-400">Community Leader</small>
                </div>
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <div className="text-center mt-12">
            <a
              href="/testimonials"
              className="inline-block px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition-colors duration-300"
            >
              Read More Success Stories
            </a>
          </div>
        </div>
      </section>

      <FAQ />

      <ContactSection />

      {/* CTA Section */}
      <section className="py-5 bg-warning text-dark">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">
            Join Shamurr today and take control of your financial future
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#apply" className="btn btn-dark btn-lg">
              Apply Now
            </a>
            <a href="#contact" className="btn btn-outline-dark btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Replace the old footer with the Footer component */}
      <Footer />
    </div>
  );
};

export default HomePage;
