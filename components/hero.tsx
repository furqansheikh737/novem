"use client";

import { motion } from "framer-motion";
import HeroSlider from "./hero-slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F4EF] pt-32 pb-24">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-[#8E715A]" />

            <div className="pl-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#B8794B]">
                Nutrition, Frozen In Time
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-serif text-5xl leading-tight text-[#2D2B2A] lg:text-6xl"
              >
                Industrial Freeze-Drying
                <br />& Food Manufacturing
              </motion.h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-[#706965]">
                A fully integrated, closed-loop system from ingredient sourcing
                through production, packaging, and distribution.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10"
              >
                <Link href="#contact">
                  <Button className="rounded-full bg-[#B8794B] px-8 py-6 text-base hover:bg-[#9E683E]">
                    Start A Project
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <HeroSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
