import NavigationButtons from "./NavigationButtons";
import "../css/NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <NavigationButtons />
      <SearchBar />
    </nav>
  );
}

export default NavigationBar;
