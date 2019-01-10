import test from 'tape'

import defaultState from '../../src/redux/defaultState'
import { categoryCodeIndex } from '../../src/redux/select/category'

test('categoryCodeIndex()', t => {
  const res = categoryCodeIndex(defaultState)
  const expected = { textile: 'T', trim: 'P', drapery: 'W', leather: 'L', linen: 'R' }
  t.deepEqual(res, expected, 'index obj')
  t.end()
})
