import React from "react";
import TestimonialCard from "../elements/TestimonialCard";
import { Building, KeyRound, Search, Users } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-white">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center md:justify-between mx-6 lg:mx-10">
          <TestimonialCard
            icon={<Users className="text-white" size={24} />}
            secondaryIcon={
              <KeyRound size={14} stroke="white" strokeWidth={4} />
            }
            title="50k+ Buyers"
            description="believe in our service"
          />
          <TestimonialCard
            icon={<Building className="text-white" size={24} />}
            secondaryIcon={
              <Search size={14} stroke="white" strokeWidth={4} />
            }
            title="20k+ properties"
            description="and house ready for occupancy"
          />
          <TestimonialCard
            icon={<Users className="text-white" size={24} />}
            secondaryIcon={
              <KeyRound size={14} stroke="white" strokeWidth={4} />
            }
            title="500+Verified Lawyer"
            description="believe in our service"
          />
          <TestimonialCard
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

export default TestimonialSection;
