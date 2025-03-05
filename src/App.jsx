import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Apply from './pages/Apply'
import AdminDashboard from './pages/AdminDashboard'
import ErrorBoundary from './components/ErrorBoundary'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import BecomeAMember from './pages/BecomeAMember'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/become-a-member" element={<BecomeAMember />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
