"use client";

import Image from "next/image";
import Link from "next/link";

export default function CNNPage() {
  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-zinc-800 border-b border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
            Convolutional Neural Networks (CNN)
          </h1>
          <p className="text-gray-400">
            A deep dive into CNNs and their applications in image classification.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Model Image */}
          <div className="relative h-96 overflow-hidden rounded-lg shadow-md mb-8">
            <Image
              src="/cutePuppu.webp" // Replace with your actual CNN image
              alt="Convolutional Neural Networks"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Model Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-400">Overview</h2>
            <p className="text-gray-400">
              Convolutional Neural Networks (CNNs) are a class of deep learning models specifically designed for processing structured grid data such as images. They excel at tasks like image classification, object detection, and segmentation due to their ability to capture spatial hierarchies in data.
            </p>

            <h2 className="text-2xl font-bold text-red-400">How It Works</h2>
            <p className="text-gray-400">
              CNNs work by applying convolutional filters to input images to extract features such as edges, textures, and patterns. These features are then passed through pooling layers to reduce dimensionality and fully connected layers for classification or regression tasks.
            </p>

            <h2 className="text-2xl font-bold text-red-400">Applications</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Image Classification (e.g., identifying cats vs. dogs)</li>
              <li>Object Detection (e.g., detecting cars in a video frame)</li>
              <li>Medical Imaging (e.g., diagnosing diseases from X-rays)</li>
              <li>Facial Recognition Systems</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-400">Implementation</h2>
            <p className="text-gray-400">
              In this project, we implemented a CNN using TensorFlow/Keras to classify images into two categories: cats and dogs. The model achieved an accuracy of 95% on the test dataset after training for 10 epochs.
            </p>

            {/* Back to Models Button */}
            <div className="mt-10 text-center">
              <Link href="/models">
                <button className="bg-red-500 text-white px-6 py-3 rounded font-medium hover:bg-red-600 transition-colors duration-300">
                  Back to Models
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}