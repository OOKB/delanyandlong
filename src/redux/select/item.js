import { createSelector, createStructuredSelector } from 'reselect'
import { getSelect } from 'cape-select'
import { flow, get, reduce, set } from 'lodash'
import { routeParam } from 'cape-router'

import { getDb, getSchema, optionFill } from './'
import { itemsFilled } from './items'
import { filterPerms } from './perms'

// Get the id from the URL.
export const getItemId = flow(routeParam('id'), decodeURIComponent)
// Grab item at index.
export const getItemDetail = getSelect(itemsFilled, getItemId)

export function colorReducer(res, value) {
  if (!value || !value.patternNumber) return res
  return set(res, [value.patternNumber, value.id], value)
}
export const patternColorIndex = createSelector(
  itemsFilled,
  items => reduce(items, colorReducer, {})
)
export function colorsSelector(state, props) {
  return patternColorIndex(state)[props.parent.patternNumber]
}
export const disclaimer = getDb('disclaimer')
export const itemDetailSelector = createStructuredSelector({
  disclaimer,
  item: getItemDetail,
})
export const colorsOpen = state => get(state, 'form.detail.related.focus', false)
export const relatedSelector = createStructuredSelector({
  colors: colorsSelector,
  isOpen: colorsOpen,
})
export const getFields = createSelector(getDb('detailFields'), getSchema, optionFill)
export const fields = filterPerms(getFields)
export const detailFields = createStructuredSelector({
  fields,
})
