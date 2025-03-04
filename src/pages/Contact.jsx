import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Contact = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white pt-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <ContactSection />


        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gray-900 rounded-lg p-4 shadow-xl border border-gray-800 overflow-hidden max-w-6xl mx-auto"
        >
          <div className="aspect-w-16 aspect-h-7 rounded-lg overflow-hidden">
            {/* Replace with actual map component or embed code */}
            <div className="bg-gray-800 w-full h-full flex items-center justify-center">
              <p className="text-gray-400 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2 mx-auto text-yellow-500 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="block text-lg">Interactive Map Would Appear Here</span>
                Google Maps or other map service embed
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">What are your response times?</h3>
              <p className="text-gray-300">We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our customer service line.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">How can I schedule an in-person consultation?</h3>
              <p className="text-gray-300">Use the contact form above to request an appointment, or call our office directly. We offer both virtual and in-person consultations.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Do you offer emergency services?</h3>
              <p className="text-gray-300">Yes, for existing members we provide 24/7 emergency support. Please use the dedicated emergency contact number provided upon membership enrollment.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;