"use client";
import { motion } from "framer-motion"
import { useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

export default function SplashScreen() {
  const splashRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      splashRef.current!.style.display = "none";

    }, 2500);
  }, []);

  return (
    <div ref={splashRef} className="fixed t-0 l-0 w-full h-screen bg-black text-white z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="mt-20"
      >
        <h1 className="text-center text-4xl sm:text-xl">
          Welcome to visit my page
        </h1>
        <p className="text-center text-2xl mt-4 sm:text-base">
          Hello my friend
        </p>

      </motion.div>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'I am Nguyen Dang Trung',
        ]}
        wrapper="p"
        className="sm:text-xl text-2xl"
        speed={50}
        style={{  display: 'block', textAlign: 'center',marginTop:'10px' }}
      />

    </div>
  );
}
