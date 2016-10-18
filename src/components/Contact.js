import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { contactSelector } from '../redux/select/contact'
import Editor from '../containers/Editor'
import Header from './Header'
import Footer from './Footer'
import Offices from './Offices'

function Contact({ contactText, menu, offices, route }) {
  return (
    <div id="container-contact">
      <Header activeId={route.id} links={menu} />
      <Editor classId="Organization" />
      <main className="pt2 container clearfix">
        <section className="showroomsAndReps">
          <div className="top pt3 pb3 clearfix mlrauto">
            <div className="headquarters mb2">
              <Offices items={offices.main} />
            </div>
            <div className="blurb pt1">
              <p>{contactText}</p>
            </div>
          </div>
          <div className="us canada americas bt1 pt4 pb2">
            <Offices items={offices.us} />
          </div>
          <div className="europe pacific bt1 pt4 pb2">
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
  menu: PropTypes.array.isRequired,
}

export default connect(contactSelector)(Contact)
