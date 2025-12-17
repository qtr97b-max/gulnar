import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fbf7f8",
          100: "#f5ecef",
          200: "#ecd8de",
          300: "#ddb6c1",
          400: "#c68498",
          500: "#a85471",
          600: "#8b3a58",
          700: "#6f2a44",
          800: "#571f35",
          900: "#3c1223"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
