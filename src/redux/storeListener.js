import { flow, partial, property } from 'lodash'
import { createObj } from 'cape-lodash'
import { addListener } from 'cape-redux'
import { entityPut, selectEntityById } from 'redux-graph'
import { isAnonymous, login, loginRedirect, logout, selectToken } from 'cape-redux-auth'
import { auth, user } from '../firebase'

export function resAct(dispatch, action) {
  return res => dispatch(action(res.val()))
}
export const uid = flow(property('uid'), createObj('id'))

function handleLoginToken({ dispatch }, token) {
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
function handleAuth({ dispatch, getState }, usr) {
  const state = getState()
  if (usr) {
    const loginUsr = flow(uid, login, dispatch)
    if (selectEntityById(state, usr.uid)) return loginUsr(usr)
    return user.child(usr.uid).once('value')
    .then(resAct(dispatch, entityPut))
    .then(() => loginUsr(usr))
  }
  return dispatch(logout())
}
function handleLogout(store, isAnon) {
  if (isAnon) auth.signOut()
}
export default function storeListener(store) {
  addListener(selectToken, store, handleLoginToken)
  auth.onAuthStateChanged(partial(handleAuth, store))
  addListener(isAnonymous, store, handleLogout)
  return store
}
