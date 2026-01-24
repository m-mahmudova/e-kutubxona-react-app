import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // LOGIN HOLATINI TEKSHIRISH
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // DARK MODE
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo">
        <img src="/images/logo.png" alt="logo" width="70" />
      </div>

      {/* HAMBURGER */}
      <i
        className="fa-solid fa-bars hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>

      {/* NAV */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/">E-Kutubxona</Link>
        <Link to="/new-books">Yangi kitoblar</Link>
        <Link to="/best-sellers">Eng ko‘p sotilganlar</Link>
        <Link to="/sales">Sotuv</Link>
        <Link to="/certificates">Sertifikatlar</Link>

        {/* QIDIRUV */}
        <div className="search-pill">
          <input
            type="text"
            placeholder="Qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Qidiruv</button>
        </div>

                <div className="auth-box">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="auth-item">
                <i className="fa-solid fa-key"></i>
                <span>Kirish</span>
              </Link>

              <Link to="/register" className="auth-item">
                <i className="fa-solid fa-user"></i>
                <span>Ro‘yxatdan o‘tish</span>
              </Link>
            </>
          ) : (
            <>
              <div className="auth-item">
                <i className="fa-solid fa-user"></i>
                <span>Profil</span>
              </div>

              <button onClick={handleLogout} className="auth-item logout">
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Chiqish</span>
              </button>
            </>
          )}
        </div>

        {/*  CART */}
        <Link to="/cart">
          <img
            src="/images/shopping-basket (1).png"
            className="cart-icon"
            width="50"
            height="36"
            alt="cart"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* 🌙 DARK MODE */}
        <i
          className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} dark-icon`}
          onClick={() => setDarkMode(!darkMode)}
        ></i>
      </nav>
    </header>
  );
}

export default Header;
