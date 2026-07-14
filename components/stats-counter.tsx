"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function StatsCounter({
  end,
  suffix = "",
  label,
}: StatsCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-[#E8DDD2] bg-[#F8F4EF] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="font-serif text-4xl text-[#B8794B]">
        {inView ? <CountUp end={end} duration={2} /> : 0}
        {suffix}
      </h3>

      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-600">
        {label}
      </p>
    </div>
  );
}