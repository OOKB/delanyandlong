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

function Header({ links, logo }) {
  return (
    <header>
      <div className="three-x block one-y">
        <div className="flex-center text-center">
          <Logo/>
        </div>
      </div>
      <nav className="two-x block one-y">
        <div className="flex-center">
          <Menu links={links} />
        </div>
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
