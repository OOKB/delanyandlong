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
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      <ItemGrid items={items} missingImage={missingImage} />
      {!items || !items.length &&
        <div className="temporary filler">
          <img src="http://rogersandgoffigon.imgix.net/normal/dl5012-05.jpg" alt="Delany & Long, more items on their way." />
        </div>
      }
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
