import { createSelector, createStructuredSelector } from 'reselect'
import { logout } from 'cape-redux-auth'
import { keyBy } from 'lodash/fp'
import { setIn } from 'cape-redux'
import { favsListSelector } from 'cape-redux-collection'
import { getRouteId } from 'cape-router'
import { getDb } from './'
import { filterPerms } from './perms'

export const getMenu = getDb('menu')

export const menuItems = createSelector(
  filterPerms(getMenu),
  favsListSelector,
  (items, favsList) => {
    const menu = keyBy('id')(items)
    if (menu.project && favsList) return setIn(['project', 'projectId'], menu, favsList.id)
    return menu
  }
)

// Used for the component state.
export const menuSelector = createStructuredSelector({
  links: menuItems,
  activeId: getRouteId,
})
export const menuActions = {
  logout,
}
