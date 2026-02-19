import React, { useState, useEffect } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate, useLocation } from "../router";
import config from "../config";

const PORTFOLIO_LINKS = [
  { label: "About",      id: "about" },
  { label: "Projects",   id: "projects" },
  { label: "Skills",     id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Education",  id: "education" },
  { label: "Contact",    id: "contact" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar({ blogMode = false }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const active                    = useActiveSection();
  const { theme, toggle }         = useTheme();
  const navigate                  = useNavigate();
  const path                      = useLocation();
  const isBlogPage                = path.startsWith("/blog");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navBg = scrolled
    ? theme === "dark" ? "rgba(7,7,15,0.88)" : "rgba(245,246,250,0.9)"
    : "transparent";

  // Scroll to section on portfolio page, or navigate home first
  const handleSectionLink = (id) => {
    setMenuOpen(false);
    if (isBlogPage) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? "0.65rem 0" : "1.2rem 0",
      background: navBg,
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-mono font-bold transition-opacity hover:opacity-75"
              style={{ fontSize: "0.95rem", color: "var(--text)" }}>
          <span style={{ color: "var(--accent)" }}>&lt;</span>PV<span style={{ color: "var(--accent)" }}>/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5">
          {/* Portfolio section links */}
          {PORTFOLIO_LINKS.map(({ label, id }) => {
            const isActive = !isBlogPage && active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleSectionLink(id)}
                  data-hover
                  className="relative font-mono pb-0.5 transition-colors duration-200 bg-transparent border-0 p-0"
                  style={{ fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase",
                           color: isActive ? "var(--accent)" : "var(--muted)", cursor: "none" }}
                >
                  {label}
                  <span style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "1px", background: "var(--accent)",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left", transition: "transform 0.3s ease",
                  }} />
                </button>
              </li>
            );
          })}

          {/* Blog link */}
          <li>
            <Link to="/blog"
                  className="relative font-mono pb-0.5 transition-colors duration-200"
                  style={{ fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase",
                           color: isBlogPage ? "var(--accent)" : "var(--muted)" }}>
              Blog
              <span style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "1px", background: "var(--accent)",
                transform: isBlogPage ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left", transition: "transform 0.3s ease",
              }} />
            </Link>
          </li>

          {/* Theme toggle */}
          <li>
            <button onClick={toggle} data-hover
                    title={theme === "dark" ? "Light mode" : "Dark mode"}
                    style={{ width: "32px", height: "32px", border: "1px solid var(--border)",
                             borderRadius: "8px", background: "var(--surface)", color: "var(--muted)",
                             display: "flex", alignItems: "center", justifyContent: "center",
                             transition: "border-color 0.2s, color 0.2s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>

          {/* Resume */}
          <li>
            <a href={config.resumeFile} download="Prashast_Vats_Resume.pdf"
               className="font-mono transition-all duration-200"
               style={{ fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase",
                        padding: "0.42rem 0.9rem", border: "1px solid var(--accent)",
                        color: "var(--accent)", borderRadius: "6px" }}
               onMouseOver={e => { e.currentTarget.style.background="var(--accent)"; e.currentTarget.style.color="var(--bg)"; }}
               onMouseOut={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="var(--accent)"; }}>
              Resume ↓
            </a>
          </li>
        </ul>

        {/* Mobile: theme + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} data-hover style={{ color: "var(--muted)", padding: "4px" }}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {[0,1,2].map(n => (
              <span key={n} className={`block w-6 h-0.5 transition-all duration-300 ${
                n===0 ? (menuOpen?"translate-y-2 rotate-45 origin-center":"") :
                n===1 ? (menuOpen?"opacity-0":"") :
                        (menuOpen?"-translate-y-2 -rotate-45 origin-center":"")
              }`} style={{ background: "var(--text)" }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div style={{
        position:"fixed", inset:0,
        background: theme==="dark" ? "rgba(7,7,15,0.97)" : "rgba(245,246,250,0.97)",
        backdropFilter:"blur(20px)",
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"1.75rem",
        transition:"opacity 0.3s",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "auto" : "none",
      }} className="md:hidden">
        {PORTFOLIO_LINKS.map(({ label, id }) => (
          <button key={id} onClick={() => handleSectionLink(id)} data-hover
                  className="font-mono transition-colors bg-transparent border-0"
                  style={{ fontSize:"1rem", letterSpacing:"0.14em", textTransform:"uppercase",
                           color: active===id && !isBlogPage ? "var(--accent)" : "var(--muted)", cursor:"none" }}>
            {label}
          </button>
        ))}
        <Link to="/blog" onClick={() => setMenuOpen(false)}
              className="font-mono transition-colors"
              style={{ fontSize:"1rem", letterSpacing:"0.14em", textTransform:"uppercase",
                       color: isBlogPage ? "var(--accent)" : "var(--muted)" }}>
          Blog
        </Link>
        <a href={config.resumeFile} download="Prashast_Vats_Resume.pdf"
           onClick={() => setMenuOpen(false)}
           style={{ marginTop:"0.5rem", border:"1px solid var(--accent)", color:"var(--accent)", borderRadius:"8px", padding:"0.75rem 2rem" }}
           className="font-mono text-sm">
          Resume ↓
        </a>
      </div>
    </nav>
  );
}
