import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { contactSelector } from '../redux/select/contact'
import Header from './Header'
import Footer from './Footer'

function Contact({ contactText, menu }) {
  return (
    <div id="wrapper">
      <Header links={menu} />
      <main className="clear m1 mt4 pt4 clearfix">
        <p>{contactText}</p>
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
