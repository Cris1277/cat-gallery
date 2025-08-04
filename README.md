# 🐱 Cat Gallery

> A clean, responsive React gallery of random cat images powered by TheCatAPI.

---

## 🔗 Live Demo

🌐 **Try it live:**  
[https://superb-chimera-934ac7.netlify.app](https://superb-chimera-934ac7.netlify.app)

---

## 🚀 Features

- 🎯 Displays **6 random cat images** in a 3x2 responsive grid
- 🔍 Click any image to view it in a **modal**
- 🔄 "Refresh Cats" button to load a new batch
- ⏳ **Loader** shown while all images preload
- 📱 Fully **responsive design**
- 🧠 Built with **React functional components + hooks**
- 📦 API logic separated into a `CatService.js` file

---

## 🧰 Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TheCatAPI](https://thecatapi.com/)
- HTML5 + CSS3
- JavaScript (ES6+)
- **No UI libraries used**

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Gallery.jsx      # Image grid
│   └── Modal.jsx        # Enlarged image modal
├── services/
│   └── CatService.js    # API handler
├── App.jsx              # Main logic
├── main.jsx             # React entry point
├── index.css            # Global styles
```

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/cat-gallery.git
cd cat-gallery
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Edit `src/services/CatService.js`:

```js
headers: {
  "x-api-key": "YOUR_API_KEY_HERE"
}
```

You can get a free API key at [thecatapi.com/signup](https://thecatapi.com/signup)

### 4. Run the app locally

```bash
npm run dev
```
---

## 🔮 Future Improvements

Here are some ideas to enhance the project in future versions:

- 🧑‍💼 **User login** and favorites system
- 🗂️ Add **filtering or categorization** (e.g., breed, color, tags)
- 🎥 Add **lazy loading** or **infinite scroll** for more dynamic galleries
- 💾 **Save favorite cats** to localStorage or a backend
- 🧭 Add **navigation bar** and multiple pages (About, Contact, etc.)
- 🌙 Add **dark mode toggle**
- 💬 Add **tooltips** or **accessibility improvements**
- 📸 Allow users to **upload their own cat images**
- ✨ Add **animations** on modal open/close or grid transitions
- 🌍 **Internationalization (i18n)** support

Feel free to fork the project and experiment!
## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ using React and TheCatAPI by Cristian Serrano.
