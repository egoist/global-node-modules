# global-node-modules [![NPM version](https://img.shields.io/npm/v/global-node-modules.svg)](https://npmjs.com/package/global-node-modules) [![NPM downloads](https://img.shields.io/npm/dm/global-node-modules.svg)](https://npmjs.com/package/global-node-modules) [![Build Status](https://img.shields.io/circleci/project/egoist/global-node-modules/master.svg)](https://circleci.com/gh/egoist/global-node-modules)

> Find the global node_modules path.

## Install

```bash
$ npm install --save global-node-modules
```

## Usage

```js
const gnm = require('global-node-modules')

gnm('eslint')
//=> /Users/egoist/.nvm-fish/v6.4.0/lib/node_modules/eslint
```

## License

MIT © [EGOIST](https://github.com/egoist)
