import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const API_URL = 'http://localhost:5000/api/send-application'; // Update to the new endpoint

const Apply = () => {
  const [formType, setFormType] = useState("loan"); // Default to 'loan'
  const [formState, setFormState] = useState({
    // Shared fields
    name: "",
    email: "",
    phone: "",
    referralSource: "",
    terms: false,
    privacy: false,

    // Membership specific fields
    reason: "",
    membershipType: "individual",

    // Loan specific fields
    loanAmount: "",
    loanPurpose: "",
    employmentStatus: "employed",
    monthlyIncome: "",
    existingDebts: "",
    creditScore: "good",

    formStep: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Add these new states for file handling
  const [files, setFiles] = useState({
    identification: null,
    proofOfIncome: null,
    bankStatements: null,
    additionalDocs: null,
  });

  const [fileErrors, setFileErrors] = useState({});

  const handleFileChange = (e, fileType) => {
    const selectedFile = e.target.files[0];

    // Validate file size (5MB limit)
    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      setFileErrors((prev) => ({
        ...prev,
        [fileType]: "File size must be less than 5MB",
      }));
      return;
    }

    setFiles((prev) => ({
      ...prev,
      [fileType]: selectedFile,
    }));

    // Clear error if exists
    if (fileErrors[fileType]) {
      setFileErrors((prev) => ({
        ...prev,
        [fileType]: null,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // Append form fields
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('phone', formState.phone);
    formData.append('loanAmount', formState.loanAmount);
    formData.append('loanPurpose', formState.loanPurpose);
    formData.append('employmentStatus', formState.employmentStatus);
    formData.append('monthlyIncome', formState.monthlyIncome);
    formData.append('existingDebts', formState.existingDebts);
    formData.append('creditScore', formState.creditScore);
    formData.append('terms', formState.terms);
    formData.append('privacy', formState.privacy);

    // Append files
    for (const [key, file] of Object.entries(files)) {
      if (file) {
        formData.append(key, file); // Use the key to append the file
      }
    }

    // Send the request
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  const nextStep = () => {
    setFormState({ ...formState, formStep: formState.formStep + 1 });
  };

  const prevStep = () => {
    setFormState({ ...formState, formStep: formState.formStep - 1 });
  };

  const switchFormType = (type) => {
    setFormType(type);
    setFormState({ ...formState, formStep: 1 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderProgressBar = () => {
    const totalSteps = 3; // Only 3 steps for loan application

    return (
      <div className="w-full mb-8">
        <div className="relative">
          <div className="overflow-hidden h-2 mb-4 flex rounded bg-gray-800">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 ease-in-out"
              style={{ width: `${(formState.formStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div
              className={`text-xs font-medium ${
                formState.formStep >= 1 ? "text-yellow-400" : "text-gray-500"
              }`}
            >
              Basic Info
            </div>
            <div
              className={`text-xs font-medium ${
                formState.formStep >= 2 ? "text-yellow-400" : "text-gray-500"
              }`}
            >
              Loan Details
            </div>
            <div
              className={`text-xs font-medium ${
                formState.formStep >= 3 ? "text-yellow-400" : "text-gray-500"
              }`}
            >
              Financial Info
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFormTypeSelector = () => (
    <div className="flex space-x-4 mb-8">
      <button
        type="button"
        onClick={() => switchFormType("loan")}
        className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
          formType === "loan"
            ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        Loan Application
      </button>
    </div>
  );

  const renderForm = () => {
    if (submitSuccess) {
      return (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            {formType === "membership"
              ? "Membership Application Submitted!"
              : "Loan Application Submitted!"}
          </h2>
          <p className="text-gray-300 mb-6">
            {formType === "membership"
              ? "Thank you for applying to join Shamurr Cooperative. We've received your application and will contact you within 2-3 business days."
              : "Thank you for your loan application. Our financial team will review your information and contact you within 2 business days regarding the next steps."}
          </p>
          <button
            className="px-6 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium transition-all duration-300 hover:shadow-lg"
            onClick={() => (window.location.href = "/")}
          >
            Return to Home
          </button>
        </motion.div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info Step - Same for both membership and loan applications */}
        {formState.formStep === 1 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="referralSource"
                className="block text-sm font-medium text-gray-300"
              >
                How did you hear about us?
              </label>
              <input
                type="text"
                id="referralSource"
                name="referralSource"
                value={formState.referralSource}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <button
                type="button"
                onClick={nextStep}
                className="w-full px-8 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Loan Form - Step 2 */}
        {formType === "loan" && formState.formStep === 2 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="loanAmount"
                className="block text-sm font-medium text-gray-300"
              >
                Loan Amount ($)
              </label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                value={formState.loanAmount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
                min="1"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="loanPurpose"
                className="block text-sm font-medium text-gray-300"
              >
                Loan Purpose
              </label>
              <select
                id="loanPurpose"
                name="loanPurpose"
                value={formState.loanPurpose}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
              >
                <option value="">Select purpose</option>
                <option value="business">Business Development</option>
                <option value="education">Education</option>
                <option value="home">Home Improvement</option>
                <option value="personal">Personal Use</option>
                <option value="debt">Debt Consolidation</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/3 px-8 py-3 rounded-md bg-transparent border border-gray-700 text-gray-300 font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:border-yellow-500 hover:text-yellow-500"
              >
                Back
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="w-2/3 px-8 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Loan Form - Step 3 */}
        {formType === "loan" && formState.formStep === 3 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="employmentStatus"
                className="block text-sm font-medium text-gray-300"
              >
                Employment Status
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={formState.employmentStatus}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
              >
                <option value="employed">Employed Full-Time</option>
                <option value="part-time">Employed Part-Time</option>
                <option value="self-employed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="retired">Retired</option>
                <option value="student">Student</option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="monthlyIncome"
                className="block text-sm font-medium text-gray-300"
              >
                Monthly Income ($)
              </label>
              <input
                type="number"
                id="monthlyIncome"
                name="monthlyIncome"
                value={formState.monthlyIncome}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
                min="0"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="existingDebts"
                className="block text-sm font-medium text-gray-300"
              >
                Existing Debts ($)
              </label>
              <input
                type="number"
                id="existingDebts"
                name="existingDebts"
                value={formState.existingDebts}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
                min="0"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="creditScore"
                className="block text-sm font-medium text-gray-300"
              >
                Credit Score Range
              </label>
              <select
                id="creditScore"
                name="creditScore"
                value={formState.creditScore}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                required
              >
                <option value="excellent">Excellent (750+)</option>
                <option value="good">Good (700-749)</option>
                <option value="fair">Fair (650-699)</option>
                <option value="poor">Poor (600-649)</option>
                <option value="bad">Bad (below 600)</option>
                <option value="unknown">I don't know</option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formState.terms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-700 text-yellow-500 focus:ring-yellow-500"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-300"
                >
                  I agree to the{" "}
                  <a href="#" className="text-yellow-400 hover:underline">
                    terms and conditions
                  </a>
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  checked={formState.privacy}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-700 text-yellow-500 focus:ring-yellow-500"
                  required
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 block text-sm text-gray-300"
                >
                  I agree to the{" "}
                  <a href="#" className="text-yellow-400 hover:underline">
                    privacy policy
                  </a>{" "}
                  and authorize Shamurr Cooperative to perform a credit check
                </label>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Identification Document (ID/Passport){" "}
                  <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "identification")}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                  required
                />
                {fileErrors.identification && (
                  <p className="text-red-500 text-xs mt-1">
                    {fileErrors.identification}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Proof of Income <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "proofOfIncome")}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                  required
                />
                {fileErrors.proofOfIncome && (
                  <p className="text-red-500 text-xs mt-1">
                    {fileErrors.proofOfIncome}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Bank Statements (Last 3 months){" "}
                  <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "bankStatements")}
                  accept=".pdf"
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                  required
                />
                {fileErrors.bankStatements && (
                  <p className="text-red-500 text-xs mt-1">
                    {fileErrors.bankStatements}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Additional Supporting Documents
                </label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "additionalDocs")}
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-3"
                />
                {fileErrors.additionalDocs && (
                  <p className="text-red-500 text-xs mt-1">
                    {fileErrors.additionalDocs}
                  </p>
                )}
                <p className="text-sm text-gray-400 mt-1">
                  Optional: Any additional documents that support your
                  application
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/3 px-8 py-3 rounded-md bg-transparent border border-gray-700 text-gray-300 font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:border-yellow-500 hover:text-yellow-500"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 px-8 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </form>
    );
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
              {formType === "membership"
                ? "Join Shamurr Cooperative"
                : "Apply for a Loan"}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {formType === "membership"
                ? "Become a member of our community and enjoy exclusive benefits, networking opportunities, and financial services tailored to your needs."
                : "Access affordable financing options designed to support your personal and business growth needs with competitive rates and flexible terms."}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-lg p-8 shadow-xl border border-gray-800"
            >
              {!submitSuccess && renderFormTypeSelector()}
              {!submitSuccess && renderProgressBar()}
              {renderForm()}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20"
            >
              {formType === "membership" ? (
                <>
                  <h3 className="text-xl font-medium text-yellow-400 mb-3">
                    Membership Benefits
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-yellow-400 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Exclusive financial services</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-yellow-400 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Community networking events</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-yellow-400 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Business development resources</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-yellow-400 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Educational workshops & training</span>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-medium text-yellow-400 mb-3">
                    Loan Benefits
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-yellow-400 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Competitive interest rates</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-yellow-400 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Flexible repayment options</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-yellow-400 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Competitive interest rates</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-yellow-400 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Flexible repayment options</span>
                    </li>
                  </ul>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
