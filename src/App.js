import React, { useState, useEffect } from "react";
import "./styles/global.css";
import { useFadeIn } from "./hooks/useFadeIn";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import Experience from "./components/Experience";
import Sports from "./components/Sports";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  useFadeIn();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScroll(pct);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
    ["Academic", "#academic"], ["Experience", "#experience"], ["Contact", "#contact"],
  ];

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />
      <Navbar nav={nav} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Academics />
      <Experience />
      <Sports />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}