import { set } from 'lodash'
import { isFavList, PREDICATE } from 'cape-redux-collection'
import {
  buildTriple, entityPut, getKey, getRefPath, insertFields, pickTypeId, REFS,
} from '@kaicurry/redux-graph'

// const isListTriple = wAct(property('payload.subject.type'), isCollectionType)

function entityDb(db, item) {
  return db.child(item.type).child(item.id)
}
export function entitySet(store, node, { entity, TIMESTAMP }) {
  const item = insertFields(node)
  item.dateCreated = TIMESTAMP
  item.dateModified = TIMESTAMP
  return entityDb(entity, item).set(item)
  .then(() => item)
}
export function triplePut(store, tripleRaw, { entity }) {
  const triple = buildTriple(tripleRaw)
  const { subject, predicate, object } = triple
  return entityDb(entity, subject).child(REFS).child(predicate).child(getKey(object))
  .set(object)
  .then(() => triple)
}
export function createList(store, { payload }, firebase, next) {
  if (isFavList(payload)) {
    const item = next(entityPut(payload)).payload
    item.dateModified = firebase.TIMESTAMP
    return entityDb(firebase.entity, item).set(item)
    .then(() => item)
  }
  return entitySet(store, payload, firebase)
}
export function createItem(store, { payload }, { entity, TIMESTAMP }) {
  const { mainEntity, ...item } = payload
  const subject = pickTypeId(mainEntity)
  set(item, [ 'rangeIncludes', PREDICATE, getKey(subject) ], subject)
  item.dateCreated = TIMESTAMP
  item.dateModified = TIMESTAMP
  const node = insertFields(item)
  // Save ListItem to the database.
  return entityDb(entity, node).set(node)
  // Get dateModified value of ListItem
  .then(() => entityDb(entity, node).child('dateModified').once('value'))
  .then((dateModified) => {
    node.dateModified = dateModified.val()
    const object = pickTypeId(node)
    // console.log('CollectionList _refs', object)
    // Attach the ListItem to the CollectionList.
    entityDb(entity, subject).update({
      dateModified: TIMESTAMP,
      [getRefPath(PREDICATE, object).join('/')]: object,
    })
  })
}
export function updateItem(store, { payload }, { entity, TIMESTAMP }) {
  const item = { ...payload, dateModified: TIMESTAMP }
  // console.log('updateItem', item)
  return entityDb(entity, item).update(item)
  .then(() => item)
}
