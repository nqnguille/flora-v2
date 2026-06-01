export function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Blob 1 — top left, large */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.18] animate-blob-1"
        style={{
          background: "radial-gradient(circle, #0B5845 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Blob 2 — top right, accent */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.12] animate-blob-2"
        style={{
          background: "radial-gradient(circle, #9B7BBF 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      {/* Blob 3 — bottom center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.10] animate-blob-3"
        style={{
          background: "radial-gradient(circle, #0B5845 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
