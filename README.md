# @switchdreams/lint-config

This package provides Switch Dreams' eslint and prettier config as an extensible shared config.

## Installation

```bash
npm install --save-dev @switchdreams/lint-config
```

## Usage

Usage for eslint > 9.0.0

```js
// eslint.config.js
import eslintConfigSwitchDreams from "@switchdreams/lint-config";

export default [
  ...eslintConfigSwitchDreams,
  {
    // Add your overrides here
  },
]
```

```js
// .prettierrc.mjs
import switchDreamsConfig from "@switchdreams/lint-config/prettier";

const config = {
  ...switchDreamsConfig,
  // ...your overrides
};

export default config;
```

## Requirements

- Using tailwindcss