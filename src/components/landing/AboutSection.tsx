import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="lg:flex items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              About Zetti
            </h2>
            <p className="text-gray-600 mb-4">
              Zetti is a modern legal-tech platform built to empower Australian
              home buyers with fast, accessible, and affordable legal support.
              When purchasing a property, buyers are often faced with complex
              legal and hidden risks. Zetti solves this by connecting buyers with
              verified legal experts in seconds.
            </p>
            <p className="text-gray-600">
              Zetti makes legal expertise accessible and secure, providing
              trusted connections to professionals through a simple, guided
              dashboard experience.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/path-to-your-image.jpg"
              alt="About Zetti"
              className="w-full rounded-lg shadow-lg"
              width={500} // Adjust width as per your image size
              height={300} // Adjust height as per your image size
              layout="responsive" // Ensures the image is responsive
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
