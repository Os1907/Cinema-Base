import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors:{
       green:"#00dc82",
       main:"#020420",
       main2:"#080d25"
      },
     },
   },
   plugins: [require("daisyui")],
};
export default config;
