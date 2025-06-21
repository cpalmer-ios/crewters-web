import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "User Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation",
        },
        {
          title: "iOS App",
          href: "/docs/ios-app",
        },
        {
          title: "Documentation",
          href: "/docs/documentation/components",
          subLinks: [
            {
              title: "• Introduction",
              href: "/docs/documentation/introduction",
              disabled: false,
            },
            {
              title: "•  Components",
              href: "/docs/documentation/components",
              disabled: false,
            },
            {
              title: "•  Code Blocks",
              href: "/docs/documentation/code-blocks",
            },
            {
              title: "•  Style Guide",
              href: "/docs/documentation/style-guide",
            },
          ],
        },
        {
          title: "Search",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Crewters API",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
        },
        {
          title: "Architecture",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Features",
          href: "/docs/in-progress",
          subLinks: [
            {
              title: "• User",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Events",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Leagues",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Teams",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Stats",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Trophies",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Requests",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Notifications",
              href: "/docs/in-progress",
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Architecture",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Schemas",
          href: "/docs/in-progress",
          subLinks: [
            {
              title: "• User",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Events",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Leagues",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Teams",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Stats",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Trophies",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Requests",
              href: "/docs/in-progress",
              disabled: true,
            },
            {
              title: "• Notifications",
              href: "/docs/in-progress",
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      title: "Promo Site",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "File Structure",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Tailwind CSS",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Typography",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
