import { entityPutAll, entityUpdate, triplePutAll } from 'redux-graph'
import { getUser } from '../select'
import { getItemDetail } from '../select/item'
import { createBookmarkAction, createItemList } from './db'

export function favTriples(action, agent, object, list) {
  return [
    { subject: action, predicate: 'agent', object: agent }, // User that likes the thing.
    { subject: action, predicate: 'object', object }, // Thing that the user likes.
    { subject: action, predicate: 'result', list }, // The project this like attached to.
    { subject: list, predicate: 'creator', agent },
  ]
}

export function favoriteItem(item) {
  return (dispatch, getState) => {
    const state = getState()
    const agent = getUser(state)
    const action = createBookmarkAction()
    const list = createItemList()
    const object = item || getItemDetail(state)
    const triples = favTriples(action, agent, object, list)
    dispatch(entityPutAll([ action, list ]))
    dispatch(triplePutAll(triples))
  }
}
export function confirmFavorite(id) {
  return entityUpdate({ id, actionStatus: 'confirmed', dateUpdated: new Date() })
}
export function endFavorite(id) {
  return entityUpdate({ id, actionStatus: 'ended', endTime: new Date() })
}
