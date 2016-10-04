import { connect } from 'react-redux'
import { getFormEvents, getState } from 'redux-field'
import { mapDispatchToProps } from 'cape-redux'

// export default connect(mapStateToProps, mapDispatchToProps)(Component)
function getActions({ prefix }) {
  return getFormEvents(prefix)
}
export default function connectField(Component) {
  return connect(getState, mapDispatchToProps(getActions))(Component)
}
