import React, { useState } from 'react';

const FAQ = () => {
  const [activeItem, setActiveItem] = useState('collapseOne');

  const handleToggle = (id) => {
    setActiveItem(activeItem === id ? '' : id);
  };

  const faqItems = [
    {
      id: 'collapseOne',
      question: 'How do I qualify for a loan?',
      content: (
        <>
          <p className="text-sm text-gray-300">
            To qualify for a loan with Shamurr Cooperative, you need to be a registered member with:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-300 space-y-1">
            <li>A minimum of 3 months active membership</li>
            <li>Consistent savings history</li>
            <li>Stable income source</li>
            <li>Acceptable debt-to-income ratio</li>
          </ul>
          <p className="mt-2 text-sm text-gray-300">
            Our loan officers are available to guide you through the specific requirements for each loan type and help you prepare a successful application.
          </p>
        </>
      )
    },
    {
      id: 'collapseTwo',
      question: 'How long does the loan approval process take?',
      content: (
        <div className="flex flex-col space-y-3">
          <div className="flex items-start">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-yellow-400 text-black font-semibold text-xs mr-3 mt-0.5">24h</span>
            <p className="text-sm text-gray-300">
              <span className="font-medium text-white">Existing Members:</span> Typically 24-48 hours for members in good standing
            </p>
          </div>
          <div className="flex items-start">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-yellow-400 text-black font-semibold text-xs mr-3 mt-0.5">5d</span>
            <p className="text-sm text-gray-300">
              <span className="font-medium text-white">New Members:</span> 3-5 business days for new members or larger loan amounts
            </p>
          </div>
          <p className="text-sm text-gray-300 pl-9">
            Once approved, funds are disbursed within 24 hours to your registered account.
          </p>
        </div>
      )
    },
    {
      id: 'collapseThree',
      question: 'What savings plans do you offer?',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-3 rounded-lg">
            <h4 className="font-medium text-yellow-400 text-sm mb-2">Regular Savings</h4>
            <p className="text-gray-300 text-xs">Flexible deposits with competitive interest rates for everyday banking needs.</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <h4 className="font-medium text-yellow-400 text-sm mb-2">Fixed Deposits</h4>
            <p className="text-gray-300 text-xs">Higher interest rates for lump-sum deposits committed for specific time periods.</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <h4 className="font-medium text-yellow-400 text-sm mb-2">Goal-Based Savings</h4>
            <p className="text-gray-300 text-xs">Customized plans to help you save for specific life goals with milestone tracking.</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <h4 className="font-medium text-yellow-400 text-sm mb-2">Youth Savings</h4>
            <p className="text-gray-300 text-xs">Special programs for young members with educational benefits and financial literacy.</p>
          </div>
        </div>
      )
    },
    {
      id: 'collapseFour',
      question: 'Can I pay off my loan early?',
      content: (
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-green-500 rounded-full p-1 mr-3 mt-1">
            <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-300">
              Yes, you can pay off your loan early without any prepayment penalties. We encourage responsible financial management and early loan settlement.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Benefits of early repayment:
            </p>
            <ul className="list-disc list-inside mt-1 text-sm text-gray-300 space-y-1">
              <li>Reduce total interest paid</li>
              <li>Improve your credit rating</li>
              <li>Increase your borrowing capacity for future needs</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'collapseFive',
      question: 'How do I become a member?',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-gray-300">
            Becoming a member is simple and can be completed in 4 easy steps:
          </p>
          <div className="flex flex-col space-y-3">
            <div className="flex">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center mr-3">1</div>
              <div className="pt-1">
                <p className="text-white text-sm font-medium">Complete Application</p>
                <p className="text-gray-400 text-xs">Fill out our membership form online or at any branch</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center mr-3">2</div>
              <div className="pt-1">
                <p className="text-white text-sm font-medium">Provide Identification</p>
                <p className="text-gray-400 text-xs">Submit valid government-issued ID and proof of address</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center mr-3">3</div>
              <div className="pt-1">
                <p className="text-white text-sm font-medium">Pay Membership Fee</p>
                <p className="text-gray-400 text-xs">One-time fee of $25 for lifetime membership</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center mr-3">4</div>
              <div className="pt-1">
                <p className="text-white text-sm font-medium">Initial Deposit</p>
                <p className="text-gray-400 text-xs">Make your first deposit to activate your account</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="faqs" className="py-5 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3 text-yellow-400">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our financial services and membership benefits
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4" id="faqAccordion">
            {faqItems.map((item) => (
              <div key={item.id} className="bg-gray-800 border-l-4 border-yellow-400 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-yellow-400/20">
                <h2 className="accordion-header" id={`heading${item.id}`}>
                  <button
                    className="w-full p-4 text-left text-white text-sm font-medium flex justify-between items-center"
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={activeItem === item.id}
                    aria-controls={item.id}
                  >
                    <span>{item.question}</span>
                    <svg 
                      className={`w-5 h-5 text-yellow-400 transform transition-transform duration-200 ${activeItem === item.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h2>
                {activeItem === item.id && (
                  <div
                    id={item.id}
                    className="transition-all duration-300"
                    aria-labelledby={`heading${item.id}`}
                  >
                    <div className="p-4 bg-gray-800 border-t border-gray-700">
                      {item.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="/faqs" 
              className="inline-flex items-center px-6 py-3 border border-yellow-400 text-yellow-400 bg-transparent rounded-md text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors duration-200"
            >
              View All FAQs
              <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;