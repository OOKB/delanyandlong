import { createStructuredSelector } from 'reselect'

import { getMenu } from './'

export function getAboutText(state) {
  return state.db.about
}
export function getAboutImg(state) {
  return state.db.aboutImgSrc
}
export function getServiceText(state) {
  return state.db.service
}
export const aboutSelector = createStructuredSelector({
  menu: getMenu,
  aboutText: getAboutText,
  aboutImgSrc: getAboutImg,
  serviceText: getServiceText,
})
