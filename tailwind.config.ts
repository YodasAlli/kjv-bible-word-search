import type { Config } from "tailwindcss";

export default {
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
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#FCF8F1',  // Override shadcn background with brand color
        foreground: '#2D3748',  // Override shadcn foreground with brand text color
        primary: {
          DEFAULT: '#2B6CB0',  // Brand blue
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#9B2C2C',  // Brand red  
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: '#D69E2E',  // Brand gold
          foreground: '#2D3748',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Custom brand colors for Bible Word Explorer
        text: '#2D3748',        // primary text alias
        'app-primary':    '#2B6CB0',  // buttons, links, highlights
        'app-secondary':  '#9B2C2C',  // badges & secondary accents
        'app-accent':     '#D69E2E',  // call-outs & highlights

        // legacy colors (if you still need them)
        paper: '#FCF8F1',
        tile: '#FFFFFF',
        highlight: '#FFD54F',
        divine: 'hsl(var(--divine))',
        sacred: 'hsl(var(--sacred))',
        grace: 'hsl(var(--grace))',
        blessing: 'hsl(var(--blessing))',
        heavenly: 'hsl(var(--heavenly))',
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
        "divine-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "found-word": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "divine-glow": "divine-glow 2s ease-in-out infinite",
        "found-word": "found-word 0.6s ease-out",
      },
      backgroundImage: {
        "gradient-divine": "var(--gradient-divine)",
        "gradient-sacred": "var(--gradient-sacred)",
        "gradient-heavenly": "var(--gradient-heavenly)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
