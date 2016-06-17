import { createSelector, createStructuredSelector } from 'reselect'
import { entitySelector, tripleSelector } from 'redux-graph'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import map from 'lodash/map'
import keys from 'lodash/keys'

import { itemFill, getMenu, getUser } from './'
export function getSPO(state) {
  return tripleSelector(state).spo
}
export function getPOS(state) {
  return tripleSelector(state).pos
}
export function getPOSpath(state, path) {
  return get(getPOS(state), path)
}
export function getUserAsAgent(state) {
  const userId = getUser(state).id
  return getPOSpath(state, [ 'agent', userId ])
}
export const userFavs = createSelector(
  getUser,
  getUserAsAgent,
  getSPO,
  entitySelector,
  (user, agents, spo, entities) => {
    if (!agents || agents.length === 0) return null
    const favs = {}
    forEach(agents, (nil, id) => {
      const { actionStatus, dateCreated, type, position } = entities[id]
      if (type === 'LikeAction' && actionStatus !== 'ended') {
        const itemId = keys(get(spo, [ id, 'object' ]))[0]
        favs[itemId] = { actionStatus, id, dateCreated, position, itemId }
      }
    })
    return favs
  }
)
export const userFavItems = createSelector(
  userFavs,
  entitySelector,
  (favs, entities) => map(favs, (fav, id) => ({ ...fav, item: itemFill(entities[id]) }))
)
export const favoriteSelector = createStructuredSelector({
  favorites: userFavItems,
  menu: getMenu,
})
