import { createSelector, createStructuredSelector } from 'reselect'

import { defaultPageSize, getPagerInfo } from '../../helpers/pager'
import trio from '../../helpers/trio'

import {
  pricelistInfo, activeCategorySelector, formPrefix,
  getFilter, getDb, getFilterText, getPageIndex,
  categoryOptionsSelector, columnsSelector,
  pageSizeOptions,
} from './'
import { colorSelector, patternColorSelector } from './items'
import { getCategoryKey } from './category'

export const getStyles = getDb('styles')
// Get active display. (list, grid, film)
export const getDisplayStyle = state => getFilter('display', state) || 'list'
const displayStyle = createStructuredSelector({
  active: getDisplayStyle,
  options: getStyles,
  prefix: formPrefix('display'),
})
// How many items to include on a page.
export const getPageSize = state => {
  const pgSize = getFilter('pgSize')(state)
  if (getDisplayStyle(state) === 'film') return 3
  return pgSize && parseInt(pgSize, 10) || defaultPageSize
}

const category = createStructuredSelector({
  active: activeCategorySelector,
  options: categoryOptionsSelector,
})
const pricelistProps = createStructuredSelector({
  category,
  columns: columnsSelector,
  displayStyle,
  searchText: getFilterText,
  pgIndex: getPageIndex,
  pgSize: getPageSize,
})

// Based on pricelist db info, select activeCategory based on form input. Use default if no value.
export const pricelistInfoSelector = createSelector(
  pricelistInfo,
  pricelistProps,
  colorSelector,
  (info, props, colors) => ({
    ...info,
    ...props,
    colors,
    pageSizeOptions,
  })
)
export function getPager(items, pgIndex, pgSize) {
  if (pgSize === 3) return trio(items, pgIndex)
  return getPagerInfo(items, { page: pgIndex, perPage: pgSize })
}
// Filter entities based on activeCategory.
export const pricelistSelector = createSelector(
  patternColorSelector,
  pricelistInfoSelector,
  getCategoryKey,
  (items, info, menu, categoryKey) => ({
    categoryKey,
    pager: getPager(items, info.pgIndex, info.pgSize),
    info,
    menu,
  })
)
