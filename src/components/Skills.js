import React from "react";
import { SKILLS_TECH, SKILLS_SOFT } from "../data/portfolioData";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section id="skills">
      <div className="fade-in">
        <div className="section-tag">Capabilities</div>
        <h2 className="section-title">Skills &<br />Expertise</h2>
        <p className="section-subtitle">A blend of technical proficiency and interpersonal strengths built through coursework, projects, and real-world collaboration.</p>
      </div>
      <div className="skills-grid fade-in">
        {SKILLS_TECH.map(s => <SkillBar key={s.name} {...s} soft={false} />)}
        {SKILLS_SOFT.map(s => <SkillBar key={s.name} {...s} soft={true} />)}
      </div>
    </section>
  );
}