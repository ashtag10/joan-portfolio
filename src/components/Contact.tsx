"use client";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

const inputStyle: React.CSSProperties = {
  width:"100%",padding:"0.75rem 1rem",
  background:"var(--color-surface2)",border:"1px solid var(--color-border)",
  borderRadius:6,color:"var(--color-text)",fontSize:"0.9rem",
  fontFamily:"var(--font-sans)",outline:"none",
  transition:"border-color 0.2s",
};

export default function Contact() {
  return (
    <section id="contact" style={{padding:"6rem 0",background:"var(--color-bg2)",borderTop:"1px solid var(--color-border)"}}>
      <div className="wrap">
        <p className="s-label" data-aos="fade-up">Contact</p>
        <h2 className="s-heading" data-aos="fade-up" data-aos-delay="80">Me contacter</h2>
        <p data-aos="fade-up" data-aos-delay="140" style={{color:"var(--color-muted)",maxWidth:560,marginBottom:"3rem",lineHeight:1.8,fontSize:"0.9rem"}}>
          Disponible pour des échanges sur des opportunités ou collaborations en développement logiciel et IoT.
        </p>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",alignItems:"start"}} className="contact-grid">

          {/* Terminal — like mathieulc */}
          <div className="terminal" data-aos="fade-right">
            <div className="terminal-bar">
              <span className="t-dot" style={{background:"#ff5f57"}}/>
              <span className="t-dot" style={{background:"#febc2e"}}/>
              <span className="t-dot" style={{background:"#28c840"}}/>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"0.65rem",color:"var(--color-muted)",marginLeft:"0.5rem"}}>
                joan@portfolio — zsh
              </span>
            </div>
            <div style={{padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1.25rem",fontSize:"0.82rem",fontFamily:"var(--font-mono)"}}>
              <div>
                <p style={{color:"var(--color-muted)"}}><span>~$ </span><span style={{color:"var(--color-red)"}}>whoami</span></p>
                <p style={{color:"var(--color-text)",paddingLeft:"1rem",marginTop:"0.3rem"}}>Joan Brunel Takamte Kamga</p>
              </div>
              <div>
                <p style={{color:"var(--color-muted)"}}><span>~$ </span><span style={{color:"var(--color-red)"}}>cat contact.json</span></p>
                <div style={{paddingLeft:"1rem",marginTop:"0.4rem",display:"flex",flexDirection:"column",gap:"0.35rem"}}>
                  {[
                    {k:"email",    v:personalInfo.email,    href:`mailto:${personalInfo.email}`},
                    {k:"linkedin", v:"linkedin.com/in/joan-takamte", href:personalInfo.linkedin},
                    {k:"location", v:personalInfo.location, href:null},
                  ].map(({k,v,href})=>(
                    <p key={k} style={{color:"var(--color-text)"}}>
                      <span style={{color:"var(--color-muted)",minWidth:70,display:"inline-block"}}>{k}</span>{" "}
                      {href
                        ? <a href={href} target="_blank" rel="noopener noreferrer" style={{color:"var(--color-red)",textDecoration:"none"}}>{v}</a>
                        : <span>{v}</span>
                      }
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p style={{color:"var(--color-muted)"}}><span>~$ </span><span style={{color:"var(--color-red)"}}>cat status.txt</span></p>
                <div style={{paddingLeft:"1rem",marginTop:"0.4rem",display:"flex",flexDirection:"column",gap:"0.35rem"}}>
                  <p style={{color:"var(--color-text)"}}><span style={{color:"var(--color-muted)",minWidth:70,display:"inline-block"}}>poste</span> Stagiaire fin d'études — Construct Services BTP</p>
                  <p style={{color:"var(--color-text)"}}><span style={{color:"var(--color-muted)",minWidth:70,display:"inline-block"}}>ouvert</span> Échanges, missions, collaborations</p>
                </div>
              </div>
              <p style={{color:"var(--color-muted)"}}>~$ <span className="cursor">▌</span></p>
            </div>
          </div>

          {/* Form */}
          <form data-aos="fade-left"
            onSubmit={e=>{
              e.preventDefault();
              const d=new FormData(e.target as HTMLFormElement);
              window.location.href=`mailto:${personalInfo.email}?subject=Contact portfolio — ${d.get("name")}&body=${d.get("message")}%0A%0A— ${d.get("name")} (${d.get("email")})`;
            }}
            style={{display:"flex",flexDirection:"column",gap:"1rem"}}>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
              {[{n:"name",l:"Nom",t:"text",p:"Votre nom"},{n:"email",l:"Email",t:"email",p:"votre@email.com"}].map(f=>(
                <div key={f.n}>
                  <label style={{display:"block",fontFamily:"var(--font-mono)",fontSize:"0.6rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--color-dim)",marginBottom:"0.4rem"}}>{f.l}</label>
                  <input name={f.n} required type={f.t} placeholder={f.p} style={inputStyle}
                    onFocus={e=>e.currentTarget.style.borderColor="var(--color-red)"}
                    onBlur={e=>e.currentTarget.style.borderColor="var(--color-border)"}/>
                </div>
              ))}
            </div>

            <div>
              <label style={{display:"block",fontFamily:"var(--font-mono)",fontSize:"0.6rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--color-dim)",marginBottom:"0.4rem"}}>Objet</label>
              <input name="subject" type="text" placeholder="Sujet de votre message" style={inputStyle}
                onFocus={e=>e.currentTarget.style.borderColor="var(--color-red)"}
                onBlur={e=>e.currentTarget.style.borderColor="var(--color-border)"}/>
            </div>

            <div>
              <label style={{display:"block",fontFamily:"var(--font-mono)",fontSize:"0.6rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--color-dim)",marginBottom:"0.4rem"}}>Message</label>
              <textarea name="message" required rows={5} placeholder="Votre message..." style={{...inputStyle,resize:"none"}}
                onFocus={e=>e.currentTarget.style.borderColor="var(--color-red)"}
                onBlur={e=>e.currentTarget.style.borderColor="var(--color-border)"}/>
            </div>

            <button type="submit" style={{
              padding:"0.8rem",background:"var(--color-red)",color:"#fff",border:"none",
              borderRadius:6,fontFamily:"var(--font-mono)",fontSize:"0.72rem",letterSpacing:"0.12em",
              textTransform:"uppercase",cursor:"pointer",transition:"background 0.2s",
            }}
              onMouseEnter={e=>e.currentTarget.style.background="var(--color-red-dark)"}
              onMouseLeave={e=>e.currentTarget.style.background="var(--color-red)"}>
              Envoyer un e-mail →
            </button>

            <div style={{display:"flex",gap:"0.75rem",marginTop:"0.25rem"}}>
              {[{href:personalInfo.github,icon:Github,label:"GitHub"},{href:personalInfo.linkedin,icon:Linkedin,label:"LinkedIn"}].map(({href,icon:Icon,label})=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:6,padding:"0.5rem 1rem",border:"1px solid var(--color-border)",borderRadius:6,fontFamily:"var(--font-mono)",fontSize:"0.65rem",color:"var(--color-muted)",textDecoration:"none",transition:"all 0.2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--color-red)";e.currentTarget.style.color="var(--color-red)"}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--color-border)";e.currentTarget.style.color="var(--color-muted)"}}>
                  <Icon size={13}/>{label}
                </a>
              ))}
            </div>
          </form>
        </div>
      </div>
      <style>{`.contact-grid{grid-template-columns:1fr 1fr}@media(max-width:768px){.contact-grid{grid-template-columns:1fr}}`}</style>
    </section>
  );
}