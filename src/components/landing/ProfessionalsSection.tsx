import React from "react";

const ProfessionalsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Join Zetti to Get Matched with Ready-to-Engage Buyers
        </h2>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 mb-6">
            - Pre-qualified, high-intent buyer leads
          </p>
          <p className="text-lg text-gray-600 mb-6">
            - No sales, cold outreach – just real cases
          </p>
          <p className="text-lg text-gray-600 mb-6">
            - Receive 15% commission only on successful engagements
          </p>
          <p className="text-lg text-gray-600 mb-6">
            - Dedicated dashboard to manage profiles and cases
          </p>
          <p className="text-lg text-gray-600 mb-6">
            - Verified environment – practicing certificates & insurance required
          </p>
          <button className="bg-blue-500 text-white py-2 px-8 rounded-full text-lg hover:bg-blue-600 transition-all">
            Create Professional Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
