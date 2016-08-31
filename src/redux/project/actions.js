import {
  createTriple, entityHasType, entityTypeSelector, entityUpdate,
} from 'redux-graph'
import { getUser } from '../select/user'

import { getCollection, createCollectionItemTriple } from './helpers'

// Action to dispatch when a user clicks the (+) favorite button.
export function favoriteItem(item, collectionList) {
  return (dispatch, getState) => {
    const state = getState()
    const list = getCollection(state, collectionList, dispatch)
    const creator = getUser(state)
    const triple = createCollectionItemTriple(list, item, creator)
    createTriple(dispatch, triple)
  }
}
export function confirmFavorite(id) {
  return entityUpdate({ id, actionStatus: 'confirmed', dateUpdated: new Date() })
}
export function endFavorite(id) {
  return entityUpdate({ id, actionStatus: 'ended', endTime: new Date() })
}
