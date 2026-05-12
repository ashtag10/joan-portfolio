"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position:"fixed",inset:0,zIndex:9999,
      background:"var(--color-bg)",
      display:"flex",alignItems:"center",justifyContent:"center",
      flexDirection:"column",gap:"1.5rem",
      opacity:fading ? 0 : 1,
      transition:"opacity 0.8s ease",
      pointerEvents:fading ? "none" : "all",
    }}>
      <div style={{position:"relative",width:110,height:110,display:"flex",alignItems:"center",justifyContent:"center"}}>

        {/* Outer ring — clockwise */}
        <div className="loader-ring-1" style={{
          position:"absolute",inset:0,borderRadius:"50%",
          border:"1px solid transparent",
          borderTopColor:"var(--color-red)",
          borderRightColor:"rgba(224,32,32,0.3)",
        }}/>

        {/* Inner ring — counter-clockwise */}
        <div className="loader-ring-2" style={{
          position:"absolute",inset:14,borderRadius:"50%",
          border:"1px solid transparent",
          borderTopColor:"rgba(224,32,32,0.6)",
          borderLeftColor:"rgba(224,32,32,0.15)",
        }}/>

        {/* Static border */}
        <div style={{position:"absolute",inset:0,borderRadius:"50%",border:"1px solid var(--color-border)"}}/>

        {/* Logo circle */}
        <div className="loader-dot" style={{
          width:50,height:50,borderRadius:"50%",
          border:"2px solid var(--color-red)",
          background:"rgba(8,12,20,0.9)",
          display:"flex",alignItems:"center",justifyContent:"center",
          overflow:"hidden",zIndex:2,position:"relative",
        }}>
          <img src="/images/logo.png" alt="Logo" style={{width:"100%",height:"100%",objectFit:"contain",padding:6}}/>
        </div>

        {/* Orbiting dot */}
        <div className="loader-ring-1" style={{position:"absolute",inset:0,borderRadius:"50%"}}>
          <div style={{
            position:"absolute",top:2,left:"50%",
            width:7,height:7,borderRadius:"50%",
            background:"var(--color-red)",
            transform:"translateX(-50%)",
            boxShadow:"0 0 8px 2px rgba(224,32,32,0.7)",
          }}/>
        </div>
      </div>

      <div style={{textAlign:"center"}}>
        <p style={{fontFamily:"var(--font-mono)",fontSize:"0.65rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--color-muted)"}}>
          Joan Brunel Takamte Kamga
        </p>
        <p style={{fontFamily:"var(--font-mono)",fontSize:"0.55rem",letterSpacing:"0.15em",color:"var(--color-dim)",marginTop:"0.3rem"}}>
          Portfolio · chargement...
        </p>
      </div>
    </div>
  );
}