import { createSelector, createStructuredSelector } from 'reselect'
import filter from 'lodash/filter'
import get from 'lodash/get'

import { entitySelector } from 'redux-graph'

import { itemFill, itemsSelector } from './'
import { userFavs } from './fav'

export function getItemDetail(state, props) {
  const id = props.route.params._
  return entitySelector(state)[id]
}
// Grab an item from the entity index and fill out its props.
export const itemSelector = createSelector(
  getItemDetail,
  itemFill
)
export const colorsSelector = createSelector(
  itemsSelector,
  (state, props) => props.parent,
  (items, item) => filter(items, { patternNumber: item && item.patternNumber })
)
export const favoriteSelector = createSelector(
  itemSelector,
  userFavs,
  (item, favs) => favs && favs[item.id] || null
)
export const itemDetailSelector = createStructuredSelector({
  item: itemSelector,
  favorite: favoriteSelector,
})
export const colorsOpen = state => get(state, 'form.detail.related.focus', false)
export const relatedSelector = createStructuredSelector({
  colors: colorsSelector,
  isOpen: colorsOpen,
})
