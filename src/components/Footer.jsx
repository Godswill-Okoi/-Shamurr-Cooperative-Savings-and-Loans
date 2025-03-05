import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const footerLinks = {
  quickLinks: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" }
  ],
  services: [
    { name: "Personal Loans", href: "/loans" },
    { name: "Business Loans", href: "/loans" },
    { name: "Savings Plans", href: "/savings" },
    { name: "Financial Advisory", href: "/services" },
    { name: "Community Programs", href: "/services" }
  ],
  socialMedia: [
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/shamurr" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/shamurr" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/shamurr" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/shamurr" }
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12" aria-labelledby="footer-heading">
      <style jsx>{`
        a {
          text-decoration: none !important;
        }
      `}</style>
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-yellow-400">
              About Shamurr
            </h5>
            <p className="text-gray-300 mb-4">
              Shamurr Cooperative Savings and Loans is committed to providing
              accessible financial services to empower our communities and
              foster economic growth.
            </p>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="text-yellow-400 hover:text-yellow-300">
                <FaFacebook size={20} className="text-yellow-400" />
              </Link>
              <Link to="https://twitter.com" className="text-yellow-400 hover:text-yellow-300">
                <FaTwitter size={20} className="text-yellow-400" />
              </Link>
              <Link to="https://instagram.com" className="text-yellow-400 hover:text-yellow-300">
                <FaInstagram size={20} className="text-yellow-400" />
              </Link>
              <Link to="https://linkedin.com" className="text-yellow-400 hover:text-yellow-300">
                <FaLinkedin size={20} className="text-yellow-400" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            
            <ul className="space-y-2">
            <h5 className="text-xl font-semibold mb-4 text-yellow-400">
              Quick Links
            </h5>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            
            <ul className="space-y-2">
            <h5 className="text-xl font-semibold mb-4 text-yellow-400">
              Services
            </h5>
              <li>
                <Link to="/personal-loans" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link to="/business-loans" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/savings-plans" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  Savings Plans
                </Link>
              </li>
              <li>
                <Link to="/financial-advisory" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link to="/community-programs" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                  Community Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            
            <ul className="space-y-4">
            <h5 className="text-xl font-semibold mb-4 text-yellow-400">
              Contact Info
            </h5>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-3" />
                <span className="text-gray-300">123 Financial District, Lagos</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-yellow-400 mt-1 mr-3" />
                <span className="text-gray-300">+234 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-yellow-400 mt-1 mr-3" />
                <span className="text-gray-300">info@shamurr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} Shamurr Cooperative. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white" style={{ color: "white" }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;