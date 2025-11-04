import { siteConfig } from "@/config/site"

interface StructuredDataProps {
  type: "Organization" | "SoftwareApplication" | "FAQPage" | "WebSite"
  data?: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
  }

  let structuredData: Record<string, any> = { ...baseStructuredData, ...data }

  switch (type) {
    case "Organization":
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        name: "Crewters",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description:
          "A Sports Social Network Connecting You & Your Community to Sports Venues around the World.",
        sameAs: [
          siteConfig.links.twitter,
          siteConfig.links.github,
          siteConfig.links.instagram,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@crewters.com",
          contactType: "Customer Support",
        },
        ...data,
      }
      break

    case "SoftwareApplication":
      structuredData = {
        ...baseStructuredData,
        "@type": "SoftwareApplication",
        name: "Crewters",
        applicationCategory: "Sports & Fitness",
        operatingSystem: "iOS",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          ratingCount: "100",
        },
        description:
          "Crewters is a sports social network that connects you with your friends, teams, and local sports venues. Create or join sports events, challenge friends, join teams, compete in leagues, track stats, and earn trophies.",
        screenshot: `${siteConfig.url}/images/screen6.png`,
        featureList: [
          "Create or join sports events",
          "Challenge friends to games",
          "Join or create teams",
          "Compete in leagues",
          "Track your stats and goals",
          "Earn trophies and achievements",
          "Find sports venues worldwide",
          "Connect with sports community",
        ],
        ...data,
      }
      break

    case "WebSite":
      structuredData = {
        ...baseStructuredData,
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@type": "Organization",
          name: "Crewters",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        ...data,
      }
      break

    case "FAQPage":
      structuredData = {
        ...baseStructuredData,
        "@type": "FAQPage",
        mainEntity: data?.mainEntity || [],
      }
      break
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

