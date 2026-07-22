"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { t } from "@/data/translations";
import { useLang } from "@/context/LangContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const tr = t[lang];
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: tr.nav.home,     href: "home" },
    { label: tr.nav.skills,   href: "skills" },
    { label: tr.nav.parcours, href: "parcours" },
    { label: tr.nav.projects, href: "projects" },
    { label: tr.nav.contact,  href: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = ["home","skills","parcours","projects","contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const flagBtn = (l: "fr" | "en", flag: string, title: string) => (
    <button
      key={l}
      onClick={() => setLang(l)}
      title={title}
      style={{
        width: 28, height: 28, borderRadius: "50%",
        border: `2px solid ${lang === l ? "var(--color-red)" : "var(--color-border)"}`,
        background: "none", cursor: "pointer", padding: 0,
        overflow: "hidden", transition: "border-color 0.2s",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1rem", lineHeight: 1,
        opacity: lang === l ? 1 : 0.5,
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-red)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = lang === l ? "var(--color-red)" : "var(--color-border)"}
    >
      {flag}
    </button>
  );

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(8,12,20,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.9rem 2rem" }}>

        {/* Logo */}
        <button onClick={() => go("home")} style={{
          width: 40, height: 40, borderRadius: "50%",
          border: "2px solid var(--color-red)",
          background: "rgba(8,12,20,0.8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", overflow: "hidden", padding: 4,
          transition: "box-shadow 0.2s", flexShrink: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 12px rgba(224,32,32,0.4)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
          <img src={personalInfo.logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="nav-desktop">
          {navLinks.map(l => (
            <button key={l.href} onClick={() => go(l.href)} className={`nav-item ${active === l.href ? "active" : ""}`}>
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right: LinkedIn + flags + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>

          {/* LinkedIn */}
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="nav-desktop"
            style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted)", transition: "border-color 0.2s,color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-red)"; e.currentTarget.style.color = "var(--color-red)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-muted)"; }}>
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>

          {/* Flag switcher */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            {flagBtn("fr", "🇫🇷", "Français")}
            {flagBtn("en", "🇬🇧", "English")}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer" }}
            className="nav-mobile">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", padding: "1rem 2rem" }}>
          {navLinks.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "0.75rem 0", fontFamily: "var(--font-mono)", fontSize: "0.7rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: active === l.href ? "var(--color-red)" : "var(--color-muted)",
              background: "none", border: "none", borderBottom: "1px solid var(--color-border)", cursor: "pointer",
            }}>{l.label}</button>
          ))}
          {/* Flags in mobile menu */}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
            {flagBtn("fr", "🇫🇷", "Français")}
            {flagBtn("en", "🇬🇧", "English")}
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop{display:flex!important}
        .nav-mobile{display:none!important}
        @media(max-width:768px){.nav-desktop{display:none!important}.nav-mobile{display:flex!important}}
      `}</style>
    </header>
  );
}