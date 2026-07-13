"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  FlaskConical,
  Snowflake,
  Package,
  Truck,
} from "lucide-react";

const icons = {
  leaf: Leaf,
  flaskConical: FlaskConical,
  snowflake: Snowflake,
  package: Package,
  truck: Truck,
};

interface ProcessNodeProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

export default function ProcessNode({
  title,
  description,
  icon,
}: ProcessNodeProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative flex gap-6"
    >
      {/* Circle */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B8794B] text-white shadow-lg">
        <Icon size={20} />
      </div>

      {/* Content */}
      <div className="rounded-2xl border border-[#EEE3D9] bg-white p-6 shadow-sm">
        <h3 className="mb-2 font-serif text-2xl">{title}</h3>

        <p className="leading-7 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}