import { overEvery } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { select } from 'cape-select'
import { isAnonymous, isAuthenticated } from 'cape-redux-auth'
import { getFilterState, formPrefix } from './'

export const prefix = formPrefix('discontinued')
export const discActive = select(getFilterState(prefix), 'focus')

export const props = createStructuredSelector({
  discActive: overEvery(isAuthenticated, discActive),
  hide: isAnonymous,
})
