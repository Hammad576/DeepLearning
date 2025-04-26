"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace this with actual backend logic if needed)
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-zinc-800 border-b border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400">
            Have questions or feedback? Get in touch with us!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto bg-[#1e1e2f] rounded-lg shadow-md p-8">
            {isSubmitted ? (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-green-400">
                  Message Sent Successfully!
                </h2>
                <p className="text-gray-400">
                  Thank you for reaching out. We will get back to you soon.
                </p>
                <Link href="/">
                  <button className="bg-red-500 text-white px-6 py-3 rounded font-medium hover:bg-red-600 transition-colors duration-300">
                    Back to Home
                  </button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-zinc-700 border border-slate-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-zinc-700 border border-slate-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-zinc-700 border border-slate-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-6 py-3 rounded font-medium hover:bg-red-600 transition-colors duration-300 w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}