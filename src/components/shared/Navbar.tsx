import Image from "next/image";
import React from "react";
import Logo from "../elements/Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Hamburger, HamIcon, Menu } from "lucide-react";
import { AppSidebar } from "../ui/app-slider";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "./",
    },
    {
      name: "Buyer",
      path: "./buyer",
    },
    {
      name: "Professionals",
      path: "./professionals",
    },
    {
      name: "FAQ",
      path: "./faq",
    },
  ];
  return (
    <div className="bg-[#edecfb] flex items-center justify-between px-5 lg:px-16 py-2">
      <Logo />
      <div className="hidden md:flex items-center gap-4 lg:gap-14 ">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="space-x-4 hidden md:block">
        <Button variant={"outline"}>Login</Button>
        <Button>Sign up for free</Button>
      </div>

      {/* for mobile  */}
      <div className="space-x-4 block md:hidden">
        <Button size={"sm"} variant={"outline"}>
          Login
        </Button>
        <Button size={"sm"}>Sign up for free</Button>
      </div>
    </div>
  );
}
