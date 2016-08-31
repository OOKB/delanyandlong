import { createSelector, createStructuredSelector } from 'reselect'
import get from 'lodash/get'

import { listItems, favsItemIndex, listItemsSorted } from '../project/select'

export function userFavs(state) {
  return get(listItems(state), 'itemListElement')
}
// Used in component.
export const favoritesSelector = createStructuredSelector({
  favorites: listItemsSorted,
})
export const itemFavSelector = createSelector(
  favsItemIndex,
  (state, props) => props.item,
  (favs, item) => favs && favs[item.id] || {}
)
