import { createSelector, createStructuredSelector } from 'reselect'
import every from 'lodash/every'
import filter from 'lodash/filter'
import get from 'lodash/get'
import partial from 'lodash/partial'

import { getDb } from './'
import { permissions } from './user'


export const getMenu = getDb('menu')
export function validate(perms) {
  const isValid = partial(get, perms)
  return ({ validators }) => validators && every(validators, isValid) || true
}
export function filterItems(items, perms) {
  return filter(items, validate(perms))
}
export const menu = createSelector(getMenu, permissions, filterItems)

// Used for the component state.
export const menuSelector = createStructuredSelector({
  menu,
})
