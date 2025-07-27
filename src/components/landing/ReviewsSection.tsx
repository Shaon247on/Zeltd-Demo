import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Dengo Dinal",
      role: "Buyer",
      avatar: "/api/placeholder/40/40",
      review:
        "The AI summary helped me understand the contract without needing a law degree. Super useful for a first-time buyer like me!",
    },
    {
      id: 2,
      name: "Jhon Deo",
      role: "Lawyer",
      avatar: "/api/placeholder/40/40",
      review:
        "As a property lawyer, Settleid brings me qualified leads with zero marketing effort. Great return for the 15% fee.",
    },
    {
      id: 3,
      name: "James R.",
      role: "Buyer",
      avatar: "/api/placeholder/40/40",
      review: "Uploaded my contract and it within 30 minutes found",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-16 px-10">
      <div className="">
        <div className="">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Buyer & Lawyer Reviews
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Whether you&apos;re buying your next home or helping clients
              navigate legal paperwork, Settleid makes the process smooth, fast,
              and affordable. Buyers get instant clarity on complex contracts,
              while lawyers connect with ready-to-engage clients—saving everyone
              time, money, and stress.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <Carousel
              className="w-full cursor-grab active:cursor-grabbing border-2 border-red-700"
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4 w-[520px] h-[186px]">
                {reviews.map((review) => (
                  <CarouselItem
                    key={review.id}
                    className="pl-2 md:pl-4 basis-full w-[520px] h-[186px]"
                  >
                    <Card className="bg-white shadow-lg select-none">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 pointer-events-none">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-lg mb-1">
                              {review.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-3">
                              {review.role}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {review.review}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
