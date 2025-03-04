import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import "../css/LogOutButton.css";

function LogOutButton() {
  return (
    <div className="logout-button-wrapper">
      <Link to="/login">
        <button className="logout-button">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </Link>
    </div>
  );
}

export default LogOutButton;
