import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { selectFieldState } from 'redux-field'
import filter from 'lodash/filter'
import identity from 'lodash/identity'
import isObject from 'lodash/isObject'
import orderBy from 'lodash/orderBy'
import map from 'lodash/map'

// Where is our custom pricelist information? Look in defaultState.js or the `db` tree of state.
export function pricelistInfo(state) {
  return state.db.pricelist
}
export function categoryOptions(state) {
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
// Based on pricelist db info, select activeCategory based on form input. Use default if no value.
export const pricelistInfoSelector = createSelector(
  identity,
  pricelistInfo,
  categoryOptions,
  getSchema,
  (state, info, catOptions, schema) => {
    const activeCategory = selectFieldState(state, info.prefix).value || info.defaultCategory
    return {
      ...info,
      columns: optionFill(info.columns[activeCategory], schema),
      activeCategory,
      categoryOptions: optionFill(catOptions, schema),
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
  pricelistInfoSelector,
  (items, info) => filter(items, { category: info.activeCategory })
)

export const patternColorSelector = createSelector(
  categorySelector,
  items => {
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
