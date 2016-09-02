import { createSelector, createStructuredSelector } from 'reselect'

import { defaultPageSize, getPagerInfo } from '../../helpers/pager'
import trio from '../../helpers/trio'
import { select } from '../utils'
import {
  pricelistInfo, formPrefix, getFilter, getDb, getFilterText, getPageIndex,
  getSchema, optionFill, pageSizeOptions,
} from './'
import { colorSelector, patternColorSelector } from './items'
import { activeCategorySelector, category, getCategoryKey } from './category'

export const getStyles = getDb('styles')
// Get active display. (list, grid, film)
export const getDisplayStyle = state => getFilter('display', state) || 'list'
const displayStyle = createStructuredSelector({
  active: getDisplayStyle,
  options: getStyles,
  prefix: formPrefix('display'),
})

export const columnsSelector = createSelector(
  pricelistInfo,
  getSchema,
  activeCategorySelector,
  (info, schema, activeCategory) => optionFill(info.columns[activeCategory || 'textile'], schema)
)

// How many items to include on a page.
export const getPageSize = state => {
  const pgSize = getFilter('pgSize')(state)
  if (getDisplayStyle(state) === 'film') return 3
  return pgSize && parseInt(pgSize, 10) || defaultPageSize
}

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
const pgIndex = select('pgIndex', pricelistInfoSelector)
const pgSize = select('pgSize', pricelistInfoSelector)
export const pagerSelector = createSelector(
  patternColorSelector,
  pgIndex,
  pgSize,
  getPager,
)
// Filter entities based on activeCategory.
export const pricelistSelector = createStructuredSelector({
  categoryKey: getCategoryKey,
  info: pricelistInfoSelector,
  pager: pagerSelector,
})
