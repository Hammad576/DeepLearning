"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ModelCard({ title, summary, href }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#1e1e2f] rounded-lg overflow-hidden border border-slate-800 hover:border-red-500 transition-all group shadow-md hover:shadow-lg"
    >
      {/* Model Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/cnnLogo2.avif" // Replace with your model image path
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
          Active
        </div>
      </div>

      {/* Model Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-red-400 font-medium">Category</span>
          <span className="text-sm text-gray-400">2025</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{summary}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Location</span>
          <Link href={href}>
            <span className="text-red-400 hover:text-red-300 font-medium text-sm transition-colors">
              View Details →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}