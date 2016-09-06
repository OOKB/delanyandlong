import { create, createTriple, entityUpdate } from 'redux-graph'
import { getUser } from '../select/user'
import { isAnonymous } from '../auth/select'

import { getCollection, createCollectionItem, createCollectionItemTriple } from './helpers'
import { activeListItem } from './select'

export function confirmFavorite(id) {
  return entityUpdate({ id, actionStatus: 'confirmed', dateUpdated: new Date() })
}
export function confirmActive(state, dispatch) {
  const itemToConfirm = activeListItem(state)
  if (itemToConfirm) dispatch(confirmFavorite(itemToConfirm.id))
}
// Action to dispatch when a user clicks the (+) favorite button.
export function favoriteItem(item, collectionList) {
  return (dispatch, getState) => {
    const state = getState()
    const creator = getUser(state)
    // Confirm previously created list items.
    confirmActive(state, dispatch)
    // Need to decide if we add to favs or display option to create project.
    if (isAnonymous(state)) {
      const list = getCollection(state, collectionList, dispatch)
      const triple = createCollectionItemTriple(list, item, creator)
      createTriple(dispatch, triple)
    } else {
      const listItem = createCollectionItem(item, creator)
      create(dispatch, listItem)
    }
  }
}
export function endFavorite(id) {
  return entityUpdate({ id, actionStatus: 'ended', endTime: new Date() })
}
