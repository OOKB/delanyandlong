import test from 'tape'

import { getItemId } from '../../src/redux/project/select'

import { state, props } from '../mock'

test('getItemId()', t => {
  t.equal(getItemId(state, props), 'bar', 'getItemId')
  t.end()
})
