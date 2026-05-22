"use client";

import { motion, useScroll, useReducedMotion } from "motion/react";
import { useRef } from "react";

export function TimelineDraw({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <div ref={ref} className={`relative ${className || ""}`}>
      {/* Vertical line that draws as you scroll */}
      <svg
        className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="var(--color-forest, #1F4D3A)"
          strokeWidth="2"
          style={{
            pathLength: reduce ? 1 : scrollYProgress,
          }}
        />
      </svg>
      {children}
    </div>
  );
}
