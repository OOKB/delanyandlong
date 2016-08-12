import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { aboutSelector } from '../redux/select/about'
import Header from './Header'
import Footer from './Footer'

function About({ aboutText, distributedText, serviceText, menu, route }) {
  return (
    <div id="container-about">
      <Header activeId={route.id} links={menu} />
      <main className="clear pt4 container">
        <div className="group">
          <div className="about six columns offset-by-three">
            {aboutText.map((pText, index) => <p key={index}>{pText}</p>)}
            <div className="small mt3 bt1 pt2">
              <p>{serviceText}</p>
              <p><a href="/contact">{distributedText}</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

About.propTypes = {
  route: PropTypes.object.isRequired,
  aboutText: PropTypes.array.isRequired,
  serviceText: PropTypes.string.isRequired,
  distributedText: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(aboutSelector)(About)
