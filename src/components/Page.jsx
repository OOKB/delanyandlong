import React, { PropTypes } from 'react'

import Header from './Header'
import Footer from './Footer'

function Page({ children, className, id }) {
  return (
    <div className={className} id={id}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
}

export default Page
