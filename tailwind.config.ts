import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGrayText: "#444658",
      },
      backgroundImage: {
        customGray:
        "linear-gradient(216.04deg, rgba(68, 70, 88, 0.76) 13.84%, rgba(68, 70, 88, 0.93) 46.53%, #444658 82.07%)",
      },
      boxShadow: {
        'even-shadow': '0 4px 6px rgba(0, 0, 0, 0.1), 0 -12px 40px rgba(0, 0, 0, 0.1)', 
        top: '0 -4px 6px rgba(0, 0, 0, 0.1)',
        x: '0px 0px 14.4px 0px rgba(68, 70, 88, 0.19)',
      },
      borderRadius: {
        'top-right': '41px',  
        'bottom-right': '41px',
      },
      borderWidth: {
        '0.4': '0.4px',
      },
    },
  },
  plugins: [],
};
export default config;
