# kifor-prettier-config

[![npm version](https://img.shields.io/npm/v/kifor-prettier-config?logo=npm&logoColor=fff)](https://www.npmjs.com/package/kifor-prettier-config)
[![Build Status](https://img.shields.io/github/actions/workflow/status/kiforks/kifor-prettier-config/deploy.yml?query=workflow%3Adeploys&logo=github)](https://github.com/kiforks/kifor-prettier-config/actions/workflows/deploy.yml?query=workflow%3Adeploy)
[![Downloads per month](https://img.shields.io/npm/dm/kifor-prettier-config)](https://npmcharts.com/compare/kifor-prettier-config)

## Installation

ℹ️ `prettier` dependencies are included, so you can remove all `prettier` related dependencies from your project.

```sh
npm install prettier kifor-prettier-config --save-dev
```

or

```sh
yarn add prettier kifor-prettier-config --dev
```

## Configure Prettier

Within your **prettier** config file:

```javascript
// .prettierrc.js file
import config from './node_modules/kifor-prettier-config/.prettierrc.js';

export default {
  ...config,
};
```

## Extends

- [prettier-plugin-organize-attributes](https://github.com/NiklasPor/prettier-plugin-organize-attributes)
- [@ianvs/prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports)
