"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function CountUp({
  value,
  suffix = "",
  duration = 2,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!isInView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration, reduce]);

  return (
    <motion.span ref={ref} className={className}>
      {display.toLocaleString("pt-BR")}
      {suffix}
    </motion.span>
  );
}
