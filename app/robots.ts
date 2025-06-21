import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // allow: "/", - SEO: Flip this when it's ready
      disallow: "/",
    },
  }
}
