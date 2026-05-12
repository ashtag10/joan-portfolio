"use client";
import { skills } from "@/data/portfolio";
import { Code2, Cpu, Database, Wrench } from "lucide-react";

const icons = [Code2, Cpu, Database, Wrench];
const descriptions = [
  "HTML/CSS, PHP OOP, Django, Java Spring Boot, Next.js/React — du backend au frontend.",
  "Arduino, LabVIEW, Proteus, IoT. Certifié Cisco Introduction to IoT (oct. 2025).",
  "MySQL, PostgreSQL, PhpMyAdmin / DB Browser — conception et optimisation de schémas.",
  "Git/GitHub, Figma, UML, méthodes Agile — de la maquette au déploiement.",
];

export default function Skills() {
  return (
    <section id="skills" style={{padding:"6rem 0",background:"var(--color-bg)"}}>
      <div className="wrap">
        <p className="s-label" data-aos="fade-up">Compétences</p>
        <h2 className="s-heading" data-aos="fade-up" data-aos-delay="80">Qui suis-je ?</h2>

        <p data-aos="fade-up" data-aos-delay="140" style={{color:"var(--color-muted)",maxWidth:680,marginBottom:"3.5rem",lineHeight:1.8,fontSize:"0.95rem"}}>
          Ingénieur logiciel en fin de formation à l'ENSP de Douala. Stack technique polyvalente —
          du firmware embarqué au déploiement d'applications web full-stack en production.
          CEO de <strong style={{color:"var(--color-text)"}}>STRIDENOV</strong> et actuellement
          en formation en <strong style={{color:"var(--color-text)"}}>marketing digital</strong> pour
          mieux valoriser nos solutions informatiques.
        </p>

        {/* 4-col skill cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1.25rem",marginBottom:"2.5rem"}} className="skills-grid">
          {skills.map((g, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={g.category} className="skill-card" data-aos="zoom-in" data-aos-delay={`${i*80}`}>
                <div className="skill-icon"><Icon size={22} color="var(--color-red)"/></div>
                <h3 style={{fontFamily:"var(--font-mono)",fontSize:"0.65rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--color-red)",marginBottom:"0.5rem"}}>
                  {g.category}
                </h3>
                <p style={{color:"var(--color-muted)",fontSize:"0.85rem",lineHeight:1.7,marginBottom:"1.25rem"}}>
                  {descriptions[i]}
                </p>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.4rem"}}>
                  {g.items.map(s => (
                    <li key={s.name} style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.82rem"}}>
                      <span style={{color:"var(--color-text)"}}>{s.name}</span>
                      <span style={{fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--color-red)"}}>{s.level}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem"}} data-aos="fade-up">
          {[{lang:"Français",dots:5,label:"Natif"},{lang:"Anglais",dots:4,label:"Intermédiaire"}].map(({lang,dots,label})=>(
            <div key={lang} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.65rem 1.25rem",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:6}}>
              <span style={{fontSize:"0.88rem",color:"var(--color-text)",fontWeight:500}}>{lang}</span>
              <div style={{display:"flex",gap:3}}>
                {Array.from({length:5}).map((_,i)=>(
                  <span key={i} style={{width:7,height:7,borderRadius:"50%",background: i<dots ? "var(--color-red)" : "var(--color-surface2)",border: i<dots ? "none" : "1px solid var(--color-border)"}}/>
                ))}
              </div>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"0.65rem",color:"var(--color-dim)"}}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`.skills-grid{grid-template-columns:repeat(4,1fr)}@media(max-width:1024px){.skills-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.skills-grid{grid-template-columns:1fr}}`}</style>
    </section>
  );
}