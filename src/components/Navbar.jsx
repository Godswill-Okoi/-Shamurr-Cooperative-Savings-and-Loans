import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-poppins ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-yellow-500/20' 
          : 'bg-black/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src="/images/logo.png"
                alt="Shamurr Logo"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-x-2 items-center space-x-1 decoration-none">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <div className="ml-6">
              <Link
                to="/apply"
                className="px-6 py-2.5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Apply Now
              </Link>
              <Link
                to="/become-a-member"
                className="ms-2 px-6 py-2.5 rounded-md outline-1 outline-amber-50 text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Become a Member
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-yellow-500 hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-yellow-500/20">
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/about">About</MobileNavLink>
          <MobileNavLink to="/services">Services</MobileNavLink>
          <MobileNavLink to="/faq">FAQ</MobileNavLink>
          <MobileNavLink to="/testimonials">Testimonials</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
          <div className="pt-2 pb-3">
            <Link
              to="/apply"
              className="block w-full text-center px-4 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className="group relative text-sm font-medium uppercase tracking-wider text-white hover:text-white"
  >
    <span className="relative z-10 px-2 py-1">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    <div className="absolute inset-0 overflow-hidden rounded-md opacity-0 group-hover:opacity-20 transition-opacity duration-300">
      <div className="absolute -inset-px bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-50 blur-lg transform -rotate-45 animate-pulse"></div>
    </div>
  </Link>
);

const MobileNavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`block text-base font-medium rounded-md px-3 py-2 transition-colors duration-300 no-underline text-center font-poppins ${
      isActive
        ? 'bg-yellow-500/10 text-white'
        : 'text-white hover:bg-yellow-500/10 hover:text-yellow-400'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;