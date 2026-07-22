"use client";
import { experiences, education, certifications } from "@/data/portfolio";
import { t } from "@/data/translations";
import { useLang } from "@/context/LangContext";
import { ExternalLink } from "lucide-react";

const dotStyle = (current: boolean): React.CSSProperties => ({
  width: 52, height: 52, borderRadius: "50%",
  border: `2px solid ${current ? "var(--color-red)" : "var(--color-border)"}`,
  background: current ? "rgba(224,32,32,0.08)" : "var(--color-surface)",
  display: "flex", alignItems: "center", justifyContent: "center",
  overflow: "hidden", flexShrink: 0, zIndex: 2, position: "relative",
  boxShadow: current ? "0 0 16px rgba(224,32,32,0.2)" : "none",
  padding: 5,
});

const cardStyle = (current: boolean): React.CSSProperties => ({
  background: "var(--color-surface)",
  border: `1px solid ${current ? "rgba(224,32,32,0.35)" : "var(--color-border)"}`,
  borderRadius: 8, padding: "1.4rem",
  boxShadow: current ? "0 0 20px rgba(224,32,32,0.06)" : "none",
  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
});

function buildTimeline() {
  const exp = experiences.map(e => ({ ...e, side: "left" as const, kind: "exp" as const }));
  const edu = education.map(e => ({ ...e, side: "right" as const, kind: "edu" as const, role: e.degree, tasks: e.note ? [e.note] : [] }));
  const result = [];
  const max = Math.max(exp.length, edu.length);
  for (let i = 0; i < max; i++) {
    if (exp[i]) result.push(exp[i]);
    if (edu[i]) result.push(edu[i]);
  }
  return result;
}

const timelineItems = buildTimeline();

export default function Parcours() {
  const { lang } = useLang();
  const tr = t[lang].parcours;

  const Badge = ({ label }: { label: string }) => (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "2px 10px", borderRadius: 99, background: "rgba(224,32,32,0.1)", border: "1px solid rgba(224,32,32,0.3)", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--color-red)", marginBottom: "0.6rem" }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-red)" }} />{label}
    </div>
  );

  return (
  <section id="parcours" style={{ padding: "6rem 0", background: "var(--color-bg2)", borderTop: "1px solid var(--color-border)" }}>
    <div className="wrap">
      <p className="s-label" data-aos="fade-up">{tr.label}</p>
      <h2 className="s-heading" data-aos="fade-up" data-aos-delay="80">{tr.heading}</h2>

      <div style={{ position: "relative", marginTop: "3.5rem" }}>
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,var(--color-red),rgba(224,32,32,0.04))", transform: "translateX(-50%)", zIndex: 0 }} className="tl-vline" />

        {timelineItems.map((item, i) => {
          const isLeft = item.side === "left";
          
          // Fonction utilitaire pour éviter la duplication du rendu de carte
          const renderCard = (isMobile = false) => (
            <div style={cardStyle(item.current)}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-3px)"; el.style.borderColor = "rgba(224,32,32,0.5)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "none"; el.style.borderColor = item.current ? "rgba(224,32,32,0.35)" : "var(--color-border)"; }}>
              {item.current && <Badge label={isLeft ? tr.enPoste : tr.enCours} />}
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.63rem", color: "var(--color-red)", marginBottom: "0.25rem" }}>{item.period}</p>
              <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)", marginBottom: "0.2rem", lineHeight: 1.3 }}>{item.role}</h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-red)", fontWeight: 600, marginBottom: item.tasks.length ? "0.6rem" : 0 }}>
                {isLeft ? item.company : item.school}
                {isLeft ? (item.location ? ` · ${item.location}` : "") : (item.note ? ` · ${item.note}` : "")}
              </p>
              {item.tasks.length > 0 && (
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {item.tasks.map((task, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.4rem", fontSize: "0.8rem", color: "var(--color-muted)", lineHeight: 1.6, justifyContent: (!isMobile && isLeft) ? "flex-end" : "flex-start" }}>
                      {(!isMobile && isLeft) ? (
                        <><span>{task}</span><span style={{ color: "var(--color-red)", flexShrink: 0 }}>▸</span></>
                      ) : (
                        <><span style={{ color: "var(--color-red)", flexShrink: 0 }}>▸</span><span>{task}</span></>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );

          return (
            <div key={i} className="tl-row" data-aos={isLeft ? "fade-right" : "fade-left"} data-aos-delay={`${Math.floor(i / 2) * 80}`}>

              {/* LEFT (Desktop uniquement) */}
              <div className="tl-col-left">
                {isLeft ? renderCard(false) : <div />}
              </div>

              {/* CENTER (Logo/Puce) */}
              <div className="tl-col-center">
                <div style={dotStyle(item.current)}>
                  <img src={item.logo || "/images/logo.png"} alt={""} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
                    onError={e => { (e.currentTarget as HTMLImageElement).src = "/images/logo.png"; }} />
                </div>
              </div>

              {/* RIGHT (Desktop: seulement si !isLeft | Mobile: TOUJOURS affiché) */}
              <div className="tl-col-right">
                <div className="tl-card-desktop">
                  {!isLeft ? renderCard(false) : <div />}
                </div>
                <div className="tl-card-mobile">
                  {renderCard(true)}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Certifications */}
      <div style={{ marginTop: "3rem", paddingTop: "2.5rem", borderTop: "1px solid var(--color-border)" }}>
        <h3 data-aos="fade-up" style={{ fontFamily: "var(--font-mono)", fontSize: "0.63rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-dim)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 24, height: 1, background: "var(--color-red)", display: "inline-block" }} />{tr.certifLabel}
        </h3>
        {certifications.map(cert => (
          <a key={cert.name} href={cert.link} target="_blank" rel="noopener noreferrer" data-aos="fade-up"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 8, textDecoration: "none", transition: "all 0.3s", maxWidth: 500 }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "rgba(224,32,32,0.45)"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "var(--color-border)"; el.style.transform = "none"; }}>
            <div>
              <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--color-text)" }}>{cert.name}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-muted)", marginTop: 2 }}>{cert.issuer}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-red)" }}>{cert.date}</span>
              <ExternalLink size={12} color="var(--color-dim)" />
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* CSS Responsif corrigé */}
    <style>{`
      .tl-row {
        display: grid;
        grid-template-columns: 1fr 64px 1fr;
        gap: 0 1.5rem;
        margin-bottom: 2rem;
        align-items: start;
      }
      .tl-col-left { text-align: right; padding-top: 0.25rem; }
      .tl-col-center { display: flex; justify-content: center; padding-top: 1.1rem; flex-shrink: 0; }
      .tl-col-right { text-align: left; padding-top: 0.25rem; }
      .tl-card-mobile { display: none; }

      @media(max-width: 700px) {
        .tl-row {
          grid-template-columns: 44px 1fr !important;
          gap: 0 1rem !important;
        }
        .tl-col-left { display: none !important; }
        .tl-card-desktop { display: none !important; }
        .tl-card-mobile { display: block !important; }
        .tl-vline { left: 22px !important; }
      }
    `}</style>
  </section>
);
}