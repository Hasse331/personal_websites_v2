import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        xl: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        "2xl": "4px 4px 8px rgba(0, 0, 0, 0.25)",
        sm: "1px 1px 2px rgba(0, 0, 0, 0.25)",
        md: "2px 2px 3px rgba(0, 0, 0, 0.25)",
        lg: "3px 3px 5px rgba(0, 0, 0, 0.25)",
        inner: "inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
        white: "2px 2px 4px rgba(255, 255, 255, 0.5)",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle at 125% 10%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
