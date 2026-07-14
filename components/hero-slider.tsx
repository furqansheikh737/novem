"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/hero.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="hero-image relative h-[520px] overflow-hidden rounded-[80px] shadow-xl">
        {slides.map((src, index) => (
          <Image
            key={src}
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={src}
            alt="Industrial freeze drying facility"
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-700 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Slider Dots */}
      <div className="mt-8 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-3 w-3 rounded-full transition ${
              active === index
                ? "bg-[#B8794B]"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}