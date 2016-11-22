import { createSelector, createStructuredSelector } from 'reselect'
import { filter, fill, flatten, flow, groupBy, map, sample, sampleSize } from 'lodash'

import { itemsFilled } from './items'

export const filterOutMissingImages = createSelector(
  itemsFilled,
  items => filter(items, item => (item.category !== 'trim' && item.hasImage))
)

export const patternIndex = createSelector(
  filterOutMissingImages,
  items => groupBy(items, 'patternNumber')
)
export function randomPatternItems(patterns) { return map(sampleSize(patterns, 19), sample) }
// Get random selection of pattern items and then duplicate it.
export const duplicateItems = flow(
  randomPatternItems,
  items => flatten(fill(Array(6), items))
)
export const homeItems = createSelector(patternIndex, duplicateItems)

export const homeSelector = createStructuredSelector({
  items: homeItems,
})
