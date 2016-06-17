import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { selectForm } from 'redux-field'
import compact from 'lodash/compact'
import every from 'lodash/every'
import filter from 'lodash/filter'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import orderBy from 'lodash/orderBy'
import map from 'lodash/map'

import { defaultPageSize, pageSizes } from '../../helpers/pager'

const pageSizeOptions = pageSizes()

// Where is our custom pricelist information? Look in defaultState.js or the `db` tree of state.
export function pricelistInfo(state) {
  return state.db.pricelist
}
export function getCategoryOptions(state) {
  return state.db.categoryOptions
}
export function getSchema(state) {
  return state.db.schema
}
export function getMenu(state) {
  return state.db.menu
}
export function getUser(state) {
  return state.graph.entity.user0
}
export function optionFill(opts, schema) {
  return map(opts, opt => {
    if (isObject(opt)) return opt
    return { ...schema[opt], value: opt }
  })
}
export function getFilter(filterType) {
  return (state) => {
    const prefix = pricelistInfo(state).prefix[filterType]
    return get(selectForm(state), prefix, {}).value
  }
}
export const getFilterCategory = getFilter('category')
export const getFilterText = getFilter('text')
export const getPageSize = getFilter('pgSize')
export const getPageIndex = getFilter('pgIndex')

export const activeCategorySelector = createSelector(
  pricelistInfo,
  getFilterCategory,
  (info, filterCategory) => filterCategory || info.defaultCategory
)
export const categoryOptionsSelector = createSelector(
  getCategoryOptions,
  getSchema,
  (catOptions, schema) => optionFill(catOptions, schema)
)
export const columnsSelector = createSelector(
  pricelistInfo,
  getSchema,
  activeCategorySelector,
  (info, schema, activeCategory) => optionFill(info.columns[activeCategory], schema)
)
// Based on pricelist db info, select activeCategory based on form input. Use default if no value.
export const pricelistInfoSelector = createSelector(
  pricelistInfo,
  activeCategorySelector,
  categoryOptionsSelector,
  columnsSelector,
  getFilterText,
  getPageIndex,
  getPageSize,
  (info, activeCategory, categoryOptions, columns, searchText, pgIndex, pgSize) => ({
    ...info,
    activeCategory,
    categoryOptions,
    columns,
    searchText,
    pgIndex,
    pgSize: pgSize && parseInt(pgSize, 10) || defaultPageSize,
    pageSizeOptions,
  })
)
export function isValidItem(entity) {
  return entity.id.startsWith('DL')
}
export function itemFill(item) {
  const { id, category, color, contents, patternNumber, price } = item
  const colorNumber = id.replace(`${patternNumber}-`, '')
  return {
    ...item,
    colorNumber,
    link: `/detail/${id}`,
    img: `http://www.delanyandlong.com/images/fabrics/${patternNumber}/${colorNumber}_big.jpg`,
    price: `$${price}${category === 'leather' ? ' sq ft' : ''}`,
    searchable: (color + contents).toLowerCase(),
  }
}
export const itemsSelector = createSelector(
  entitySelector,
  entity => map(orderBy(filter(entity, isValidItem), 'id'), itemFill)
)

export const categorySelector = createSelector(
  itemsSelector,
  activeCategorySelector,
  (items, category) => filter(items, { category })
)
export function textSearch(searchValue) {
  return item =>
    every(compact(searchValue.split(' ')), searchTxt =>
      item.searchable.includes(searchTxt)
    )
}
export const textSearchSelector = createSelector(
  categorySelector,
  getFilterText,
  (items, searchValue) => searchValue && filter(items, textSearch(searchValue)) || items
)
export const patternColorSelector = createSelector(
  textSearchSelector,
  items => {
    let currentPattern = null
    return map(items, item => {
      const isPattern = currentPattern !== item.patternNumber
      currentPattern = item.patternNumber
      return {
        ...item,
        isPattern,
      }
    })
  }
)
