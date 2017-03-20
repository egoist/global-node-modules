'use strict'
const path = require('path')
const which = require('which')

const getPath = (bin, moduleName) => path.join(bin, '../../lib/node_modules', moduleName || '')

module.exports = function (moduleName) {
  return new Promise((resolve, reject) => {
    which('npm', (err, bin) => {
      if (err) {
        return reject(err)
      }
      resolve(getPath(bin, moduleName))
    })
  })
}

module.exports.sync = function (moduleName) {
  const bin = which.sync('npm')
  return getPath(bin, moduleName)
}
