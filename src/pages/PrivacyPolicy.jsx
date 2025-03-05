import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary

const PrivacyPolicy = () => {
    const handlePrintSave = () => {
        window.print();
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex-grow">
                <h1 className="text-4xl font-extrabold mb-6 text-gray-800 border-b-4 border-primary pb-2">
                    Privacy Policy
                </h1>

                <div className="overflow-y-auto max-h-[70vh] pr-4">
                    <section className="mb-8">
                        <p className="text-gray-600 mb-4">
                            Your privacy is important to us. This Privacy Policy explains how we collect, use, 
                            and protect your information when you use our services. We are committed to transparency 
                            and protecting your personal data.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <p className="text-blue-700">
                                <strong>Last Updated:</strong> [Current Date]
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Information We Collect</h2>
                        <p className="text-gray-600 mb-4">
                            We may collect various types of personal information to provide and improve our services:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-3">
                            <li>Personal Identifiers: Name, email address, phone number</li>
                            <li>Account Information: Username, password, account preferences</li>
                            <li>Contact Details: Mailing address, billing information</li>
                            <li>Payment Information: Credit card details, transaction history</li>
                            <li>Device and Usage Information: IP address, browser type, device specifications</li>
                        </ul>
                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                            <p className="text-yellow-700">
                                <strong>Note:</strong> We only collect information necessary to provide our services 
                                and improve user experience.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. How We Use Your Information</h2>
                        <p className="text-gray-600 mb-4">
                            We use the information we collect for various purposes:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-3">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices, updates, security alerts, and support messages</li>
                            <li>Respond to your comments, questions, and requests</li>
                            <li>Communicate with you about products, services, offers, and events</li>
                            <li>Monitor and analyze usage and trends to improve your experience</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Data Protection and Security</h2>
                        <p className="text-gray-600 mb-4">
                            We implement a variety of security measures to maintain the safety of your personal information:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-3">
                            <li>Encryption of sensitive data</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Restricted access to personal information</li>
                            <li>Secure data storage and transmission protocols</li>
                        </ul>
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
                            <p className="text-red-700">
                                <strong>Disclaimer:</strong> While we strive to protect your data, no method of transmission 
                                over the Internet or electronic storage is 100% secure.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Your Rights and Choices</h2>
                        <p className="text-gray-600 mb-4">
                            We respect your data privacy rights:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-3">
                            <li>Access and review your personal information</li>
                            <li>Request correction of inaccurate personal data</li>
                            <li>Request deletion of your personal information</li>
                            <li>Object to processing of your personal data</li>
                            <li>Request a copy of your personal information</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 mb-4">
                            We may update our Privacy Policy periodically. We will notify you of any significant changes 
                            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Contact Information</h2>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 text-gray-700">
                            <p><strong>Privacy Officer</strong></p>
                            <p>Email: privacy@example.com</p>
                            <p>Phone: +1 (555) 987-6543</p>
                            <p>Address: 456 Privacy Lane, Compliance City, State 67890</p>
                        </div>
                    </section>
                </div>

                <div className="mt-6 text-center">
                    <button 
                        onClick={handlePrintSave}
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                    >
                        Print/Save Privacy Policy
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;