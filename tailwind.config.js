/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#004d00",
          50: "#e6eae9",
          100: "#b3c1bc",
          200: "#819890",
          300: "#678379",
          400: "#35594d",
          500: "#1b4536",
          600: "#023020",
          700: "#02261a",
          800: "#011d13",
          900: "#01130d",
        },
        accent: {
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#ccc",
          300: "#adadad",
          400: "#999",
          500: "#7a7a7a",
          600: "#5c5c5c",
          700: "#4d4d4d",
          800: "#222",
          850: "#2e2e2e",
          900: "#1f1f1f",
          950: "#0f0f0f",
        },
      },
      keyframes: {
        moveTriangleDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(170%)" },
        },
        moveTriangleUp: {
          "0%": { transform: "translateY(40%)" },
          "100%": { transform: "translateY(-40%)" },
        },
        moveTriangleDown2: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(40%)" },
        },
        moveTriangleUp2: {
          "0%": { transform: "translateY(40%)" },
          "100%": { transform: "translateY(-170%)" },
        },
        bubbleBounce: {
          "0%": { transform: "translate(-100px, -100px)" },
          "100%": {
            transform: "translate(320%, 300%) scale(1.4)",
          },
        },
      },
      animation: {
        moveTriangleDown: "moveTriangleDown 3s ease forwards",
        moveTriangleUp: "moveTriangleUp 5s ease forwards",
        moveTriangleDown2: "moveTriangleDown2 3s ease forwards",
        moveTriangleUp2: "moveTriangleUp2 5s ease forwards",
        bubbleBounce: "bubbleBounce 5s ease forwards",
      },
    },
  },
  plugins: [],
};
