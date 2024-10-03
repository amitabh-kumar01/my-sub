import { BiCustomize } from "react-icons/bi";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customLightBlue: "#F1F2FF",
        customLightBluesec: "#F2F3FF",
        customLightBluethird: "#EAEBFF",
        customBlue: "#515DEF",
        customDarkBlue: "#253D4E",
        customBlack: "#191D23",
        customBlueCart: "#515DEF",
        customCart1: "#E1F8FF",
        customCart2: "#FFF8E8",
        customCart3: "#F0F1F8",
        customCart4: "#EBF9DE",
        customCart5: "#FFEDFB",
        customCart6: "#F4ECFF",
        customCart7: "#F3F3F3",
        customCart8: "#FEEFEA",
        customCart9: "#FFF3FF",
        customCart10: "#F2FCE4",
        customCart11: "#FEEFEA",
        customCart12: "#ECFFEC",
        customCart13: "#FFFCEB",
        customCart14: "#DEF9EC",
        customInput: "#1C1B1F",
        customRemember: "#313131",
        customForgot: "#515DEF",
        customQuantity: "#7C7C7C",
        customItem: "#253D4E",
        customWhite: "#FFFFFF",
        customGray: "#999999",
        customText: " #1A1A1A",
      },
      right: {
        cs: "25rem",
      },
      fontSize: {
        xxs: "0.625rem",
        nl: "1.125rem",
        cxl: "2.25rem",
        huge: "2.625rem",
      },
      padding: {
        5: "0.3125rem",
      },
    },
  },
  plugins: [],
};
export default config;
