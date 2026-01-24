import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NewBooks from "./pages/NewBooks";
import BestSellers from "./pages/BestSellers";
import Sales from "./pages/Sales";
import Certificates from "./pages/Certificates";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-books" element={<NewBooks />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
