"use client";

import { motion } from "framer-motion";
import { BotanicalLeaf } from "./BotanicalLeaf";

export function BotanicalDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-48 overflow-hidden pointer-events-none ${flip ? "scale-x-[-1]" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -bottom-8 right-16 md:right-32"
      >
        <BotanicalLeaf
          className="w-40 md:w-56 h-auto"
          color="#71CE6A"
          opacity={0.18}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
        className="absolute -bottom-4 left-20 md:left-48"
      >
        <BotanicalLeaf
          className="w-24 md:w-36 h-auto rotate-[25deg]"
          color="#2D4239"
          opacity={0.25}
        />
      </motion.div>
    </div>
  );
}
