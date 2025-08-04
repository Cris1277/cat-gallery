import React, { useEffect, useState, useRef } from "react";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import { getCats } from "./services/CatService";
import "./index.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const hasFetched = useRef(false); // 👈 esto evita que se ejecute dos veces

  const fetchCats = async () => {
    setLoading(true);
    try {
      const data = await getCats();

      // Preload each image and resolve once loaded
      const preloadPromises = data.map((cat) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = cat.url;
          img.onload = () => resolve(cat);
          img.onerror = () => resolve(cat); // fallback on error
        });
      });

      const loadedCats = await Promise.all(preloadPromises);
      setImages(loadedCats);
    } catch (error) {
      console.error("Error loading cats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      fetchCats();              // ✅ solo se ejecuta una vez
      hasFetched.current = true;
    }
  }, []);

  return (

    <div>
      <h1 className="title">🐱 Cat Gallery</h1>

      <button
        onClick={fetchCats}
        className={`reloadBtn ${loading ? "hidden" : ""}`}
      >
        🔄 Refresh Cats
      </button>

      {loading && <div id="loader"></div>}

      {!loading && <Gallery images={images} onImageClick={setModalImage} />}

      <Modal imageUrl={modalImage} onClose={() => setModalImage(null)} />
      <footer className="footer">
        Made with ❤️ using React & TheCatAPI
      </footer>

    </div>
  );
};

export default App;

