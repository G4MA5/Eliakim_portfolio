import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Accueil from "./Pages/Acceuil"; 
import GenieUPB from "./Pages/genieupb";
import Cinevibe from "./Pages/cinevibe";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4400); // Wait for Pac-Man animation + expansion

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
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/genieupb" element={<GenieUPB />} />
          <Route path="/cinevibe" element={<Cinevibe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}