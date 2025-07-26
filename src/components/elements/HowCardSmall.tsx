import React from "react";

interface CardWithIconProps {
  icon: React.ReactNode; // Icon passed as a prop
  title: string; // Title text
  description: string; // Description text
}

const HowCardSmall = ({ icon, title, description }: CardWithIconProps) => {
  return (
    <div className="bg-[#FEFEFE] p-4 rounded-[8px] border-2 border-[#F4F4F4]">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-[#7065F0] flex items-center justify-center">
          {icon}
        </div>
        <div className="ml-4 w-full">
          <h4 className="text-lg text-[#1F1F1F] border-b-2 border-[#C5C2C2] w-full py-1">{title}</h4>
          <p className="text-xs leading-5 mt-3 text-[#1F1F1F]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowCardSmall;
