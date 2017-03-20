import test from 'ava'
import fn from './'

test('main', async t => {
  const nodeModulesPath = await fn()
  t.is(typeof nodeModulesPath, 'string')
})
