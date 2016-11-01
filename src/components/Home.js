import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Header from './Header'
import Footer from './Footer'
import ItemGrid from './ItemGrid'
import Logo from './Logo'

function Home({ imgSize, items, missingImage }) {
  return (
    <div id="home">
      <Header />
      {(!items || !items.length) &&
        <div className="temporary filler">
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
      <ItemGrid items={items} missingImage={missingImage} imgSize={imgSize} />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  imgSize: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  missingImage: PropTypes.func.isRequired,
}
Home.defaultProps = {
  imgSize: '?w=240&h=168&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=2',
}

export default connect(homeSelector)(Home)
