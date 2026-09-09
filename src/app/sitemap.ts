import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kadirakdogan.vercel.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/experience",
    "/skills",
    "/certifications",
    "/references",
    "/contact",
    "/cv",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
