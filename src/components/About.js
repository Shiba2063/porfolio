import React from "react";
import { TIMELINE } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about">
      <div className="fade-in">
        <div className="section-tag">Who I Am</div>
        <h2 className="section-title">My Story &<br />Journey</h2>
      </div>
      <div className="about-grid fade-in">
        <div className="about-text">
          <p>I'm <strong>Shiba Bhatta</strong>, a passionate <em>BEIT student</em> at Nepal College of Information Technology (NCIT) in Kathmandu. My journey into technology began not in a classroom, but in curiosity — taking apart gadgets, wondering how websites worked, and dreaming of building something of my own.</p>
          <p>Growing up in Nepal, I witnessed firsthand how <strong>technology could bridge gaps</strong> — in education, healthcare, and everyday life. That realization became my north star. I didn't just want to use technology; I wanted to <em>create</em> it.</p>
          <p>At NCIT, I've been exposed to a rigorous curriculum blending <strong>electronics, software engineering, and information systems</strong>. Beyond academics, I've pushed myself through self-learning — diving into React.js, Python, and database design on platforms like Udemy and freeCodeCamp.</p>
          <p>I believe in <strong>learning by doing</strong>. Every project I build, every bug I fix, and every team I lead brings me closer to the developer I want to become. My goal is simple yet ambitious: <em>to build technology that makes lives better — starting in Nepal, then the world.</em></p>
        </div>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div key={i} className={`tl-item${item.amber ? " amber" : ""}`}>
              <div className="tl-dot" />
              <div className="tl-year">{item.year}</div>
              <div className="tl-title">{item.title}</div>
              <div className="tl-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}