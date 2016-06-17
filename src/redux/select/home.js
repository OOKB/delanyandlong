import { createSelector, createStructuredSelector } from 'reselect'

import filter from 'lodash/filter'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import sample from 'lodash/sample'
import sampleSize from 'lodash/sampleSize'

import { itemsSelector, getMenu } from './'

export const filterOutTrim = createSelector(
  itemsSelector,
  items => filter(items, item => (item.category !== 'trim'))
)

export const patternIndex = createSelector(
  filterOutTrim,
  items => groupBy(items, 'patternNumber')
)
export const homeItems = createSelector(
  patternIndex,
  patterns => map(sampleSize(patterns, 48), sample)
)
export const homeSelector = createStructuredSelector({
  items: homeItems,
  menu: getMenu,
})
