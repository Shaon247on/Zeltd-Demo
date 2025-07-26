import React from "react";
import Image from "next/image";

const ProfessionalsSection = () => {
  const listText = [
    "Pre-qualified, high-intent buyer leads",
    "No ads, no cold outreach — just real cases",
    "Fixed 15% commission only on successful engagements",
    "Dedicated dashboard to manage profiles and cases",
    "Verified environment — practicing certificate & insurance required",
  ];

  return (
    <div className="mx-6 lg:mx-[85px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-14">
        {/* Left Content */}
        <div className="bg-[#FFFDFE] border-2 border-[#D9D9D9] p-4 rounded-[8px] lg:w-[770px]">
          <h2 className="text-xl md:text-3xl font-medium text-[#141414]">Professionals</h2>
          <p className="text-[#1F1F1F] mt-2 text-base md:text-lg">
            Join Zettld to get matched with ready-to-engage buyers
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 my-10 bg-[#FDFDFD] border-2 border-[#E9E7E7] rounded-[8px] p-5">
            {listText.map((text, index) => (
              <li className="flex items-start" key={index}>
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-[#1F1F1F] text-base md:text-[20px]">{text}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="text-center">
            <button className="px-6 py-2 border mb-4 border-[#C9BDF9] text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Create Professional Account
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <Image
            src="/professionalImage.jpg"
            alt="Professional illustration"
            width={440}
            height={375}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsSection;
