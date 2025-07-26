import type { Metadata } from "next";
import {
  Poppins,
  Inter,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-slider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});
const jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${jakarta.variable} ${playfair.variable} font-poppins antialiased`}
      >
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
