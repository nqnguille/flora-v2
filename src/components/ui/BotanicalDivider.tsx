"use client";

import { motion } from "framer-motion";
import { BotanicalLeaf } from "./BotanicalLeaf";

// Separador orgánico que no agrega altura muerta —
// simplemente deja flotar dos hojas en los márgenes de la transición entre secciones
export function BotanicalDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-0 overflow-visible pointer-events-none z-10 ${flip ? "-scale-x-100" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute right-8 md:right-24 -top-16 translate-y-0"
      >
        <BotanicalLeaf className="w-20 md:w-28 h-auto" color="#9B7BBF" opacity={0.2} />
      </motion.div>
    </div>
  );
}
