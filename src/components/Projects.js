import React from "react";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="fade-in">
        <div className="section-tag">Work</div>
        <h2 className="section-title">Featured<br />Projects</h2>
        <p className="section-subtitle">A selection of projects that reflect my learning, creativity, and growing technical skill set.</p>
      </div>
      <div className="projects-grid fade-in">
        {PROJECTS.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-thumb" style={{ background: p.color }}>{p.emoji}</div>
            <div className="project-body">
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              <div className="project-links">
                {/* <a href="#" className="proj-btn proj-btn-solid" onClick={e => e.preventDefault()}>Live Demo</a> */}
                {/* <a href="#" className="proj-btn proj-btn-ghost" onClick={e => e.preventDefault()}>GitHub</a> */}
                 <button className="proj-btn proj-btn-solid" onClick={e => e.preventDefault()}>Live Demo</button>
                 <button className="proj-btn proj-btn-ghost" onClick={e => e.preventDefault()}>GitHub</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}