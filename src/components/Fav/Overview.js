import { constant } from 'lodash'
import { connect } from 'react-redux'
import { close } from 'cape-redux-collection'

import Component from './OverviewEl'

const getState = constant({
  message: 'Auth alert stub',
})

const actions = { onClose: close }

export default connect(getState, actions)(Component)
