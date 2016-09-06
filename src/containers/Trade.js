import { connect } from 'react-redux'
import ary from 'lodash/ary'
import partial from 'lodash/partial'

import { getTrade as mapStateToProps } from '../redux/select/trade'
import { login } from '../redux/auth/actions'

const mapDispatchToProps = {
  onClick: partial(ary(login, 1), { id: 'auth123' }),
}

import Component from '../components/Trade/Login'

export default connect(mapStateToProps, mapDispatchToProps)(Component)
