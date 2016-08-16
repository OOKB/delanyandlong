import React, { PropTypes } from 'react'

import Menu from './Menu'
import Logo from './Logo'
import MenuButton from './MenuButton'

function getStyle(isOpen) {
  if (isOpen) return { marginTop: '-100%', paddingBottom: '5rem', top: 'initial' }
  return { marginTop: '0' }
}

function Header({ activeId, links, close, isOpen, open }) {
  const toggle = isOpen ? close : open
  const menuStyle = getStyle(isOpen)
  return (
    <header className="main-menu">
      <Logo />
      <nav className="bt1 light-gray-border mt05 pt05">
        <Menu activeId={activeId} links={links} style={menuStyle} />
        <MenuButton onClick={toggle} />
      </nav>
    </header>
  )
}

Header.propTypes = {
  activeId: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
}
Header.defaultProps = {
}
export default Header
