import React from "react";
import Logo from "../elements/Logo";
import Link from "next/link";

const Footer = () => {
  const featureLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Buyer", href: "/buyers" },
    { name: "Lawyer", href: "/lawyer" },
    { name: "FAQ", href: "/faq" },
  ];

  const policyLinks = [
    { name: "Terms of service", href: "/teams" },
    { name: "Privacy Policy", href: "/policy" },
    { name: "Security", href: "/security" },
  ];

  return (
    <footer className="bg-[#FFFDFE] py-8 md:py-10 px-6 md:px-14 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo and Contact Section */}
        <div className="col-span-1 flex flex-col items-start justify-start">
          {/* Logo placeholder - you can add your logo here */}
          <div className="mb-6">
            <Logo />
          </div>

          <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-4">
            Contact Us
          </h3>
          <div className="space-y-2 text-base text-[#313131]">
            <p>Call: +423 569 157</p>
            <p>Mr. David Smith 3/23 Melbourne St</p>
            <p>Brisbane QLD 4000, Australia</p>
            <p className="mt-3">Email: example@email.com</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="col-span-1">
          <h3 className="text-2xl font-semibold text-[#1B1D1F] mb-4">
            Features
          </h3>
          <ul>
            {featureLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <li className="hover:text-gray-900 transition-colors text-[#6D737A] mb-3">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Team and Policies Section */}
        <div className="col-span-1">
          <h3 className="text-2xl font-semibold text-[#1B1D1F] mb-4">
            Team and policies
          </h3>
          <ul>
            {policyLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <li className="hover:text-gray-900 transition-colors text-[#6D737A] mb-3">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
