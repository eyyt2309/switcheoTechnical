import { useState } from "react";
import { Search } from "lucide-react";
import "../css/SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-bar">
      <Search className="search-icon" size={18} />
      <input
        type="text"
        className="search-input"
        placeholder="Search tokens"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className="search-shortcut"></div>
    </div>
  );
}

export default SearchBar;
