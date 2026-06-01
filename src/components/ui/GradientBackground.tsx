// Gradiente cónico rotante — fijo detrás de toda la página
// Las secciones oscuras tienen fondo semi-transparente para dejarlo respirar
export function GradientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "260%",
          height: "260%",
          transform: "translate(-50%, -50%)",
          background: `conic-gradient(
            from 0deg,
            #0c1510 0deg,
            #2D4239 70deg,
            #3d5a4c 120deg,
            #4a8860 150deg,
            #71CE6A 180deg,
            #4a8860 210deg,
            #3d5a4c 240deg,
            #2D4239 290deg,
            #0c1510 360deg
          )`,
          animation: "gradient-spin 12s linear infinite",
          opacity: 0.9,
        }}
      />

      <style>{`
        @keyframes gradient-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
