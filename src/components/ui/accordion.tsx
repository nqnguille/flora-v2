"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  multiple?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

// Context to communicate between Accordion and its children
import { createContext, useContext } from "react";

const AccordionContext = createContext<{
  open: string[];
  toggle: (val: string) => void;
}>({ open: [], toggle: () => {} });

const AccordionItemContext = createContext<{ value: string; isOpen: boolean }>({
  value: "",
  isOpen: false,
});

function Accordion({ multiple = false, className, children }: AccordionProps) {
  const [open, setOpen] = useState<string[]>([]);

  function toggle(val: string) {
    setOpen((prev) => {
      if (prev.includes(val)) return prev.filter((v) => v !== val);
      return multiple ? [...prev, val] : [val];
    });
  }

  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      <div className={cn("w-full flex flex-col", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ value, className, children }: AccordionItemProps) {
  const { open } = useContext(AccordionContext);
  const isOpen = open.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn(className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  const { toggle } = useContext(AccordionContext);
  const { value, isOpen } = useContext(AccordionItemContext);

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between gap-4 py-4 text-left transition-colors",
        className
      )}
    >
      {children}
      <ChevronDown
        size={16}
        className={cn(
          "flex-shrink-0 text-white/30 transition-transform duration-300",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

function AccordionContent({ className, children }: AccordionContentProps) {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("pb-4", className)}>{children}</div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
