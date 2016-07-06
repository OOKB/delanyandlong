import { createStructuredSelector } from 'reselect'

import { getMenu } from './'

export function getContactText(state) {
  return state.db.contact
}

export function getServiceText(state) {
  return state.db.service
}

export const contactSelector = createStructuredSelector({
  menu: getMenu,
  contactText: getContactText,
  serviceText: getServiceText,
})
