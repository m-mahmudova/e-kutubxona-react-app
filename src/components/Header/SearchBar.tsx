interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => (
  <div className="search-pill">
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
