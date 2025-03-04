import NavigationButtons from "./NavigationButtons";
import SearchBar from "./SearchBar";
import "../css/NavigationBar.css";
import Setting from "./Setting";
import LogOutButton from "./LogOutButton";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavigationButtons />
      </div>
      <div className="nav-middle">
        <SearchBar />
      </div>
      <div className="nav-right">
        <Setting />
        <LogOutButton />
      </div>
    </nav>
  );
}

export default NavigationBar;
