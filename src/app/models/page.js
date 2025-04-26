import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModelCard from "../components/ModelCard";
import { modelsData } from "../../data/modelsData";

export default function ModelsPage() {
  return (
    <>
      <Navbar />
      <main className="py-16 ">
        <div className="container">
          <h2 className="text-3xl font-bold   mb-8 text-center">Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   ml-4">
            {modelsData.map((model) => (
              <ModelCard
                imageUrl={model.image}
                key={model.id}
                title={model.title}
                summary={model.summary}
                href={`/models/${model.slug}`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}