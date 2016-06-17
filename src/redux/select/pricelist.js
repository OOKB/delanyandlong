import { createSelector } from 'reselect'

import { getPagerInfo } from '../../helpers/pager'
import { getMenu, patternColorSelector, pricelistInfoSelector } from './'

// Filter entities based on activeCategory.
export const pricelistSelector = createSelector(
  patternColorSelector,
  pricelistInfoSelector,
  getMenu,
  (items, info, menu) => ({
    pager: getPagerInfo(items, { page: info.pgIndex, perPage: info.pgSize }),
    info,
    menu,
  })
)
