import test from 'tape'

import { getProps, select, firstValArg } from '../../src/redux/utils'
import { state, props } from '../mock'

test('select()', t => {
  const getUser = select('user')
  t.equal(getUser(state), state.user, 'getUser')
  const getName = select('name', getUser)
  t.equal(getName(state), 'foo', 'getName')
  const getGender = select('gender', getUser, 'uni')
  t.equal(getGender(state), 'bar', 'gender')
  const stateNoGen = state.without([ 'user', 'gender' ])
  t.equal(getGender(stateNoGen), 'uni', 'getGender missing, use default.')
  t.end()
})
test('getProps', t => {
  t.equal(getProps(state, props), props, 'props')
  t.end()
})
test('firstValArg', t => {
  t.equal(firstValArg(1, 0, 2), 1, 'arg0')
  t.equal(firstValArg(0, 0, 2), 2, 'arg2')
  t.equal(firstValArg(undefined, null, '', 'hot'), 'hot', 'arg3')
  t.end()
})
