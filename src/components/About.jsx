import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { aboutSelector } from '../redux/select/about'
import Page from './Page'

function About({ aboutText, distributedText }) {
  return (
    <Page id="container-about">
      <main className="clear mlrauto">
        <div className="about">
          <div className="video-wrapper">
            A video will go here.
          </div>
          {aboutText.map((pText, index) => <p key={index}>{pText}</p>)}
          <div className="small mt3 bt1 pt2">
            <p><a href="/contact">{distributedText}</a></p>
          </div>
          <div className="faq container mt4">
            FAQ section?
          </div>
        </div>
      </main>
    </Page>
  )
}

About.propTypes = {
  aboutText: PropTypes.arrayOf(PropTypes.string).isRequired,
  distributedText: PropTypes.string.isRequired,
}

export default connect(aboutSelector)(About)
