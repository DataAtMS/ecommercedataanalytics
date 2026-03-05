import { useEffect } from "react";
import { Link } from "wouter";
import { articles, CATEGORIES } from "../data/articles";

export default function Sitemap() {
  const siteUrl = 'https://ecommercedataanalytics.com';
  const categories = CATEGORIES.filter((c) => c.slug !== "all");

  useEffect(() => {
    document.title = 'Sitemap | Ecommerce Data Analytics';
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute('href', siteUrl + '/sitemap');
  }, []);

  const COLOR = {
    primary: "#f0f0f0",
    body: "#c8c8c8",
    secondary: "#999",
    tertiary: "#777",
    faint: "#555",
    accent: "#943eda",
    bg: "#0a0a0a",
    border: "#1a1a1a",
  };

  return (
    <div style={{ minHeight: "100vh", background: COLOR.bg, color: COLOR.body }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "60px clamp(24px, 6vw, 64px)" }}>
        <Link href="/">
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: COLOR.accent, cursor: "pointer", letterSpacing: "0.06em", marginBottom: "32px", display: "block" }}>
            ← ECOMMERCE DATA ANALYTICS
          </span>
        </Link>
        <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.2rem", fontWeight: 700, color: COLOR.primary, marginBottom: "40px" }}>
          // SITEMAP
        </h1>

        <section style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.tertiary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", paddingBottom: "10px", borderBottom: `1px solid ${COLOR.border}` }}>
            MAIN PAGES
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Link href="/"><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: COLOR.accent, cursor: "pointer" }}>{siteUrl}/</span></Link>
            <Link href="/sitemap"><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: COLOR.accent, cursor: "pointer" }}>{siteUrl}/sitemap</span></Link>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.tertiary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", paddingBottom: "10px", borderBottom: `1px solid ${COLOR.border}` }}>
            CATEGORIES ({categories.length})
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}`}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: COLOR.accent, cursor: "pointer" }}>
                  {siteUrl}/{cat.slug}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.tertiary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", paddingBottom: "10px", borderBottom: `1px solid ${COLOR.border}` }}>
            ARTICLES ({articles.length})
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {articles.map((a) => (
              <div key={a.slug} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                <Link href={`/articles/${a.slug}`}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: COLOR.accent, cursor: "pointer" }}>
                    {siteUrl}/articles/{a.slug}
                  </span>
                </Link>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.faint }}>{a.dateModified}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
