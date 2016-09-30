'use strict'
const path = require('path')

module.exports = function (moduleName) {
  return path.join(
    require.resolve('npm'),
    '../../',
    moduleName || ''
  )
}
