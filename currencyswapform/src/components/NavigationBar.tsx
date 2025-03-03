import NavigationButtons from "./NavigationButtons";
import SearchBar from "./SearchBar";
import "../css/NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavigationButtons />
      </div>
      <div className="nav-middle">
        <SearchBar />
      </div>
    </nav>
  );
}

export default NavigationBar;
