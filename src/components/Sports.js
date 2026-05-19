import React from "react";
import { SPORTS } from "../data/portfolioData";

export default function Sports() {
  return (
    <section id="sports">
      <div className="fade-in">
        <div className="section-tag">Beyond the Screen</div>
        <h2 className="section-title">Sports &<br />Hobbies</h2>
        <p className="section-subtitle">A balanced life fuels a sharp mind. Here's what keeps me energized off the keyboard.</p>
      </div>
      <div className="sports-grid fade-in">
        {SPORTS.map((s, i) => (
          <div className="sport-card" key={i}>
            <div className="sport-emoji">{s.emoji}</div>
            <div className="sport-name">{s.name}</div>
            <div className="sport-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}