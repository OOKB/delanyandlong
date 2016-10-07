import { createStructuredSelector } from 'reselect'

import { getDb } from './'
import { filterPerms } from './perms'
import { getRouteId } from '../routing'

export const getMenu = getDb('menu')

export const menuItems = filterPerms(getMenu)

// Used for the component state.
export const menuSelector = createStructuredSelector({
  links: menuItems,
  activeId: getRouteId,
})
