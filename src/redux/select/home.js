import { createStructuredSelector } from 'reselect'

import { getMenu } from './'

export const homeSelector = createStructuredSelector({
  menu: getMenu,
})
