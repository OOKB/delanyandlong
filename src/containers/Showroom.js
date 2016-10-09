import { connect } from 'react-redux'
import { selectUser } from 'cape-redux-auth'
import Component from '../components/Showroom'

export default connect(selectUser)(Component)
