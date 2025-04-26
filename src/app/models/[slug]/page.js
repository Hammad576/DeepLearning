import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { modelsData } from "../../../../../data/modelsData";
import { notFound } from "next/navigation";

export default function ModelDetails({ params }) {
  const model = modelsData.find((m) => m.slug === params.slug);

  if (!model) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">{model.title}</h1>
          <p className="text-gray-400 mb-4">{model.summary}</p>
          <img
            src={model.image}
            alt={model.title}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <p className="text-gray-300">{model.description}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}