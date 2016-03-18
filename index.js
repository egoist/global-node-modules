'use strict'
const path = require('path')
const which = require('which')

module.exports = function () {
  return new Promise((resolve, reject) => {
    which('npm', function (err, npm) {
      if (err) {
        return reject(err)
      }
      const nodeModulesPath = path.resolve(npm, '../../lib/node_modules')
      resolve(nodeModulesPath)
    })
  })
}
