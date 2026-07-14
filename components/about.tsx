"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./section-heading";
import { Button } from "@/components/ui/button";
import StatsCounter from "./stats-counter";

const points = [
  "Integrated freeze-drying manufacturing",
  "Premium ingredient sourcing",
  "Global supply chain & distribution",
  "International quality standards",
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[420px] overflow-hidden rounded-[36px] sm:h-[500px] lg:h-[700px]">
              <Image
                src="/hero4.jpg"
                alt="Novem Manufacturing"
                fill
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-[#B8794B] p-8 text-white shadow-2xl">
              <h3 className="text-5xl font-serif">20+</h3>

              <p className="mt-2 text-sm uppercase tracking-widest">
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              align="left"
              subtitle="About Novem"
              title="Built Around Innovation, Quality & Trust"
            />

            <p className="mt-8 leading-8 text-gray-600">
              Novem delivers industrial freeze-drying and OEM food manufacturing
              solutions through a fully integrated production system. From
              sourcing premium ingredients to packaging and worldwide
              distribution, every stage is controlled to ensure exceptional
              quality and complete traceability.
            </p>

            <div className="mt-8 space-y-5">
              {points.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#B8794B]" size={22} />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button className="mt-10">Learn More</Button>

            <div className="mt-14 grid grid-cols-2 gap-5">
              <StatsCounter end={20} suffix="+" label="Years Experience" />

              <StatsCounter end={100} suffix="%" label="Quality Assurance" />

              <StatsCounter end={30} suffix="+" label="Global Partners" />

              <StatsCounter end={50000} suffix="+" label="Products Delivered" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
