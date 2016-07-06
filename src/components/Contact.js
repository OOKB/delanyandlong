import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { contactSelector } from '../redux/select/contact'
import Header from './Header'
import Footer from './Footer'

function Contact({ contactText, serviceText, menu }) {
  return (
    <div>
      <Header links={menu} />
      <main className="clear pt4 container">
        <div className="group">
          <div className="six columns offset-by-three text-center">
            <p>{contactText}</p>
            <p className="small">{serviceText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Contact.propTypes = {
  route: PropTypes.object.isRequired,
  contactText: PropTypes.string.isRequired,
  serviceText: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(contactSelector)(Contact)
