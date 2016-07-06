import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { aboutSelector } from '../redux/select/about'
import Header from './Header'
import Footer from './Footer'

function About({ aboutText, serviceText, menu }) {
  return (
    <div>
      <Header links={menu} />
      <main className="clear pt4 container">
        <div className="group">
          <img src="https://images.unsplash.com/photo-1459128806329-1b61d19a0f93?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=800&h=400&fit=crop&s=d7eb9a7a335cbd55db5ecd2db7bf1afd" alt="About Page header..." className="eight columns offset-by-two" />
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
