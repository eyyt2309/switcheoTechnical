import "../css/LoginMenu.css";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginMenu() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="login-menu-box">
        <h1 className="login-header">Login</h1>
        <div className="input-box">
          <input
            type="text"
            className="username-password-input"
            placeholder="Input Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="input-box">
          <input
            type="text"
            className="username-password-input"
            placeholder="Input password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="login-button-box">
          <Link to="/home">
            <button className="login-button">
              <LogIn size={18} />
              <span> Log In</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginMenu;
