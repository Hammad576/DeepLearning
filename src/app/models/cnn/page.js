"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CNNPage() {
  const [image, setImage] = useState(null); // Store the uploaded image
  const [prediction, setPrediction] = useState(""); // Store the model's prediction
  const [loading, setLoading] = useState(false); // Show loading state during prediction

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the uploaded image
    }
  };

  // Handle prediction request
  const handlePredict = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      const fileInput = document.querySelector('input[type="file"]');
      formData.append("image", fileInput.files[0]);

      const response = await fetch("/api/predict", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setPrediction(result.prediction); // Set the prediction result
    } catch (error) {
      console.error("Error predicting:", error);
      alert("An error occurred while processing the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-zinc-800 border-b border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
            Convolutional Neural Networks (CNN)
          </h1>
          <p className="text-gray-400">
            A CNN Model which can classify Cats and Dogs. If you provide an image, it can differentiate whether it is a cat or a dog.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* File Upload Section */}
          <div className="text-center space-y-4">
            <label
              htmlFor="upload"
              className="bg-red-500 text-white px-6 py-3 rounded font-medium cursor-pointer hover:bg-red-600 transition-colors duration-300"
            >
              Upload Image
            </label>
            <input
              id="upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            {image && (
              <div className="mt-6">
                <h2 className="text-xl font-bold text-red-400">Uploaded Image:</h2>
                <Image
                  src={image}
                  alt="Uploaded Image"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            )}

            <button
              onClick={handlePredict}
              disabled={loading}
              className={`bg-red-500 text-white px-6 py-3 rounded font-medium mt-4 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
              } transition-all duration-300`}
            >
              {loading ? "Predicting..." : "Predict"}
            </button>

            {prediction && (
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold text-green-400">
                  Prediction:
                </h2>
                <p className="text-xl text-gray-400">{prediction}</p>
              </div>
            )}
          </div>

          {/* Back to Models Button */}
          <div className="mt-10 text-center">
            <Link href="/models">
              <button className="bg-red-500 text-white px-6 py-3 rounded font-medium hover:bg-red-600 transition-colors duration-300">
                Back to Models
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}