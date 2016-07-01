import { createStructuredSelector } from 'reselect'

import { getMenu } from './'

export function getContactText(state) {
  return state.db.contact
}

export const aboutSelector = createStructuredSelector({
  menu: getMenu,
  contactText: getContactText,
})
