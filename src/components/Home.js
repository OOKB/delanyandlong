import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Menu from './Menu'
import ItemGrid from './ItemGrid'

function Home({ items, menu }) {
  return (
    <div id="wrapper">
      <Menu links={menu} />
      <ItemGrid items={items} />
    </div>
  )
}

Home.propTypes = {
  items: PropTypes.array.isRequired,
  menu: PropTypes.array.isRequired,
  route: PropTypes.object.isRequired,
}

export default connect(homeSelector)(Home)
