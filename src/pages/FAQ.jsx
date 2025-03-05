import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import FAQSection from '../components/FAQSection'; // Adjust the path as necessary
// import HeroSection from '../components/HeroSection'; // Remove this import


const FAQ = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
                <div  className="pt-20">
                <FAQSection/>
                </div>
            
            <Footer />
        </div>
    );
};

export default FAQ; 