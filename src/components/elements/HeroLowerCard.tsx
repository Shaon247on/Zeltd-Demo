import { Star } from "lucide-react";
import React from "react";

export default function HeroLowerCard() {
  return (
    <div className="absolute z-20 bg-[#f6f6f6] p-6 rounded-tl-2xl right-0 bottom-24 lg:bottom-0 hidden md:block">
      <div className="flex items-center gap-8">
        <h3 className="text-xl text-[#121212] font-bold">Excellent</h3>
        <div className="flex items-center gap-1">
          <Star fill="#00b67a" stroke="#f6f6f6" /> <p>Trustpilot</p>
        </div>
      </div>
      <div className="flex mt-4">
        <Star fill="#ffb154" stroke="#f6f6f6" />
        <Star fill="#ffb154" stroke="#f6f6f6" />
        <Star fill="#ffb154" stroke="#f6f6f6" />
        <Star fill="#ffb154" stroke="#f6f6f6" />
        <Star fill="#ffb154" stroke="#f6f6f6" />
      </div>
      <h5 className="mt-6 text-[#121212]`">From 3,264 reviews</h5>
    </div>
  );
}
