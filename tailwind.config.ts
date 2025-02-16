import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: "#0d1b2a",
        hoverNavbar: "#383838",
        textNavbar: "#999999",
        hoverTextNavbar: "#4A4A4A",
      },
    },
  },
  plugins: [],
} satisfies Config;
