"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-[#1e1e2f]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container text-center text-gray-400 text-sm font-medium"
      >
        Supervised by{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">
          Dr Zunaira Rauf Phd.
        </span>
      </motion.div>
    </footer>
  );
}