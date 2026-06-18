import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;