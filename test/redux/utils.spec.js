import test from 'tape'
import { isFunction } from 'lodash'

import { getProps, select, firstValArg, thunkAction } from '../../src/redux/utils'
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
test('thunkAction', t => {
  t.plan(6)
  function selector(arg1, arg2) {
    t.equal(arg1, state, 'state')
    t.equal(arg2, props, 'props')
    return 'foo'
  }
  function action(str) {
    t.equal(str, 'foo', 'selector result sent to action')
    return { type: str }
  }
  const createdAction = thunkAction(selector, action)
  t.ok(isFunction(createdAction), 'isFunction')
  const calledAction = createdAction(props)
  t.ok(isFunction(calledAction), 'isFunction')
  function getState() { return state }
  function dispatch(act) {
    t.equal(act.type, 'foo', 'action obj')
  }
  calledAction(dispatch, getState)
})
