"use client";
import { projects } from "@/data/portfolio";
import { ExternalLink, Lock, Globe, Code2, Cpu, BookOpen } from "lucide-react";

const typeIcon: Record<string, React.ElementType> = {
  Client: Globe, Professionnel: Code2, Personnel: Cpu, Académique: BookOpen,
};

// Grouped like mathieulc — no interactive filter
const groups = [
  { label: "Projets clients & pro", types: ["Client", "Professionnel"] },
  { label: "Projets personnels",    types: ["Personnel"] },
  { label: "Projets académiques",   types: ["Académique"] },
];

export default function Projects() {
  return (
    <section id="projects" style={{padding:"6rem 0",background:"var(--color-bg)",borderTop:"1px solid var(--color-border)"}}>
      <div className="wrap">
        <p className="s-label" data-aos="fade-up">Projets</p>
        <h2 className="s-heading" data-aos="fade-up" data-aos-delay="80">Portfolio</h2>
        <p data-aos="fade-up" data-aos-delay="140" style={{color:"var(--color-muted)",maxWidth:600,marginBottom:"3.5rem",lineHeight:1.8,fontSize:"0.9rem"}}>
          Projets personnels, professionnels et académiques — du firmware embarqué au déploiement web en production.
        </p>

        {groups.map(group => {
          const items = projects.filter(p => group.types.includes(p.type));
          if (!items.length) return null;
          return (
            <div key={group.label} style={{marginBottom:"4rem"}}>

              {/* Group separator like mathieulc */}
              <div data-aos="fade-up" style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"2rem"}}>
                <div style={{flex:1,height:1,background:"var(--color-border)"}}/>
                <span style={{fontFamily:"var(--font-mono)",fontSize:"0.6rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--color-dim)",whiteSpace:"nowrap",padding:"0 0.25rem"}}>
                  {group.label}
                </span>
                <div style={{flex:1,height:1,background:"var(--color-border)"}}/>
              </div>

              {/* Cards grid */}
              <div style={{display:"grid",gap:"1.25rem"}} className="proj-grid">
                {items.map((p, i) => {
                  const Icon = typeIcon[p.type] || Code2;
                  return (
                    <div key={p.title} data-aos="zoom-in" data-aos-delay={`${(i%3)*80}`}
                      style={{
                        background:"var(--color-surface)",
                        border:"1px solid var(--color-border)",
                        borderRadius:8,overflow:"hidden",
                        display:"flex",flexDirection:"column",
                        transition:"border-color 0.3s,box-shadow 0.3s,transform 0.3s",
                      }}
                      onMouseEnter={e=>{const el=e.currentTarget;el.style.borderColor="rgba(224,32,32,0.45)";el.style.boxShadow="0 8px 32px rgba(224,32,32,0.09)";el.style.transform="translateY(-4px)"}}
                      onMouseLeave={e=>{const el=e.currentTarget;el.style.borderColor="var(--color-border)";el.style.boxShadow="none";el.style.transform="none"}}>

                      {/* Thumbnail */}
                      <div style={{height:140,background:"var(--color-surface2)",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid var(--color-border)"}}>
                        <div style={{position:"absolute",inset:0,opacity:0.12,backgroundImage:"linear-gradient(var(--color-border) 1px,transparent 1px),linear-gradient(90deg,var(--color-border) 1px,transparent 1px)",backgroundSize:"28px 28px"}}/>
                        <Icon size={34} color="rgba(224,32,32,0.22)" style={{position:"relative",zIndex:1}}/>
                        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 50%,rgba(8,12,20,0.7))",zIndex:1}}/>
                        {/* Badges */}
                        <div style={{position:"absolute",bottom:10,left:12,zIndex:2,display:"flex",gap:6,flexWrap:"wrap"}}>
                          <span style={{padding:"2px 8px",borderRadius:99,background:"rgba(8,12,20,0.85)",border:"1px solid rgba(224,32,32,0.35)",fontFamily:"var(--font-mono)",fontSize:"0.57rem",letterSpacing:"0.1em",color:"var(--color-red)"}}>
                            {p.type}
                          </span>
                          {p.featured && (
                            <span style={{padding:"2px 8px",borderRadius:99,background:"rgba(224,32,32,0.15)",border:"1px solid rgba(224,32,32,0.4)",fontFamily:"var(--font-mono)",fontSize:"0.57rem",color:"var(--color-red)"}}>
                              ★
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Body */}
                      <div style={{padding:"1.25rem 1.25rem 1.5rem",display:"flex",flexDirection:"column",flex:1}}>
                        {/* Tech */}
                        <div style={{marginBottom:"0.5rem"}}>
                          {p.tech.map((t,ti) => (
                            <span key={t} style={{fontFamily:"var(--font-mono)",fontSize:"0.6rem",color:"var(--color-red)",opacity:0.8}}>
                              {t}{ti < p.tech.length-1 ? " · " : ""}
                            </span>
                          ))}
                        </div>
                        <h3 style={{fontWeight:700,fontSize:"1rem",color:"var(--color-text)",marginBottom:"0.5rem",lineHeight:1.3}}>
                          {p.title}
                        </h3>
                        <p style={{color:"var(--color-muted)",fontSize:"0.82rem",lineHeight:1.75,flex:1,marginBottom:"1rem"}}>
                          {p.description}
                        </p>
                        {p.link ? (
                          <a href={p.link} target="_blank" rel="noopener noreferrer"
                            style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--color-red)",textDecoration:"none",transition:"gap 0.2s",marginTop:"auto"}}
                            onMouseEnter={e=>e.currentTarget.style.gap="10px"}
                            onMouseLeave={e=>e.currentTarget.style.gap="6px"}>
                            <ExternalLink size={12}/> Voir le projet
                          </a>
                        ) : (
                          <span style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--color-dim)",marginTop:"auto"}}>
                            <Lock size={12}/> Code privé
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`.proj-grid{grid-template-columns:repeat(3,1fr)}@media(max-width:1024px){.proj-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.proj-grid{grid-template-columns:1fr}}`}</style>
    </section>
  );
}