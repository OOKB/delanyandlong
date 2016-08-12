import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Header from './Header'
import Footer from './Footer'

function Trade({ menu, route }) {
  return (
    <div id="trade">
      <Header activeId={route.id} links={menu} />
      <p>Trade Login</p>
      <Footer />
    </div>
  )
}

Trade.propTypes = {
  items: PropTypes.array.isRequired,
  menu: PropTypes.array.isRequired,
  missingImage: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
}

export default connect(homeSelector)(Trade)
