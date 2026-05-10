import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,mdx}", "./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "var(--type-display-xl-size)",
          {
            lineHeight: "var(--type-display-xl-line)",
            letterSpacing: "var(--type-display-xl-tracking)",
          },
        ],
        "display-lg": [
          "var(--type-display-lg-size)",
          {
            lineHeight: "var(--type-display-lg-line)",
            letterSpacing: "var(--type-display-lg-tracking)",
          },
        ],
        "display-md": [
          "var(--type-display-md-size)",
          {
            lineHeight: "var(--type-display-md-line)",
            letterSpacing: "var(--type-display-md-tracking)",
          },
        ],
        "display-sm": [
          "var(--type-display-sm-size)",
          {
            lineHeight: "var(--type-display-sm-line)",
            letterSpacing: "var(--type-display-sm-tracking)",
          },
        ],
        "display-xs": [
          "var(--type-display-xs-size)",
          {
            lineHeight: "var(--type-display-xs-line)",
            letterSpacing: "var(--type-display-xs-tracking)",
          },
        ],
        "display-2xs": [
          "var(--type-display-2xs-size)",
          {
            lineHeight: "var(--type-display-2xs-line)",
            letterSpacing: "var(--type-display-2xs-tracking)",
          },
        ],
        "body-lg": ["var(--type-body-lg-size)", { lineHeight: "var(--type-body-lg-line)" }],
        "body-md": ["var(--type-body-md-size)", { lineHeight: "var(--type-body-md-line)" }],
        caption: ["var(--type-caption-size)", { lineHeight: "var(--type-caption-line)" }],
        label: [
          "var(--type-label-size)",
          {
            lineHeight: "var(--type-label-line)",
            letterSpacing: "var(--type-label-tracking)",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
