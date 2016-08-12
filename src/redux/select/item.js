import { createSelector, createStructuredSelector } from 'reselect'
import get from 'lodash/get'

import { filterSort, itemsFilled } from './items'
import { userFavs } from './fav'

// Get the id from the URL.
export function getItemId(state, props) {
  return props.route.params._
}
// Grab item at index.
export const getItemDetail = createSelector(
  getItemId,
  itemsFilled,
  (id, items) => items[id]
)
export const colorsSelector = createSelector(
  itemsFilled,
  (state, props) => props.parent,
  (items, item) => filterSort({ patternNumber: item && item.patternNumber }, items)
)
export const favoriteSelector = createSelector(
  getItemDetail,
  userFavs,
  (item, favs) => favs && favs[item.id] || null
)
export const itemDetailSelector = createStructuredSelector({
  item: getItemDetail,
  favorite: favoriteSelector,
})
export const colorsOpen = state => get(state, 'form.detail.related.focus', false)
export const relatedSelector = createStructuredSelector({
  colors: colorsSelector,
  isOpen: colorsOpen,
})
