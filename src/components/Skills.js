import React from "react";
import config from "../config";
import { useInView } from "../hooks/useInView";

export default function Skills() {
  const [ref, visible] = useInView();
  const [hRef, hVisible] = useInView();
  return (
    <>
      <section id="skills" className="py-28" style={{ background: "var(--bg)" }} ref={ref}>
        <div className="max-w-5xl mx-auto px-6">
          <div className={`reveal ${visible ? "in" : ""}`}>
            <p className="section-label">03. Skills</p>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.skills.map((group, i) => (
              <div key={i} className={`card p-5 reveal ${visible ? "in" : ""}`} style={{ transitionDelay: `${0.07*i}s` }}>
                <div className="flex items-center gap-3 mb-4 pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
                  <span className="font-mono text-sm w-7 text-center shrink-0" style={{ color: "var(--accent)" }}>{group.icon}</span>
                  <h3 className="font-sans font-semibold text-sm" style={{ color: "var(--text)" }}>{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => <span key={item} className="pill">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--bg2)" }} ref={hRef}>
        <div className="max-w-5xl mx-auto px-6">
          <div className={`reveal ${hVisible ? "in" : ""} text-center mb-12`}>
            <div className="flex justify-center mb-4"><span className="text-3xl">⭐</span></div>
            <h2 className="font-sans font-extrabold" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "var(--text)" }}>Key Highlights</h2>
            <div className="w-16 h-0.5 mx-auto mt-3" style={{ background: "linear-gradient(to right, var(--accent3), var(--accent))" }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.highlights.map((h, i) => (
              <div key={i} className={`reveal ${hVisible ? "in" : ""}`} style={{ transitionDelay: `${0.07*i}s` }}>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-xl shrink-0 mt-0.5">{h.icon}</span>
                  <h4 className="font-sans font-semibold" style={{ fontSize: "0.93rem", color: "var(--text)" }}>{h.title}</h4>
                </div>
                <p className="text-sm leading-relaxed pl-8" style={{ color: "var(--muted)" }}>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
