import React from "react";
import { CONTACT_INFO } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact">
      <div className="fade-in">
        <div className="section-tag">Let's Connect</div>
        <h2 className="section-title">Get in<br />Touch</h2>
        <p className="section-subtitle">Have an idea, opportunity, or just want to say hi? My inbox is always open.</p>
      </div>
      <div className="contact-grid fade-in">
        <div className="contact-info">
          {CONTACT_INFO.map((c, i) => (
            <div className="contact-item" key={i}>
              <span className="contact-icon">{c.icon}</span>
              <div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-val">{c.val}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-form">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input className="form-input" placeholder="John Doe" readOnly />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" placeholder="john@example.com" readOnly />
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input className="form-input" placeholder="Internship Opportunity" readOnly />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-input" placeholder="Hey Shiba, I'd like to..." readOnly />
          </div>
          <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => alert("Message functionality coming soon! Please email directly.")}>
            Send Message
          </button>
          <div className="form-note">⚡ Message functionality coming soon — reach out via email directly!</div>
        </div>
      </div>
    </section>
  );
}