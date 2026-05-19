import React from "react";
import { useTyping } from "../hooks/useTyping";
import ReactCountryFlag from "react-country-flag";
import profilePic from "../assets/Shiba.jpg";

export default function Hero() {
  const typed = useTyping(["BEIT Student @ NCIT", "Future Full-Stack Developer", "Tech Innovator from Nepal", "Cricket & Code Enthusiast"]);

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-inner">
        <div>
          <div className="hero-badge">Available for Internships</div>
          <h1 className="hero-name">SHIBA<br />BHATTA</h1>
          <p className="hero-serif">BEIT Student · Future Tech Innovator · Passionate Developer</p>
          <div className="typing-container">
            &rarr; {typed}<span className="typing-cursor" />
          </div>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">🚀 View Projects</a>
            <a href="#contact" className="btn-outline">📬 Get in Touch</a>
            <a href="#" className="btn-outline" onClick={e => { e.preventDefault(); alert("CV download coming soon!"); }}>⬇ Download CV</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-num">5+</div><div className="hero-stat-label">Projects</div></div>
            <div className="hero-stat"><div className="hero-stat-num">9+</div><div className="hero-stat-label">Skills</div></div>
            <div className="hero-stat"><div className="hero-stat-num">3+</div><div className="hero-stat-label">Years Study</div></div>
            <div className="hero-stat"><div className="hero-stat-num"><ReactCountryFlag
                countryCode="NP"
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  marginLeft: "8px",
                }}
              /></div><div className="hero-stat-label">Nepal</div></div>
          </div>
        </div>
        <div className="hero-avatar-wrap">
          <div className="hero-avatar">
         <img src={profilePic} alt="Shiba Bhatta" />
         </div>
          <div className="hero-avatar-ring" />
        </div>
      </div>
    </section>
  );
}