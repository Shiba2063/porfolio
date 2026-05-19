import React from "react";
import { EXPERIENCE_CARDS } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="fade-in">
        <div className="section-tag">Leadership & Growth</div>
        <h2 className="section-title">Experience &<br />Leadership</h2>
        <p className="section-subtitle">Beyond code, I've shaped myself through leadership, collaboration, and community involvement.</p>
      </div>
      <div className="exp-grid fade-in">
        {EXPERIENCE_CARDS.map((e, i) => (
          <div className="exp-card" key={i}>
            <div className="exp-card-accent" />
            <div className="exp-card-icon">{e.icon}</div>
            <div className="exp-card-title">{e.title}</div>
            <div className="exp-card-desc">{e.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}