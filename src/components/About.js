import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { aboutSelector } from '../redux/select/about'
import Header from './Header'
import Footer from './Footer'

function About({ aboutText, serviceText, menu }) {
  return (
    <div id="container-about">
      <Header links={menu} />
      <main className="clear pt4 container">
        <div className="group">
          <div className="about six columns offset-by-three">
            <div dangerouslySetInnerHTML={{ __html: aboutText }} />
            <p className="small mt3 bt1 pt2">{serviceText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

About.propTypes = {
  route: PropTypes.object.isRequired,
  aboutText: PropTypes.string.isRequired,
  serviceText: PropTypes.string.isRequired,
  aboutImgSrc: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(aboutSelector)(About)
