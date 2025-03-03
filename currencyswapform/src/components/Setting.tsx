import { useState, useEffect, useRef } from "react";
import { Moon, Sun, MoreVertical } from "lucide-react";
import "../css/Setting.css";

function Setting() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("Auto");
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "Auto" ? "Dark" : prevTheme === "Dark" ? "Light" : "Auto"
    );
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="setting-container" ref={menuRef}>
      {/* Settings Button */}
      <button
        className="setting-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MoreVertical size={20} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="setting-dropdown">
          <h3>Global preferences</h3>

          {/* Theme Toggle */}
          <div className="setting-item">
            <span>Theme</span>
            <div className="theme-toggle" onClick={toggleTheme}>
              <span className={theme === "Auto" ? "active" : ""}>Auto</span>
              {theme === "Dark" ? <Moon size={16} /> : <Sun size={16} />}
              <span className={theme === "Dark" ? "active" : ""}>Dark</span>
            </div>
          </div>

          {/* Language Selector */}
          <div className="setting-item">
            <span>Language</span>
            <span className="setting-value">English &gt;</span>
          </div>

          {/* Currency Selector */}
          <div className="setting-item">
            <span>Currency</span>
            <span className="setting-value">USD &gt;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
