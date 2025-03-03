import { useState } from "react";
import { Search } from "lucide-react";
import "../css/SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="searchbar"></div>
    </>
  );
}

export default SearchBar;
