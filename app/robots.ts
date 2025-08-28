import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["http://esports.odiador.dev/"], // Bloquea HTTP
      },
    ],
    sitemap: "https://esports.odiador.dev/sitemap.xml",
  };
}
