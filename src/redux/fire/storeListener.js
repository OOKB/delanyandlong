import { curry, flow, isEmpty, partial, partialRight, values } from 'lodash'
import { addListener } from 'cape-redux'
import { entityPut, selectEntityById } from 'redux-graph'
import { isAnonymous, login, loginRedirect, logout, selectToken, setUserId } from 'cape-redux-auth'
import { ENTITY_PUT, ENTITY_PUTALL, getEntity } from '@kaicurry/redux-graph'
import { COLLECTION_TYPE, LIST_ITEM } from 'cape-redux-collection'

export function resAct(dispatch, action) {
  return res => dispatch(action(res.val()))
}
export const uid = fireUser => ({ type: 'OrderTrackUser', id: fireUser.uid })

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
function handleAuth({ dispatch, getState }, { auth, user }, usr) {
  const state = getState()
  if (usr) {
    if (usr.isAnonymous) return dispatch(setUserId(usr.uid))
    const loginUsr = flow(uid, login, dispatch)
    if (selectEntityById(state, usr.uid)) return loginUsr(usr)
    return user.child(usr.uid).once('value')
    .then(resAct(dispatch, entityPut))
    .then(() => loginUsr(usr))
  }
  dispatch(logout())
  return auth.signInAnonymously()
}
function handleLogout(store, isAnon, { auth }) {
  if (isAnon) auth.signOut()
}
export const handleChanged = curry(({ dispatch, getState }, change) => {
  const newVal = change.val()
  const oldVal = getEntity(getState(), newVal)
  if (oldVal && newVal.dateModified === oldVal.dateModified) return null
  // console.log('handleChanged', newVal.type, newVal.id, newVal.dateModified)
  return dispatch({ type: ENTITY_PUT, payload: newVal })
})
export const typeListener = curry((store, { entity }, typeId) =>
  entity.child(typeId).orderByChild('dateModified').limitToLast(1)
  .on('child_changed', handleChanged(store))
)
export const handleInit = curry(({ dispatch }, result) => {
  const payload = values(result.val())
  if (isEmpty(payload)) return null
  return dispatch({ type: ENTITY_PUTALL, payload })
})
export const typeLoader = curry((store, { entity }, typeId) =>
  entity.child(typeId).once('value')
  .then(handleInit(store))
)
export default function storeListener(store, firebase) {
  addListener(selectToken, store, partialRight(handleLoginToken, firebase))
  firebase.auth.onAuthStateChanged(partial(handleAuth, store, firebase))
  addListener(isAnonymous, store, partialRight(handleLogout, firebase))
  // FIREBASE LOAD to REDUX
  const addTypeLoader = typeLoader(store, firebase)
  addTypeLoader('OrderTrackItem')
  .then(() => addTypeLoader(LIST_ITEM))
  .then(() => addTypeLoader(COLLECTION_TYPE))
  // FIREBASE LISTENERS to REDUX
  const addTypeListener = typeListener(store, firebase)
  addTypeListener(LIST_ITEM)
  addTypeListener(COLLECTION_TYPE)
  return store
}
