import React, { useRef, useState, useEffect } from "react";

export default function SkillBar({ name, pct, soft }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`skill-card${soft ? " soft" : ""}`} ref={ref}>
      <div className="skill-category">{soft ? "Soft Skill" : "Technical"}</div>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: animated ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}