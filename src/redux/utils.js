import get from 'lodash/get'
import find from 'lodash/find'
import identity from 'lodash/identity'
import isError from 'lodash/isError'
import isFunction from 'lodash/isFunction'
import isString from 'lodash/isString'
import isUndefined from 'lodash/isUndefined'
import isObject from 'lodash/isObject'
import pickBy from 'lodash/pickBy'
import nthArg from 'lodash/nthArg'

export const getProps = nthArg(1)

// Returns the collection property at key as determined by idSelector.
export function getSelect(collectionSelector, idSelector) {
  const selector = (state, props, ...args) => {
    const collection = collectionSelector(state, props, ...args)
    const id = idSelector(state, props, ...args)
    return get(collection, id)
  }
  return selector
}

export function select(path, selector = identity, defaultValue) {
  return (state, props, ...args) => get(selector(state, props, ...args), path, defaultValue)
}
export function thunkAction(...funcs) {
  const action = funcs.pop()
  return (props, ...args) => (dispatch, getState) => {
    const state = getState()
    const params = funcs.map(dependency => dependency(state, props, ...args))
    dispatch(action(...params))
  }
}
export function createAction(type, payloadCreator) {
  const getPayload = isFunction(payloadCreator) ? payloadCreator : identity
  return function actionCreator(arg1, arg2, arg3) {
    const payload = getPayload(arg1)
    const hasError = arg2 === true
    const meta = isObject(arg2) ? arg2 : arg3
    const action = {
      type,
    }
    if (isError(payload)) {
      action.error = true
      action.payload = pickBy(payload, (val) => identity(val) && !isFunction(val))
    } else if (hasError) {
      action.error = true
      action.payload = isString(payload) ? { message: payload } : payload
    } else if (!isUndefined(payload)) {
      action.payload = payload
    }
    if (isObject(meta)) {
      action.meta = meta
    }
    return action
  }
}
export function firstValArg(...args) {
  return find(args)
}
