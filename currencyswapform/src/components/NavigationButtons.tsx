import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ArrowLeftRight,
  BarChart2,
  Send,
  CreditCard,
} from "lucide-react";
import MenuItem from "./MenuItem";
import "../css/NavigationButtons.css";

function NavigationButtons() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/home" className="logo">
            <img src="currencyswapform\public\AAVE.svg"></img>
            <span>BitBase</span>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/swap" className="dropdown-button">
            <span>Trade</span>
            <ChevronDown className="icon" />
          </Link>
          <div className="dropdown-menu">
            <MenuItem
              icon={<ArrowLeftRight size={16} />}
              text="Swap"
              link="/swap"
            />
            <MenuItem
              icon={<BarChart2 size={16} />}
              text="Limit"
              link="/limit"
            />
            <MenuItem icon={<Send size={16} />} text="Send" link="/send" />
            <MenuItem icon={<CreditCard size={16} />} text="Buy" link="/buy" />
          </div>
        </div>

        <div className="dropdown">
          <Link to="/explore" className="dropdown-button">
            <span>Explore</span>
            <ChevronDown className="icon" />
          </Link>
          <div className="dropdown-menu">
            <MenuItem
              icon={<BarChart2 size={16} />}
              text="Tokens"
              link="/explore/tokens"
            />
            <MenuItem
              icon={<Send size={16} />}
              text="Pools"
              link="/explore/pools"
            />
            <MenuItem
              icon={<CreditCard size={16} />}
              text="Transactions"
              link="/explore/transactions"
            />
          </div>
        </div>

        <div className="dropdown">
          <Link to="/positions" className="dropdown-button">
            <span>Pool</span>
            <ChevronDown className="icon" />
          </Link>
          <div className="dropdown-menu">
            <MenuItem icon={<Send size={16} />} text="Send" link="/positions" />
            <MenuItem
              icon={<CreditCard size={16} />}
              text="Buy"
              link="/positions/create"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationButtons;
