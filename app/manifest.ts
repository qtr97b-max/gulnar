import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gulnar",
    short_name: "Gulnar",
    description: "Bahrain-first home cooks & restaurants marketplace",
    start_url: "/ar",
    display: "standalone",
    background_color: "#fbf7f8",
    theme_color: "#571f35",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" }
    ]
  };
}
