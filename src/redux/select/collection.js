import { createStructuredSelector } from 'reselect'

import { getMenu } from './'

export const collectionSelector = createStructuredSelector({
  menu: getMenu,
})
