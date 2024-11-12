import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactRecommended from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginTailwindcss from "eslint-plugin-tailwindcss";

export default [
  { files: ["**/*.{js,jsx,ts,tsx,test.jsx,stories.jsx}"] },
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
  {
    name: "switch-dreams/rules",
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: true },
      ],
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
  eslintPluginPrettierRecommended,
  // React
  reactRecommended.configs.flat["jsx-runtime"],
  {
    name: "react-hooks",
    plugins: {
      reactHooks: eslintPluginReactHooks.configs["recommended"],
    },
  },
  {
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
    },
  },
];
