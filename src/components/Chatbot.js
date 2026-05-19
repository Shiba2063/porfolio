import React, { useState, useEffect, useRef } from "react";
import { CHAT_RESPONSES, SUGGESTIONS } from "../data/portfolioData";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ type: "bot", text: "👋 Hi! I'm Shiba's AI assistant. Ask me anything about him!" }]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [msgs]);

  const respond = (q) => {
    const low = q.toLowerCase();
    let reply = CHAT_RESPONSES.default;
    if (low.includes("skill") || low.includes("tech")) reply = CHAT_RESPONSES.skills;
    else if (low.includes("project") || low.includes("app") || low.includes("work")) reply = CHAT_RESPONSES.projects;
    else if (low.includes("edu") || low.includes("college") || low.includes("ncit") || low.includes("degree") || low.includes("beit")) reply = low.includes("ncit") ? CHAT_RESPONSES.ncit : CHAT_RESPONSES.education;
    else if (low.includes("hobbi") || low.includes("sport") || low.includes("cricket") || low.includes("football")) reply = CHAT_RESPONSES.hobbies;
    else if (low.includes("goal") || low.includes("future") || low.includes("dream") || low.includes("ambition")) reply = CHAT_RESPONSES.goals;
    else if (low.includes("contact") || low.includes("email") || low.includes("reach")) reply = CHAT_RESPONSES.contact;
    setMsgs(m => [...m, { type: "user", text: q }, { type: "bot", text: reply }]);
    setInput("");
  };

  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar-sm">🤖</div>
            <div className="chat-header-info">
              <div className="chat-header-name">Chat with Shiba Bhatta</div>
              <div className="chat-header-status">● Online — AI powered</div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {msgs.map((m, i) => <div key={i} className={`chat-msg ${m.type}`}>{m.text}</div>)}
          </div>
          <div className="chat-suggestions">
            {SUGGESTIONS.map(s => <button key={s} className="sugg-btn" onClick={() => respond(s)}>{s}</button>)}
          </div>
          <div className="chat-input-row">
            <input
              className="chat-input" placeholder="Ask me anything..."
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && input.trim() && respond(input.trim())}
            />
            <button className="chat-send" onClick={() => input.trim() && respond(input.trim())}>➤</button>
          </div>
        </div>
      )}
      <button className="chat-fab" onClick={() => setOpen(o => !o)} title="Chat with Shiba">
        <div className="chat-fab-pulse" />
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}