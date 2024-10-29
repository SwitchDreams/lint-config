# eslint-config-switch-dreams

This package provides Switch Dreams' eslint and prettier config as an extensible shared config.

## Installation

```bash
npm install --save-dev eslint-config-switch-dreams
```

## Usage

Usage for eslint > 9.0.0

```js
// eslint.config.js
import eslintConfigSwitchDreams from "eslint-config-switch-dreams";

export default [
  ...eslintConfigSwitchDreams,
  {
    // Add your overrides here
  },
]
```

```js
// .prettierrc.mjs
import switchDreamsConfig from "eslint-config-switch-dreams/prettier";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...switchDreamsConfig,
  // ...your overrides
};

export default config;
```

## Requirements

- Using tailwindcss