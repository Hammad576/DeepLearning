"use client";
 
import Link from "next/link";

export default function HomePage() {
  return (
    <>
     
      <main className="py-16">
        <div className="container text-center">
          {/* Header Section */}
          <h1 className="text-4xl font-bold mb-4">Deep Learning Practice</h1>
          <p className="text-gray-400 mb-8">
            Explore deep learning projects under the supervision of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-xl font-bold">
              Dr Zunaira Rauf Phd.
            </span>
          </p>

          {/* Explore Models Button */}
          <Link href="/models">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-md font-medium text-lg hover:bg-blue-600 hover:cursor-pointer transition-all duration-300">
              Explore Our Models
            </button>
          </Link>

          {/* Explanation Section */}
          <div className="mt-12 space-y-4 text-gray-400 text-center">
            <h2 className="text-2xl font-bold text-red-400">Why Deep Learning?</h2>
            <p className="text-lg">
              Deep learning models are a subset of machine learning that use neural networks with multiple layers to process and analyze complex data. Unlike traditional machine learning, deep learning can automatically learn features from raw data, making it highly effective for tasks like image recognition, natural language processing, and time-series forecasting.
            </p>
            <p className="text-lg">
              These models are capable of handling large data sets and learning pattern between these dataset, which makes them superior to traditional machine learning in scenarios requiring high accuracy and scalability.
            </p>
          </div>
        </div>
      </main>
   
    </>
  );
}