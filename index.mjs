//import pluginTailwindcss from "eslint-plugin-tailwindcss";
import simpleImportSort from "eslint-plugin-simple-import-sort";
//import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactRecommended from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks"
export default [
  //...pluginTailwindcss.configs["flat/recommended"],
  // {
  //   name: "tailwindcss/rules",
  //   plugins: {
  //     tailwindcss: pluginTailwindcss,
  //   },
  //   rules: {
  //     "tailwindcss/classnames-order": "error",
  //     "tailwindcss/no-contradicting-classname": "error",
  //     "tailwindcss/enforces-shorthand": "error",
  //     "tailwindcss/no-custom-classname": "off",
  //     "tailwindcss/no-unnecessary-arbitrary-value": "error",
  //   },
  // },
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
  //reactRecommended,
  //eslintPluginPrettierRecommended,
  //eslintPluginReactHooks,
  {
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];