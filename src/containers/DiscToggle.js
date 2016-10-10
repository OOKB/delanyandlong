import { connect } from 'react-redux'
import { onBlur, onFocus } from 'redux-field'

import { discActive, prefix, props } from '../redux/select/disc'
import Component from '../components/DiscToggle'

function onClick() {
  console.log('click')
  return (dispatch, getState) => {
    const state = getState()
    console.log(prefix(state), discActive(state))
    if (discActive(state)) return dispatch(onBlur(prefix(state)))
    return dispatch(onFocus(prefix(state)))
  }
}
export default connect(props, { onClick })(Component)
