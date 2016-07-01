import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { contactSelector } from '../redux/select/contact'
import Header from './Header'
import Footer from './Footer'

function Contact({ contactText, menu }) {
  return (
    <div>
      <Header links={menu} />
      <main className="clear pt4 container">
        <div className="group">
          <p>{contactText}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Contact.propTypes = {
  route: PropTypes.object.isRequired,
  contactText: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(contactSelector)(Contact)
