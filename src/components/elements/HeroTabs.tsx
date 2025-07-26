import { Calendar } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function HeroTabs({
    title1, title2, text1, text2, buttonText
}:{
    title1: string; title2: string; text1: string; text2: string; buttonText:string;
}) {
  return (
    <div className="bg-white flex items-center justify-between gap-2 md:gap-10 py-1 px-2 md:py-6 md:px-8 w-[] md:w-[783px] w-[] md:h-[104px] rounded-br-[8px] rounded-bl-[8px] rounded-tr-[8px]">
      <div className="">
        <p className="font-jakarta font-medium text-[#2D2D2D] text-xs md:text-base">{title1}</p>
        <h4 className="font-semibold text-sm md:text-lg">{text1}</h4>
      </div>
      <div className="w-[1px] h-10 bg-[#E0DEF7]" />
      <div className="">
        <p className="font-jakarta font-medium text-[#2D2D2D] text-xs md:text-base">{title2}</p>
        <div className="flex gap-1 md:gap-4 items-center">
          <h4 className="font-semibold text-sm md:text-lg">{text2}</h4>
          <Calendar stroke="#bbc0c7" size={18} />
        </div>
      </div>
      <div className="w-[1px] h-10 bg-[#E0DEF7]" />
      <div>
        <Button className="px-2 md:px-5 md:py-6">{buttonText}</Button>
      </div>
    </div>
  );
}
