import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ReactCountryFlag from "react-country-flag";
import logo from "../assets/Shibalogo.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
          <img src={logo} alt="Shiba Logo" />
      </div>

      <div className="footer-copy">
  © {new Date().getFullYear()} Shiba Bhatta · Crafted with ❤️ in Kathmandu, Nepal

  <ReactCountryFlag
    countryCode="NP"
    svg
    style={{
      width: "1.5em",
      height: "1.5em",
      marginLeft: "8px",
    }}
  />
</div>

      <div className="footer-links">
        <a
          href="https://github.com/Shiba2063"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/shiba-bhatta-43823b38b"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://facebook.com/shiba.bhatta.2025"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/shiba_bhatta?igsh=bjVzcWdxcWtweTl3"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
          <a
          href="https://youtube.com/@Shibabhatta-2063"
          target="_blank"
          rel="noreferrer"
          title="Youtube"
        >
          <FaYoutube />
        </a>
          <a
          href="https://twitter.com/ShibaBhatta123"
          target="_blank"
          rel="noreferrer"
          title="X"
        >
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
}