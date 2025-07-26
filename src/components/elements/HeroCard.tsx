import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Quote } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroCard() {
  return (
  <div className="rounded-sm bg-white shadow-lg absolute z-20 p-3.5 lg:-ml-3">
    <div className="flex items-center justify-center gap-5">
      <div className="">
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="text-[#2A0A53] font-semibold">Manuel Villa</h4>
        <p className="text-gray-400 text-xs">Renter</p>
        <h5 className="text-gray-400 text-xs flex items-center gap-1"><samp>Moved with</samp> <Mail size={10} stroke="#7065F0"/><span className="text-[#2A0A53] font-bold">Estatery</span>
        </h5>
      </div>
    </div>
    <div className="flex gap-3 items-center mt-3 md:mt-6">
      <Button size={"icon"} className="rounded-full bg-black"><Quote fill="#ffffff"/></Button>
      <p className="md:w-[250px] lg:w-[173px] text-xs text-[#110225]">I loved how smooth the move was, and finally got the house we wanted.</p>
    </div>
  </div>
  )
}
