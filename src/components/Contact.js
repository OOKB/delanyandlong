import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { contactSelector } from '../redux/select/contact'
import Editor from '../containers/Editor'
import Header from './Header'
import Footer from './Footer'
import Offices from './Offices'
import Icon from './Icon'

function Contact({ contactText, menu, offices, route, serviceText }) {
  return (
    <div id="container-contact">
      <Header activeId={route.id} links={menu} />
      <Editor classId="Organization" />
      <main className="pt2 container clearfix">
        <section className="showroomsAndReps">
          <div className="top pt2 mb4 clearfix">
            <div className="headquarters mb2">
              <Offices items={offices.main} />
            </div>
            <div className="blurb">
              <p>{contactText}</p>
              <p className="text-center light-gray">
                <Icon className="fa-3x" symbol="angle-down" />
              </p>
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
  serviceText: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default connect(contactSelector)(Contact)
