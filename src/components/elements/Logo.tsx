import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-playfair font-medium">Zetled</h3>
      <Image src={"/logo.jpg"} width={36} height={36} alt="logo-image" />
    </div>
  );
}
