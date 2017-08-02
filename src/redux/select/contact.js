import { defaultTo, over, spread } from 'lodash'
import { first, flow, get, groupBy } from 'lodash/fp'

import { createSelector, createStructuredSelector } from 'reselect'
import { select } from 'cape-select'
import { selectUser } from 'cape-redux-auth'

export function getContactText(state) {
  return state.db.distributed
}
export function getServiceText(state) {
  return state.db.service
}

export const officeSelector = createSelector(
  get('graph2.Showroom'),
  groupBy('contactType')
)
export const mainOffice = flow(officeSelector, get('main'), first)

export const contactSelector = createStructuredSelector({
  contactText: getContactText,
  offices: officeSelector,
  serviceText: getServiceText,
})
export const userSalesConact = select(selectUser, 'sales')
export const userSalesOffice = flow(
  over(userSalesConact, mainOffice),
  spread(defaultTo)
)
