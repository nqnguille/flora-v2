// Aurora boreal — bandas horizontales que ondean en verdes
// Fijo detrás de toda la página, las secciones oscuras son semi-transparentes
export function GradientBackground() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{ background: "#0c1510" }}
      >
        {/* Banda 1 — alta, verde claro, deriva lenta a la derecha */}
        <div style={{
          position: "absolute",
          top: "8%",
          left: "-30%",
          width: "140%",
          height: "28%",
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(113,206,106,0.28) 0%, rgba(61,90,76,0.15) 50%, transparent 100%)",
          filter: "blur(55px)",
          borderRadius: "50%",
          animation: "aurora-1 14s ease-in-out infinite",
          willChange: "transform",
        }} />

        {/* Banda 2 — media, verde oscuro, deriva lenta a la izquierda */}
        <div style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "130%",
          height: "35%",
          background: "radial-gradient(ellipse 80% 40% at 50% 60%, rgba(74,136,96,0.22) 0%, rgba(45,66,57,0.18) 55%, transparent 100%)",
          filter: "blur(70px)",
          borderRadius: "50%",
          animation: "aurora-2 18s ease-in-out infinite",
          willChange: "transform",
        }} />

        {/* Banda 3 — baja-media, acento verde brillante */}
        <div style={{
          position: "absolute",
          top: "52%",
          left: "10%",
          width: "110%",
          height: "25%",
          background: "radial-gradient(ellipse 90% 45% at 45% 50%, rgba(113,206,106,0.18) 0%, rgba(61,90,76,0.12) 60%, transparent 100%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          animation: "aurora-3 11s ease-in-out infinite",
          willChange: "transform",
        }} />

        {/* Banda 4 — muy baja, oscura, sutil */}
        <div style={{
          position: "absolute",
          top: "72%",
          left: "-20%",
          width: "120%",
          height: "30%",
          background: "radial-gradient(ellipse 70% 50% at 55% 50%, rgba(45,66,57,0.20) 0%, rgba(26,43,35,0.15) 60%, transparent 100%)",
          filter: "blur(80px)",
          borderRadius: "50%",
          animation: "aurora-4 16s ease-in-out infinite",
          willChange: "transform",
        }} />
      </div>

      <style>{`
        @keyframes aurora-1 {
          0%   { transform: translateX(0%)   translateY(0px)  scaleX(1);    opacity: 0.9; }
          25%  { transform: translateX(12%)  translateY(15px) scaleX(1.05); opacity: 1;   }
          50%  { transform: translateX(18%)  translateY(8px)  scaleX(0.95); opacity: 0.85;}
          75%  { transform: translateX(6%)   translateY(-8px) scaleX(1.08); opacity: 1;   }
          100% { transform: translateX(0%)   translateY(0px)  scaleX(1);    opacity: 0.9; }
        }
        @keyframes aurora-2 {
          0%   { transform: translateX(0%)   translateY(0px)   scaleX(1);    opacity: 0.8; }
          30%  { transform: translateX(-14%) translateY(-12px) scaleX(1.1);  opacity: 1;   }
          60%  { transform: translateX(-8%)  translateY(10px)  scaleX(0.92); opacity: 0.85;}
          80%  { transform: translateX(-18%) translateY(-5px)  scaleX(1.05); opacity: 0.95;}
          100% { transform: translateX(0%)   translateY(0px)   scaleX(1);    opacity: 0.8; }
        }
        @keyframes aurora-3 {
          0%   { transform: translateX(0%)   translateY(0px)  scaleX(1);    opacity: 0.75;}
          35%  { transform: translateX(10%)  translateY(18px) scaleX(1.12); opacity: 1;   }
          65%  { transform: translateX(-6%)  translateY(6px)  scaleX(0.9);  opacity: 0.8; }
          100% { transform: translateX(0%)   translateY(0px)  scaleX(1);    opacity: 0.75;}
        }
        @keyframes aurora-4 {
          0%   { transform: translateX(0%)   translateY(0px)   scaleX(1);   opacity: 0.7; }
          40%  { transform: translateX(-10%) translateY(-10px) scaleX(1.08);opacity: 0.9; }
          70%  { transform: translateX(8%)   translateY(12px)  scaleX(0.95);opacity: 0.75;}
          100% { transform: translateX(0%)   translateY(0px)   scaleX(1);   opacity: 0.7; }
        }
      `}</style>
    </>
  );
}
