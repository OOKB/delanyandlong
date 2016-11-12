import { COLLECTION_TYPE, LIST_ITEM } from 'cape-redux-collection'
import { cond, flow, nthArg, omit, partial, partialRight, property } from 'lodash'
import { oneOf } from 'cape-lodash'

const wAct = partial(flow, nthArg(1))
const isCollectionType = oneOf([ COLLECTION_TYPE, LIST_ITEM ])
const isCollectionAction = wAct(property('payload.type'), isCollectionType)
const isListTriple = wAct(property('payload.subject.type'), isCollectionType)

function entityDb(db, item) {
  return db.child(item.type).child(item.id)
}
export const cleanItem = partialRight(omit, 'id', 'type')

function updateEntity(store, action, { entity }) {
  const item = action.payload
  return entityDb(entity, item).update(cleanItem(item))
}
function setEntity(store, action, { entity }) {
  const item = action.payload
  return entityDb(entity, item).set(cleanItem(item))
}
function setTriple(store, action, { entity }) {
  const { subject, predicate, object } = action.payload
  return entityDb(entityDb(entity, subject).child('_refs').child(predicate), object).set(true)
}
// (store, action, firebase)
export const entityUpdate = cond([
  [ isCollectionAction, updateEntity ],
])
export const entityPut = cond([
  [ isCollectionAction, setEntity ],
])
export const triplePut = cond([
  [ isListTriple, setTriple ],
])
