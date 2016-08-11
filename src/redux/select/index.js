import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { selectForm } from 'redux-field'
import compact from 'lodash/compact'
import curry from 'lodash/curry'
import every from 'lodash/every'
import filter from 'lodash/filter'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import orderBy from 'lodash/orderBy'
import map from 'lodash/map'

import { defaultPageSize, pageSizes } from '../../helpers/pager'

export const pageSizeOptions = pageSizes()
export const getDb = curry((path, state) => get(state.db, path))
// Where is our custom pricelist information? Look in defaultState.js or the `db` tree of state.
export const pricelistInfo = getDb('pricelist')
export const getCategoryOptions = getDb('categoryOptions')
export const getSchema = getDb('schema')
export const getMenu = getDb('menu')
export function getUser(state) {
  return state.graph.entity.user0
}
export function optionFill(opts, schema) {
  return map(opts, opt => {
    if (isObject(opt)) return opt
    return { ...schema[opt], value: opt }
  })
}
// Get the form prefix used for form state path.
export const formPrefix = curry((filterType, state) => pricelistInfo(state).prefix[filterType])
// Get the active filter value from the form state.
export const getFilter = curry((filterType, state) =>
  get(selectForm(state), formPrefix(filterType, state), {}).value
)
export const getFilterCategory = getFilter('category')
export const getFilterText = getFilter('text')
export const getPageSize = state => {
  const pgSize = getFilter('pgSize')(state)
  return pgSize && parseInt(pgSize, 10) || defaultPageSize
}
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

export function isValidItem(entity) {
  return entity.id.startsWith('DL')
}
// const CDN = 'https://3f363c8bf5767a720417-fdf7aa33c10c7fb6e1c8c4e342fa358c.ssl.cf5.rackcdn.com'
const CDN = 'http://65.110.85.163'
export function itemFill(item) {
  if (!item || !item.id) return item
  const { id, category, color, contents, name, patternNumber, price } = item
  const colorNumber = id.replace(`${patternNumber}-`, '')
  return {
    ...item,
    colorNumber,
    link: `/detail/${id}`,
    img: `${CDN}/images/fabrics/${patternNumber}/${colorNumber}_big.jpg`,
    price: `$${price}${category === 'leather' ? ' sq ft' : ''}`,
    searchable: (color + contents + name + id).toLowerCase(),
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
