import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between mx-6 lg:mx-10 gap-3 md:gap-6 lg:gap-12">
      <div className="p-3 rounded-[10px] bg-[#F8F8FF] border-2 border-[#E3E0E0] w-full h-auto flex-1/2">
        <Image
            src="/aboutImage.jpg"
            alt="About Zetti"
            width={100}
            height={407}
            layout="responsive"
            className="w-full md:h-[407px]"
          />
      </div>
      <div className="p-5 rounded-[10px] bg-[#F8F8FF] border-2 border-[#E3E0E0] flex-1/2">
        <h2 className="text-xl md:text-[40px]">About</h2>
        <p className="text-xs md:text-lg mt-5 text-[#1F1F1F]">
          Zetld is a modern legal-tech platform built to empower Australian home
          buyers with fast, accessible, and affordable legal support. When
          purchasing a property, buyers are often handed a complex contract by
          real estate agents filled with legal jargon and hidden risks. Settled
          uses, AI to transform those contracts into easy-to-understand
          summaries within seconds. It highlights key clauses, risks, and
          obligations, so buyers know exactly what they&apos;re getting into.
          Once the summary is generated, buyers can securely connect with
          verified lawyers or conveyancers on the platform to get professional
          legal help all within a simple, guided dashboard experience.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
