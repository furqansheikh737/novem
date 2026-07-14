"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[9999] h-[5px] origin-left bg-gradient-to-r from-[#8B5E3C] via-[#B8794B] to-[#E9C49A] shadow-[0_0_18px_rgba(184,121,75,0.7)]"
    />
  );
}