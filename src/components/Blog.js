import React from "react";
import { useInView } from "../hooks/useInView";
import config from "../config";

export default function Blog() {
  const [ref, visible] = useInView();

  return (
    <section id="blog" className="py-28" style={{ background: "var(--bg2)" }} ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`reveal ${visible ? "in" : ""}`}>
          <p className="section-label">07. Blog</p>
          <h2 className="section-title">Writing</h2>
        </div>

        {config.blogPosts && config.blogPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-5">
            {config.blogPosts.map((post, i) => (
              <div
                key={i}
                className={`reveal card flex flex-col ${visible ? "in" : ""}`}
                style={{ transitionDelay: `${0.08 * i}s` }}
              >
                <div className="p-5 flex flex-col flex-1">
                  <span className="pill mb-3 self-start">{post.tag}</span>
                  <h3 className="font-sans font-semibold mb-2 leading-snug" style={{ fontSize: "0.95rem", color: "var(--text)" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--muted)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3"
                       style={{ borderTop: "1px solid var(--border)" }}>
                    <span className="font-mono text-[0.6rem]" style={{ color: "var(--dim)" }}>
                      {post.date} · {post.readTime}
                    </span>
                    {post.url && (
                      <a href={post.url} target="_blank" rel="noreferrer"
                         className="font-mono text-[0.68rem] transition-opacity hover:opacity-70"
                         style={{ color: "var(--accent)" }}>
                        Read →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder state — shown until you add real posts */
          <div className={`reveal ${visible ? "in" : ""} [transition-delay:0.1s]`}>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { tag: "AI", title: "Coming Soon", excerpt: "Posts about AI, automation, and engineering coming soon. Add your first post in config.js → blogPosts." },
                { tag: "Engineering", title: "Coming Soon", excerpt: "Writing about full-stack development, .NET, and the lessons learned building production tools." },
                { tag: "Tools", title: "Coming Soon", excerpt: "Breakdowns of tools, libraries, and workflows that have made me a faster, better engineer." },
              ].map((p, i) => (
                <div key={i} className="card p-5 opacity-50">
                  <span className="pill mb-3 self-start block">{p.tag}</span>
                  <h3 className="font-sans font-semibold mb-2" style={{ fontSize: "0.95rem", color: "var(--text)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.excerpt}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-center mt-8" style={{ fontSize: "0.72rem", color: "var(--dim)" }}>
              Add posts to <code className="px-1.5 py-0.5 rounded" style={{ background: "var(--surface)" }}>src/config.js → blogPosts</code> to populate this section
            </p>
          </div>
        )}

        {config.blogUrl && (
          <div className="text-center mt-10">
            <a href={config.blogUrl} target="_blank" rel="noreferrer" className="btn-outline">
              View All Posts →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
