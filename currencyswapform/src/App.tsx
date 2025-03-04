import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SendCrypto from "./pages/SendCrypto";
import SwapCrypto from "./pages/SwapCrypto";
import BuyCrypto from "./pages/BuyCrypto";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/swap" element={<SwapCrypto />} />
          <Route path="/send" element={<SendCrypto />} />
          <Route path="/buy" element={<BuyCrypto />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
