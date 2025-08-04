// Import core React tools and custom components
import React, { useEffect, useState, useRef } from "react";
import Gallery from "./components/Gallery";           // Component to display the image grid
import Modal from "./components/Modal";               // Component to display the enlarged image
import { getCats } from "./services/CatService";      // Service to fetch cat images from API
import "./index.css";                                 // Global styles

const App = () => {
  // State for loaded cat images
  const [images, setImages] = useState([]);

  // State to control which image is open in the modal
  const [modalImage, setModalImage] = useState(null);

  // State to track whether the app is currently loading
  const [loading, setLoading] = useState(false);

  // useRef to prevent multiple API calls on initial mount (e.g., in React StrictMode)
  const hasFetched = useRef(false);

  // Fetch and preload 6 random cat images from the API
  const fetchCats = async () => {
    setLoading(true); // Show loader

    try {
      const data = await getCats(); // Get image metadata from API

      // Preload images before rendering them
      const preloadPromises = data.map((cat) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = cat.url;
          img.onload = () => resolve(cat);       // Resolve when image successfully loads
          img.onerror = () => resolve(cat);      // Resolve even if image fails (to avoid blocking)
        });
      });

      const loadedCats = await Promise.all(preloadPromises); // Wait for all images to preload
      setImages(loadedCats); // Update state with fully loaded images
    } catch (error) {
      console.error("Error loading cats:", error); // Log any fetch or loading errors
    } finally {
      setLoading(false); // Hide loader
    }
  };

  // Run fetchCats once on component mount
  useEffect(() => {
    if (!hasFetched.current) {
      fetchCats();              // Call API once when the app starts
      hasFetched.current = true; // Mark as fetched to prevent re-fetching
    }
  }, []);

  return (
    <div>
      {loading ? (
        // Loader shown while images are being fetched and preloaded
        <div id="loader"></div>
      ) : (
        <>
          {/* Page title */}
          <h1 className="title">🐱 Cat Gallery</h1>

          {/* Button to refresh the gallery with new cats */}
          <button
            onClick={fetchCats}
            className="reloadBtn"
          >
            🔄 Refresh Cats
          </button>

          {/* Image gallery component */}
          <Gallery images={images} onImageClick={setModalImage} />

          {/* Modal to display the enlarged image */}
          <Modal imageUrl={modalImage} onClose={() => setModalImage(null)} />

          {/* Page footer */}
          <footer className="footer">
            Made with ❤️ using React & TheCatAPI by Cristian Serrano
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
