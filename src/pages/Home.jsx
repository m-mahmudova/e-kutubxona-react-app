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
  const slides = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
  ];

  const books = [
    "/images/12.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10..jpg",
    "/images/4.jpg",
    "/images/1.jpg",
  ];

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

          <Books books={books} book={book} setBooks={setBooks} />
        </main>
      </div>

    
    </div>
  );
}

export default Home;
