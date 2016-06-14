import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { selectForm } from 'redux-field'
import filter from 'lodash/filter'
import get from 'lodash/get'
import identity from 'lodash/identity'
import isObject from 'lodash/isObject'
import orderBy from 'lodash/orderBy'
import map from 'lodash/map'

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
  (info, activeCategory, categoryOptions, columns, searchText) => {
    console.log('pricelistInfoSelector')
    return {
      ...info,
      activeCategory,
      categoryOptions,
      columns,
      searchText,
    }
  }
)
export function isValidItem(entity) {
  return entity.id.startsWith('DL')
}
export const itemSelector = createSelector(
  entitySelector,
  entity => orderBy(filter(entity, isValidItem), 'id')
)

export const categorySelector = createSelector(
  itemSelector,
  activeCategorySelector,
  (items, category) => {
    console.log(category)
    return filter(items, { category })
  }
)

export const patternColorSelector = createSelector(
  categorySelector,
  items => {
    console.log('patternColorSelector', items.length)
    let currentPattern = null
    return map(items, item => {
      const isPattern = currentPattern !== item.patternNumber
      currentPattern = item.patternNumber
      return {
        ...item,
        colorNumber: item.id.replace(`${item.patternNumber}-`, ''),
        isPattern,
      }
    })
  }
)
// Filter entities based on activeCategory.
export const pricelistSelector = createSelector(
  patternColorSelector,
  pricelistInfoSelector,
  (items, info) => ({
    info,
    items,
  })
)
