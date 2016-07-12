import React, { PropTypes } from 'react'

import Menu from './MenuHome'
import Logo from './Logo'

const styles = {
  logo: {
    width: 'initial',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

function Header({ links }) {
  return (
    <header>
      <div className="left three-x">
        <div className="flex-center text-center">
          <Logo />
        </div>
      </div>
      <nav className="left two-x">
        <div className="flex-center">
          <Menu links={links} />
        </div>
        <button className="toggle">
          <i className="fa fa-chevron-circle-up fa-5x" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
}
Header.defaultProps = {
  logo: 'http://rogersandgoffigon.imgix.net/logos/dl-logo-cropped.gif',
}
export default Header
