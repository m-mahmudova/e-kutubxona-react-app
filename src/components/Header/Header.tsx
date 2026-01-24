import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import AuthBox from "./AuthBox";
import ThemeToggle from "./ThemeToggle";
interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
}
const Header: React.FC<HeaderProps> = ({ search, setSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <header className="header">
      <Logo />
      <i
        className="fa-solid fa-bars hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Navigation />
        <SearchBar search={search} setSearch={setSearch} />
        <AuthBox isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Link to="/cart">
          <img
            src="/images/shopping-basket (1).png"
            width="50"
            height="36"
            alt="cart"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>
        <ThemeToggle
          darkMode={darkMode}
          toggle={() => setDarkMode(!darkMode)}
        />
      </nav>
    </header>
  );
};
export default Header;
