import React from 'react'

import Menu from './Menu'
import Logo from './Logo'

function Header() {
  return (
    <header className="main-menu">
      <Logo />
      <nav className="mt1">
        <Menu />
      </nav>
    </header>
  )
}

Header.propTypes = {
}
Header.defaultProps = {
}
export default Header
