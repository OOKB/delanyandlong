import { createSelector, createStructuredSelector } from 'reselect'
import every from 'lodash/every'
import filter from 'lodash/filter'
import get from 'lodash/get'
import partial from 'lodash/partial'

import { getDb } from './'
import permissions from './perms'
import { getRouteId } from '../routing'

export const getMenu = getDb('menu')
export function validate(perms) {
  const isValid = partial(get, perms)
  return ({ validators }) => !validators || every(validators, isValid)
}
export function filterItems(items, perms) {
  return filter(items, validate(perms))
}
export const menuItems = createSelector(getMenu, permissions, filterItems)

// Used for the component state.
export const menuSelector = createStructuredSelector({
  links: menuItems,
  activeId: getRouteId,
})
