// getCats function fetches 6 random cat images from TheCatAPI
export const getCats = async () => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=6&mime_types=jpg,png",
    {
      headers: {
        // Replace with your own API key from TheCatAPI
        "x-api-key": "YOUR_API_KEY_HERE"
      }
    }
  );

  // Parse and return the response JSON containing image data
  return await response.json();
};
