import { connect } from 'react-redux'
import flow from 'lodash/flow'
import property from 'lodash/property'
import { getActions, getPrefix, getState as mapStateToProps } from 'redux-field'

import { mapDispatchToProps } from '../redux/utils'
import Component from '../components/Editable/Field'

const getFormEvents = flow(
  property('prefix'), // Extract prefix property from props argument.
  getPrefix, // Send it to the getPrefix function.
  getActions, // Sent the prefix to getActions.
  property('formEvent') // Get the formEvent object from the result of getActions.
)

export default connect(mapStateToProps, mapDispatchToProps(getFormEvents))(Component)
