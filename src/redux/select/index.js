import { selectForm } from 'redux-field'
import { entitySelector } from 'redux-graph'
import curry from 'lodash/curry'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import map from 'lodash/map'
import partialRight from 'lodash/partialRight'

import { select } from '../utils'
import { pageSizes } from '../../helpers/pager'

export const pageSizeOptions = pageSizes()
export const selectDb = select('db')
export const getDb = partialRight(select, selectDb)
// Where is our custom pricelist information? Look in defaultState.js or the `db` tree of state.
export const pricelistInfo = getDb('pricelist')
export const getSchema = getDb('schema')

export const getDataFeed = select('pBlf', entitySelector)
export const getWebApp = select('delanyLongWebApp', entitySelector)

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
export const getFilterText = getFilter('text')

// Page number.
export const getPageIndex = getFilter('pgIndex')
