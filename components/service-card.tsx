"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Factory, Snowflake, ShieldCheck } from "lucide-react";

const icons = {
  factory: Factory,
  snowflake: Snowflake,
  shieldCheck: ShieldCheck,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className="group rounded-[28px] border border-[#E8DDD2] bg-white p-8 shadow-sm transition-all hover:shadow-xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5E8DB] transition-colors group-hover:bg-[#B8794B]">
        <Icon
          size={30}
          className="text-[#B8794B] transition-colors group-hover:text-white"
        />
      </div>

      <h3 className="mb-4 font-serif text-2xl text-[#2D2B2A]">
        {title}
      </h3>

      <p className="mb-6 leading-7 text-gray-600">
        {description}
      </p>

      <Link
        href="#"
        className="inline-flex items-center gap-2 font-semibold text-[#B8794B] transition-all hover:gap-3"
      >
        Learn More
        <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}