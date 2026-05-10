import localFont from "next/font/local";

export const fontDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans/PlusJakartaSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const fontBody = localFont({
  src: [
    {
      path: "../../public/fonts/BeVietnamPro/BeVietnamPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeVietnamPro/BeVietnamPro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});
