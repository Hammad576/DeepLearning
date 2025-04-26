 

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

// Configure Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deep Learning Practice",
  description: "Explore deep learning projects under the supervision of Dr Zunaira Rauf Phd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1e1e2f] text-white`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}