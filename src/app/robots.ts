import type { MetadataRoute } from "next";
import { normalizeSiteUrl } from "@/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  const base = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`
  };
}

