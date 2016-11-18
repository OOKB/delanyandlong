import { isFunction } from 'lodash'
// import { TRIPLE_PUT } from '@kaicurry/redux-graph'
import { CREATE_LIST, CREATE_ITEM, PREDICATE, UPDATE_ITEM } from 'cape-redux-collection'
import { createList, createItem, entityUpdate } from './entityUpdate'

export const dispatcher = {
  [CREATE_LIST]: createList,
  [CREATE_ITEM]: createItem,
  // [ENTITY_UPDATE]: entityUpdate,
  // [TRIPLE_PUT]: triplePut,
  // [UPDATE_ITEM]: entityUpdate,
}
export default function listMiddleware(firebase) {
  return (store) => {
    // Listen to db changes...
    return next => (action) => {
      if (!action.type) return next(action)
      if (isFunction(dispatcher[action.type])) {
        dispatcher[action.type](store, action, firebase, next)
      }
      return next(action)
    }
  }
}
