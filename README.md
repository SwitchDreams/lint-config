# @switchdreams/lint-config

This package provides Switch Dreams' eslint and prettier config as an extensible shared config.

## Installation

```bash
pnpm add -D @switchdreams/lint-config eslint
```

## Usage

### With Tailwind CSS

Usage for eslint > 9.0.0

```js
// eslint.config.mjs
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

### Without Tailwind CSS

```js
// eslint.config.mjs
import eslintConfigSwitchDreams from "@switchdreams/lint-config/no-tailwind";

export default [
  ...eslintConfigSwitchDreams,
  {
    // Add your overrides here
  },
]
```

```js
// .prettierrc.mjs
import switchDreamsConfig from "@switchdreams/lint-config/prettier-no-tailwind";

const config = {
  ...switchDreamsConfig,
  // ...your overrides
};

export default config;
```
