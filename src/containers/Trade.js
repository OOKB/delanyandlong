import { connect } from 'react-redux'
import ary from 'lodash/ary'
import partial from 'lodash/partial'
import { login } from 'cape-redux-auth'

import { getTrade as mapStateToProps } from '../redux/select/trade'
import Component from '../components/Trade/Login'

const mapDispatchToProps = {
  onClick: partial(ary(login, 1), { id: 'auth123' }),
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
