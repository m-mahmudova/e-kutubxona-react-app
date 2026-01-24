import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => (
  <div className="search-pill">
    {/* 🔍 LUPA ICON (icon-only rejim uchun) */}
    <i className="fa-solid fa-magnifying-glass search-icon"></i>

    <input
      type="text"
      placeholder="Qidirish..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <button>Qidiruv</button>
  </div>
);

export default SearchBar;
