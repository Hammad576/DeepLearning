"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="py-6 border-b border-gray-800 bg-[#1e1e2f]">
      <div className="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 sm:mb-0"
        >
          Deep Learning
        </motion.h1>

        {/* Navigation Links */}
        <ul className="mr-[40vw] flex gap-6 text-lg font-medium">
          <li>
            <motion.div
              whileHover={{ scale: 1.1, translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/"
                className="relative text-gray-300 font-semibold hover:text-blue-400 transition-colors duration-300 after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.1, translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/models"
                className="relative text-gray-300 font-semibold hover:text-blue-400 transition-colors duration-300 after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Models
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.1, translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/contact"
                className="relative text-gray-300 font-semibold hover:text-blue-400 transition-colors duration-300 after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </Link>
            </motion.div>
          </li>
        </ul>
      </div>
    </nav>
  );
}