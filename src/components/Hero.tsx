"use client";
import { useEffect, useState } from "react";
import { personalInfo, techStack } from "@/data/portfolio";
import { t } from "@/data/translations";
import { useLang } from "@/context/LangContext";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  // Reset typewriter when lang changes
  useEffect(() => { setText(""); setIdx(0); setDel(false); }, [lang]);

  useEffect(() => {
    const roles = tr.roles;
    const cur = roles[idx];
    let timer: ReturnType<typeof setTimeout>;
    if (!del && text.length < cur.length)        timer = setTimeout(() => setText(cur.slice(0, text.length + 1)), 65);
    else if (!del && text.length === cur.length)  timer = setTimeout(() => setDel(true), 2600);
    else if (del && text.length > 0)              timer = setTimeout(() => setText(text.slice(0, -1)), 40);
    else { setDel(false); setIdx(i => (i + 1) % roles.length); }
    return () => clearTimeout(timer);
  }, [text, del, idx, tr.roles]);

  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${personalInfo.heroBgDesktop})`, backgroundSize: "cover", backgroundPosition: "center" }} className="hide-sm" />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${personalInfo.heroBgMobile})`, backgroundSize: "cover", backgroundPosition: "center" }} className="show-sm" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,rgba(8,12,20,0.96) 52%,rgba(8,12,20,0.55) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 60% at 15% 55%,rgba(224,32,32,0.05),transparent)" }} />
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{ position: "absolute", borderRadius: "50%", background: "rgba(255,255,255,0.4)", width: i % 4 === 0 ? 2 : 1, height: i % 4 === 0 ? 2 : 1, left: `${(i * 19 + 5) % 94}%`, top: `${(i * 27 + 3) % 88}%`, opacity: 0.2 + ((i * 7) % 5) * 0.1 }} />
        ))}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to top,var(--color-bg),transparent)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", alignItems: "center" }}>
        <div className="wrap" style={{ paddingTop: "7rem", paddingBottom: "3rem", width: "100%" }}>
          <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="hero-grid">

            {/* LEFT */}
            <div>
              <div data-aos="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 99, border: "1px solid rgba(224,32,32,0.35)", background: "rgba(224,32,32,0.07)", marginBottom: "1.75rem" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-red)", animation: "pulseGlow 2s ease-in-out infinite" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-red)" }}>{tr.badge}</span>
              </div>

              <h1 data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: "var(--font-sans)", fontWeight: 700, lineHeight: 0.95, marginBottom: "1.25rem", fontSize: "clamp(2.8rem,7vw,5.5rem)" }}>
                {personalInfo.name}<br />
                <span style={{ color: "var(--color-red)" }}>{personalInfo.surname}</span>
              </h1>

              <p data-aos="fade-up" data-aos-delay="170" style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1rem,2.2vw,1.25rem)", color: "var(--color-muted)", marginBottom: "0.2rem" }}>
                {tr.staticTitle}
              </p>
              <p data-aos="fade-up" data-aos-delay="200" style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1.1rem,2.5vw,1.45rem)", color: "var(--color-red)", fontWeight: 600, marginBottom: "1.25rem", minHeight: "2rem" }}>
                {text}<span className="cursor">|</span>
              </p>

              <p data-aos="fade-up" data-aos-delay="240" style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--color-text)", marginBottom: "0.75rem" }}>{tr.chips}</p>
              <p data-aos="fade-up" data-aos-delay="280" style={{ color: "var(--color-muted)", fontSize: "0.88rem", maxWidth: 480, lineHeight: 1.75, marginBottom: "2rem" }}>
                {tr.desc} <strong style={{ color: "var(--color-text)" }}>STRIDENOV</strong>.
              </p>

              <div data-aos="fade-up" data-aos-delay="320" style={{ display: "flex", gap: "2.5rem", marginBottom: "2rem" }}>
                {[{ v: "3+", l: tr.stages }, { v: "6+", l: tr.projets }, { v: "1", l: tr.certif }].map(({ v, l }) => (
                  <div key={l}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.9rem", fontWeight: 700, color: "var(--color-red)", lineHeight: 1 }}>{v}</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-dim)", marginTop: 5 }}>{l}</p>
                  </div>
                ))}
              </div>

              <div data-aos="fade-up" data-aos-delay="380" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a href="/CV.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.7rem 1.5rem", background: "var(--color-red)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 4, textDecoration: "none", border: "1px solid var(--color-red)", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--color-red-dark)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--color-red)"}>
                  <Download size={13} /> {tr.downloadCV}
                </a>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.7rem 1.5rem", background: "transparent", color: "var(--color-text)", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 4, border: "1px solid var(--color-border)", cursor: "pointer", transition: "border-color 0.2s,color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-red)"; e.currentTarget.style.color = "var(--color-red)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text)"; }}>
                  <Mail size={13} /> {tr.contact}
                </button>
              </div>
            </div>

            {/* RIGHT — avatar */}
            <div data-aos="fade-left" data-aos-delay="150" className="hero-avatar" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div style={{ position: "absolute", inset: -14, borderRadius: "50%", border: "1px solid rgba(224,32,32,0.18)" }} />
                <div style={{ position: "absolute", inset: -28, borderRadius: "50%", border: "1px solid rgba(224,32,32,0.07)" }} />
                <div style={{ width: 290, height: 290, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(224,32,32,0.5)", background: "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={personalInfo.avatar} alt="Joan Brunel" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                </div>
                <div style={{ position: "absolute", bottom: 14, right: 14, width: 14, height: 14, borderRadius: "50%", background: "var(--color-red)", border: "2px solid var(--color-bg)", boxShadow: "0 0 8px var(--color-red)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ position: "relative", zIndex: 1 }} className="marquee-wrap">
        <div className="marquee-inner" style={{ padding: "0.9rem 0" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-muted)", whiteSpace: "nowrap", paddingRight: "2.5rem" }}>
              {tech}<span style={{ color: "var(--color-red)", padding: "0 1.2rem" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero-grid{grid-template-columns:1fr 320px}
        @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.hero-avatar{display:none!important}}
        .hide-sm{display:block!important}.show-sm{display:none!important}
        @media(max-width:640px){.hide-sm{display:none!important}.show-sm{display:block!important}}
        @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(224,32,32,0.4)}50%{box-shadow:0 0 14px 4px rgba(224,32,32,0.2)}}
      `}</style>
    </section>
  );
}