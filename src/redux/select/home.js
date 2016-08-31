import { createSelector, createStructuredSelector } from 'reselect'

import filter from 'lodash/filter'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import sample from 'lodash/sample'
import sampleSize from 'lodash/sampleSize'

import { itemsFilled } from './items'

export const filterOutMissingImages = createSelector(
  itemsFilled,
  items => filter(items, item => (item.category !== 'trim' && !item.missingImg))
)

export const patternIndex = createSelector(
  filterOutMissingImages,
  items => groupBy(items, 'patternNumber')
)

export const homeItems = createSelector(
  patternIndex,
  patterns => map(sampleSize(patterns, 16), sample)
)

export const homeSelector = createStructuredSelector({
  items: homeItems,
})
