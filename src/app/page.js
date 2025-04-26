import Navbar from '../app/components/Navbar';
import Footer from "../app/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Deep Learning Practice</h1>
          <p className="text-gray-400 mb-8">
            Explore deep learning projects under the supervision of Dr Zunaira Rauf Phd.
          </p>
          <Link href="/models">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Explore Models
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}