import React, { useState } from "react";
import config from "../config";
import { useInView } from "../hooks/useInView";

const ITEMS = [
  { key:"email",    icon:"✉",   label:"Email",    val:()=>config.email,    href:()=>`https://mail.google.com/mail/?view=cm&to=${config.email}`, external:true },
  { key:"phone",    icon:"📱",  label:"Phone",    val:()=>config.phone,    href:()=>`tel:${config.phone}`, external:false },
  { key:"location", icon:"📍",  label:"Location", val:()=>config.location, href:null, external:false },
  { key:"github",   icon:"{}",  label:"GitHub",   val:()=>config.github.replace("https://github.com/","@"), href:()=>config.github, external:true },
];
if (config.linkedin) ITEMS.push({ key:"linkedin", icon:"in", label:"LinkedIn", val:()=>"View Profile", href:()=>config.linkedin, external:true });

export default function Contact() {
  const [ref, visible] = useInView();
  const [copied, setCopied] = useState(null);
  const copy = (val, key) => { navigator.clipboard.writeText(val).then(() => { setCopied(key); setTimeout(()=>setCopied(null),2000); }); };
  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right,transparent,var(--accent2),transparent)", opacity: 0.25 }} />
      <div className="max-w-5xl mx-auto px-6">
        <div className={`reveal ${visible ? "in" : ""}`}>
          <p className="section-label">06. Contact</p>
          <h2 className="section-title">Let's Build Something</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className={`reveal-l ${visible ? "in" : ""} [transition-delay:0.1s]`}>
            <p className="leading-relaxed mb-8 text-base" style={{ color: "var(--muted)" }}>
              I enjoy solving interesting problems — AI, automation, or tools that make teams more productive.
              Have an idea? Want to collaborate? Or just want to say hi? Drop me a line.
            </p>
            <a href={`https://mail.google.com/mail/?view=cm&to=${config.email}`} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 font-mono text-[0.82rem] px-6 py-3 rounded-lg transition-all duration-200"
               style={{ border: "1px solid var(--accent2)", color: "var(--accent2)" }}
               onMouseOver={e=>{e.currentTarget.style.background="var(--accent2)";e.currentTarget.style.color="var(--bg)";}}
               onMouseOut={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="var(--accent2)";}}>
              Get in Touch →
            </a>
            <div className="mt-10 p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4"
                 style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div>
                <p className="font-sans font-semibold text-sm" style={{ color: "var(--text)" }}>Need my resume?</p>
                <p className="font-mono text-[0.62rem] mt-0.5" style={{ color: "var(--dim)" }}>Always the latest version</p>
              </div>
              <a href={config.resumeFile} download="Prashast_Vats_Resume.pdf" className="btn-primary" style={{ padding: "0.6rem 1.25rem" }}>↓ PDF</a>
            </div>
          </div>
          <div className={`reveal-r ${visible ? "in" : ""} [transition-delay:0.15s] flex flex-col gap-3`}>
            {ITEMS.map(c => {
              const val = c.val(); const href = c.href ? c.href() : null; const isCopied = copied===c.key;
              return (
                <div key={c.key} className="card flex items-center gap-4 px-5 py-4 transition-all duration-200 hover:translate-x-1">
                  <span className="font-mono text-sm w-6 text-center shrink-0" style={{ color: "var(--accent)" }}>{c.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em]" style={{ color: "var(--dim)" }}>{c.label}</p>
                    {href ? <a href={href} target={c.external?"_blank":undefined} rel="noreferrer"
                               className="text-sm truncate block transition-colors hover:opacity-70" style={{ color: "var(--text)" }}>{val}</a>
                           : <span className="text-sm" style={{ color: "var(--text)" }}>{val}</span>}
                  </div>
                  <button onClick={()=>copy(href||val,c.key)} data-hover title="Copy"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 transition-all duration-200"
                          style={{ border:"1px solid var(--border)", color: isCopied?"#4ade80":"var(--dim)", borderColor: isCopied?"rgba(74,222,128,0.4)":"var(--border)" }}>
                    {isCopied?"✓":"⎘"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
