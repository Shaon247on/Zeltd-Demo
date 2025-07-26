import React from "react";
import ReviewCard from "../elements/ReviewCard";
import { Building, KeyRound, Search, Users } from "lucide-react";

const ReviewSection = () => {
  return (
    <section className="py-12 bg-white">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center lg:mx-10">
          <ReviewCard
            icon={<Users className="text-white" size={24} />}
            secondaryIcon={
              <KeyRound size={14} stroke="white" strokeWidth={4} />
            }
            title="50k+ Buyers"
            description="believe in our service"
          />
          <ReviewCard
            icon={<Building className="text-white" size={24} />}
            secondaryIcon={
              <Search size={14} stroke="white" strokeWidth={4} />
            }
            title="20k+ properties"
            description="and house ready for occupancy"
          />
          <ReviewCard
            icon={<Users className="text-white" size={24} />}
            secondaryIcon={
              <KeyRound size={14} stroke="white" strokeWidth={4} />
            }
            title="500+Verified Lawyer"
            description="believe in our service"
          />
          <ReviewCard
            icon={<Users className="text-white" size={24} />}
            secondaryIcon={
              <KeyRound size={14} stroke="white" strokeWidth={4} />
            }
            title="4.5 Client Review"
            description="believe in our service"
          />
        </div>
    </section>
  );
};

export default ReviewSection;
