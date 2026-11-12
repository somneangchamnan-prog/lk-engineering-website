import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B18",
          900: "#0A1628",
          800: "#0F2038",
          700: "#16304F",
          600: "#1E4068",
        },
        steel: {
          50: "#F4F6F9",
          100: "#E8ECF2",
          200: "#D3DAE5",
          300: "#B3BECE",
          400: "#8A9AB1",
          500: "#64748B",
          600: "#4A5A72",
        },
        volt: {
          DEFAULT: "#2F7BFF",
          dark: "#1A5FD9",
          light: "#6AA3FF",
        },
        amber: { signal: "#F5B301", ink: "#8A6100" },
      },
      fontFamily: {
        sans: ["Manrope Variable", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "80rem" },
      backgroundImage: {
        "grid-blueprint":
          "linear-gradient(to right, rgba(106,163,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(106,163,255,0.08) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(10,22,40,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,22,40,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
