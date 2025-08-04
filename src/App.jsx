import React, { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import { getCats } from "./services/CatService";
import "./index.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCats = async () => {
    setLoading(true);
    try {
      const data = await getCats();
      setImages(data);
    } catch (error) {
      console.error("Error loading cats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <button
        onClick={fetchCats}
        className={`reloadBtn ${loading ? "hidden" : ""}`}
      >
        🔄 Refresh Cats
      </button>

      {loading && <div id="loader"></div>}

      {!loading && <Gallery images={images} onImageClick={setModalImage} />}

      <Modal imageUrl={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
};

export default App;
