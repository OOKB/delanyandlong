import React, { PropTypes } from 'react'

import Menu from './MenuHome'
import Logo from './Logo'
import MenuButton from './MenuButton'

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
        <MenuButton />
      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.array.isRequired,
}
Header.defaultProps = {
}
export default Header
