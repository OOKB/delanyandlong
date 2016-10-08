import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Header from './Header'
import Footer from './Footer'
import ItemGrid from './ItemGrid'

function Home({ items, missingImage }) {
  return (
    <div id="home">
      <Header />
      {!items || !items.length &&
        <div
          className="temporary filler"
          style={{backgroundImage: "url(https://delanyandlong.imgix.net/DL10001-22.jpg?w=1500)"}}
          >
          {/* <!--Delany & Long, waiting for items to load.--> */}
          <p className="hidden">Welcome to Delany And Long LTD</p>
        </div>
      }
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  items: PropTypes.array.isRequired,
  missingImage: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
}

export default connect(homeSelector)(Home)
