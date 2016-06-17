import { connect } from 'react-redux'

import { homeSelector as mapStateToProps } from '../redux/select/home'

import { missingImage } from '../redux/dispatch/items'
const mapDispatchToProps = { missingImage }

import Component from '../components/Home'

export default connect(mapStateToProps, mapDispatchToProps)(Component)
