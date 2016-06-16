import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { aboutSelector } from '../redux/select/about'

function About({ aboutText }) {
  return (
    <p className="about">
      {aboutText}
    </p>
  )
}

About.propTypes = {
  route: PropTypes.object.isRequired,
  aboutText: PropTypes.string.isRequired,
}

export default connect(aboutSelector)(About)
