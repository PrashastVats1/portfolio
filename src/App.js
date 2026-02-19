import React, { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Router, Route } from "./router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import WritingTeaser from "./components/WritingTeaser";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlogListPage from "./components/BlogListPage";
import BlogArticlePage from "./components/BlogArticlePage";

function PortfolioHome() {
  useEffect(() => {
    // Page-level SEO
    document.title = "Prashast Vats | Software Engineer";
    const setMeta = (name, val) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = val;
    };
    const setOG = (prop, val) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = val;
    };
    setMeta("description", "Prashast Vats — Software Engineer at Mphasis. Builds AI tools, automation systems, and full-stack apps. 2+ years experience supporting global engineering teams.");
    setMeta("keywords", "Prashast Vats, Software Engineer, React, .NET, C#, AI, Automation, Mphasis, Bangalore");
    setOG("og:title", "Prashast Vats | Software Engineer");
    setOG("og:description", "Software Engineer at Mphasis. Builds AI tools, automation, and full-stack apps.");
    setOG("og:type", "website");
    setOG("og:url", "https://prashastvats1.github.io");
  }, []);

  useEffect(() => {
    const dot = document.getElementById("cursor");
    if (!dot) return;
    const onMove = (e) => { dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px"; };
    window.addEventListener("mousemove", onMove, { passive: true });
    const attach = () => {
      document.querySelectorAll("a,button,[data-hover]").forEach(el => {
        el.addEventListener("mouseenter", () => dot.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => dot.classList.remove("cursor-hover"));
      });
    };
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { window.removeEventListener("mousemove", onMove); mo.disconnect(); };
  }, []);

  return (
    <>
      <div id="cursor" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <Experience />
        <Education />
        <WritingTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Route path="/blog/">
          <BlogArticlePage />
        </Route>
        <Route path="/blog">
          <BlogListPage />
        </Route>
        <Route path="/">
          <PortfolioHome />
        </Route>
      </Router>
    </ThemeProvider>
  );
}
