import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pink: {
          light: "#FF81AC",
          bright: "#FF3F80",
          arrowLight: "#FFDEE9",
          arrowTopic: "#E44D80",
        },
        gray: {
          cardTextHead: "#3E3E3E",
          cardDescription: "#91908F",
        },
        bgcard: {
          cardIcon: "#FBFBFB",
        },
        homeContainer: {
          headingText: "#0B132A",
          description: "#4F5665",
          backGround: "#FFFAFB",
        },
        footer: {
          backGround: "#F9FAFB",
          textColor: "#667085",
        },
        secondPage: {
          bground: "#E4E6EA",
          heatext: "#363430",
          descText: "#91908F",
          inputText: "#98A2B3",
          cardPfName: "#191919",
          cardPfdetails: "#707070",
          cardTranslate: "#0966C2",
        },
        generateButton: {
          first: "#5072EA",
          last: "#3F5ECD",
        },
        pop: {
          desc: "#475467",
        },
        sidebar: {
          On: "#F9F9F9",
          badge: "#F9F5FF",
          badgetxt: "#6941C6",
          back: "#CAFFD0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
