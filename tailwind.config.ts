import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B16",
          900: "#071027",
          800: "#0C1A3A",
          700: "#10234A"
        },
        gold: {
          500: "#B89B5E",
          400: "#C7AE73"
        },
        paper: "#F7F8FA",
        ink: "#0A0E19",
        warmgray: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          600: "#57534E",
          800: "#292524"
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Arial"]
      },
      boxShadow: {
        soft: "0 16px 40px rgba(0,0,0,0.18)",
        ring: "0 0 0 1px rgba(184,155,94,0.28)"
      }
    }
  },
  plugins: []
} satisfies Config;

