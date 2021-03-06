# global-node-modules [![NPM version](https://img.shields.io/npm/v/global-node-modules.svg)](https://npmjs.com/package/global-node-modules) [![NPM downloads](https://img.shields.io/npm/dm/global-node-modules.svg)](https://npmjs.com/package/global-node-modules) [![Build Status](https://img.shields.io/circleci/project/egoist/global-node-modules/master.svg)](https://circleci.com/gh/egoist/global-node-modules)

> Find the global node_modules path.

## Install

```bash
$ npm install --save global-node-modules
```

## Usage

```js
const globalNodeModules = require('global-node-modules')

globalNodeModules()
  .then(nodeModulesPath => {
    console.log(nodeModulesPath)
    //=> /Users/egoist/.nvm/versions/node/v4.2.4/lib/node_modules
  })
  .catch(e => {
    console.log(e.stack)
  })

// sync method
const nodeModulesPath = globalNodeModules.sync()
```

## API

### globalNodeModules(moduleName)

#### moduleName

Type: `string`  
Default: `''`

Give a moduleName to append to the path.

### globalNodeModules.sync(moduleName)

## License

MIT © [EGOIST](https://github.com/egoist)
