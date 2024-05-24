/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("preline/plugin")],
};
