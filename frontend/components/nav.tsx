"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ActivityIcon,
  BoltIcon,
  ChartIcon,
  ChatIcon,
  HomeIcon,
  SendIcon,
  SlidersIcon,
  TargetIcon,
} from "@/components/icons";
import { messages } from "@/lib/messages";

const items = [
  { href: "/", label: messages.nav.overview, shortLabel: "Início", icon: HomeIcon },
  { href: "/campaigns", label: messages.nav.campaigns, shortLabel: "Campanhas", icon: BoltIcon },
  { href: "/chat", label: messages.nav.chat, shortLabel: "Chat", icon: ChatIcon },
  { href: "/logs", label: messages.nav.deliveries, shortLabel: "Entregas", icon: SendIcon },
  { href: "/insights", label: messages.nav.insights, shortLabel: "Insights", icon: ChartIcon },
  { href: "/competitors", label: messages.nav.competitors, shortLabel: "Concorr.", icon: TargetIcon },
  { href: "/settings", label: messages.nav.settings, shortLabel: "Config", icon: SlidersIcon },
  { href: "/diagnostics", label: messages.nav.diagnostics, shortLabel: "Diag.", icon: ActivityIcon },
] as const;

export function Nav() {
  const pathname = usePathname();
  return (
    <nav aria-label={messages.nav.label} className="hidden md:flex md:flex-col md:gap-1">
      {items.map(({ href, label, icon: Icon }) => {
        const current = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={current ? "page" : undefined}
            className={`flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm transition-colors ${
              current
                ? "bg-accent-soft font-semibold text-accent"
                : "text-muted hover:bg-surface-2 hover:text-fg"
            }`}
          >
            <Icon size={19} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label={messages.nav.label}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="flex items-stretch gap-1 overflow-x-auto px-2 py-1.5 no-scrollbar">
        {items.map(({ href, shortLabel, icon: Icon }) => {
          const current = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={current ? "page" : undefined}
              className={`flex min-w-[64px] flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-1.5 text-[11px] font-medium transition-colors ${
                current
                  ? "bg-accent-soft font-semibold text-accent"
                  : "text-muted active:bg-surface-2"
              }`}
            >
              <Icon size={20} />
              <span className="truncate">{shortLabel}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
