import pluginTailwindcss from "eslint-plugin-tailwindcss";
import baseConfig from "./base.mjs";

const tailwindConfig = [
  ...pluginTailwindcss.configs["flat/recommended"],
  {
    name: "tailwindcss/rules",
    plugins: {
      tailwindcss: pluginTailwindcss,
    },
    rules: {
      "tailwindcss/classnames-order": "error",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
    },
  },
];

export default [...tailwindConfig, ...baseConfig];
