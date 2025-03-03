import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SendCrypto from "./pages/SendCrypto";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/send" element={<SendCrypto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
