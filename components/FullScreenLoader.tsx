"use client";

import { useEffect, useRef } from "react";

export default function SplashScreen() {
  const splashRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      splashRef.current!.style.display = "none";
    }, 500);
  }, []);
  return (
    <div ref={splashRef}>
      <img src="/header-img.svg" className="fixed w-screen h-screen" style={{zIndex:'1000'}}/>
    </div>
  );
}
