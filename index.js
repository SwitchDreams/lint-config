import pluginTailwindcss from "eslint-plugin-tailwindcss";
import reactRecommended from "eslint-plugin-react/configs/recommended";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/reccommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
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
  {
    name: "switch-dreams/rules",
    rules: {
      "no-console": ["error", {allow: ["warn", "error"]}],
      "no-unused-vars": ["error", {vars: "all", args: "after-used", ignoreRestSiblings: true}],
    },
  },
  {
    name: "simple-import-sort",
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  reactRecommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];