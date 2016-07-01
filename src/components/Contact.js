import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Header from './Header'
import Footer from './Footer'
import ItemGrid from './ItemGrid'

function Home({ items, menu, missingImage }) {
  return (
    <div id="wrapper">
      <Header links={menu} />
      <p>Contact Info TK</p>
      <Footer />
    </div>
  )
}

Home.propTypes = {
  items: PropTypes.array.isRequired,
  menu: PropTypes.array.isRequired,
  missingImage: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
}

export default connect(homeSelector)(Home)
