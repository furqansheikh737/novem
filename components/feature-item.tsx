"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Factory,
  Boxes,
  BadgeCheck,
} from "lucide-react";

const icons = {
  shieldCheck: ShieldCheck,
  factory: Factory,
  boxes: Boxes,
  badgeCheck: BadgeCheck,
};

interface FeatureItemProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

export default function FeatureItem({
  title,
  description,
  icon,
}: FeatureItemProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-[#E8DDD2] bg-white p-6 shadow-sm hover:shadow-xl"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F4E5D8]">
        <Icon size={28} className="text-[#B8794B]" />
      </div>

      <h3 className="mb-3 font-serif text-2xl">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}