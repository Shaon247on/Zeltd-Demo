import React from "react";
import HowCardSmall from "../elements/HowCardSmall";
import { BadgeCheck, Cpu, FileUp } from "lucide-react";
import HowCard from "../elements/HowCard";

const HowItWorksSection = () => {
  return (
    <section className="mx-6 lg:mx-20 grid grid-cols-1 lg:grid-cols-3 items-start lg:items-center justify-between gap-6 lg:gap-10 py-16">
      <div className="bg-[#FFFDFE] border-2 border-[#EFEFEF] col-span-1 lg:col-span-2 p-4 rounded-[8px]">
        <div className="w-full border-b-2 border-[#F8E9EF] py-1">
          <h2 className="text-2xl leading-8">How It Works</h2>
          <p className="text-sm">How Zetld Helps You as a Buyer</p>
        </div>
        <div className="mt-5 space-y-3">
          <HowCardSmall
            icon={<FileUp className="text-white" size={20} />}
            title="Upload Your Contract"
            description="Drag & drop your contract of sale (PDF) no signup needed to start."
          />
          <HowCardSmall
            icon={<Cpu className="text-white" size={20} />}
            title="Upload Your Contract"
            description="Drag & drop your contract of sale (PDF) no signup needed to start."
          />
          <HowCardSmall
            icon={<BadgeCheck className="text-white" size={20} />}
            title="Upload Your Contract"
            description="Drag & drop your contract of sale (PDF) no signup needed to start."
          />
        </div>
      </div>
      <div className="col-span-1">
        <HowCard />
      </div>
    </section>
  );
};

export default HowItWorksSection;
