module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main backgrounds - warm creams and naturals
        cream: "#FAF8F3",
        "cream-dark": "#F5F1E8",
        "warm-white": "#FDFCFA",

        // Forest greens - your accent colors
        forest: "#2D5016",
        "forest-light": "#3A5F2A",
        moss: "#4A7C3B",
        sage: "#6B7F5B",
        "sage-light": "#8B9A7E",

        // Text colors
        "text-primary": "#2C3E1F",
        "text-secondary": "#4A5A3D",
        "text-muted": "#6B7F5B",
      },
      fontFamily: {
        display: ["Birthstone", "cursive"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(45, 80, 22, 0.08)",
        "soft-lg": "0 4px 16px rgba(45, 80, 22, 0.12)",
        natural: "0 2px 12px rgba(74, 124, 59, 0.15)",
      },
      backgroundImage: {
        "subtle-grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
