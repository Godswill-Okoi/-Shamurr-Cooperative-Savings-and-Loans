import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary

const TermsOfService = () => {
    const handlePrintSave = () => {
        window.print();
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex-grow">
                <h1 className="text-4xl font-extrabold mb-6 text-gray-800 border-b-4 border-primary pb-2">
                    Terms of Service
                </h1>

                <div className="overflow-y-auto max-h-[70vh] pr-4">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 mb-4">
                            By accessing or using our services, you enter into a legally binding agreement with our company. 
                            These Terms of Service govern your use of our platform and all related services, applications, 
                            and tools. Please read these terms carefully before proceeding.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <p className="text-blue-700">
                                <strong>Important:</strong> Your continued use of our services constitutes acceptance of these terms.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. User Account and Responsibilities</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-3">
                            <li>Provide accurate, current, and complete registration information.</li>
                            <li>Maintain the confidentiality of your account credentials.</li>
                            <li>Accept full responsibility for all activities occurring under your account.</li>
                            <li>Immediately notify us of any unauthorized use or security breach.</li>
                            <li>Ensure compliance with all local, state, national, and international laws.</li>
                        </ul>
                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                            <p className="text-yellow-700">
                                <strong>Note:</strong> We reserve the right to suspend or terminate your account for violations of these terms.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Intellectual Property Rights</h2>
                        <p className="text-gray-600 mb-4">
                            All content, features, and functionality are and will remain the exclusive property of our company 
                            and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                            property laws.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-3">
                            <li>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material without our prior written consent.</li>
                            <li>Trademarks and logos used on our platform are our property or the property of their respective owners.</li>
                            <li>User-generated content remains the property of its creator but grants us a worldwide, non-exclusive license to use, reproduce, and distribute.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Limitation of Liability</h2>
                        <p className="text-gray-600 mb-4">
                            To the maximum extent permitted by applicable law, our platform is provided "as is" and "as available" 
                            without any warranties, express or implied.
                        </p>
                        <div className="bg-red-50 border-l-4 border-red-500 p-4">
                            <p className="text-red-700">
                                <strong>Disclaimer:</strong> We are not liable for:
                                <ul className="list-disc list-inside ml-4 mt-2">
                                    <li>Any direct, indirect, incidental, special, consequential, or punitive damages</li>
                                    <li>Loss of profits, data, use, or goodwill</li>
                                    <li>Service interruptions or inability to use our platform</li>
                                </ul>
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Modifications to Service and Terms</h2>
                        <p className="text-gray-600 mb-4">
                            We reserve the right to:
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>Modify or discontinue our services with or without notice</li>
                                <li>Update these Terms of Service periodically</li>
                                <li>Implement new charges or modify existing pricing</li>
                            </ul>
                        </p>
                        <p className="text-gray-600">
                            Continued use of our services after changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Governing Law and Dispute Resolution</h2>
                        <p className="text-gray-600 mb-4">
                            These Terms shall be governed by the laws of [Your Jurisdiction], without regard to its conflict of law principles. 
                            Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of 
                            [Arbitration Association], except where prohibited by law.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">7. Contact Information</h2>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 text-gray-700">
                            <p><strong>Legal Department</strong></p>
                            <p>Email: legal@example.com</p>
                            <p>Phone: +1 (555) 123-4567</p>
                            <p>Address: 123 Legal Street, Compliance City, State 12345</p>
                        </div>
                    </section>
                </div>

                <div className="mt-6 text-center">
                    <button 
                        onClick={handlePrintSave}
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                    >
                        Print/Save Terms
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfService;