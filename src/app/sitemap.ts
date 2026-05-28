import type { MetadataRoute } from "next";
import { normalizeSiteUrl } from "@/lib/siteUrl";

const base = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

const routes = [
  "/",
  "/about",
  "/services",
  "/ai-advisory",
  "/real-time-financial-intelligence",
  "/industries",
  "/keyra-partner",
  "/executive-intelligence-center",
  "/research-white-papers",
  "/ai-readiness-assessment",
  "/contact",
  "/schedule-consultation",
  "/client-portal",
  "/operational-intelligence-platform",
  "/executive-dashboards",
  "/ai-governance",
  "/enterprise-connectivity"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7
  }));
}

