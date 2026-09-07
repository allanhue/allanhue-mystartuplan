export default function LanstarMark({ className = 'h-10 w-10', title = 'Lanstar Solutions' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-labelledby="lanstar-mark-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="lanstar-mark-title">{title}</title>
      <defs>
        <linearGradient id="lanstar-mark-gradient" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67E8F9" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <path
        d="M24 2.75 42.4 13.38v21.24L24 45.25 5.6 34.62V13.38L24 2.75Z"
        fill="#071A24"
        stroke="url(#lanstar-mark-gradient)"
        strokeWidth="2"
      />
      <path d="m24 10 3.55 10.45L38 24l-10.45 3.55L24 38l-3.55-10.45L10 24l10.45-3.55L24 10Z" fill="url(#lanstar-mark-gradient)" />
      <path d="M14 15.5 20.8 20M34 15.5 27.2 20M14 32.5 20.8 28M34 32.5 27.2 28" stroke="#A5F3FC" strokeWidth="1.5" strokeLinecap="round" opacity=".8" />
      <circle cx="12.5" cy="14.5" r="2.5" fill="#22D3EE" />
      <circle cx="35.5" cy="14.5" r="2.5" fill="#2DD4BF" />
      <circle cx="12.5" cy="33.5" r="2.5" fill="#2DD4BF" />
      <circle cx="35.5" cy="33.5" r="2.5" fill="#22D3EE" />
    </svg>
  );
}