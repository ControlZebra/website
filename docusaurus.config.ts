import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "ControlZebra",
  tagline: "Version control for the rest of us",
  favicon: "img/logo.svg",

  url: "https://controlzebra.com",
  baseUrl: "/",

  organizationName: "ControlZebra",
  projectName: "controlzebra-website",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@700&display=swap",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "ControlZebra",
      logo: {
        alt: "ControlZebra Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/docs",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://discord.gg/ewh4qs5rkd",
          label: "Join Community",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Product",
          items: [
            {
              label: "Documentation",
              to: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ControlZebra",
            },
            {
              label: "Discord",
              href: "https://discord.gg/ewh4qs5rkd",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Report an Issue",
              href: "https://github.com/ControlZebra/controlzebra-releases/issues",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ControlZebra. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
