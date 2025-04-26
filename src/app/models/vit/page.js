"use client";

import Image from "next/image";
import Link from "next/link";

export default function ViTPage() {
  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-zinc-800 border-b border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
            Vision Transformer (ViT)
          </h1>
          <p className="text-gray-400">
            A deep dive into Vision Transformers and their applications in computer vision.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Model Image */}
          <div className="relative h-96 overflow-hidden rounded-lg shadow-md mb-8">
            <Image
              src="/cutePuppu.webp" // Replace with your actual ViT image
              alt="Vision Transformer"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Model Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-400">Overview</h2>
            <p className="text-gray-400">
              Vision Transformers (ViTs) are a class of transformer-based models adapted for computer vision tasks. Unlike traditional convolutional neural networks (CNNs), ViTs divide images into patches and process them as sequences, leveraging the power of self-attention mechanisms.
            </p>

            <h2 className="text-2xl font-bold text-red-400">How It Works</h2>
            <p className="text-gray-400">
              ViTs split an image into fixed-size patches, flatten them, and feed them into a transformer encoder. Positional embeddings are added to retain spatial information. The transformer processes these patches using self-attention, allowing the model to capture global relationships in the image.
            </p>

            <h2 className="text-2xl font-bold text-red-400">Applications</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Image Classification (e.g., identifying objects in images)</li>
              <li>Object Detection (e.g., detecting multiple objects in a scene)</li>
              <li>Image Segmentation (e.g., dividing an image into meaningful regions)</li>
              <li>Medical Imaging (e.g., analyzing X-rays or MRIs)</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-400">Implementation</h2>
            <p className="text-gray-400">
              In this project, we implemented a Vision Transformer using PyTorch to classify images from the CIFAR-10 dataset. The model achieved competitive results compared to traditional CNNs, showcasing the potential of transformers in computer vision.
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