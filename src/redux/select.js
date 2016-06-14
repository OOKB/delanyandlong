import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { selectFieldState } from 'redux-field'
import filter from 'lodash/filter'
import identity from 'lodash/identity'

// Where is our custom pricelist information? Look in defaultState.js or the `db` tree of state.
export function pricelistInfo(state) {
  return state.db.pricelist
}
export function categoryOptions(state) {
  return state.db.categoryOptions
}
// Based on pricelist db info, select activeCategory based on form input. Use default if no value.
export const pricelistInfoSelector = createSelector(
  identity,
  pricelistInfo,
  categoryOptions,
  (state, info, catOptions) => ({
    ...info,
    activeCategory: selectFieldState(state, info.prefix).value || info.defaultCategory,
    categoryOptions: catOptions,
  })
)

// Filter entities based on activeCategory.
export const pricelistSelector = createSelector(
  entitySelector,
  pricelistInfoSelector,
  (entity, info) => ({
    info,
    items: filter(entity, { category: info.activeCategory }),
  })
)
