import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Menu from './Menu'
import ItemGrid from './ItemGrid'

function Home({ items, menu, missingImage }) {
  return (
    <div id="wrapper">
      <Menu links={menu} />
      <ItemGrid items={items} missingImage={missingImage} />
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
