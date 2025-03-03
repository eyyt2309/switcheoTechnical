import { useState } from "react";
import "../css/BuySell.css";
import { ChevronDown, ArrowDown, Search, X } from "lucide-react";
import tokens from "../assets/tokens"; // Ensure correct import

function BuySell() {
  const [sellAmount, setSellAmount] = useState("");
  const [selectedSellToken, setSelectedSellToken] = useState("ETH");
  const [selectedBuyToken, setSelectedBuyToken] = useState("USDC"); // Default different token
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [tokenType, setTokenType] = useState<"sell" | "buy">("sell"); // Tracks which modal is open

  // Get token prices
  const sellTokenData = tokens.find(
    (token) => token.currency === selectedSellToken
  );
  const buyTokenData = tokens.find(
    (token) => token.currency === selectedBuyToken
  );

  // Calculate USD value of selling token
  const usdValue = sellTokenData
    ? (parseFloat(sellAmount) || 0) * sellTokenData.price
    : 0;

  // Automatically calculate how much of the buying token you get
  const buyAmount =
    buyTokenData && sellTokenData
      ? (parseFloat(sellAmount) || 0) *
        (sellTokenData.price / buyTokenData.price)
      : 0;

  // Filter out the selected token to prevent selecting the same token for both buy and sell
  const filteredTokens = tokens.filter(
    (token) =>
      (token.currency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.price.toString().includes(searchQuery)) &&
      (tokenType === "sell"
        ? token.currency !== selectedBuyToken
        : token.currency !== selectedSellToken)
  );

  return (
    <div className="swap-container">
      {/* Sell Section */}
      <div className="swap-box">
        <div className="swap-header">Sell</div>
        <input
          type="number"
          className="swap-input"
          placeholder="0"
          value={sellAmount}
          onChange={(e) => setSellAmount(e.target.value)}
        />
        <div className="swap-subtext">${usdValue.toFixed(2)}</div>

        {/* Sell Token Selector */}
        <div
          className="token-selector"
          onClick={() => {
            setTokenType("sell");
            setIsTokenModalOpen(true);
          }}
        >
          <span>{selectedSellToken}</span>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Swap Button */}
      <button className="swap-arrow">
        <ArrowDown size={20} />
      </button>

      {/* Buy Section */}
      <div className="swap-box">
        <div className="swap-header">Buy</div>
        <input
          type="number"
          className="swap-input"
          placeholder="0"
          value={buyAmount.toFixed(6)} // Shows automatically calculated buy amount
          readOnly
        />

        {/* Buy Token Selector */}
        <button
          className="token-select"
          onClick={() => {
            setTokenType("buy");
            setIsTokenModalOpen(true);
          }}
        >
          {selectedBuyToken} <ChevronDown size={16} />
        </button>
      </div>

      {/* Get Started Button */}
      <button className="swap-button">Get started</button>

      {/* Token Selector Modal */}
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
                    if (tokenType === "sell") {
                      setSelectedSellToken(token.currency);
                    } else {
                      setSelectedBuyToken(token.currency);
                    }
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
  );
}

export default BuySell;
