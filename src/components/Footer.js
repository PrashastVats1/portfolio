import React from "react";
import config from "../config";

export default function Footer() {
  return (
    <footer className="py-8" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <a href="#hero" className="font-mono font-bold text-[0.85rem] transition-opacity hover:opacity-80" style={{ color: "var(--muted)" }}>
          <span style={{ color: "var(--accent)" }}>&lt;</span>PV<span style={{ color: "var(--accent)" }}>/&gt;</span>
        </a>
        <p className="font-mono text-[0.65rem]" style={{ color: "var(--dim)" }}>
          © {new Date().getFullYear()} {config.name} · Built with React & Tailwind
        </p>
        <div className="flex gap-5">
          {[
            { label: "GitHub", href: config.github },
            ...(config.linkedin ? [{ label: "LinkedIn", href: config.linkedin }] : []),
            { label: "Email", href: `mailto:${config.email}` },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
               className="font-mono text-[0.65rem] uppercase tracking-widest transition-colors"
               style={{ color: "var(--dim)" }}
               onMouseOver={e => e.currentTarget.style.color="var(--accent)"}
               onMouseOut={e => e.currentTarget.style.color="var(--dim)"}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
