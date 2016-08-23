import test from 'tape'

import { createItemIndex, getNextIndex, getPrevIndex, maxIndex } from '../../src/helpers/trio'

const items = [ 'a', 'b', 'c', 'd' ]

test('maxIndex()', t => {
  t.equal(maxIndex(items), 3)
  t.end()
})
test('getNextIndex()', t => {
  t.equal(getNextIndex(items, 5), 0, 'over length is 0')
  t.equal(getNextIndex(items, 4), 0, 'last index is 0')
  t.equal(getNextIndex(items, -1), 1, 'neg index next is 1')
  t.equal(getNextIndex(items, 2), 3, 'next index add +1')
  t.end()
})
test('getPrevIndex()', t => {
  t.equal(getPrevIndex(items, -1), 3, 'neg index max index')
  t.equal(getPrevIndex(items, 0), 3, 'first index prev is max index')
  t.equal(getPrevIndex(items, 5), 2, 'over length')
  t.equal(getPrevIndex(items, 3), 2, 'last index')
  t.equal(getPrevIndex(items, 2), 1, 'prev')
  t.end()
})
test('createItemIndex', t => {
  t.deepEqual(createItemIndex('a', 1), { item: 'a', index: 1 })
  t.end()
})
