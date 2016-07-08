import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { contactSelector } from '../redux/select/contact'
import Header from './Header'
import Footer from './Footer'
import Offices from './Offices'

function Contact({ contactText, serviceText, menu, offices }) {
  return (
    <div>
      <Header links={menu} />
      <main className="clear pt4 container">
        <div className="six offset-by-three text-center">
          <p>{contactText}</p>
        </div>
        <section className="clear">
          <h2>Showrooms & Representatives</h2>
          <div>
            <Offices items={offices.main} />
            <Offices items={offices.us} />
            <Offices items={offices.world} />
          </div>
        </section>
        <div className="six offset-by-three text-center">
          <p className="small">{serviceText}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Contact.propTypes = {
  route: PropTypes.object.isRequired,
  contactText: PropTypes.string.isRequired,
  offices: PropTypes.object.isRequired,
  serviceText: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(contactSelector)(Contact)
