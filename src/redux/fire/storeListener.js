import { flow, partial, partialRight, values } from 'lodash'
import { addListener } from 'cape-redux'
import { entityPut, selectEntityById } from 'redux-graph'
import { isAnonymous, login, loginRedirect, logout, selectToken, setUserId } from 'cape-redux-auth'
import { ENTITY_PUT, ENTITY_PUTALL } from '@kaicurry/redux-graph'
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
export default function storeListener(store, firebase) {
  addListener(selectToken, store, partialRight(handleLoginToken, firebase))
  firebase.auth.onAuthStateChanged(partial(handleAuth, store, firebase))
  addListener(isAnonymous, store, partialRight(handleLogout, firebase))
  // Add db lists to redux.
  firebase.entity.child(COLLECTION_TYPE).once('value', (lists) => {
    store.dispatch({ type: ENTITY_PUTALL, payload: values(lists.val()) })
  })
  firebase.entity.child(LIST_ITEM).once('value', (lists) => {
    store.dispatch({ type: ENTITY_PUTALL, payload: values(lists.val()) })
  })
  // Listen for changes to Lists.
  firebase.entity.child(COLLECTION_TYPE).orderByChild('dateModified').limitToLast(1)
  .on('child_changed', (node) => {
    store.dispatch({ type: ENTITY_PUT, payload: node.val() })
  })
  return store
}
