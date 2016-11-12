import { isFunction } from 'lodash'
import { ENTITY_PUT, ENTITY_UPDATE, TRIPLE_PUT } from 'redux-graph'
import { entityPut, entityUpdate, triplePut } from './entityUpdate'

export const dispatcher = {
  [ENTITY_PUT]: entityPut,
  [ENTITY_UPDATE]: entityUpdate,
  [TRIPLE_PUT]: triplePut,
}
export default function listMiddleware(firebase) {
  return (store) => {
    // Listen to db changes...
    return next => (action) => {
      if (!action.type) return next(action)
      if (isFunction(dispatcher[action.type])) {
        dispatcher[action.type](store, action, firebase)
      }
      return next(action)
    }
  }
}
