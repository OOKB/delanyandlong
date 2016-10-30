import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Header from './Header'
import Footer from './Footer'
import ItemGrid from './ItemGrid'
import Logo from './Logo'

function Home({ items, missingImage }) {
  const style = {
    backgroundImage: 'url(https://b2.cape.io/file/delanyandlong/placeholder.png)',
  }
  return (
    <div id="home">
      <Header />
      {(!items || !items.length) &&
        <div className="temporary filler" style={style}>
          {/* <!--Delany & Long, waiting for items to load.--> */}
          <div className="logoPlaceholder mlrauto halfwidth mt15p text-center">
            <Logo />
            <div className="loading">
              <i className="fa fa-multiplication fa-spin fa-3x fa-fw light-gray" />
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <p className="hidden">Welcome to Delany And Long LTD</p>
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
