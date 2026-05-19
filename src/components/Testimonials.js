import React from "react";
import { TESTIMONIALS } from "../data/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="fade-in">
        <div className="section-tag">Voices</div>
        <h2 className="section-title">What People<br />Say</h2>
      </div>
      <div className="testi-grid fade-in">
        {TESTIMONIALS.map((t, i) => (
          <div className="testi-card" key={i}>
            <div className="testi-quote">"</div>
            <div className="testi-text">{t.text}</div>
            <div className="testi-author">
              <div className="testi-avatar">{t.emoji}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}