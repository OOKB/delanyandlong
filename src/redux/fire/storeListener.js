import { cond, curry, flow, isEmpty, map, partial, partialRight, stubTrue } from 'lodash'
import { addListener } from 'cape-redux'
import { isAnonymous, login, loginRedirect, logout, selectToken, setUserId } from 'cape-redux-auth'
import {
  entityDel, entityPut, ENTITY_PUT, ENTITY_PUTALL, getEntity, isEntityCreated,
} from '@kaicurry/redux-graph'
import { COLLECTION_TYPE, LIST_ITEM } from 'cape-redux-collection'

export const IMAGES = 'ImageObject'
export const DRAWER = 'HomeDrawer'
export const OT_ITEM = 'OrderTrackItem'
export const OT_USER = 'OrderTrackUser'
export const SETTING = 'WebAppSetting'
export const OFFICE = 'Showroom'

export const uid = fireUser => ({ type: OT_USER, id: fireUser.uid })

function handleLoginToken({ dispatch }, token, { auth }) {
  if (!token) return
  auth.signInWithCustomToken(token)
    .then(usr => dispatch(loginRedirect(uid(usr), '/collection')))
    .catch((err) => {
      console.error(err.message)
      if (err.code === 'auth/invalid-custom-token') {
        alert('The token you provided is not valid.')
      } else {
        console.error(err)
      }
    })
}
export function getChild(db, id) {
  return db.child(id).once('value').then(res => res.val())
}
function handleAuth({ dispatch, getState }, { auth, user }, usr) {
  const state = getState()
  if (usr) {
    if (usr.isAnonymous) {
      dispatch(entityPut({ type: 'Person', id: usr.uid }))
      return dispatch(setUserId(usr.uid))
    }
    const fireUser = uid(usr)
    const loginUsr = flow(login, dispatch)
    if (getEntity(state, fireUser)) return loginUsr(fireUser)
    return getChild(user, usr.uid)
      .then(cond([
        [isEntityCreated, flow(entityPut, dispatch)],
        [stubTrue, () => auth.signOut()],
      ]))
      .then(() => loginUsr(fireUser))
  }
  dispatch(logout())
  return auth.signInAnonymously()
}
function handleLogout(store, isAnon, { auth }) {
  if (isAnon) auth.signOut()
}
export const ensureIdType = curry((type, item, id) =>
  (item.id && item.type && item) || { ...item, id, type }
)
export const handleChanged = curry(({ dispatch, getState }, typeId, change) => {
  const newVal = ensureIdType(typeId, change.val(), change.key)
  const oldVal = getEntity(getState(), newVal)
  if (oldVal && newVal.dateModified === oldVal.dateModified) return null
  // console.log('handleChanged', newVal.type, newVal.id, newVal.dateModified)
  return dispatch({ type: ENTITY_PUT, payload: newVal })
})
export const handleRemoved = curry(({ dispatch }, change) =>
  dispatch(entityDel(change.val()))
)
export const typeListener = curry((store, { entity }, typeId) =>
  entity.child(typeId).on('child_changed', handleChanged(store, typeId))
)
export const typeDelete = curry((store, { entity }, typeId) =>
  entity.child(typeId).on('child_removed', handleRemoved(store))
)
export const handleInit = curry(({ dispatch }, type, result) => {
  const payload = map(result, ensureIdType(type))
  if (isEmpty(payload)) return null
  return dispatch({ type: ENTITY_PUTALL, payload, meta: { sendSocket: false } })
})
export const typeLoader = curry((store, { entity }, typeId) =>
  getChild(entity, typeId).then(handleInit(store, typeId))
)
export default function storeListener(store, firebase) {
  addListener(selectToken, store, partialRight(handleLoginToken, firebase))
  firebase.auth.onAuthStateChanged(partial(handleAuth, store, firebase))
  addListener(isAnonymous, store, partialRight(handleLogout, firebase))
  // FIREBASE LOAD to REDUX
  const addTypeLoader = typeLoader(store, firebase)
  addTypeLoader(IMAGES)
  addTypeLoader(DRAWER)
  addTypeLoader(SETTING)
  addTypeLoader(OT_ITEM)
  addTypeLoader(OFFICE)
    .then(() => addTypeLoader(LIST_ITEM))
    .then(() => addTypeLoader(COLLECTION_TYPE))
  // FIREBASE LISTENERS to REDUX
  const addTypeListener = typeListener(store, firebase)
  addTypeListener(LIST_ITEM)
  addTypeListener(COLLECTION_TYPE)
  addTypeListener(OT_ITEM)
  typeDelete(store, firebase, LIST_ITEM)
  addTypeListener(DRAWER)
  addTypeListener(SETTING)
  addTypeListener(IMAGES)
  addTypeListener(OFFICE)
  return store
}
