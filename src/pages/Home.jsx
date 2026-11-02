
import { useState } from "react";
import "../style1.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import Books from "../components/BookList";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const base = import.meta.env.BASE_URL;

  // Slider rasmlari
  const slides = [
    `${base}images/slider1.jpg`,
    `${base}images/slider2.jpg`,
    `${base}images/slider3.jpg`,
  ];

  // public/images papkasidagi rasmlarni avtomatik olish
  const books = Object.keys(
    import.meta.glob("/public/images/*.{jpg,jpeg,png,webp}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  )
    .filter((path) => !path.toLowerCase().includes("slider"))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true })
    )
    .map((path) => `${base}${path.replace("/public/", "")}`);

  const [activeSlide, setActiveSlide] = useState(0);

  const [book, setBooks] = useState([
    "Clean Code",
    "Atomic Habits",
    "Deep Work",
    "Psychology of Money",
  ]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="container">
        <Sidebar />

        <main className="content">
          <Slider
            slides={slides}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />

          <section className="banners">
            <div className="banner banner-1">
              <h3>Eng tavsiya etilgan kitoblar</h3>
            </div>

            <div className="banner banner-2">
              <h3>Eng ko‘p o‘qilgan kitoblar</h3>
            </div>
          </section>

          <Books
            books={books}
            book={book}
            setBooks={setBooks}
          />
        </main>
      </div>
    </div>
  );
}

export default Home;
