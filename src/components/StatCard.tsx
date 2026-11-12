"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  /** Real number to count up to. `null` shows a visible placeholder instead. */
  value: number | null;
  suffix?: string;
  label: string;
  placeholder?: string;
  tone?: "dark" | "light";
}

export function StatCard({ value, suffix = "", label, placeholder = "[XX]", tone = "dark" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value === null || reduce ? value : 0);

  useEffect(() => {
    if (value === null) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  const dark = tone === "dark";
  return (
    <div ref={ref} className={`border-l-2 pl-5 ${dark ? "border-volt" : "border-volt"}`}>
      <div className={`text-4xl font-bold tabular-nums sm:text-5xl ${dark ? "text-white" : "text-navy-900"}`}>
        {value === null ? (
          <span className="font-mono text-amber-signal" title="Placeholder — add your real figure in src/data/site.ts">
            {placeholder}
            {suffix}
          </span>
        ) : (
          <>
            <span aria-label={`${value}${suffix}`}>
              <span aria-hidden>{display}</span>
              <span aria-hidden>{suffix}</span>
            </span>
          </>
        )}
      </div>
      <p className={`label mt-2 ${dark ? "text-steel-300" : "text-steel-500"}`}>{label}</p>
    </div>
  );
}
