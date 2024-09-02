const withMT = require("@material-tailwind/react/utils/withMT");
const nestingPlugin = require("tailwindcss/nesting");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [nestingPlugin()],
});
