import React, { PropTypes } from 'react'

import Menu from './Menu'
import Logo from './Logo'
import MenuButton from './MenuButton'

function Header({ links }) {
  return (
    <header className="main-menu">
      <Logo />
      <nav className="bt1 light-gray-border mt05 pt05">
        <Menu links={links} />
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
