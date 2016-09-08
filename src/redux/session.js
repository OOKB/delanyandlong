import immutable from 'seamless-immutable'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'

export function selectYear(state) {
  return state.session.currentYear
}
export const defaultState = immutable({
  currentYear: new Date().getFullYear(),
})
export const UPDATE_PROP = 'session/UPDATE_PROP'
export function updateProp(state, { property, value }) {
  return property && value && state.set(property, value) || state
}
const reducers = {
  [UPDATE_PROP]: updateProp,
}
export default function reducer(state = defaultState, action) {
  if (action.error || !action.type || !isFunction(reducers[action.type])) return state
  if (!isObject(action.payload)) return state
  return reducers[action.type](state, action.payload)
}
