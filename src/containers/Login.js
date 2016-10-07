import { connect } from 'react-redux'
import { loginRedirect } from 'cape-redux-auth'
import { mapStateToProps } from '../redux/select/trade'
import Component from '../components/Login'

const mapDispatchToProps = {
  login: loginRedirect,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
