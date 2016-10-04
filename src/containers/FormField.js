import { connect } from 'react-redux'
import { getFormEvents, getState } from 'redux-field'
import { mapDispatchToProps } from 'cape-redux'

import Component from '../components/Fields/Input'

function getActions({ prefix }) {
  return getFormEvents(prefix)
}
export default connect(getState, mapDispatchToProps(getActions))(Component)
