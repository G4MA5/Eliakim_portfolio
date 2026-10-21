import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Accueil from "./Pages/Acceuil"; 
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";

// Lazy loading des pages secondaires pour ne pas charger leurs images lourdes dès l'accueil
const GenieUPB = lazy(() => import("./Pages/genieupb"));
const Cinevibe = lazy(() => import("./Pages/cinevibe"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule le temps d'animation du Pac-Man + ouverture
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      <Router>
        <Navbar />
        <Suspense fallback={
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-[#FA8072] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/genieupb" element={<GenieUPB />} />
            <Route path="/cinevibe" element={<Cinevibe />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}
