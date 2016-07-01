import React, { PropTypes } from 'react'

import Menu from './Menu'
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
    <header className="main-menu px1">
      <Logo />
      <nav>
        <Menu links={links} />
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
