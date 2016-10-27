import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Header from './Header'
import Footer from './Footer'
import ItemGrid from './ItemGrid'
import Loader from './Loader'

function Home({ items, missingImage }) {
  const style = {
    backgroundImage: 'url(https://b2.cape.io/file/delanyandlong/placeholder.png)',
  }
  return (
    <div id="home">
      <Loader />
      <Header />
      {(!items || !items.length) &&
        <div className="temporary filler" style={style}>
          {/* <!--Delany & Long, waiting for items to load.--> */}
          <p className="hidden">Welcome to Delany And Long LTD</p>
          <Loader />
        </div>
      }
      <ItemGrid items={items} missingImage={missingImage} />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  items: PropTypes.array.isRequired,
  missingImage: PropTypes.func.isRequired,
}

export default connect(homeSelector)(Home)
