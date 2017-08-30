import { isFunction } from 'lodash'
// import { TRIPLE_PUT } from '@kaicurry/redux-graph'
import { CREATE_LIST, CREATE_ITEM, UPDATE_ITEM } from 'cape-redux-collection'
import { createList, createItem, updateItem } from './entityUpdate'

export const dispatcher = {
  [CREATE_LIST]: createList,
  [CREATE_ITEM]: createItem,
  [UPDATE_ITEM]: updateItem,
  UPDATE_ENTITY: updateItem,
}
export default function listMiddleware(firebase) {
  return store =>
    // Listen to db changes...
    next => (action) => {
      if (!action.type) return next(action)
      if (isFunction(dispatcher[action.type])) {
        return dispatcher[action.type](store, action, firebase, next)
      }
      return next(action)
    }
}
