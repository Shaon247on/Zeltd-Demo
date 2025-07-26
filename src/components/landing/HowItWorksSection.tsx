import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-6 rounded-full mb-4">
              <i className="fas fa-upload text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload Your Contract</h3>
            <p className="text-gray-600 text-center">
              Upload your contract and receive a legal overview within minutes.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-6 rounded-full mb-4">
              <i className="fas fa-file-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Get AI-Powered Summary</h3>
            <p className="text-gray-600 text-center">
              Our AI scans your contract for risks and highlights the important sections.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-6 rounded-full mb-4">
              <i className="fas fa-handshake text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect with Legal Experts</h3>
            <p className="text-gray-600 text-center">
              Connect with our verified legal experts to review your contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
