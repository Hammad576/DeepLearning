"use client";

import Image from "next/image";
import Link from "next/link";

export default function RNNPage() {
  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-zinc-800 border-b border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
            Recurrent Neural Networks (RNN)
          </h1>
          <p className="text-gray-400">
            A deep dive into RNNs and their applications in sequential data processing.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Model Image */}
          <div className="relative h-96 overflow-hidden rounded-lg shadow-md mb-8">
            <Image
              src="/cutePuppu.webp" // Replace with your actual RNN image
              alt="Recurrent Neural Networks"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Model Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-400">Overview</h2>
            <p className="text-gray-400">
              Recurrent Neural Networks (RNNs) are a class of neural networks designed to handle sequential data. Unlike traditional feedforward networks, RNNs maintain a hidden state that allows them to capture temporal dependencies in data.
            </p>

            <h2 className="text-2xl font-bold text-red-400">How It Works</h2>
            <p className="text-gray-400">
              RNNs process input data step by step, updating their hidden state at each time step. This makes them ideal for tasks like language modeling, time-series prediction, and sequence generation. However, vanilla RNNs suffer from issues like vanishing gradients, which led to the development of more advanced variants like LSTMs and GRUs.
            </p>

            <h2 className="text-2xl font-bold text-red-400">Applications</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Text Generation (e.g., writing poetry or stories)</li>
              <li>Speech Recognition (e.g., transcribing audio to text)</li>
              <li>Time-Series Forecasting (e.g., predicting stock prices)</li>
              <li>Machine Translation (e.g., translating English to French)</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-400">Implementation</h2>
            <p className="text-gray-400">
              In this project, we implemented an RNN using TensorFlow/Keras to predict the next word in a sentence. The model was trained on a dataset of Shakespeares works and achieved promising results in generating coherent text.
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