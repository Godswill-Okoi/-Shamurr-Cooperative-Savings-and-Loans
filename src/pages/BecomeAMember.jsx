import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

const ShamurrMembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNo: "",
    email: "",
    occupationBusiness: "",
    employer: "",
    membershipType: "",
    referreeName: "",
    referreeAddress: "",
    referreePhoneNo: "",
    submissionDate: "",
    termsAgreement: false,
    reasonForMembership: "",
  });

  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Validate phone numbers
    const phoneRegex = /^[0-9]{10,}$/;
    if (formData.phoneNo && !phoneRegex.test(formData.phoneNo)) {
      newErrors.phoneNo = "Please enter a valid phone number";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAgreement) {
      alert(
        "You must agree to the cooperative's rules and regulations before submitting."
      );
      return;
    }

    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/become-a-member",
          formData
        );
        console.log(response.data);
        setModalVisible(true); // Show the modal on success
      } catch (error) {
        console.error("Error submitting membership application:", error);
      }
    }
  };

  const handleReturnHome = () => {
    // Logic to navigate back to the home page
    // For example, you can use React Router's useHistory hook
    // history.push('/'); // Uncomment and adjust if using React Router
    console.log("Returning to home");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-800 py-12 px-4 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-10">
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-center text-yellow-400 mb-8"
              style={{
                color: "yellow ",
                fontFamily: "sora",
                fontWeight: "700",
              }}
            >
              SHAMURR COOPERATIVE SAVINGS AND LOANS
              <span className="block text-lg sm:text-xl mt-2 text-white">
                Membership Application Form
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details Section */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3
                  className="text-xl font-semibold text-yellow-400 mb-4"
                  style={{
                    color: "white",
                    fontFamily: "sora",
                    fontWeight: "600",
                  }}
                >
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "name",
                      placeholder: "Full Name",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "address",
                      placeholder: "Address",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "phoneNo",
                      placeholder: "Phone Number",
                      type: "tel",
                      required: true,
                      errorMessage: errors.phoneNo,
                    },
                    {
                      name: "email",
                      placeholder: "Email Address",
                      type: "email",
                      required: true,
                      errorMessage: errors.email,
                    },
                    {
                      name: "occupationBusiness",
                      placeholder: "Occupation/Business",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "employer",
                      placeholder: "Employer (Optional)",
                      type: "text",
                    },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`
                        w-full p-3 rounded-lg 
                        bg-white/10 text-white 
                        border-2 
                        ${
                          field.errorMessage
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/20 focus:border-yellow-400"
                        }
                        transition duration-300
                        focus:outline-none focus:ring-2 focus:ring-opacity-50
                      `}
                      />
                      {field.errorMessage && (
                        <span className="text-red-500 text-sm absolute -bottom-5 left-2">
                          {field.errorMessage}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Membership Type Section */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3
                  className="text-xl font-semibold text-yellow-400 mb-4"
                  style={{
                    color: "white",
                    fontFamily: "sora",
                    fontWeight: "600",
                  }}
                >
                  Membership Details
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-auto">
                    <label className="block text-white mb-2">
                      Membership Type:
                    </label>
                    <select
                      name="membershipType"
                      value={formData.membershipType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-white/10 text-white border-2 border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                    >
                      <option value="">Select Membership Type</option>
                      <option value="Individual">Individual</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Group">Group</option>
                    </select>
                  </div>
                  <p className="text-sm text-gray-300 sm:ml-6">
                    Membership Fee:{" "}
                    <span className="font-semibold text-yellow-400">
                      N5,000.00
                    </span>
                  </p>
                </div>
              </div>

              {/* Referee Details Section */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3
                  className="text-xl font-semibold text-yellow-400 mb-4"
                  style={{
                    color: "white",
                    fontFamily: "sora",
                    fontWeight: "600",
                  }}
                >
                  Referee Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="referreeName"
                    value={formData.referreeName}
                    onChange={handleChange}
                    placeholder="Referee Name"
                    required
                    className="w-full p-3 rounded-lg bg-white/10 text-white border-2 border-white/20 focus:border-yellow-400"
                  />
                  <input
                    type="text"
                    name="referreeAddress"
                    value={formData.referreeAddress}
                    onChange={handleChange}
                    placeholder="Referee Address"
                    required
                    className="w-full p-3 rounded-lg bg-white/10 text-white border-2 border-white/20 focus:border-yellow-400"
                  />
                  <input
                    type="tel"
                    name="referreePhoneNo"
                    value={formData.referreePhoneNo}
                    onChange={handleChange}
                    placeholder="Referee Phone No."
                    required
                    className="w-full p-3 rounded-lg bg-white/10 text-white border-2 border-white/20 focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* Terms and Declaration Section */}
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="termsAgreement"
                    checked={formData.termsAgreement}
                    onChange={handleChange}
                    required
                    className="mt-1 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded"
                  />
                  <label className="text-sm text-gray-300">
                    I hereby apply for membership of SHAMURR Cooperative Savings
                    and Loans. I understand that my membership is subject to the
                    approval of the Board of Directors. I agree to abide by the
                    rules and regulations of the cooperative.
                  </label>
                </div>
              </div>

              {/* Submit Section */}
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="w-full sm:w-auto">
                  <label className="block text-white mb-2">
                    Date of Application
                  </label>
                  <input
                    type="date"
                    name="submissionDate"
                    value={formData.submissionDate}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white/10 text-white border-2 border-white/20 focus:border-yellow-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                >
                  Submit Application
                </button>
              </div>
              <div className="flex md:flex-row flex-col md:space-x-4 mt-4 ">
                <a
                  href="SHAMURR COOPERATIVE SAVINGS AND LOANS MEMBERSHIP APPLICATION FORM.pdf"
                  className="text-center mb-2 md:w-auto w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
                  download
                >
                  Download Form
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <h2 className="font-bold">Application Submitted!</h2>
            <p>
              Your application has been successfully submitted. We will review
              it shortly.
            </p>
            <p className="text-sm text-red-900 mt-4">
              <b>NOTE: </b>Download the form as a hard copy, print it, fill it
              out, and submit it upon request.
            </p>
            <div className="flex items-center mt-12">
              
              <div>
                <a
                  href="SHAMURR COOPERATIVE SAVINGS AND LOANS MEMBERSHIP APPLICATION FORM.pdf"
                  className="text-center md:w-auto w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
                  download
                >
                  Download Form
                </a>
              </div>
              <button
                onClick={() => setModalVisible(false)}
                className="ms-auto bg-yellow-500 text-black rounded px-4 py-2"
              >
                Close
              </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default ShamurrMembershipForm;
