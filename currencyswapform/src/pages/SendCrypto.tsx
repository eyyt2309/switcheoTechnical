import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import tokens from "../assets/tokens";
import "../css/SendCrypto.css";

function SendCrypto() {
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("ETH");
  const [recipient, setRecipient] = useState("");
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);

  const selectedTokenData = tokens.find(
    (token) => token.currency === selectedToken
  );
  const usdValue = selectedTokenData
    ? (parseFloat(amount) || 0) * selectedTokenData.price
    : 0;

  return (
    <div>
      <NavigationBar />
      <div className="send-container">
        <div className="send-box">
          <p className="send-title">You're sending</p>

          {/* Amount Input */}
          <div className="amount-display">
            <span className="usd-value">${usdValue.toFixed(2)}</span>
            <div className="input-wrapper">
              <input
                type="text"
                className="amount-input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <span className="crypto-value">
              {amount || "0"} {selectedToken}
            </span>
          </div>
        </div>

        <div
          className="send-token-selector"
          onClick={() => setIsTokenModalOpen(true)}
        >
          <span>{selectedToken}</span>
          <ChevronDown size={16} />
        </div>

        {/* Recipient Input - Properly Centered */}
        <div className="recipient-input">
          <input
            type="text"
            placeholder="Wallet address or ENS name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>

        {/* Connect Wallet Button */}
        <button className="connect-wallet">Connect wallet</button>

        {/* Token Selector Modal */}
        {isTokenModalOpen && (
          <div className="token-modal">
            <div className="token-modal-content">
              <h3>Select a token</h3>
              {tokens.map((token) => (
                <div
                  key={token.currency}
                  className="token-item"
                  onClick={() => {
                    setSelectedToken(token.currency);
                    setIsTokenModalOpen(false);
                  }}
                >
                  <span>{token.currency}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SendCrypto;
