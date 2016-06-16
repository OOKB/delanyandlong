import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { itemSelector } from './'
import filter from 'lodash/filter'

export function getItemDetail(state, props) {
  const id = props.route.params._
  return entitySelector(state)[id]
}
export const colorsSelector = createSelector(
  itemSelector,
  getItemDetail,
  (items, item) => filter(items, { patternNumber: item.patternNumber })
)
export const itemDetailSelector = createSelector(
  getItemDetail,
  colorsSelector,
  (item, colors) => ({ item, colors })
)
