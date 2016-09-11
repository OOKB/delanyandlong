import { create, createTriple, entityUpdate } from 'redux-graph'
import { getUser } from '../select/user'
import { isAnonymous } from '../auth/select'
import {
  createCollectionItem, createCollectionList, createCollectionItemTriple, endListItem,
} from './entity'
import { activeListItem, favsListSelector, userHasCollections } from './select'

export function confirmFavorite(id) {
  return entityUpdate({ id, actionStatus: 'confirmed', dateUpdated: new Date() })
}
export function confirmActive(state, dispatch) {
  const itemToConfirm = activeListItem(state)
  if (itemToConfirm) dispatch(confirmFavorite(itemToConfirm.id))
}
// Make sure the user has a favs collection created.

// We need to know what collection we are adding this item to.
export function ensureUserHasCollection(dispatch, getState) {
  const state = getState()
  if (!userHasCollections(state)) {
    return create(dispatch, createCollectionList(state))
  }
  return null
}
// We know user is anon and has a favs collection. Create new listItem for favs collection.
export function addItemToFavs(item) {
  return (dispatch, getState) => {
    const state = getState()
    const creator = getUser(state)
    const collection = favsListSelector(state)
    const triple = createCollectionItemTriple(collection, item, creator)
    createTriple(dispatch, triple)
  }
}
// Create new list item.
// Anon user. Create new collection & listItem.

// Action to dispatch when a user clicks the (+) favorite button.
export function addItemToCollection(item) {
  return (dispatch, getState) => {
    ensureUserHasCollection(dispatch, getState)
    const state = getState()
    // Need to decide if we add to favs or display option to create project.
    if (isAnonymous(state)) {
      addItemToFavs(item)(dispatch, getState)
    }
  }
}

export function endFavorite(id) {
  return entityUpdate(endListItem(id))
}
