import { cookies } from "next/headers";
import { LogoutIcon } from "@/components/icons";
import { Brand } from "@/components/brand";
import { MobileBottomNav, Nav } from "@/components/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { requireSession } from "@/lib/dal";
import { messages } from "@/lib/messages";
import { THEME_COOKIE, parseTheme } from "@/lib/theme";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  await requireSession();
  const theme = parseTheme((await cookies()).get(THEME_COOKIE)?.value);
  return (
    <div className="min-h-screen md:flex">
      <aside className="sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur-md pt-[env(safe-area-inset-top)] md:h-screen md:w-60 md:shrink-0 md:border-r md:border-b-0 md:bg-surface md:backdrop-blur-none md:pt-0">
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 md:h-full md:flex-col md:items-stretch md:justify-start md:gap-6 md:px-4 md:py-5">
          <Brand />
          <div className="hidden md:block">
            <Nav />
          </div>
          <div className="flex items-center gap-2 md:mt-auto md:flex-col md:items-stretch md:gap-3">
            <ThemeToggle initial={theme} />
            <form action="/api/logout" method="post">
              <button
                type="submit"
                className="flex min-h-[40px] w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <LogoutIcon size={18} />
                <span className="max-md:sr-only">{messages.nav.logout}</span>
              </button>
            </form>
          </div>
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-4 pt-5 pb-24 md:px-10 md:py-10">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
