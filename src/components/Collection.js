import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { collectionSelector } from '../redux/select/collection'
import Menu from './Menu'

function Collection({ menu }) {
  return (
    <div>
      <Menu links={menu} />
      <h1>Collection</h1>
    </div>
  )
}

Collection.propTypes = {
  route: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(collectionSelector)(Collection)
