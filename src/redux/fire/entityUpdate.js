import { COLLECTION_TYPE, LIST_ITEM } from 'cape-redux-collection'
import { cond, flow, nthArg, partial, property } from 'lodash'
import { omit } from 'lodash/fp'
import { oneOf } from 'cape-lodash'
import { insertFields } from '@kaicurry/redux-graph'

const wAct = partial(flow, nthArg(1))
const isCollectionType = oneOf([ COLLECTION_TYPE, LIST_ITEM ])
const isCollectionAction = wAct(property('payload.type'), isCollectionType)
const isListTriple = wAct(property('payload.subject.type'), isCollectionType)

function entityDb(db, item) {
  return db.child(item.type).child(item.id)
}
export const cleanItem = omit('id', 'type')

function updateEntity(store, action, { entity }) {
  const item = action.payload
  return entityDb(entity, item).update(cleanItem(item))
}
export function entityPut(store, action, { entity }) {
  const item = action.payload
  return entityDb(entity, item).set(cleanItem(item))
}
export function createList(store, action, { entity, TIMESTAMP }) {
  const item = insertFields(action.payload)
  item.dateCreated = TIMESTAMP
  item.dateModified = TIMESTAMP
  return entityDb(entity, item).set(item)
}
function setTriple(store, action, { entity }) {
  const { subject, predicate, object } = action.payload
  return entityDb(entityDb(entity, subject).child('_refs').child(predicate), object).set(true)
}
// (store, action, firebase)
export const entityUpdate = cond([
  [ isCollectionAction, updateEntity ],
])
export const triplePut = cond([
  [ isListTriple, setTriple ],
])
