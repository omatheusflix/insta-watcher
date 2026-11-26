import { messages } from "@/lib/messages";

export function Brand() {
  return (
    <div className="flex items-center gap-2.5 px-1">
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0 drop-shadow-sm"
      >
        <defs>
          <linearGradient id="brand-iw-grad" x1="6" y1="58" x2="58" y2="6" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F58529" />
            <stop offset="35%" stopColor="#DD2A7B" />
            <stop offset="70%" stopColor="#8134AF" />
            <stop offset="100%" stopColor="#515BD4" />
          </linearGradient>
          <linearGradient id="brand-iw-shine" x1="12" y1="8" x2="52" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#brand-iw-grad)" />
        <rect
          x="2.75"
          y="2.75"
          width="58.5"
          height="58.5"
          rx="15.25"
          stroke="url(#brand-iw-shine)"
          strokeWidth="1.5"
        />
        <path
          d="M14 32C18.5 22.8 25 18.5 32 18.5C39 18.5 45.5 22.8 50 32C45.5 41.2 39 45.5 32 45.5C25 45.5 18.5 41.2 14 32Z"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="6.5" fill="#FFFFFF" />
        <circle cx="34.2" cy="29.8" r="2" fill="url(#brand-iw-grad)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] bg-clip-text text-base font-extrabold tracking-tight text-transparent">
          {messages.appName}
        </span>
        <span className="text-[10px] font-medium tracking-wide text-muted">
          Automação IG
        </span>
      </div>
    </div>
  );
}
