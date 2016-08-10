import { entityUpdate } from 'redux-graph'

import { closeDetail } from './back'

export function missingImage({ id }) {
  return entityUpdate({ id, missingImg: true })
}

export function detailClose() {
  return (dispatch, getState) => {
    const state = getState()
    const action = closeDetail(state)
    console.log(action)
    dispatch(action)
  }
}
