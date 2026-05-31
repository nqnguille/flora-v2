"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContact } from "@/actions/contact";
import { WA_LINK } from "@/lib/constants";
import Link from "next/link";

type Step =
  | { type: "bot";    id: string; text: string }
  | { type: "choice"; id: string; text: string; options: string[] }
  | { type: "input";  id: string; text: string };

const FLOW: Step[] = [
  { type: "bot",    id: "welcome",   text: "Tres preguntas rápidas para conectarte con el equipo correcto." },
  { type: "choice", id: "reason",    text: "¿Para qué usás el cannabis principalmente?", options: ["Dolor o inflamación","Sueño","Ansiedad o estrés","Otra condición"] },
  { type: "choice", id: "reprocann", text: "¿Tenés REPROCANN?", options: ["Sí, lo tengo","No, quiero tramitarlo","No sé qué es"] },
  { type: "choice", id: "amount",    text: "¿Cuánto consumís por mes?", options: ["Menos de 10g","Entre 10 y 20g","Más de 20g","Todavía no sé"] },
  { type: "input",  id: "contact",   text: "Perfecto. ¿Cómo te llamás y cómo te contactamos?" },
];

interface Msg { from: "bot" | "user"; text: string }

export function ChatOnboarding() {
  const [started, setStarted]     = useState(false);
  const [stepIdx, setStepIdx]     = useState(0);
  const [messages, setMessages]   = useState<Msg[]>([]);
  const [answers, setAnswers]     = useState<Record<string, string>>({});
  const [name, setName]           = useState("");
  const [contact, setContact]     = useState("");
  const [status, setStatus]       = useState<"idle"|"loading"|"success"|"error">("idle");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function start() {
    setStarted(true);
    setTimeout(() => {
      setMessages([{ from: "bot", text: FLOW[0].text }]);
      setTimeout(() => setStepIdx(1), 400);
    }, 200);
  }

  function choose(option: string) {
    const step = FLOW[stepIdx - 1];
    if (step?.type !== "choice") return;
    setAnswers(prev => ({ ...prev, [step.id]: option }));
    setMessages(prev => [...prev, { from: "user", text: option }]);
    const next = stepIdx;
    if (next < FLOW.length) {
      setTimeout(() => {
        setMessages(prev => [...prev, { from: "bot", text: FLOW[next].text }]);
        setTimeout(() => setStepIdx(next + 1), 400);
      }, 350);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setMessages(prev => [...prev, { from: "user", text: `${name} — ${contact}` }]);
    setStatus("loading");
    const res = await submitContact({
      nombre: name,
      email: contact.includes("@") ? contact : "",
      telefono: !contact.includes("@") ? contact : "",
      mensaje: `Razón: ${answers.reason||"—"} | REPROCANN: ${answers.reprocann||"—"} | Consumo: ${answers.amount||"—"}`,
    });
    if (res.success) {
      setStatus("success");
      setTimeout(() => setMessages(prev => [...prev, { from: "bot", text: "Recibido. Te contactamos en menos de 24 horas. 🌿" }]), 400);
    } else {
      setStatus("error");
    }
  }

  const currentStep  = FLOW[stepIdx - 1] ?? null;
  const showChoices  = started && currentStep?.type === "choice" && !answers[currentStep.id] && status === "idle";
  const showInput    = started && stepIdx >= FLOW.length && status !== "success";

  return (
    <section id="contacto" className="bg-cream py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: header */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="title-section text-green-dark mb-6"
            >
              Empezá acá.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-jakarta text-sm text-green-dark/55 leading-relaxed mb-8 max-w-sm"
            >
              Sin formularios. Sin burocracia. Tres preguntas y te conectamos con quien corresponde.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-3"
            >
              {[["hola@flora.ar","Email"],["Todo el país","Alcance"]].map(([v,l]) => (
                <div key={l} className="flex items-center gap-3">
                  <span className="section-tag text-green-dark/30 min-w-[3.5rem]">{l}</span>
                  <span className="font-jakarta text-sm text-green-dark/70">{v}</span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <span className="section-tag text-green-dark/30 min-w-[3.5rem]">IG</span>
                <span className="font-jakarta text-sm text-green-dark/70">@flora.cultivamosconciencia</span>
              </div>
            </motion.div>
          </div>

          {/* Right: chat */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-green-dark/15 rounded-2xl overflow-hidden"
          >
            {/* Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-green-dark/10 bg-green-dark/3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-dark/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-dark/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-dark/15" />
              </div>
              <span className="font-jakarta text-xs text-green-dark/40 ml-2">Flora · {started ? "en línea" : "Club de cultivo"}</span>
              {started && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-green-accent" />}
            </div>

            {/* Messages */}
            <div className="min-h-[260px] max-h-[360px] overflow-y-auto px-5 py-5 space-y-3 flex flex-col bg-cream/50">
              {!started && (
                <div className="m-auto text-center">
                  <p className="font-jakarta text-xs text-green-dark/40 mb-5">Asociarse en Flora lleva menos de 5 minutos.</p>
                  <button onClick={start}
                    className="font-jakarta text-sm font-bold bg-green-dark text-cream px-6 py-2.5 rounded-full hover:bg-green-mid transition-colors">
                    Empezar →
                  </button>
                </div>
              )}

              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] px-4 py-2.5 font-jakarta text-sm leading-relaxed ${
                      msg.from === "bot" ? "chat-bubble-bot text-green-dark/80" : "chat-bubble-user text-green-dark font-medium"
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            {/* Choices */}
            <AnimatePresence>
              {showChoices && currentStep?.type === "choice" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-green-dark/10 px-5 py-4 flex flex-wrap gap-2 bg-cream/30"
                >
                  {currentStep.options.map(opt => (
                    <button key={opt} onClick={() => choose(opt)}
                      className="font-jakarta text-xs font-medium border border-green-dark/20 text-green-dark px-4 py-2 rounded-full hover:bg-green-dark hover:text-cream transition-all">
                      {opt}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <AnimatePresence>
              {showInput && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  onSubmit={submit}
                  className="border-t border-green-dark/10 px-5 py-4 bg-cream/30"
                >
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <input value={name} onChange={e => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="border border-green-dark/20 rounded-lg px-3 py-2 text-xs font-jakarta text-green-dark placeholder:text-green-dark/30 bg-cream outline-none focus:border-green-dark transition" />
                    <input value={contact} onChange={e => setContact(e.target.value)}
                      placeholder="WhatsApp o email"
                      className="border border-green-dark/20 rounded-lg px-3 py-2 text-xs font-jakarta text-green-dark placeholder:text-green-dark/30 bg-cream outline-none focus:border-green-dark transition" />
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-xs mb-2">
                      Error al enviar. Escribinos por{" "}
                      <Link href={WA_LINK} className="underline" target="_blank">WhatsApp</Link>.
                    </p>
                  )}
                  <button type="submit" disabled={status === "loading" || !name || !contact}
                    className="w-full bg-green-dark text-cream font-jakarta font-bold text-xs py-2.5 rounded-full hover:bg-green-mid disabled:opacity-40 transition-colors">
                    {status === "loading" ? "Enviando..." : "Enviar →"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {status === "success" && (
              <div className="px-5 py-3 border-t border-green-dark/10 text-center bg-cream/30">
                <Link href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="font-jakarta text-xs text-green-dark/40 hover:text-green-dark transition">
                  O escribinos ahora por WhatsApp →
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
