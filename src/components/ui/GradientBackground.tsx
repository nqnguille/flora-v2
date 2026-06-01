// Aurora Flora — respiración real: inhala grande, exhala lento
// Scale: 0.55 → 1.55 | Opacity: 0.15 → 1.0 | Blur: 85px → 30px
export function GradientBackground() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{ background: "#0A0514" }}
      >
        {/* BANDA 1 — violeta, arriba izq — ciclo 7s, líder */}
        <div style={{
          position: "absolute",
          top: "-5%",
          left: "-25%",
          width: "130%",
          height: "55%",
          background: "radial-gradient(ellipse 65% 55% at 45% 50%, #381F56 0%, rgba(56,31,86,0.4) 45%, transparent 75%)",
          borderRadius: "50%",
          animation: "breath-1 7s ease-in-out infinite",
          willChange: "transform, opacity, filter",
        }} />

        {/* BANDA 2 — lila vibrante, centro — ciclo 9s, desfasada 2.5s */}
        <div style={{
          position: "absolute",
          top: "18%",
          left: "5%",
          width: "140%",
          height: "50%",
          background: "radial-gradient(ellipse 70% 50% at 50% 55%, #9B7BBF 0%, rgba(155,123,191,0.35) 50%, transparent 75%)",
          borderRadius: "50%",
          animation: "breath-2 9s ease-in-out infinite",
          animationDelay: "-2.5s",
          willChange: "transform, opacity, filter",
        }} />

        {/* BANDA 3 — forest green, centro-bajo — ciclo 8s, desfasada 4s */}
        <div style={{
          position: "absolute",
          top: "38%",
          left: "-15%",
          width: "125%",
          height: "45%",
          background: "radial-gradient(ellipse 75% 55% at 50% 50%, #0B5845 0%, rgba(11,88,69,0.35) 50%, transparent 75%)",
          borderRadius: "50%",
          animation: "breath-3 8s ease-in-out infinite",
          animationDelay: "-4s",
          willChange: "transform, opacity, filter",
        }} />

        {/* BANDA 4 — sage brillante, bajo — ciclo 10s, desfasada 1s */}
        <div style={{
          position: "absolute",
          top: "60%",
          left: "10%",
          width: "120%",
          height: "50%",
          background: "radial-gradient(ellipse 70% 50% at 55% 45%, #3B967E 0%, rgba(59,150,126,0.3) 50%, transparent 75%)",
          borderRadius: "50%",
          animation: "breath-4 10s ease-in-out infinite",
          animationDelay: "-1s",
          willChange: "transform, opacity, filter",
        }} />

        {/* BANDA 5 — lila spot, arriba der — ciclo 6s, desfasada 3s */}
        <div style={{
          position: "absolute",
          top: "0%",
          right: "-20%",
          width: "65%",
          height: "45%",
          background: "radial-gradient(ellipse 60% 55% at 55% 50%, #9B7BBF 0%, rgba(155,123,191,0.3) 50%, transparent 75%)",
          borderRadius: "50%",
          animation: "breath-5 6s ease-in-out infinite",
          animationDelay: "-3s",
          willChange: "transform, opacity, filter",
        }} />
      </div>

      <style>{`
        /* Inhala: escala grande, opaco, blur reducido
           Exhala: escala pequeña, transparente, muy borroso
           Asimétrico: inhala rápido (0→45%), exhala lento (55→100%) */

        @keyframes breath-1 {
          0%    { transform: scale(0.55) translate(-4%, 4%);   opacity: 0.15; filter: blur(85px);  }
          40%   { transform: scale(1.5)  translate(6%, -6%);   opacity: 0.95; filter: blur(30px);  }
          55%   { transform: scale(1.45) translate(5%, -5%);   opacity: 0.90; filter: blur(35px);  }
          100%  { transform: scale(0.55) translate(-4%, 4%);   opacity: 0.15; filter: blur(85px);  }
        }
        @keyframes breath-2 {
          0%    { transform: scale(0.5)  translate(5%, -3%);   opacity: 0.12; filter: blur(90px);  }
          42%   { transform: scale(1.55) translate(-6%, 5%);   opacity: 1.0;  filter: blur(28px);  }
          56%   { transform: scale(1.5)  translate(-5%, 4%);   opacity: 0.95; filter: blur(32px);  }
          100%  { transform: scale(0.5)  translate(5%, -3%);   opacity: 0.12; filter: blur(90px);  }
        }
        @keyframes breath-3 {
          0%    { transform: scale(0.6)  translate(3%, 5%);    opacity: 0.18; filter: blur(80px);  }
          38%   { transform: scale(1.45) translate(-5%, -7%);  opacity: 0.90; filter: blur(32px);  }
          52%   { transform: scale(1.42) translate(-4%, -6%);  opacity: 0.88; filter: blur(36px);  }
          100%  { transform: scale(0.6)  translate(3%, 5%);    opacity: 0.18; filter: blur(80px);  }
        }
        @keyframes breath-4 {
          0%    { transform: scale(0.52) translate(-3%, -4%);  opacity: 0.14; filter: blur(88px);  }
          43%   { transform: scale(1.5)  translate(5%, 6%);    opacity: 0.92; filter: blur(30px);  }
          57%   { transform: scale(1.45) translate(4%, 5%);    opacity: 0.88; filter: blur(34px);  }
          100%  { transform: scale(0.52) translate(-3%, -4%);  opacity: 0.14; filter: blur(88px);  }
        }
        @keyframes breath-5 {
          0%    { transform: scale(0.5)  translate(4%, -4%);   opacity: 0.10; filter: blur(92px);  }
          40%   { transform: scale(1.6)  translate(-5%, 5%);   opacity: 0.85; filter: blur(26px);  }
          55%   { transform: scale(1.55) translate(-4%, 4%);   opacity: 0.80; filter: blur(30px);  }
          100%  { transform: scale(0.5)  translate(4%, -4%);   opacity: 0.10; filter: blur(92px);  }
        }
      `}</style>
    </>
  );
}
