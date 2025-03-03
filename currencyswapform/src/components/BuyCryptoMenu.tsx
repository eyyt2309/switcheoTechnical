import { useState } from "react";

import tokens from "../assets/tokens"; // Ensure correct import
import "../css/BuyCryptoMenu.css";
import { ChevronDown, ArrowDown, Search, X } from "lucide-react";

function BuyCryptoMenu() {
  const [buyAmount, setBuyAmount] = useState("");
  const [selectedBuyToken, setSelectedBuyToken] = useState("USDC");
  const [searchQuery, setSearchQuery] = useState("");
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);

  const buyTokenData = tokens.find(
    (token) => token.currency === selectedBuyToken
  );

  const boughtAmount = buyTokenData
    ? (parseFloat(buyAmount) || 0) * (1 / buyTokenData.price)
    : 0;

  const filteredTokens = tokens.filter(
    (token) =>
      token.currency.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.price.toString().includes(searchQuery)
  );

  return (
    <div className="buy-menu-container">
      <div className="buy-menu">
        <div className="buy-box">
          <div className="buy-header">Using $USD</div>
          <input
            type="number"
            className="buy-input"
            placeholder="0"
            value={buyAmount}
            onChange={(e) => setBuyAmount(e.target.value)}
          />
        </div>
        <div className="buy-box">
          <div className="buy-header">Buying</div>
          <input
            type="number"
            className="buy-input"
            placeholder="0"
            value={boughtAmount.toFixed(2)} // Shows automatically calculated buy amount
            readOnly
          />
        </div>
        <button
          className="token-select"
          onClick={() => setIsTokenModalOpen(true)}
        >
          {selectedBuyToken} <ChevronDown size={16} />
        </button>
        {/* Get Started Button */}
        <button className="connect-wallet">Connect Wallet</button>
        {isTokenModalOpen && (
          <div className="token-modal">
            <div className="token-modal-content">
              <div className="modal-header">
                <h3>Select a token</h3>
                <button
                  className="close-button"
                  onClick={() => setIsTokenModalOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Search Bar */}
              <div className="token-search">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search tokens"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Token List */}
              <div className="token-list">
                {filteredTokens.map((token) => (
                  <div
                    key={token.currency}
                    className="token-item"
                    onClick={() => {
                      setSelectedBuyToken(token.currency);
                      setIsTokenModalOpen(false);
                    }}
                  >
                    <div className="token-info">
                      <span className="token-name">{token.currency}</span>
                      <span className="token-price">
                        ${token.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuyCryptoMenu;
