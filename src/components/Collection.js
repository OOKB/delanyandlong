import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { collectionSelector } from '../redux/select/collection'
import Header from './Header'
import Footer from './Footer'

function Collection({ menu }) {
  return (
    <div>
      <Header links={menu} />
      <main className="clear m1 mt4 pt4 clearfix">
        <h1>Collection</h1>
      </main>
      <Footer />
    </div>
  )
}

Collection.propTypes = {
  route: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(collectionSelector)(Collection)
