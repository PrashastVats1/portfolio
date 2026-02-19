import React from "react";
import posts from "../blog/posts/index";
import { Link, useLocation } from "../router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function useSEO({ title, description, slug }) {
  React.useEffect(() => {
    document.title = `${title} | Prashast Vats`;
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
    setMeta("description", description);
    setOG("og:title", `${title} | Prashast Vats`);
    setOG("og:description", description);
    setOG("og:type", "article");
    return () => { document.title = "Prashast Vats | Software Engineer"; };
  }, [title, description, slug]);
}

function ContentBlock({ block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="font-sans font-bold mt-10 mb-4"
            style={{ fontSize: "1.3rem", color: "var(--text)", lineHeight: 1.3 }}>
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="mb-5 leading-[1.9] text-[1.02rem]" style={{ color: "var(--muted)" }}>
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-5 flex flex-col gap-2.5 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[1.02rem] leading-relaxed" style={{ color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)", marginTop: "6px", flexShrink: 0 }}>›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div className="mb-4 rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          {block.label && (
            <div className="px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest"
                 style={{ background: "var(--surface)", color: "var(--dim)", borderBottom: "1px solid var(--border)" }}>
              {block.label}
            </div>
          )}
          <pre className="px-5 py-4 overflow-x-auto font-mono text-sm leading-relaxed"
               style={{ background: "var(--bg2)", color: "var(--accent)", margin: 0 }}>
            <code>{block.text}</code>
          </pre>
        </div>
      );
    case "image":
      return (
        <figure className="my-8">
          <img src={block.src} alt={block.alt || ""} className="rounded-xl w-full"
               style={{ border: "1px solid var(--border)" }} />
          {block.caption && (
            <figcaption className="text-center font-mono text-[0.68rem] mt-2" style={{ color: "var(--dim)" }}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "quote":
      return (
        <blockquote className="my-6 pl-5 py-1" style={{ borderLeft: "3px solid var(--accent)" }}>
          <p className="text-[1.05rem] leading-relaxed italic" style={{ color: "var(--text)" }}>{block.text}</p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogArticlePage() {
  const path = useLocation();
  const slug = path.replace("/blog/", "");
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
        <Navbar blogMode />
        <div className="max-w-2xl mx-auto px-6 pt-40 text-center">
          <p className="font-mono text-6xl mb-6">404</p>
          <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>Post not found.</p>
          <Link to="/blog" className="btn-outline">← All Posts</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find prev/next posts
  const idx  = posts.indexOf(post);
  const prev = posts[idx + 1] || null;
  const next = posts[idx - 1] || null;

  useSEO({ title: post.title, description: post.excerpt, slug: post.slug });

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <Navbar blogMode />

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        {/* Breadcrumb */}
        <Link to="/blog"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest mb-10 transition-opacity hover:opacity-70"
              style={{ color: "var(--muted)" }}>
          ← All Posts
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="pill">{post.tag}</span>
            <span className="font-mono text-[0.65rem]" style={{ color: "var(--dim)" }}>
              {post.date}
            </span>
            <span className="font-mono text-[0.65rem]" style={{ color: "var(--dim)" }}>·</span>
            <span className="font-mono text-[0.65rem]" style={{ color: "var(--dim)" }}>
              {post.readTime}
            </span>
          </div>
          <h1 className="font-sans font-extrabold leading-tight mb-5"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", color: "var(--text)" }}>
            {post.title}
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {post.excerpt}
          </p>
          <div className="mt-6 h-px" style={{ background: "var(--border)" }} />
        </header>

        {/* Article body */}
        <article>
          {post.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </article>

        {/* Author footer */}
        <div className="mt-14 pt-8 flex items-center gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
               style={{ background: "linear-gradient(135deg, var(--accent), var(--accent3))", color: "var(--bg)" }}>
            PV
          </div>
          <div>
            <p className="font-sans font-semibold text-sm" style={{ color: "var(--text)" }}>Prashast Vats</p>
            <p className="font-mono text-[0.68rem]" style={{ color: "var(--muted)" }}>Software Engineer · Mphasis</p>
          </div>
          <Link to="/" className="ml-auto font-mono text-[0.68rem] transition-opacity hover:opacity-70"
                style={{ color: "var(--accent)" }}>
            Portfolio →
          </Link>
        </div>

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <nav className="mt-10 grid grid-cols-2 gap-4">
            {prev ? (
              <Link to={`/blog/${prev.slug}`}
                    className="card p-4 group"
                    style={{ textDecoration: "none" }}>
                <p className="font-mono text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: "var(--dim)" }}>← Older</p>
                <p className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors" style={{ color: "var(--text)" }}>{prev.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/blog/${next.slug}`}
                    className="card p-4 text-right group"
                    style={{ textDecoration: "none" }}>
                <p className="font-mono text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: "var(--dim)" }}>Newer →</p>
                <p className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors" style={{ color: "var(--text)" }}>{next.title}</p>
              </Link>
            ) : <div />}
          </nav>
        )}
      </main>

      <Footer />
    </div>
  );
}
