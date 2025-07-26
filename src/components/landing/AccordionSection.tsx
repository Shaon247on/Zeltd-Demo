import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function AccordionSection() {
  const accordionText = [
    {
      text: "What is Zetld, and how does it help me?",
      subText:
        "Zetld is an AI-powered platform that simplifies your property contract. It gives you a plain-English summary and connects you with verified legal professionals.",
      value: "1",
    },
    {
      text: "Is my contract and personal data safe?",
      subText:
        "Yes, Settled ensures your contract and personal data are kept safe using industry-standard encryption and data privacy protocols to protect your sensitive information.",
      value: "2",
    },
    {
      text: "How much does it cost to use Settled?",
      subText:
        "The cost varies depending on the services you select. There are no hidden fees, and you’ll be able to see the pricing for each service before you proceed.",
      value: "3",
    },
    {
      text: "Can I choose which lawyer I work with?",
      subText:
        "Yes, you can choose from a network of verified lawyers. You can select a lawyer based on your specific needs, preferences, and expertise.",
      value: "4",
    },
    {
      text: "What is Zetld, and how does it help me?",
      subText:
        "Zetld is an AI-powered platform that simplifies your property contract. It gives you a plain-English summary and connects you with verified legal professionals.",
      value: "5",
    },
    {
      text: "Is my contract and personal data safe?",
      subText:
        "Yes, your contract and personal data are fully protected. Settled uses advanced security measures to ensure your information remains confidential and secure.",
      value: "6",
    },
    {
      text: "How much does it cost to use Settled?",
      subText:
        "For lawyers, the platform offers flexible pricing based on the services and cases you take on. You only pay when you successfully engage with a buyer, ensuring fair and transparent costs.",
      value: "7",
    },
    {
      text: "Can I choose which cases I work on?",
      subText:
        "Yes, you have the freedom to choose the cases you want to work on based on your expertise and preferences. Settled ensures that you’re matched with clients who need your services.",
      value: "8",
    },
  ];
  return (
    <div className="mx-6 lg:mx-10 my-10 lg:my-20">
      <div>
        <h3 className="text-xl md:text-3xl mb-5">For Buyers</h3>
        <Accordion type="single" collapsible className="space-y-3">
          {accordionText.slice(0, 4).map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger  className="bg-[#FBFBFB] p-5 text-lg md:text-2xl font-normal border-2 border-[#D4D4D4] rounded-none ">
                {item.text}
              </AccordionTrigger>
              <AccordionContent className="border-2 border-[#F2E0E0] text-[#1F1F1F] text-sm md:text-lg flex items-center justify-start py-2 px-4">
                {item.subText}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div>
        <h3 className="text-xl md:text-3xl my-5">For lawyers</h3>
        <Accordion type="single" collapsible className="space-y-3">
          {accordionText.slice(4, 8).map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger  className="bg-[#FBFBFB] p-5 text-lg md:text-2xl font-normal border-2 border-[#D4D4D4] rounded-none ">
                {item.text}
              </AccordionTrigger>
              <AccordionContent className="border-2 border-[#F2E0E0] text-[#1F1F1F] text-sm md:text-lg flex items-center justify-start py-2 px-4">
                {item.subText}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
