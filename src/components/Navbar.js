import React from "react";
import logo from "../assets/Shibalogo.png";

export default function Navbar({ nav, mobileOpen, setMobileOpen, theme, setTheme }) {
  return (
    <>
      <nav>
        {/* Logo + Brand Name */}
        <a href="/" className="nav-logo">
          <img src={logo} alt="Shiba Logo" />
          <span>shiba.bhatta</span>
        </a>

        <ul className="nav-links">
          {nav.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setMobileOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            className="theme-btn"
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {nav.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMobileOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}