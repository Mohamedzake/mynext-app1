import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   slider: "slider 5s linear infinite",
      // },
      // keyframes: {
      //   slider: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(-90%)" }, // Ensures the track moves by 50% of its width
      //   },
      // },
      colors: {
        primary: {
          "10": "#ffffff",
          "20": "#6EC531",
          "30": "#232773",
          "50": "#E1E8EF",
          "100": "#f3f0ff",
          "200": "#f8f9fa",
          "300": "#f8f9fa",
          "400": "#ebfbee",
          "500": "#5E82A6",
          "600": "#4C6B8A",
          "700": "#3C546C",
          "800": "#2C3D4F",
          "900": "#1B2631",
          "950": "#141C24",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          "50": "#FAF5F0",
          "100": "#F4ECE1",
          "200": "#E8D6BF",
          "300": "#DDC2A2",
          "400": "#D2AF84",
          "500": "#C69963",
          "600": "#B78343",
          "700": "#926835",
          "800": "#6C4D28",
          "900": "#4B351B",
          "950": "#382814",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
