import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Menu from './Menu'

function Home({ menu }) {
  return (
    <div id="wrapper">
      <Menu links={menu} />
    </div>
  )
}

Home.propTypes = {
  route: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(homeSelector)(Home)
