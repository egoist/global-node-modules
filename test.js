import test from 'ava'
import fn from './'

test('main', t => {
  const nodeModulesPath = fn()
  t.is(typeof nodeModulesPath, 'string')
})
