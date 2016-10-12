import test from 'tape'
import { size } from 'lodash'
import { login } from 'cape-redux-auth'
// import { discFilter } from '../../src/redux/select/disc'
import { itemsRaw } from '../../src/redux/select/items'
import { onClick } from '../../src/containers/DiscToggle'
import { store } from '../mock'

test('itemsRaw()', (t) => {
  // OPTION 1 - HIDE/ANON
  const res = itemsRaw(store.getState())
  t.equal(size(res), 1, 'size')
  t.equal(res['DL1001-09'], store.getState().graph.entity['DL1001-09'])
  // OPTION 3 - LOGIN
  store.dispatch(login({ id: 'user1' }))
  const res2 = itemsRaw(store.getState())
  t.equal(size(res2), 2, 'size')
  t.equal(res2['DL1001-09'], store.getState().graph.entity['DL1001-09'])
  t.equal(res2['DL1001-11'], store.getState().graph.entity['DL1001-11'])
  // OPTION 2 - DISC ONLY
  store.dispatch(onClick())
  const res3 = itemsRaw(store.getState())
  t.equal(size(res3), 1, 'size')
  t.equal(res3['DL1001-11'], store.getState().graph.entity['DL1001-11'])
  // console.log(res3)
  t.end()
})
