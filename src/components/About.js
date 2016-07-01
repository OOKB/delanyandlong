import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { aboutSelector } from '../redux/select/about'
import Header from './Header'
import Footer from './Footer'

function About({ aboutText, menu }) {
  return (
    <div id="wrapper">
      <Header links={menu} />
      <main className="clear m1 mt4 pt4 clearfix">
        <img src="https://images.unsplash.com/photo-1459128806329-1b61d19a0f93?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=800&h=400&fit=crop&s=d7eb9a7a335cbd55db5ecd2db7bf1afd" alt="About Page header..." className="mb1 mlrauto six-x displayBlock" />
        <div className="about clear mlrauto six-x" dangerouslySetInnerHTML={{ __html: aboutText }} />
      </main>
      <Footer />
    </div>
  )
}

About.propTypes = {
  route: PropTypes.object.isRequired,
  aboutText: PropTypes.string.isRequired,
  aboutImgSrc: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(aboutSelector)(About)
