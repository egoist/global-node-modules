'use strict'
const path = require('path')
const which = require('which')

module.exports = function (moduleName) {
  moduleName = moduleName || ''
  return new Promise((resolve, reject) => {
    which('npm', (err, npm) => {
      if (err) {
        return reject(err)
      }
      const nodeModulesPath = path.resolve(npm, '../../lib/node_modules', moduleName)
      resolve(nodeModulesPath)
    })
  })
}
