export function BotanicalLeaf({
  className = "",
  color = "#71CE6A",
  opacity = 1,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 320 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Tallo central */}
      <path
        d="M160 470 C160 470 158 380 155 300 C152 220 148 140 160 20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Folíolo central superior */}
      <path
        d="M160 20 C160 20 130 60 125 100 C120 135 138 158 160 160 C182 158 200 135 195 100 C190 60 160 20 160 20Z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.08"
      />
      <path d="M160 20 L160 160" stroke={color} strokeWidth="1" strokeDasharray="4 3" />
      <path d="M160 60 C150 55 140 48 132 38" stroke={color} strokeWidth="0.8" />
      <path d="M160 60 C170 55 180 48 188 38" stroke={color} strokeWidth="0.8" />
      <path d="M160 100 C148 94 138 84 130 72" stroke={color} strokeWidth="0.8" />
      <path d="M160 100 C172 94 182 84 190 72" stroke={color} strokeWidth="0.8" />

      {/* Par de folíolos secundarios — nivel 1 */}
      <path
        d="M152 175 C152 175 105 165 80 140 C60 120 62 95 75 82 C88 95 100 118 152 175Z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.08"
      />
      <path d="M152 175 C130 155 100 130 80 108" stroke={color} strokeWidth="0.8" />
      <path d="M130 160 C120 148 110 135 105 122" stroke={color} strokeWidth="0.6" />
      <path d="M115 148 C108 138 104 127 102 115" stroke={color} strokeWidth="0.6" />

      <path
        d="M168 175 C168 175 215 165 240 140 C260 120 258 95 245 82 C232 95 220 118 168 175Z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.08"
      />
      <path d="M168 175 C190 155 220 130 240 108" stroke={color} strokeWidth="0.8" />
      <path d="M190 160 C200 148 210 135 215 122" stroke={color} strokeWidth="0.6" />
      <path d="M205 148 C212 138 216 127 218 115" stroke={color} strokeWidth="0.6" />

      {/* Par de folíolos — nivel 2 */}
      <path
        d="M150 230 C150 230 98 225 68 198 C44 175 46 148 60 134 C76 150 92 175 150 230Z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.06"
      />
      <path d="M150 230 C120 208 90 182 68 158" stroke={color} strokeWidth="0.8" />

      <path
        d="M170 230 C170 230 222 225 252 198 C276 175 274 148 260 134 C244 150 228 175 170 230Z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.06"
      />
      <path d="M170 230 C200 208 230 182 252 158" stroke={color} strokeWidth="0.8" />

      {/* Par de folíolos — nivel 3 (más pequeños) */}
      <path
        d="M153 285 C153 285 110 282 85 260 C64 242 66 218 78 206 C92 220 108 245 153 285Z"
        stroke={color}
        strokeWidth="1.2"
        fill={color}
        fillOpacity="0.05"
      />
      <path
        d="M167 285 C167 285 210 282 235 260 C256 242 254 218 242 206 C228 220 212 245 167 285Z"
        stroke={color}
        strokeWidth="1.2"
        fill={color}
        fillOpacity="0.05"
      />

      {/* Par de folíolos — nivel 4 (mínimos) */}
      <path
        d="M155 335 C155 335 125 332 108 316 C94 302 96 284 106 274 C118 286 132 308 155 335Z"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.04"
      />
      <path
        d="M165 335 C165 335 195 332 212 316 C226 302 224 284 214 274 C202 286 188 308 165 335Z"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.04"
      />
    </svg>
  );
}
