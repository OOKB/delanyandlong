import { createStructuredSelector } from 'reselect'

import { getMenu } from './'

export function getAboutText(state) {
  return state.db.about
}
export function getServiceText(state) {
  return state.db.service
}
export const aboutSelector = createStructuredSelector({
  menu: getMenu,
  aboutText: getAboutText,
  serviceText: getServiceText,
})
