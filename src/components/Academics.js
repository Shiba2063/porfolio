import React from "react";
import { CERTS } from "../data/portfolioData";

export default function Academics() {
  return (
    <section id="academic">
      <div className="fade-in">
        <div className="section-tag">Education</div>
        <h2 className="section-title">Academic<br />Qualifications</h2>
      </div>
      <div className="academic-grid fade-in">
        <div>
          <div className="acad-card" style={{ marginBottom: "1.5rem" }}>
            <div className="acad-card-icon">🎓</div>
            <div className="acad-card-title">BEIT — Bachelor of Engineering in Information Technology</div>
            <div className="acad-card-sub">Nepal College of Information Technology (NCIT) · 2024 – Present</div>
            <div className="acad-card-desc">Comprehensive program covering software engineering, digital electronics, networking, database systems, web development, and project management. Affiliated with Pokhara University.</div>
          </div>
          <div className="acad-card">
            <div className="acad-card-icon">📐</div>
            <div className="acad-card-title">+2 Science (Computer Science)</div>
            <div className="acad-card-sub">NEBBoard · 2022 – 2024</div>
            <div className="acad-card-desc">Completed Higher Secondary with Physics, Chemistry, Mathematics, and Computer Science, laying a strong foundation for engineering studies.</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "0.72rem", color: "var(--teal)", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
             Certifications & Training
          </div>
          <ul className="cert-list">
            {CERTS.map((c, i) => (
              <li className="cert-item" key={i}>
                <span className="cert-icon">{c.icon}</span>
                <span className="cert-name">{c.name}</span>
                <span className="cert-badge">{c.badge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}