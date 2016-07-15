import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { contactSelector } from '../redux/select/contact'
import Header from './Header'
import Footer from './Footer'
import Offices from './Offices'

function Contact({ contactText, serviceText, menu, offices }) {
  return (
    <div id="container-contact">
      <Header links={menu} />
      <main className="clear pt4 container clearfix">
        <section className="showroomsAndReps">
          <div>
            <div className="six right">
              <p className="pt2">{serviceText}</p>
            </div>
            <Offices items={offices.main} />
            <div className="six offset-by-three text-center mb2">
              <p>{contactText}</p>
            </div>
            <Offices items={offices.us} />
            <Offices items={offices.world} />
          </div>
        </section>
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
