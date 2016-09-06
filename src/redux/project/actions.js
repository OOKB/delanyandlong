import { create, createTriple, entityUpdate } from 'redux-graph'
import { getUser } from '../select/user'

import { getCollection, createCollectionItem, createCollectionItemTriple } from './helpers'
import { isAnonymous } from '../auth/select'
// Action to dispatch when a user clicks the (+) favorite button.
export function favoriteItem(item, collectionList) {
  return (dispatch, getState) => {
    const state = getState()
    const creator = getUser(state)
    // Need to decide if we add to favs or display option to create project.
    if (isAnonymous) {
      const list = getCollection(state, collectionList, dispatch)
      const triple = createCollectionItemTriple(list, item, creator)
      createTriple(dispatch, triple)
    } else {
      const listItem = createCollectionItem(item, creator)
      create(dispatch, listItem)
    }
  }
}
export function confirmFavorite(id) {
  return entityUpdate({ id, actionStatus: 'confirmed', dateUpdated: new Date() })
}
export function endFavorite(id) {
  return entityUpdate({ id, actionStatus: 'ended', endTime: new Date() })
}
