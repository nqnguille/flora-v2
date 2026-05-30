"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloraLogo } from "@/components/ui/FloraLogo";
import { submitContact } from "@/actions/contact";
import { WA_LINK } from "@/lib/constants";
import Link from "next/link";

type Step =
  | { type: "bot"; id: string; text: string }
  | { type: "choice"; id: string; text: string; options: string[] }
  | { type: "input"; id: string; text: string };

const FLOW: Step[] = [
  {
    type: "bot",
    id: "welcome",
    text: "Hola. Tres preguntas rápidas para conectarte con el equipo correcto.",
  },
  {
    type: "choice",
    id: "reason",
    text: "¿Para qué usás el cannabis principalmente?",
    options: ["Dolor o inflamación", "Sueño", "Ansiedad o estrés", "Otra condición"],
  },
  {
    type: "choice",
    id: "reprocann",
    text: "¿Tenés REPROCANN?",
    options: ["Sí, lo tengo", "No, pero quiero tramitarlo", "No sé qué es"],
  },
  {
    type: "choice",
    id: "amount",
    text: "¿Cuánto consumís por mes aproximadamente?",
    options: ["Menos de 10g", "Entre 10 y 20g", "Más de 20g", "Todavía no sé"],
  },
  {
    type: "input",
    id: "contact",
    text: "Perfecto. ¿Cómo te llamás y cómo te contactamos?",
  },
];

interface Message {
  from: "bot" | "user";
  text: string;
  isTyping?: boolean;
}

export function ChatOnboarding() {
  const [stepIndex, setStepIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function startChat() {
    setStarted(true);
    pushBotMessage(FLOW[0].text);
    setTimeout(() => {
      setStepIndex(1);
    }, 600);
  }

  function pushBotMessage(text: string, delay = 0) {
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text }]);
    }, delay);
  }

  function handleChoice(option: string) {
    const step = FLOW[stepIndex];
    if (step.type !== "choice") return;

    setAnswers((prev) => ({ ...prev, [step.id]: option }));
    setMessages((prev) => [...prev, { from: "user", text: option }]);

    const next = stepIndex + 1;
    if (next < FLOW.length) {
      setTimeout(() => {
        pushBotMessage(FLOW[next].text);
        setTimeout(() => setStepIndex(next + 1 >= FLOW.length ? FLOW.length : next), 400);
      }, 400);
    }
  }

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: `${name} — ${contact}` },
    ]);
    setStatus("loading");

    const result = await submitContact({
      nombre: name,
      email: contact.includes("@") ? contact : "",
      telefono: !contact.includes("@") ? contact : "",
      mensaje: `Razón: ${answers.reason || "—"} | REPROCANN: ${answers.reprocann || "—"} | Consumo: ${answers.amount || "—"}`,
    });

    if (result.success) {
      setStatus("success");
      setTimeout(() => {
        pushBotMessage("Recibido. Te contactamos en menos de 24 horas. 🌿");
      }, 500);
    } else {
      setStatus("error");
    }
  }

  const currentStep = FLOW[stepIndex - 1] ?? null;
  const showChoices =
    started &&
    currentStep?.type === "choice" &&
    !answers[currentStep.id] &&
    status === "idle";
  const showInput =
    started &&
    stepIndex >= FLOW.length &&
    status !== "success";

  return (
    <div id="contacto" className="relative py-24 px-5">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag text-flora-accent mb-4 block">
            Contacto
          </span>
          <h2 className="font-garamond font-bold text-white text-4xl sm:text-5xl mb-4">
            Empezá acá.
          </h2>
          <p className="font-jakarta text-white/50 text-base">
            Sin formularios. Sin burocracia. Te conectamos con quien corresponde.
          </p>
        </motion.div>

        {/* Chat container */}
        <motion.div
          className="glass rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Top bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
            <div className="w-8 h-8 rounded-full bg-flora-accent/20 border border-flora-accent/30 flex items-center justify-center">
              <FloraLogo className="w-4 h-4" />
            </div>
            <div>
              <p className="font-jakarta text-sm font-semibold text-white leading-none">
                Flora
              </p>
              <p className="font-jakarta text-xs text-white/40 mt-0.5">
                {started ? "En línea" : "Club de cultivo medicinal"}
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-flora-accent animate-pulse" />
              <span className="font-jakarta text-xs text-white/40">activo</span>
            </div>
          </div>

          {/* Messages area */}
          <div className="min-h-[280px] max-h-[420px] overflow-y-auto px-5 py-5 space-y-3 flex flex-col">
            {!started && (
              <motion.div
                className="m-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="font-jakarta text-white/40 text-sm mb-5">
                  Asociarse en Flora lleva menos de 5 minutos.
                </p>
                <button
                  onClick={startChat}
                  className="bg-flora-accent hover:opacity-90 transition text-flora-base font-jakarta font-bold text-sm px-7 py-3 rounded-full"
                >
                  Empezar →
                </button>
              </motion.div>
            )}

            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-flora-accent/15 flex items-center justify-center flex-shrink-0 mt-1">
                      <FloraLogo className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 font-jakarta text-sm leading-relaxed ${
                      msg.from === "bot"
                        ? "chat-bubble-bot text-white/90"
                        : "chat-bubble-user text-flora-accent"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          {/* Choices */}
          <AnimatePresence>
            {showChoices && currentStep.type === "choice" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-5 pb-5 pt-1 border-t border-white/8"
              >
                <div className="flex flex-wrap gap-2 pt-3">
                  {currentStep.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleChoice(opt)}
                      className="font-jakarta text-sm px-4 py-2 rounded-full glass-accent text-flora-accent hover:bg-flora-accent/20 transition-all"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact input */}
          <AnimatePresence>
            {showInput && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onSubmit={handleContactSubmit}
                className="px-5 pb-5 pt-1 border-t border-white/8"
              >
                <div className="grid grid-cols-2 gap-2 pt-3 mb-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm font-jakarta text-white placeholder:text-white/30 outline-none focus:border-flora-accent/50 transition"
                  />
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="WhatsApp o email"
                    className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm font-jakarta text-white placeholder:text-white/30 outline-none focus:border-flora-accent/50 transition"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-xs mb-2 font-jakarta">
                    Error al enviar. Escribinos por{" "}
                    <Link href={WA_LINK} className="underline" target="_blank">WhatsApp</Link>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading" || !name || !contact}
                  className="w-full bg-flora-accent hover:opacity-90 disabled:opacity-40 text-flora-base font-jakarta font-bold text-sm py-3 rounded-full transition"
                >
                  {status === "loading" ? "Enviando..." : "Enviar →"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Success */}
          {status === "success" && (
            <div className="px-5 pb-6 pt-2 text-center">
              <Link
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-jakarta text-white/40 hover:text-flora-accent transition mt-3"
              >
                O escribinos ahora por WhatsApp →
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
