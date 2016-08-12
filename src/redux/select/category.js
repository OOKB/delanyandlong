import { createSelector } from 'reselect'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

import { categoryOptionsSelector } from './'

function addCodeIndex(result, { code, value }) {
  return set(result, value, code)
}

export const categoryCodeIndex = createSelector(
  categoryOptionsSelector,
  opts => reduce(opts, addCodeIndex, {})
)
export const getCategoryKey = createSelector(
  categoryOptionsSelector,
  opts => map(opts, ({ code, label }) => `${code}: ${label}`)
)
