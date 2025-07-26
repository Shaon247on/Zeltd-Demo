import Image from "next/image";
import React from "react";
import HeroCard from "../elements/HeroCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroLowerCard from "../elements/HeroLowerCard";
import HeroTabs from "../elements/HeroTabs";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:pl-12 bg-gradient-to-b from-[#E0DEF7] to-[#E0DEF700] relative">
      {/* text: left side */}
      <div className="pt-10 md:pt-16 lg:pt-[158px] pl-6 lg:pl-0">
        <h1 className="text-3xl md:text-5xl font-semibold lg:w-[360px]">
          Don&apos;t Make a Million <br /> Dollar Mistake
        </h1>
        <p className="text-base md:text-2xl lg:mt-7 md:w-[448px] mt-4">
          We flag what&apos;s risky, what&apos;s missing and what to
          ask-instantly
        </p>
      </div>

      {/* Image: right side */}
      <div className="mt-12 relative">
        <HeroCard />
        <div>
          <Image
            src={"/hero-logo.jpg"}
            width={876}
            height={656}
            alt="hero_image"
            className="mt-14 relative z-10"
          />
        </div>
        <HeroLowerCard />
      </div>

      <div className="absolute bottom-0 z-20">
        <Tabs defaultValue="account" className="md:w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <HeroTabs
              buttonText="Browse Property"
              text1="Rose Pol, Australia"
              title1="Location"
              title2="when"
              text2="Select Move-in Date"
            />
          </TabsContent>
          <TabsContent value="password">
            <HeroTabs
              buttonText="Browse Office"
              text1="Sedny, Australia"
              title1="Location"
              title2="when"
              text2="Select Move-in Date"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
