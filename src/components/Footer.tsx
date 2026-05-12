"use client";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer style={{
      borderTop:"1px solid var(--color-border)",
      padding:"2.5rem 0",
      background:"var(--color-bg)",
      textAlign:"center",
    }}>
      {/* Logo + LinkedIn */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.75rem",marginBottom:"1rem"}}>
        <div style={{
          width:38,height:38,borderRadius:"50%",
          border:"1px solid var(--color-border)",
          overflow:"hidden",padding:5,
          background:"var(--color-surface)",
          display:"flex",alignItems:"center",justifyContent:"center",
        }}>
          <img src="/images/logo.png" alt="Logo" style={{width:"100%",height:"100%",objectFit:"contain"}}/>
        </div>

        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
          style={{
            width:38,height:38,borderRadius:"50%",
            border:"1px solid var(--color-border)",
            display:"flex",alignItems:"center",justifyContent:"center",
            color:"var(--color-muted)",transition:"border-color 0.2s,color 0.2s",
          }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--color-red)";e.currentTarget.style.color="var(--color-red)"}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--color-border)";e.currentTarget.style.color="var(--color-muted)"}}>
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>

      {/* Location */}
      <p style={{
        fontFamily:"var(--font-mono)",fontSize:"0.72rem",
        color:"var(--color-muted)",marginBottom:"0.4rem",
        display:"flex",alignItems:"center",justifyContent:"center",gap:6,
      }}>
        <span style={{color:"var(--color-red)"}}>📍</span>
        {personalInfo.location}
      </p>

      {/* Copyright */}
      <p style={{fontFamily:"var(--font-mono)",fontSize:"0.68rem",color:"var(--color-dim)"}}>
        Copyright © Joan Brunel Takamte Kamga {new Date().getFullYear()}
      </p>
    </footer>
  );
}