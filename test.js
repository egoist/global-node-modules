import test from 'ava'
import fn from './'

test('main', async t => {
  const nodeModulesPath = await fn()
  t.is(typeof nodeModulesPath, 'string')
})

test('sync', t => {
  const nodeModulesPath = fn.sync()
  t.is(typeof nodeModulesPath, 'string')
})

test('module name', t => {
  const nodeModulesPath = fn.sync('ava')
  t.is(typeof nodeModulesPath, 'string')
  t.true(nodeModulesPath.indexOf('node_modules/ava') !== -1)
})
