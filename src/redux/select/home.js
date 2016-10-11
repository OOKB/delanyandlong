import { createSelector, createStructuredSelector } from 'reselect'
import { filter, fill, flatten, flow, groupBy, map, sample, sampleSize } from 'lodash'

import { itemsFilled } from './items'

export const filterOutMissingImages = createSelector(
  itemsFilled,
  items => filter(items, item => (item.category !== 'trim' && !item.missingImg))
)

export const patternIndex = createSelector(
  filterOutMissingImages,
  items => groupBy(items, 'patternNumber')
)
export function randomPatternItems(patterns) { return map(sampleSize(patterns, 19), sample) }
export const duplicateItems = flow(
  randomPatternItems,
  items => flatten(fill(Array(3), items))
)
export const homeItems = createSelector(
  patternIndex,
  duplicateItems
)

export const homeSelector = createStructuredSelector({
  items: homeItems,
})
