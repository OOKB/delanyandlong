import { createStructuredSelector } from 'reselect'

export function getAboutText(state) {
  return state.db.about
}
export const aboutSelector = createStructuredSelector({
  aboutText: getAboutText,
})
