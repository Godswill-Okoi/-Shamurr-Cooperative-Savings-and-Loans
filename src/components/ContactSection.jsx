import React, { useState, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaClock,
  FaUser,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Refs for form elements
  const formRef = useRef(null);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Validate on change if field has been touched
    if (touched[name]) {
      validateField(name, value);
    }
  };
  
  // Mark field as touched on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    validateField(name, value);
  };
  
  // Validate a single field
  const validateField = (name, value) => {
    let fieldErrors = { ...errors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          fieldErrors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          fieldErrors.name = 'Name must be at least 2 characters';
        } else {
          delete fieldErrors.name;
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          fieldErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          fieldErrors.email = 'Invalid email address';
        } else {
          delete fieldErrors.email;
        }
        break;
        
      case 'subject':
        if (!value.trim()) {
          fieldErrors.subject = 'Subject is required';
        } else if (value.trim().length < 5) {
          fieldErrors.subject = 'Subject must be at least 5 characters';
        } else {
          delete fieldErrors.subject;
        }
        break;
        
      case 'message':
        if (!value.trim()) {
          fieldErrors.message = 'Message is required';
        } else if (value.trim().length < 20) {
          fieldErrors.message = 'Message must be at least 20 characters';
        } else {
          delete fieldErrors.message;
        }
        break;
        
      default:
        break;
    }
    
    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };
  
  // Validate all fields
  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};
    let allTouched = {};
    
    // Mark all fields as touched
    Object.keys(formData).forEach(field => {
      allTouched[field] = true;
      if (!validateField(field, formData[field])) {
        formIsValid = false;
      }
    });
    
    setTouched(allTouched);
    return formIsValid;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField && formRef.current) {
        const errorElement = formRef.current.querySelector(`[name="${firstErrorField}"]`);
        if (errorElement) {
          errorElement.focus();
        }
      }
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Update the API endpoint to point to your backend server
      const response = await axios.post('http://localhost:5000/api/send-contact-email', formData);
      
      console.log(response.data);
      
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTouched({});
      
    } catch (error) {
      console.error('Error sending contact email:', error);
      
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get input CSS classes based on validation state
  const getInputClass = (fieldName) => {
    const baseClass = "w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 bg-gray-800 text-white border";
    
    if (!touched[fieldName]) {
      return `${baseClass} border-gray-700 focus:border-yellow-400`;
    }
    
    if (errors[fieldName]) {
      return `${baseClass} border-red-500 focus:border-red-500`;
    }
    
    return `${baseClass} border-green-500 focus:border-yellow-400`;
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-900 to-black" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            id="contact-heading" 
            className="text-4xl font-bold text-yellow-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We value your inquiries and feedback. Our team is ready to assist you with any questions about our services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information Column */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg border-l-4 border-yellow-400 transform transition duration-300 hover:translate-y-[-5px]">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <FaEnvelope className="text-black" size={14} />
                </span>
                Contact Information
              </h3>
              
              <address className="not-italic space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-400/15 flex items-center justify-center group-hover:bg-yellow-400/25 transition-all duration-300">
                    <FaMapMarkerAlt className="text-yellow-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm font-medium mb-1">Visit Us</p>
                    <p className="text-white text-base">123 Financial District, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-400/15 flex items-center justify-center group-hover:bg-yellow-400/25 transition-all duration-300">
                    <FaPhone className="text-yellow-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm font-medium mb-1">Call Us</p>
                    <a href="tel:+2341234567890" className="text-white text-base hover:text-yellow-400 transition-colors">
                      +234 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-400/15 flex items-center justify-center group-hover:bg-yellow-400/25 transition-all duration-300">
                    <FaEnvelope className="text-yellow-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm font-medium mb-1">Email Us</p>
                    <a href="mailto:info@shamurr.com" className="text-white text-base hover:text-yellow-400 transition-colors">
                      info@shamurr.com
                    </a>
                  </div>
                </div>
              </address>

              <div className="mt-10 pt-8 border-t border-gray-700/50">
                <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                  <span className="text-yellow-400 mr-2">
                    <FaClock size={16} />
                  </span>
                  Business Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50 hover:border-gray-600 transition-colors">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-medium bg-gray-700/50 px-3 py-1 rounded-full text-sm">8:00AM - 6:00PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50 hover:border-gray-600 transition-colors">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-medium bg-gray-700/50 px-3 py-1 rounded-full text-sm">9:00AM - 2:00PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium bg-gray-700/50 px-3 py-1 rounded-full text-sm">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-700/50">
                <h4 className="text-lg font-medium text-white mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: FaFacebook, label: "Facebook", href: "https://facebook.com/shamurr" },
                    { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/shamurr" },
                    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/shamurr" },
                    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/company/shamurr" }
                  ].map((social) => (
                    <a 
                      key={social.label}
                      href={social.href} 
                      className="h-12 w-12 rounded-full bg-gray-700/70 hover:bg-yellow-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="text-white" size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg h-full transform transition duration-300 hover:translate-y-[-5px]">
              <div className="p-6 bg-yellow-400/10 border-b border-gray-700/50">
                <h3 className="text-2xl font-semibold text-white flex items-center">
                  <span className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <FaPaperPlane className="text-black" size={14} />
                  </span>
                  Send Us a Message
                </h3>
                <p className="text-gray-400 mt-2 pl-11">
                  We'll get back to you within 24 hours
                </p>
              </div>
              
              {/* Form Status */}
              {submitStatus && (
                <motion.div 
                  className={`m-6 p-4 rounded-lg flex items-center ${submitStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="mr-3">
                    {submitStatus.success ? (
                      <FaCheckCircle size={20} />
                    ) : (
                      <FaExclamationTriangle size={20} />
                    )}
                  </span>
                  <p>{submitStatus.message}</p>
                </motion.div>
              )}
              
              {/* Contact Form */}
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="p-6 space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex flex-col text-gray-300 text-sm font-medium items-center">
                      <FaUser className="mr-2 text-yellow-400" size={14} />
                      Full Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('name')}
                      placeholder="John Doe"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {touched.name && errors.name && (
                      <motion.p 
                        className="text-red-500 text-xs mt-1 flex items-center"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaExclamationTriangle className="mr-1" size={12} />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex text-gray-300 text-sm font-medium items-center">
                      <FaEnvelope className="mr-2 text-yellow-400" size={14} />
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('email')}
                      placeholder="you@example.com"
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {touched.email && errors.email && (
                      <motion.p 
                        className="text-red-500 text-xs mt-1 flex items-center"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaExclamationTriangle className="mr-1" size={12} />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>
                
                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="flex text-gray-300 text-sm font-medium items-center">
                    <FaPaperPlane className="mr-2 text-yellow-400" size={14} />
                    Subject <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('subject')}
                    placeholder="How can we help you?"
                    aria-required="true"
                    aria-invalid={errors.subject ? "true" : "false"}
                  />
                  {touched.subject && errors.subject && (
                    <motion.p 
                      className="text-red-500 text-xs mt-1 flex items-center"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaExclamationTriangle className="mr-1" size={12} />
                      {errors.subject}
                    </motion.p>
                  )}
                </div>
                
                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex text-gray-300 text-sm font-medium items-center">
                    <FaEnvelope className="mr-2 text-yellow-400" size={14} />
                    Your Message <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${getInputClass('message')} resize-none h-36`}
                    placeholder="Please describe your inquiry in detail..."
                    aria-required="true"
                    aria-invalid={errors.message ? "true" : "false"}
                  ></textarea>
                  {touched.message && errors.message && (
                    <motion.p 
                      className="text-red-500 text-xs mt-1 flex items-center"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaExclamationTriangle className="mr-1" size={12} />
                      {errors.message}
                    </motion.p>
                  )}
                  <p className="text-gray-400 text-xs mt-2">
                    Your information is protected by our 
                    <a href="/privacy-policy" className="text-yellow-400 hover:underline ml-1">Privacy Policy</a>
                  </p>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center
                      ${isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-yellow-400 hover:bg-yellow-500 text-black hover:shadow-lg'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;