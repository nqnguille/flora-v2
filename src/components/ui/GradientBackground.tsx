// Aurora Flora — mezcla violeta + lila + forest + sage
// Bandas horizontales que ondean con la paleta oficial
export function GradientBackground() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{ background: "#0A0514" }}
      >
        {/* Banda 1 — violeta profundo, arriba izquierda */}
        <div style={{
          position: "absolute",
          top: "0%",
          left: "-20%",
          width: "120%",
          height: "40%",
          background: "radial-gradient(ellipse 75% 55% at 40% 50%, rgba(56,31,86,0.75) 0%, rgba(56,31,86,0.35) 50%, transparent 100%)",
          filter: "blur(50px)",
          borderRadius: "50%",
          animation: "aurora-1 16s ease-in-out infinite",
          willChange: "transform",
        }} />

        {/* Banda 2 — lila vibrante, media */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "130%",
          height: "35%",
          background: "radial-gradient(ellipse 80% 45% at 50% 55%, rgba(155,123,191,0.45) 0%, rgba(155,123,191,0.18) 55%, transparent 100%)",
          filter: "blur(55px)",
          borderRadius: "50%",
          animation: "aurora-2 20s ease-in-out infinite",
          willChange: "transform",
        }} />

        {/* Banda 3 — forest green, media-baja */}
        <div style={{
          position: "absolute",
          top: "42%",
          left: "-10%",
          width: "115%",
          height: "30%",
          background: "radial-gradient(ellipse 85% 50% at 45% 50%, rgba(11,88,69,0.55) 0%, rgba(11,88,69,0.22) 60%, transparent 100%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          animation: "aurora-3 13s ease-in-out infinite",
          willChange: "transform",
        }} />

        {/* Banda 4 — sage green brillante, baja */}
        <div style={{
          position: "absolute",
          top: "60%",
          left: "15%",
          width: "120%",
          height: "28%",
          background: "radial-gradient(ellipse 70% 45% at 55% 50%, rgba(59,150,126,0.4) 0%, rgba(59,150,126,0.15) 60%, transparent 100%)",
          filter: "blur(65px)",
          borderRadius: "50%",
          animation: "aurora-4 17s ease-in-out infinite",
          willChange: "transform",
        }} />

        {/* Banda 5 — lila spot acento, arriba derecha */}
        <div style={{
          position: "absolute",
          top: "5%",
          right: "-15%",
          width: "60%",
          height: "35%",
          background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(155,123,191,0.35) 0%, transparent 70%)",
          filter: "blur(45px)",
          borderRadius: "50%",
          animation: "aurora-5 11s ease-in-out infinite",
          willChange: "transform",
        }} />
      </div>

      <style>{`
        @keyframes aurora-1 {
          0%,100% { transform: translateX(0%)   translateY(0px)   scaleX(1);    opacity:0.9; }
          30%     { transform: translateX(14%)  translateY(18px)  scaleX(1.08); opacity:1;   }
          65%     { transform: translateX(6%)   translateY(-10px) scaleX(0.94); opacity:0.85;}
        }
        @keyframes aurora-2 {
          0%,100% { transform: translateX(0%)   translateY(0px)   scaleX(1);    opacity:0.85;}
          35%     { transform: translateX(-16%) translateY(-15px) scaleX(1.12); opacity:1;   }
          70%     { transform: translateX(-8%)  translateY(12px)  scaleX(0.9);  opacity:0.9; }
        }
        @keyframes aurora-3 {
          0%,100% { transform: translateX(0%)   translateY(0px)   scaleX(1);    opacity:0.8; }
          40%     { transform: translateX(12%)  translateY(20px)  scaleX(1.1);  opacity:1;   }
          75%     { transform: translateX(-5%)  translateY(8px)   scaleX(0.92); opacity:0.85;}
        }
        @keyframes aurora-4 {
          0%,100% { transform: translateX(0%)   translateY(0px)   scaleX(1);    opacity:0.75;}
          45%     { transform: translateX(-12%) translateY(-14px) scaleX(1.08); opacity:0.95;}
          80%     { transform: translateX(8%)   translateY(10px)  scaleX(0.95); opacity:0.8; }
        }
        @keyframes aurora-5 {
          0%,100% { transform: translateX(0%)   translateY(0px)   scale(1);     opacity:0.7; }
          50%     { transform: translateX(-10%) translateY(12px)  scale(1.15);  opacity:1;   }
        }
      `}</style>
    </>
  );
}
