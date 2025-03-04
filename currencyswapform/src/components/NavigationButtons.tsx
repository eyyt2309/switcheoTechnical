import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ArrowLeftRight,
  Mails,
  Send,
  CreditCard,
  CircleDollarSign,
  WavesLadder,
  Barcode,
  Newspaper,
} from "lucide-react";
import MenuItem from "./MenuItem";
import "../css/NavigationButtons.css";

function NavigationButtons() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/home" className="logo">
            <img src="AAVE.svg"></img>
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
              icon={<CircleDollarSign size={16} />}
              text="Tokens"
              link="/explore/tokens"
            />
            <MenuItem
              icon={<WavesLadder size={16} />}
              text="Pools"
              link="/explore/pools"
            />
            <MenuItem
              icon={<Barcode size={16} />}
              text="Transactions"
              link="/explore/transactions"
            />
          </div>
        </div>

        <div className="dropdown">
          <Link to="/positions" className="dropdown-button">
            <span>News</span>
            <ChevronDown className="icon" />
          </Link>
          <div className="dropdown-menu">
            <MenuItem
              icon={<Newspaper size={16} />}
              text="BitBase Reads"
              link="/read"
            />
            <MenuItem
              icon={<Mails size={16} />}
              text="Opinions"
              link="/opinion"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationButtons;
