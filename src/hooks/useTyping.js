import { useState, useEffect } from "react";

export function useTyping(phrases, speed = 80, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const phrase = phrases[idx];
    const timeout = setTimeout(() => {
      if (!del) {
        setDisplay(phrase.slice(0, display.length + 1));
        if (display.length + 1 === phrase.length) setTimeout(() => setDel(true), pause);
      } else {
        setDisplay(display.slice(0, -1));
        if (display.length === 0) { setDel(false); setIdx((i) => (i + 1) % phrases.length); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [display, del, idx, phrases, speed, pause]);

  return display;
}