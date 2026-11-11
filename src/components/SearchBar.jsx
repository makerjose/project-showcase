
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Search projects..."
      aria-label="Search projects"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
