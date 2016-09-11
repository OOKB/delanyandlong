import { create, createTriple, entityUpdate } from 'redux-graph'
import { getUser } from '../select/user'
import { isAnonymous } from '../auth/select'
import { isValidCollection } from './lang'
import {
  createCollectionItem, createCollectionList, createCollectionItemTriple, endListItem,
} from './entity'
import { activeListItem, getActiveCollection } from './select'

export function confirmFavorite(id) {
  return entityUpdate({ id, actionStatus: 'confirmed', dateUpdated: new Date() })
}
export function confirmActive(state, dispatch) {
  const itemToConfirm = activeListItem(state)
  if (itemToConfirm) dispatch(confirmFavorite(itemToConfirm.id))
}
// Make sure the user has a favs collection created.

// We need to know what collection we are adding this item to.
export function getCreateCollection(dispatch, state) {
  const activeCollection = getActiveCollection()
  // Collection is known. Use that.
  if (isValidCollection(activeCollection)) return activeCollection
  // create a new Favs list for the user because they don't have one yet.
  return create(dispatch, createCollectionList(state))
}
// Create new list item.
// Anon user. Create new collection & listItem.
// Anon user. Create new listItem.

// Action to dispatch when a user clicks the (+) favorite button.
export function editItemCollections(item) {
  return (dispatch, getState) => {
    const state = getState()
    const creator = getUser(state)
    // Confirm previously created list items.
    confirmActive(state, dispatch)
    // Need to decide if we add to favs or display option to create project.
    if (isAnonymous(state)) {
      //
      const list = getCreateCollection(dispatch, state)
      const triple = createCollectionItemTriple(list, item, creator)
      createTriple(dispatch, triple)
    } else {
      const listItem = createCollectionItem(item, creator)
      create(dispatch, listItem)
    }
  }
}

export function endFavorite(id) {
  return entityUpdate(endListItem(id))
}
