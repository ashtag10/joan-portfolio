"use client";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-aos]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = (e.target as HTMLElement).dataset.aosDelay || "0";
          setTimeout(() => e.target.classList.add("aos-animate"), parseInt(delay));
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}