"use client";

import { motion } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.07,
  once = true,
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once, margin: "-40px" }}
          transition={{
            duration: 0.55,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
