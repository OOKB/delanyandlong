import { entityPut, entityUpdate, triplePutAll } from 'redux-graph'
import { getUser } from './select'
import { getItemDetail } from './select/item'

export function newKey() {
  return Math.random().toString(36).substr(6)
  .substring(1, 9)
}
export function favAction() {
  const now = new Date()
  return {
    actionStatus: 'created',
    dateCreated: now,
    description: 'An anonymous user of delanyandlong.com likes an item.',
    id: newKey(),
    position: 100,
    startTime: now,
    type: 'LikeAction',
  }
}
export function favTriples(subject, agent, object) {
  return [
    { subject, predicate: 'agent', object: agent },
    { subject, predicate: 'object', object },
  ]
}
export function favoriteItem(item) {
  return (dispatch, getState) => {
    const state = getState()
    const agent = getUser(state)
    const subject = favAction()
    const object = item || getItemDetail(state)
    const triples = favTriples(subject, agent, object)
    dispatch(entityPut(subject))
    dispatch(triplePutAll(triples))
  }
}
export function confirmFavorite({ id }) {
  return entityUpdate({ id, actionStatus: 'confirmed', dateUpdated: new Date() })
}
export function endFavorite({ id }) {
  return entityUpdate({ id, actionStatus: 'ended', endTime: new Date() })
}
