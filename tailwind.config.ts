import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,mdx}", "./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          tertiary: "var(--brand-tertiary)",
          neutral: "var( --brand-neutral)",
        },
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          950: "var(--neutral-950)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          disabled: "var(--text-disabled)",
          inverse: "var(--text-inverse)",
          accent: "var(--text-accent)",
          link: "var(--text-link)",
          "link-hover": "var(--text-link-hover)",
        },
        on: {
          primary: "var(--text-on-primary)",
          secondary: "var(--text-on-secondary)",
          tertiary: "var(--text-on-tertiary)",
        },
        canvas: {
          base: "var(--color-bg)",
          muted: "var(--color-bg-muted)",
          subtle: "var(--color-bg-subtle)",
          accent: "var(--color-bg-accent)",
          inverse: "var(--color-bg-inverse)",
        },
        surface: {
          base: "var(--surface-1)",
          low: "var(--surface-2)",
          mid: "var(--surface-3)",
          inset: "var(--surface-inset)",
          elevated: "var(--surface-elevated)",
          hover: "var(--surface-hover)",
          active: "var(--surface-active)",
        },
        border: {
          DEFAULT: "var(--border)",
          muted: "var(--border-muted)",
          strong: "var(--border-strong)",
          accent: "var(--border-accent)",
        },
        status: {
          success: "var(--status-success)",
          warning: "var(--status-warning)",
          error: "var(--status-error)",
          info: "var(--status-info)",
        },
      },
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
