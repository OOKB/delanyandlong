import { createSelector, createStructuredSelector } from 'reselect'
import { isAnonymous, isAuthenticated } from 'cape-redux-auth'
import { userHasFavorites } from 'cape-redux-collection'
import { every, filter, get, partial, partialRight } from 'lodash'

export function validate(perms) {
  const isValid = partial(get, perms)
  return ({ validators }) => !validators || every(validators, isValid)
}

export function filterItems(items, perms) {
  return filter(items, validate(perms))
}

export const permissions = createStructuredSelector({
  hasFavorites: userHasFavorites,
  isAnonymous,
  isAuthenticated,
})
export const filterPerms = partialRight(createSelector, permissions, filterItems)
