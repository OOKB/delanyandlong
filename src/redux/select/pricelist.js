import { createSelector, createStructuredSelector } from 'reselect'

import { getPagerInfo } from '../../helpers/pager'

import {
  patternColorSelector, pricelistInfo, activeCategorySelector,
  getFilter, getDb, getFilterText, getMenu, getPageIndex, getPageSize,
  categoryOptionsSelector, columnsSelector,
  pageSizeOptions,
} from './'

export const getStyles = getDb('styles')
export const getDisplayStyle = getFilter('display')
const displayStyle = createStructuredSelector({
  active: getDisplayStyle,
  options: getStyles,
})

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
  (info, props) => ({
    ...info,
    ...props,
    pageSizeOptions,
  })
)

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
