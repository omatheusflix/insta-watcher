import type { MetadataRoute } from "next";
import { messages } from "@/lib/messages";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${messages.appName} — Automação de Instagram`,
    short_name: messages.appName,
    description:
      "Painel self-hosted de automação para Instagram: comentário para DM, seguir para liberar, fluxos, chat com I.A. e insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e1014",
    theme_color: "#dd2a7b",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
