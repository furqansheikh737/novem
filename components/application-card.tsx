"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
  description: string;
}

export default function ApplicationCard({
  title,
  image,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-[30px] bg-white shadow-sm"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vw"
          alt={title}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-8">
        <h3 className="mb-3 font-serif text-3xl">{title}</h3>

        <p className="leading-7 text-gray-600">
          {description}
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-[#B8794B]">
          Learn More
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}