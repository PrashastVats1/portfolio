import React from "react";
import config from "../config";
import { useInView } from "../hooks/useInView";

export default function Education() {
  const [ref, visible] = useInView();
  return (
    <section id="education" className="py-28" style={{ background: "var(--bg2)" }} ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`reveal ${visible ? "in" : ""}`}>
          <p className="section-label">05. Education</p>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`reveal ${visible ? "in" : ""} [transition-delay:0.08s]`}>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>Degree</p>
            {config.education.map((e, i) => (
              <div key={i} className="card p-5">
                <div className="text-2xl mb-3">🎓</div>
                <p className="font-sans font-semibold text-sm leading-snug mb-2" style={{ color: "var(--text)" }}>{e.degree}</p>
                <p className="font-mono text-[0.72rem] mb-3" style={{ color: "var(--accent)" }}>{e.institution}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="pill">{e.period}</span>
                  <span className="pill">{e.gpa}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={`reveal ${visible ? "in" : ""} [transition-delay:0.16s]`}>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>Certifications</p>
            <div className="flex flex-col gap-2.5">
              {config.certifications.map((c, i) => (
                <div key={i} className="card p-4">
                  <p className="text-[0.82rem] leading-snug mb-1" style={{ color: "var(--text)" }}>{c.label}</p>
                  <p className="font-mono text-[0.62rem]" style={{ color: "var(--dim)" }}>{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`reveal ${visible ? "in" : ""} [transition-delay:0.24s]`}>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>Achievements</p>
            <div className="flex flex-col gap-2.5">
              {config.achievements.map((a, i) => (
                <div key={i} className="card p-4 flex items-start gap-3">
                  <span className="text-lg shrink-0">{a.icon}</span>
                  <p className="text-[0.82rem] leading-snug" style={{ color: "var(--muted)" }}>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
