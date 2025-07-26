import React from "react";
import { Button } from "../ui/button";
import { Warehouse } from "lucide-react";

const HowCard = () => {
  return (
    <div className="bg-[#FAF8F9] rounded-[8px] border border-gray-200 p-4">
      {/* Header */}
      <h2 className="text-lg font-medium text-gray-900 mb-6">
        Upload Contract
      </h2>

      <div className="bg-[#FBFBFB] border-2 border-[#E2E2E2] p-3 rounded-[8px]">
        {/* Property Section */}
        <div className="flex items-start gap-4 mb-6">
          {/* House Icon */}
          <div className="w-[73px] h-[77px] bg-[#7065F0E6] rounded-lg flex items-center justify-center flex-shrink-0">
            <Warehouse size={50} stroke="white" strokeWidth={2}/>
          </div>

          {/* Property Details */}
          <div className="flex-1">
            <h3 className="text-base font-medium text-[#1F1F1F] mb-1">
              Property
            </h3>
            <p className="text-sm text-gray-700 mb-1">456 Market St San</p>
            <p className="text-sm text-gray-500">Type: House</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex">
            <span className="text-sm text-[#1A1A1A] font-medium">Price :</span>
            <span className="text-sm text-[#1F1F1F] ml-1">$45000</span>
          </div>

          <div className="flex">
            <span className="text-sm text-[#1A1A1A] font-medium">Deposit :</span>
            <span className="text-sm text-[#1F1F1F] ml-1">10%</span>
          </div>

          <div className="flex">
            <span className="text-sm text-[#1A1A1A] font-medium">
              Settlement Date :
            </span>
            <span className="text-sm text-[#1F1F1F] ml-1">14 Aug 2025</span>
          </div>

          <div className="flex">
            <span className="text-sm text-[#1A1A1A] font-medium">
              Transaction :
            </span>
            <span className="text-sm text-[#1F1F1F] ml-1">Private Sale</span>
          </div>
        </div>

        {/* Document Status */}
        <div className="flex items-center gap-5 mb-4">
          <h4 className="text-sm text-gray-700 font-medium">
            Document Status
          </h4>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 lg:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Provided</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Missing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Review</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-start md:justify-between gap-3">
          <Button variant={"outline"} className="bg-[#FAFAFA] w-[48%]">
            Edit Details
          </Button>
          <Button variant={"outline"} className="bg-[#FAFAFA] w-[48%]">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowCard;
