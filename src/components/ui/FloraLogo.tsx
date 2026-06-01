export function FloraLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-label="Flora">
      <path d="M16 4C16 4 5 10 5 20C5 25.5 9.8 28 16 28C22.2 28 27 25.5 27 20C27 10 16 4 16 4Z"
        fill="#9B7BBF" opacity="0.2" />
      <path d="M16 4C16 4 5 10 5 20C5 25.5 9.8 28 16 28"
        stroke="#9B7BBF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 4C16 4 27 10 27 20C27 25.5 22.2 28 16 28"
        stroke="#9B7BBF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="9" x2="16" y2="28" stroke="#9B7BBF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="16" x2="16" y2="20" stroke="#9B7BBF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="16" x2="16" y2="20" stroke="#9B7BBF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
