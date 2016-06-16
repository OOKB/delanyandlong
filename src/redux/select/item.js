import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import filter from 'lodash/filter'

import { itemFill, itemsSelector } from './'

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
  getItemDetail,
  (items, item) => filter(items, { patternNumber: item.patternNumber })
)
export const itemDetailSelector = createSelector(
  itemSelector,
  colorsSelector,
  (item, colors) => ({ item, colors })
)
