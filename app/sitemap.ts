import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://esports.odiador.dev/",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    }
  ];
}
