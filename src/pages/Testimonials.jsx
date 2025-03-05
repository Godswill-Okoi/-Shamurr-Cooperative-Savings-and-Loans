import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer';

const testimonials = [
  {
    quote: "Joining Shamurr Cooperative was one of the best financial decisions I've made. Their personal loan helped me start my small business, and their support has been invaluable.",
    name: "Sarah Johnson",
    role: "Small Business Owner",
    rating: 5
  },
  {
    quote: "The savings programs at Shamurr have helped me secure my financial future. The competitive rates and friendly service make banking here a pleasure.",
    name: "Michael Chen",
    role: "Long-term Member",
    rating: 5
  },
  {
    quote: "I appreciate how Shamurr Cooperative truly cares about the community. Their financial education programs have helped many young people learn about money management.",
    name: "Emily Rodriguez",
    role: "Community Leader",
    rating: 5
  },
  {
    quote: "The business advisory services have been crucial for my company's growth. Shamurr doesn't just provide loans; they provide partnership and guidance.",
    name: "David Thompson",
    role: "Business Owner",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div 
      className="bg-gray-900 rounded-lg p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
      aria-labelledby={`quote-${testimonial.name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 text-yellow-500/20 w-12 h-12" />
        <p 
          id={`quote-${testimonial.name.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-gray-300 mb-4 italic relative z-10 pl-6"
        >
          "{testimonial.quote}"
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-yellow-400 font-semibold">{testimonial.name}</div>
          <div className="text-sm text-gray-400">{testimonial.role}</div>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
    <Navbar />
    
    <section 
      className="min-h-screen bg-black text-white pt-20 font-poppins flex flex-col justify-center"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 
          id="testimonials-heading"
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
        >
          Member Testimonials
        </h1>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden">
          <div className="relative">
            <TestimonialCard testimonial={testimonials[activeTestimonial]} />
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial 
                      ? 'bg-yellow-500' 
                      : 'bg-gray-600'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
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
    </section>
    <Footer />
    </>
  );
};

export default Testimonials;