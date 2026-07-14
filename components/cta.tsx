"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage: "url('/cta-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container-custom relative z-10 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl font-serif text-4xl leading-tight lg:text-6xl"
        >
          Ready To Build Your Next Product?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-200"
        >
          Let's discuss how Novem can support your food or pet nutrition
          manufacturing with our end-to-end production capabilities.
        </motion.p>

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
    </section>
  );
}
