import { isFunction } from 'lodash'
import { TRIPLE_PUT } from '@kaicurry/redux-graph'
import { CREATE_LIST, CREATE_ITEM, PREDICATE, UPDATE_ITEM } from 'cape-redux-collection'
import { createList, entityPut, entityUpdate, triplePut } from './entityUpdate'

export const dispatcher = {
  [CREATE_LIST]: createList,
  // [ENTITY_PUT]: entityPut,
  // [ENTITY_UPDATE]: entityUpdate,
  [TRIPLE_PUT]: triplePut,
  [UPDATE_ITEM]: entityUpdate,
}
export default function listMiddleware(firebase) {
  return (store) => {
    // Listen to db changes...
    return next => (action) => {
      if (!action.type) return next(action)
      if (isFunction(dispatcher[action.type])) {
        dispatcher[action.type](store, action, firebase)
      }
      if (action.type === CREATE_ITEM) {
        const item = next(entityPut(action.payload))
        next(triplePut({
          subject: action.payload.mainEntity, predicate: PREDICATE, object: item.payload,
        }))
        return item
      }
      return next(action)
    }
  }
}
