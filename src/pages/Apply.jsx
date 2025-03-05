import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/send-application";

const Apply = () => {
  const [formState, setFormState] = useState({
    // Borrower Information
    name: "",
    address: "",
    phone: "",
    gender: "",
    email: "",
    dateOfBirth: "",
    maritalStatus: "",
    numberOfDependants: "",

    // Business Information (for SME)
    businessName: "",
    businessAddress: "",
    businessType: "",
    businessSector: "",
    yearsInOperation: "",
    annualRevenue: "",
    numberOfEmployees: "",

    // Loan Information
    loanAmount: "",
    loanPurpose: "",
    repaymentTerm: "",
    repaymentTermType: "",
    interestRate: "",
    processingFees: "",
    collateral: "",

    // Financial Information
    bankName: "",
    accountNumber: "",
    bvn: "",
    nin: "",

    // Credit History
    hasDefaultedLoan: false,
    hasFiledBankruptcy: false,
    hasOutstandingLoans: false,

    // References
    personalReferenceName: "",
    personalReferencePhone: "",
    businessReferenceName: "",
    businessReferencePhone: "",

    // Authorization
    termsAgreement: false,
  });

  const [files, setFiles] = useState({
    identification: null,
    bankStatement: null,
    proofOfBusinessOwnership: null,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fileType]: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.termsAgreement) {
      alert("You must agree to the terms and conditions before submitting.");
      return;
    }

    const formData = new FormData();

    // Append all form fields
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append files
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        formData.append(key, file);
      }
    });

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setModalVisible(true);

      // Reset form state
      setFormState({
        name: "",
        address: "",
        phone: "",
        gender: "",
        email: "",
        dateOfBirth: "",
        maritalStatus: "",
        numberOfDependants: "",
        businessName: "",
        businessAddress: "",
        businessType: "",
        businessSector: "",
        yearsInOperation: "",
        annualRevenue: "",
        numberOfEmployees: "",
        loanAmount: "",
        loanPurpose: "",
        repaymentTerm: "",
        repaymentTermType: "",
        interestRate: "",
        processingFees: "",
        collateral: "",
        bankName: "",
        accountNumber: "",
        bvn: "",
        nin: "",
        personalReferenceName: "",
        personalReferencePhone: "",
        businessReferenceName: "",
        businessReferencePhone: "",
        termsAgreement: false,
      });
      setFiles({
        identification: null,
        bankStatement: null,
        proofOfBusinessOwnership: null,
      });
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReturnHome = () => {
    navigate("/");
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setFormState({
      name: "",
      address: "",
      phone: "",
      gender: "",
      email: "",
      dateOfBirth: "",
      maritalStatus: "",
      numberOfDependants: "",
      businessName: "",
      businessAddress: "",
      businessType: "",
      businessSector: "",
      yearsInOperation: "",
      annualRevenue: "",
      numberOfEmployees: "",
      loanAmount: "",
      loanPurpose: "",
      repaymentTerm: "",
      repaymentTermType: "",
      interestRate: "",
      processingFees: "",
      collateral: "",
      bankName: "",
      accountNumber: "",
      bvn: "",
      nin: "",
      personalReferenceName: "",
      personalReferencePhone: "",
      businessReferenceName: "",
      businessReferencePhone: "",
      termsAgreement: false,
    });
    setFiles({
      identification: null,
      bankStatement: null,
      proofOfBusinessOwnership: null,
    });
  };

  const handleDownload = () => {
    const formattedData = `
      Name: ${formState.name}
      Address: ${formState.address}
      Phone: ${formState.phone}
      Gender: ${formState.gender}
      Email: ${formState.email}
      Date of Birth: ${formState.dateOfBirth}
      Marital Status: ${formState.maritalStatus}
      Number of Dependants: ${formState.numberOfDependants}
      Business Name: ${formState.businessName}
      Business Address: ${formState.businessAddress}
      Business Type: ${formState.businessType}
      Business Sector: ${formState.businessSector}
      Years in Operation: ${formState.yearsInOperation}
      Annual Revenue: ${formState.annualRevenue}
      Number of Employees: ${formState.numberOfEmployees}
      Loan Amount: ${formState.loanAmount}
      Loan Purpose: ${formState.loanPurpose}
      Repayment Term: ${formState.repaymentTerm} ${formState.repaymentTermType}
      Interest Rate: ${formState.interestRate}
      Processing Fees: ${formState.processingFees}
      Collateral: ${formState.collateral}
      Bank Name: ${formState.bankName}
      Account Number: ${formState.accountNumber}
      BVN: ${formState.bvn}
      NIN: ${formState.nin}
      Personal Reference Name: ${formState.personalReferenceName}
      Personal Reference Phone: ${formState.personalReferencePhone}
      Business Reference Name: ${formState.businessReferenceName}
      Business Reference Phone: ${formState.businessReferencePhone}
      Terms Agreement: ${formState.termsAgreement ? "Agreed" : "Not Agreed"}
    `;

    const blob = new Blob([formattedData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "application_details.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
              Loan Application
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Complete the form below to apply for a loan with Shamurr
              Cooperative Savings and Loans
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 rounded-lg p-8 space-y-6"
            >
              {/* Borrower Information Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  1. Borrower Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    value={formState.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                  />
                  <select
                    name="gender"
                    value={formState.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                  />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formState.dateOfBirth}
                    onChange={handleChange}
                    placeholder="Date of Birth"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                  />
                  <select
                    name="maritalStatus"
                    value={formState.maritalStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                  >
                    <option value="">Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                  <input
                    type="number"
                    name="numberOfDependants"
                    value={formState.numberOfDependants}
                    onChange={handleChange}
                    placeholder="Number of Dependants"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    min="0"
                  />
                </div>
              </div>

              {/* Business Information Section */}
              <div className="space-y-4 mt-8">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  2. Business Information (SME Only)
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="businessName"
                    value={formState.businessName}
                    onChange={handleChange}
                    placeholder="Business Name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="text"
                    name="businessAddress"
                    value={formState.businessAddress}
                    onChange={handleChange}
                    placeholder="Business Address"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <select
                    name="businessType"
                    value={formState.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  >
                    <option value="">Business Type</option>
                    <option value="sole-proprietorship">
                      Sole Proprietorship
                    </option>
                    <option value="partnership">Partnership</option>
                    <option value="llc">Limited Liability Company</option>
                  </select>
                  <input
                    type="text"
                    name="businessSector"
                    value={formState.businessSector}
                    onChange={handleChange}
                    placeholder="Business Sector/Industry"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="number"
                    name="yearsInOperation"
                    value={formState.yearsInOperation}
                    onChange={handleChange}
                    placeholder="Years in Operation"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    min="0"
                  />
                  <input
                    type="number"
                    name="annualRevenue"
                    value={formState.annualRevenue}
                    onChange={handleChange}
                    placeholder="Annual Revenue"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    min="0"
                  />
                  <input
                    type="number"
                    name="numberOfEmployees"
                    value={formState.numberOfEmployees}
                    onChange={handleChange}
                    placeholder="Number of Employees"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    min="0"
                  />
                </div>
              </div>

              {/* Loan Information Section */}
              <div className="space-y-4 mt-8">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  3. Loan Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="loanAmount"
                    value={formState.loanAmount}
                    onChange={handleChange}
                    placeholder="Loan Amount"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                    min="0"
                  />
                  <select
                    name="loanPurpose"
                    value={formState.loanPurpose}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    required
                  >
                    <option value="">Loan Purpose</option>
                    <option value="personal">Personal</option>
                    <option value="business-expansion">
                      Business Expansion
                    </option>
                    <option value="working-capital">Working Capital</option>
                  </select>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      name="repaymentTerm"
                      value={formState.repaymentTerm}
                      onChange={handleChange}
                      placeholder="Repayment Term"
                      className="w-2/3 px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                      required
                    />
                    <select
                      name="repaymentTermType"
                      value={formState.repaymentTermType}
                      onChange={handleChange}
                      className="w-1/3 px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                      required
                    >
                      <option value="">Term</option>
                      <option value="months">Months</option>
                      <option value="years">Years</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="interestRate"
                    value={formState.interestRate}
                    onChange={handleChange}
                    placeholder="Interest Rate"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="number"
                    name="processingFees"
                    value={formState.processingFees}
                    onChange={handleChange}
                    placeholder="Processing Fees/Insurance"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    min="0"
                  />
                  <input
                    type="text"
                    name="collateral"
                    value={formState.collateral}
                    onChange={handleChange}
                    placeholder="Collateral (if applicable)"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                </div>
              </div>

              {/* Financial Information Section */}
              <div className="space-y-4 mt-8">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  4. Financial Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="bankName"
                    value={formState.bankName}
                    onChange={handleChange}
                    placeholder="Bank Name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="text"
                    name="accountNumber"
                    value={formState.accountNumber}
                    onChange={handleChange}
                    placeholder="Account Number"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="text"
                    name="bvn"
                    value={formState.bvn}
                    onChange={handleChange}
                    placeholder="Bank Verification Number (BVN)"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="text"
                    name="nin"
                    value={formState.nin}
                    onChange={handleChange}
                    placeholder="National Identification Number (NIN)"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                </div>
              </div>

              {/* References Section */}
              <div className="space-y-4 mt-8">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  5. References
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="personalReferenceName"
                    value={formState.personalReferenceName}
                    onChange={handleChange}
                    placeholder="Personal Reference Name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="tel"
                    name="personalReferencePhone"
                    value={formState.personalReferencePhone}
                    onChange={handleChange}
                    placeholder="Personal Reference Phone"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="text"
                    name="businessReferenceName"
                    value={formState.businessReferenceName}
                    onChange={handleChange}
                    placeholder="Business Reference Name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="tel"
                    name="businessReferencePhone"
                    value={formState.businessReferencePhone}
                    onChange={handleChange}
                    placeholder="Business Reference Phone"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                </div>
              </div>

              {/* Authorization Section */}
              <div className="space-y-4 mt-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="termsAgreement"
                    checked={formState.termsAgreement}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  I have read and agree to the{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => navigate("/terms-of-service")}
                  >
                    Terms of Service
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
                >
                  {loading ? <span>Processing...</span> : "Submit Application"}
                </button>
                <div className="mt-4">
                  <a
                    href="/SHAMURR COOPERATIVE SAVINGS AND LOANS - FORM.pdf"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
                    download
                  >
                    Download Form (PDF)
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal for Success Message */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-12">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <FontAwesomeIcon
              icon={faTimes}
              className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            />
            <h2 className="md:text-lg text-[1rem] font-bold">
              Application Submitted!
            </h2>
            <p className="text-sm md:text-lg">
              Your application has been successfully submitted. <br /> We will
              review your application and get back to you shortly.
            </p>
            <p className="text-sm md:text-lg">
              If you have any questions, feel free to contact us.
            </p>
            <div className="flex md:flex-row flex-col md:space-x-4 mt-4 ">
              <div>
                <button
                  onClick={handleReturnHome}
                  className="mb-2 px-4 py-2 md:w-auto w-full bg-yellow-500 text-black rounded hover:bg-yellow-400"
                >
                  Return to Home
                </button>
              </div>

              <a
                href="/SHAMURR COOPERATIVE SAVINGS AND LOANS - FORM.pdf"
                className="text-center mb-2 md:w-auto w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
                download
              >
                Download Form
              </a>
            </div>
            <p className="text-sm text-red-900">
              <b>NOTE: </b>Download the form as a hard copy, print it, fill it
              out, and submit it upon request.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Apply;
